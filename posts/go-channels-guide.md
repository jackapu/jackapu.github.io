---
title: "Understanding Go Channels: Patterns and Best Practices"
date: "2024-02-05"
excerpt: "A deep dive into Go channels, covering common patterns, pitfalls, and real-world use cases for building concurrent systems."
tags: ["Go", "Concurrency", "Backend"]
author: "Your Name"
---

Channels are one of Go's most powerful features for concurrent programming. They enable goroutines to communicate safely without explicit locks. However, they can be tricky if you don't understand their behavior.

## The Basics

A channel is a typed conduit through which you can send and receive values:

```go
ch := make(chan int)

// Send to channel (blocks until received)
go func() {
    ch <- 42
}()

// Receive from channel (blocks until sent)
value := <-ch
fmt.Println(value) // 42
```

## Buffered vs Unbuffered Channels

Unbuffered channels block on both send and receive:

```go
ch := make(chan int) // Unbuffered

ch <- 1 // Blocks forever - deadlock!
```

Buffered channels only block when full or empty:

```go
ch := make(chan int, 2) // Buffer size 2

ch <- 1 // Doesn't block
ch <- 2 // Doesn't block
ch <- 3 // Blocks - buffer full
```

## Common Patterns

### 1. Worker Pool

Process jobs concurrently with a fixed number of workers:

```go
func workerPool(jobs <-chan int, results chan<- int, workers int) {
    var wg sync.WaitGroup
    
    for i := 0; i < workers; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            for job := range jobs {
                results <- processJob(job)
            }
        }()
    }
    
    wg.Wait()
    close(results)
}
```

### 2. Fan-Out, Fan-In

Distribute work across multiple goroutines, then combine results:

```go
func fanOut(input <-chan int, workers int) []<-chan int {
    channels := make([]<-chan int, workers)
    for i := 0; i < workers; i++ {
        ch := make(chan int)
        channels[i] = ch
        go func() {
            defer close(ch)
            for val := range input {
                ch <- process(val)
            }
        }()
    }
    return channels
}

func fanIn(channels ...<-chan int) <-chan int {
    out := make(chan int)
    var wg sync.WaitGroup
    
    for _, ch := range channels {
        wg.Add(1)
        go func(c <-chan int) {
            defer wg.Done()
            for val := range c {
                out <- val
            }
        }(ch)
    }
    
    go func() {
        wg.Wait()
        close(out)
    }()
    
    return out
}
```

### 3. Pipeline

Chain operations together:

```go
func generator(nums ...int) <-chan int {
    out := make(chan int)
    go func() {
        defer close(out)
        for _, n := range nums {
            out <- n
        }
    }()
    return out
}

func square(in <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        defer close(out)
        for n := range in {
            out <- n * n
        }
    }()
    return out
}

// Usage
nums := generator(1, 2, 3, 4)
squares := square(nums)
for sq := range squares {
    fmt.Println(sq)
}
```

## Common Pitfalls

### 1. Forgetting to Close Channels

Always close channels when done sending:

```go
// Bad
ch := make(chan int)
go func() {
    for i := 0; i < 10; i++ {
        ch <- i
    }
    // Forgot to close!
}()

for val := range ch { // Hangs forever after 10 values
    fmt.Println(val)
}

// Good
ch := make(chan int)
go func() {
    defer close(ch) // Always close
    for i := 0; i < 10; i++ {
        ch <- i
    }
}()

for val := range ch { // Exits cleanly
    fmt.Println(val)
}
```

### 2. Sending on Closed Channels

This causes a panic:

```go
ch := make(chan int)
close(ch)
ch <- 1 // panic: send on closed channel
```

## Real-World Example

Here's a production-ready batch processor I built for a logistics system:

```go
type BatchProcessor struct {
    jobs    chan Job
    results chan Result
    workers int
}

func NewBatchProcessor(workers int) *BatchProcessor {
    return &BatchProcessor{
        jobs:    make(chan Job, 100),
        results: make(chan Result, 100),
        workers: workers,
    }
}

func (bp *BatchProcessor) Start(ctx context.Context) {
    for i := 0; i < bp.workers; i++ {
        go bp.worker(ctx)
    }
}

func (bp *BatchProcessor) worker(ctx context.Context) {
    for {
        select {
        case job, ok := <-bp.jobs:
            if !ok {
                return
            }
            result := job.Process()
            bp.results <- result
        case <-ctx.Done():
            return
        }
    }
}
```

## Key Takeaways

1. Use unbuffered channels for synchronization
2. Use buffered channels to prevent blocking
3. Always close channels when done sending
4. Never send on a closed channel
5. Use `select` with `context.Done()` for cancellation
6. Prefer goroutines + channels over shared memory

Channels make concurrent programming in Go elegant and safe when used correctly. Master these patterns and you'll write better concurrent code.
