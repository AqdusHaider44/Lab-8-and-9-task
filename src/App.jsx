
import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    if (isSubmitting) return

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('Please fill in all fields.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)
    setStatus('Message submitted successfully.')

    setName('')
    setEmail('')
    setMessage('')
    setIsSubmitting(false)
  }

  return (
    <main className="contact-page">
      <section className="contact-card">
        <h1>Contact Us</h1>
        <p>Send us a message using the form below.</p>

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
          />

          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={4}
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit message'}
          </button>

          <p role="status" aria-live="polite">{status}</p>
        </form>
      </section>
    </main>
  )
}

export default App
