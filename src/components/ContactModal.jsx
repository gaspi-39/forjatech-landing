import { useState, useEffect } from 'react'

function Field({ label, name, type = 'text', value, onChange, required }) {
  const base =
    'bg-transparent border-2 border-white/30 focus:border-ember outline-none px-md py-sm font-sans text-white text-body-md transition-colors duration-150 w-full'
  return (
    <div className="flex flex-col gap-xs">
      <label
        htmlFor={name}
        className="font-sans text-label uppercase tracking-widest text-white/50"
      >
        {label}
        {required && ' *'}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={4}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className={base}
        />
      )}
    </div>
  )
}

export default function ContactModal({ onClose }) {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [form, setForm] = useState({ name: '', email: '', description: '' })

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  let error=null
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(
        `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        }     
      )
      console.log(res) 
      setStatus(res.ok ? 'success' : 'error')
    } catch(err) {
      setStatus('error')
      error = err
      console.error('Form submission error:', err)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Contact"
    >
      <div
        className="bg-primary-container border-4 border-ember w-full max-w-xl my-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-lg py-md border-b-4 border-ember">
          <h2 className="font-serif font-bold text-2xl text-white uppercase tracking-tight">
            Start a Project
          </h2>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-ember transition-colors font-bold text-xl leading-none ml-md"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {status === 'success' ? (
          <div className="px-lg py-xl text-center">
            <p className="font-serif text-white text-2xl font-bold uppercase mb-sm">
              Blueprints received.
            </p>
            <p className="font-sans text-white/60 text-body-md">
              We'll review your project and get back to you within 2–5 business days.
            </p>
            <button onClick={onClose} className="btn-ember mt-lg">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="px-lg py-lg flex flex-col gap-md">
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={set('name')}
              required
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={set('email')}
              required
            />
            <Field
              label="Project Description"
              name="description"
              type="textarea"
              value={form.description}
              onChange={set('description')}
              required
            />

            {status === 'error' && (
              <p className="font-sans text-ember text-body-md">
                Something went wrong. Try again or email us at hello@forjatech.org
              </p>
            )}

            <div className="flex justify-end border-t-4 border-ember pt-md">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-ember disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending…' : 'Send Blueprints'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
