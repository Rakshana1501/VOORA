import { useEffect, useRef, useState } from 'react'
import './ChatWidget.css'

const quickReplies = [
  'Yes, I’m looking for a new home',
  'I want a free consultation',
  'Show me your projects',
]

const greeting = {
  from: 'bot',
  text: 'Hi 👋 Welcome to ARKHE! Are you looking for a new home or a construction partner?',
}

// ---------------------------------------------------------------
// DUMMY CHAT API — replace CHAT_API_URL with your real endpoint.
// Expected response shape: { reply: "bot message here" }
// ---------------------------------------------------------------
const CHAT_API_URL = 'https://jsonplaceholder.typicode.com/posts'

const fallbackReplies = [
  'Thanks for reaching out! 🙌 Our team will get back to you within 24 hours.',
  'Great question! Could you share your phone number so we can call you back?',
  'You can also explore our ongoing projects from the Projects menu above. 🏙️',
  'Sure — let me connect you with a sales consultant shortly.',
]

async function fetchBotReply(userText, history) {
  try {
    const res = await fetch(CHAT_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: userText,
        history: history.map((m) => ({ role: m.from, text: m.text })),
      }),
    })
    if (!res.ok) throw new Error('chat api error')
    const data = await res.json()
    if (data && typeof data.reply === 'string' && data.reply.trim()) {
      return data.reply
    }
    throw new Error('no reply field')
  } catch {
    return fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)]
  }
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [teaser, setTeaser] = useState(false)
  const [unread, setUnread] = useState(1)
  const [messages, setMessages] = useState([greeting])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bodyRef = useRef(null)

  // Pop the teaser bubble in after a short delay on first load.
  useEffect(() => {
    const t = setTimeout(() => setTeaser(true), 2200)
    return () => clearTimeout(t)
  }, [])

  // Auto-scroll the message list when it changes.
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [messages, typing, open])

  const openChat = () => {
    setOpen(true)
    setTeaser(false)
    setUnread(0)
  }

  const sendMessage = async (text) => {
    const value = text.trim()
    if (!value) return

    const userMsg = { from: 'user', text: value }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setTyping(true)

    const reply = await fetchBotReply(value, [...messages, userMsg])

    setTyping(false)
    setMessages((m) => [...m, { from: 'bot', text: reply }])
  }

  return (
    <div className="chat-widget">
      {/* Teaser bubble */}
      {teaser && !open && (
        <button className="chat-teaser" onClick={openChat}>
          Are you looking for a new home?
          <span className="chat-teaser-close" onClick={(e) => { e.stopPropagation(); setTeaser(false) }}>
            ✕
          </span>
        </button>
      )}

      {/* Chat panel */}
      <div className={`chat-panel ${open ? 'open' : ''}`}>
        <div className="chat-header">
          <span className="chat-avatar">A</span>
          <div className="chat-head-info">
            <strong>ARKHE Assistant</strong>
            <span><i className="chat-online" /> Online now</span>
          </div>
          <button className="chat-min" onClick={() => setOpen(false)} aria-label="Close chat">✕</button>
        </div>

        <div className="chat-body" ref={bodyRef}>
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.from}`}>
              {m.from === 'bot' && <span className="chat-msg-avatar">A</span>}
              <p>{m.text}</p>
            </div>
          ))}

          {typing && (
            <div className="chat-msg bot">
              <span className="chat-msg-avatar">A</span>
              <p className="chat-typing"><span /><span /><span /></p>
            </div>
          )}

          {messages.length === 1 && (
            <div className="chat-quick">
              {quickReplies.map((q) => (
                <button key={q} onClick={() => sendMessage(q)}>{q}</button>
              ))}
            </div>
          )}
        </div>

        <form
          className="chat-input"
          onSubmit={(e) => { e.preventDefault(); sendMessage(input) }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message…"
          />
          <button type="submit" aria-label="Send">➤</button>
        </form>
      </div>

      {/* Floating launcher button */}
      <button
        className={`chat-fab ${open ? 'is-open' : ''}`}
        onClick={() => (open ? setOpen(false) : openChat())}
        aria-label="Open chat"
      >
        {unread > 0 && !open && <span className="chat-badge">{unread}</span>}
        <span className="chat-fab-icon chat-fab-chat">
          <span className="chat-avatar lg">A</span>
        </span>
        <span className="chat-fab-icon chat-fab-close">✕</span>
      </button>
    </div>
  )
}
