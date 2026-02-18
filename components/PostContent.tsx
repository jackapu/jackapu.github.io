'use client'
import { useEffect, useRef } from 'react'

export default function PostContent({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const blocks = ref.current?.querySelectorAll('pre') ?? []
    blocks.forEach((pre) => {
      if (pre.querySelector('.copy-btn')) return
      const btn = document.createElement('button')
      btn.textContent = 'Copy'
      btn.className = 'copy-btn'
      btn.addEventListener('click', () => {
        const code = pre.querySelector('code')?.innerText ?? ''
        navigator.clipboard.writeText(code)
        btn.textContent = 'Copied!'
        setTimeout(() => { btn.textContent = 'Copy' }, 2000)
      })
      pre.style.position = 'relative'
      pre.appendChild(btn)
    })
  }, [html])

  return (
    <div ref={ref} className="prose-custom" dangerouslySetInnerHTML={{ __html: html }} />
  )
}
