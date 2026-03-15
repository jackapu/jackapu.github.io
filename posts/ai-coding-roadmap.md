---
title: "AI Coding Roadmap"
date: "2024-03-04"        # YYYY-MM-DD in quotes
excerpt: "A roadmap for integrating AI tools into your software engineering workflow"
tags: ["AI", "Tutorial"]
author: "Zeyuan Pu"
---

# AI-Integrated Software Engineering Roadmap

*10 weeks · 15–20 hours/week · Focused on what you'll actually use*

---

## Structure

Each week runs two tracks in parallel:

| Track | Hours | What |
|-------|-------|------|
| Stanford CS146S | 5–6 hrs | Slides, readings, assignment |
| Build | 10–14 hrs | Hands-on projects |

**CS146S Materials (free):**
- Course site: https://themodernsoftware.dev
- Assignments: https://github.com/mihail911/modern-software-dev-assignments

---

## Week 1: How LLMs Work + Prompt Engineering

*CS146S Week 1*

**Study:**
- CS146S Week 1 slides and readings
- Watch Andrej Karpathy's "Intro to Large Language Models" (~1 hr, YouTube)
- Anthropic prompt engineering guide: https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview

**Concepts to nail down:**
- Tokens, context windows, temperature — what they mean for your engineering decisions
- Prompt techniques: few-shot examples, chain-of-thought, role prompting, structured output (JSON/XML)
- Why the same prompt gives different results and how to control it

**Build:**
- Complete CS146S Week 1 assignment
- **Prompt journal**: Pick 5 real tasks from your day job, try 3+ prompt approaches each, document what works and why. This becomes your personal prompt library.
- **Structured data extractor**: Python script that takes unstructured text → Claude API → structured JSON output. Focus on getting consistent, reliable formats.

---

## Week 2: AI Development Tools

*CS146S Weeks 2–3*

**Study:**
- CS146S Week 2–3 slides (agent architecture, AI IDEs)
- Claude Code docs: https://docs.claude.com/en/docs/claude-code/overview

**Build:**
- Complete CS146S Week 2 assignment
- **CLAUDE.md for your repo**: Write a comprehensive one — architecture, conventions, common patterns, DB schema. Test it by having Claude Code do a real task and checking if the output matches your team's style.
- **First custom skill**: Create a Claude Code skill for a task you repeat often (e.g., scaffold a new endpoint, write a migration with tests).
- Spend 2 hours trying Cursor or Copilot on a real task — understand how IDE-based AI differs from terminal-based.

---

## Week 3: MCP (Model Context Protocol)

*CS146S Week 4*

**Study:**
- CS146S Week 4 slides
- MCP spec: https://modelcontextprotocol.io
- Community servers: https://github.com/modelcontextprotocol/servers

**Build:**
- Complete CS146S Week 4 assignment
- **Connect an MCP server**: Set up the PostgreSQL MCP server with Claude Code. Connect to a dev database. Practice having Claude Code query your data while helping you write code.
- **Build a custom MCP server**: Wrap one of your internal APIs or tools. Even something simple like "get recent log entries" or "check service health." This teaches you the full protocol.

---

## Week 4: LLM API + Tool Use

*CS146S Week 5*

This is the most important week. Tool use is the foundation of everything that follows.

**Study:**
- CS146S Week 5 slides
- Claude API docs: https://docs.claude.com/en/api/overview
- Tool use guide: https://docs.claude.com/en/docs/build-with-claude/tool-use/overview

**Concepts:**
- Messages API pattern (system → user → assistant)
- Defining tools, handling tool calls, returning results
- Streaming responses
- Token counting and cost awareness

**Build:**
- Complete CS146S Week 5 assignment
- **CLI chatbot with tools** (the key project): Build a terminal chatbot with 3 tools — e.g., query a database, read local files, call an external API. The LLM decides when to call each tool. Get comfortable with the tool-use loop.
- **Add streaming**: Display responses token-by-token. Then build a minimal web page that streams from your backend.

---

## Week 5: Your First Agent

*CS146S Week 6*

**Study:**
- CS146S Week 6 slides (AI testing, debugging)
- Read: Anthropic's "Building effective agents" — https://www.anthropic.com/engineering/building-effective-agents
- Understand the ReAct pattern (Reason + Act)

**Build:**
- Complete CS146S Week 6 assignment
- **Research agent**: Takes a question → searches for info → reads results → decides if it has enough → searches again or writes final answer. Simple loop: prompt → tool call → observe → repeat.
- Add guardrails: max iterations, cost tracking per run, output validation. These aren't optional — agents without guardrails are dangerous.

