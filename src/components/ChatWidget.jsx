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

  const sendMessage = (text) => {
    const value = text.trim()
    if (!value) return
    setMessages((m) => [...m, { from: 'user', text: value }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((m) => [
        ...m,
        {
          from: 'bot',
          text: 'Great! 🙌 Leave your number below or fill the form and our team will reach out within 24 hours.',
        },
      ])
    }, 1100)
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
