
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('Contact form', () => {
  it('shows the contact form', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: 'Contact Us' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: 'Submit message' }),
    ).toBeInTheDocument()
  })

  it('rejects empty fields', () => {
    render(<App />)

    fireEvent.click(
      screen.getByRole('button', { name: 'Submit message' }),
    )

    expect(screen.getByRole('status')).toHaveTextContent(
      'Please fill in all fields.',
    )
  })

  it('rejects an invalid email', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText('Full name'), {
      target: { value: 'Aqdus' },
    })
    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'invalid-email' },
    })
    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'Hello' },
    })

    fireEvent.click(
      screen.getByRole('button', { name: 'Submit message' }),
    )

    expect(screen.getByRole('status')).toHaveTextContent(
      'Please enter a valid email address.',
    )
  })

  it('submits valid form data', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText('Full name'), {
      target: { value: 'Aqdus' },
    })
    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'aqdus@example.com' },
    })
    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'Hello team' },
    })

    fireEvent.click(
      screen.getByRole('button', { name: 'Submit message' }),
    )

    expect(screen.getByRole('status')).toHaveTextContent(
      'Message submitted successfully.',
    )
    expect(screen.getByLabelText('Full name')).toHaveValue('')
  })
})