---

## Week 6: Tool-Rich Agents + Security

*CS146S Week 7*

**Study:**
- CS146S Week 7 slides (vulnerability detection, code review)
- OWASP Top 10 for LLM Applications: https://owasp.org/www-project-top-10-for-large-language-model-applications/
- Prompt injection — understand the attack surface

**Build:**
- Complete CS146S Week 7 assignment
- **Data analysis agent**: An agent with 5+ tools — query database, calculate, create charts, summarize, export CSV. Give it complex questions and let it figure out the steps.
- **Red-team your agents**: Try to break everything you've built. Adversarial inputs, prompt injections, edge cases. Document failures and build defenses.

---

## Week 7: RAG (Retrieval-Augmented Generation)

*CS146S Week 8*

**Study:**
- CS146S Week 8 slides
- Embeddings, vector similarity, chunking strategies
- pgvector docs (since you already use PostgreSQL)

**Build:**
- Complete CS146S Week 8 assignment
- **RAG system from scratch** — build every component yourself, no frameworks:
  1. Chunk documents into passages
  2. Generate embeddings via API
  3. Store in pgvector (your existing PostgreSQL)
  4. Query by similarity
  5. Feed retrieved context to Claude, generate answer
- Test with real documents from your domain — logistics SOPs, internal docs, whatever you have.

---

## Week 8: Production Patterns

*CS146S Week 9*

**Study:**
- CS146S Week 9 slides (monitoring, incident response)
- Model routing: when to use Haiku vs. Sonnet vs. Opus
- Caching strategies: prompt caching, response caching

**Build:**
- Complete CS146S Week 9 assignment
- **Cost + observability layer**: Build middleware that logs every LLM call — input, output, tokens, cost, latency. Create a simple report/dashboard.
- **Smart model router**: Route requests to different models based on complexity. Simple tasks → cheaper/faster model. Complex tasks → bigger model. Add response caching for repeated queries.

---

## Week 9: Eval + Testing for AI Features

**Study:**
- CS146S Week 10 slides (future outlook)
- Eval-driven development patterns
- How to test non-deterministic systems

**Build:**
- Complete CS146S Week 10 assignment
- **Eval framework**: Build a lightweight test harness — define test cases (input + expected output), run them through your agents/features, auto-score where possible, flag edge cases for human review.
- **Regression suite for prompts**: When you change a prompt, run the eval suite and compare before/after. This prevents you from fixing one thing and breaking three others.

---

## Week 10: Capstone — Ship Something Real

**Full 15–20 hours on one project.**

Build and polish a complete AI feature that combines everything:

- Frontend with streaming responses
- Backend API with auth and rate limiting
- Tool use or RAG (or both)
- Cost tracking and observability
- Error handling and graceful fallback
- Eval tests

**Pick something you'd actually use** — an internal assistant for your logistics team, a document processor, a reporting tool, a customer query handler. Make it real.

Spend the last few hours writing a clean README and documenting your design decisions. This is your portfolio piece.

---

## Resources

**Essential:**
- CS146S: https://themodernsoftware.dev
- Claude API: https://docs.claude.com/en/api/overview
- Claude Code: https://docs.claude.com/en/docs/claude-code/overview
- MCP: https://modelcontextprotocol.io
- Prompt engineering: https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview
- Building effective agents: https://www.anthropic.com/engineering/building-effective-agents

**Video:**
- Andrej Karpathy "Intro to Large Language Models" (YouTube)
- 3Blue1Brown "But what is a GPT?" (YouTube, optional — good visual intuition)

**Follow:**
- Simon Willison's blog: https://simonwillison.net
- Anthropic blog: https://www.anthropic.com/news
- Latent Space podcast

---

## Checklist

- [ ] Clone CS146S repo and complete Week 1 assignment
- [ ] Watch Karpathy's LLM intro
- [ ] Write a CLAUDE.md for your main repo
- [ ] Build a CLI chatbot with tool use (Week 4 — most important project)
- [ ] Connect an MCP server to Claude Code
- [ ] Build a custom MCP server
- [ ] Build your first agent with a ReAct loop
- [ ] Red-team your own agents
- [ ] Build a RAG system from scratch with pgvector
- [ ] Build an eval framework for your prompts
- [ ] Ship a complete AI feature end-to-end (capstone)
