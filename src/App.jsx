import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Mail, Phone, Download,
  Code2, Cpu, ShieldCheck, Database,
  GraduationCap, ChevronRight, MessageSquare,
  Terminal, BrainCircuit, AppWindow, MapPin,
  Trophy, Star, Clock, Zap, Layers, Globe
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import './index.css';

/* ── Brand SVG Icon Components ────────────────── */

/** Official GitHub mark (Octocat) */
const GitHubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

/** Official LinkedIn "in" logo */
const LinkedInIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-label="LinkedIn">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/** LeetCode official logo (Simple Icons) */
const LeetCodeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-label="LeetCode">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
  </svg>
);

/** HackerRank official logo */
const HackerRankIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-label="HackerRank">
    <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm3.111 16.5h1.389v-9h-1.389v3.429H10.89V7.5H9.5v9h1.389v-4.143h4.222V16.5z" />
  </svg>
);

/* ── Typewriter ───────────────────────────────── */
const TypewriterText = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1800); return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false); setIndex(p => (p + 1) % texts.length); return;
    }
    const t = setTimeout(() => setSubIndex(p => p + (reverse ? -1 : 1)), reverse ? 55 : 110);
    return () => clearTimeout(t);
  }, [subIndex, index, reverse, texts]);

  return (
    <span style={{ color: 'var(--accent)' }} className="font-bold">
      {texts[index].substring(0, subIndex)}<span className="animate-pulse">|</span>
    </span>
  );
};

/* ── Scroll-aware Navbar ──────────────────────── */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['about', 'skills', 'projects', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) { setActiveSection(id); break; }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(248,250,252,0.92)' : 'rgba(248,250,252,0.75)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${scrolled ? 'rgba(226,232,240,0.9)' : 'rgba(226,232,240,0.4)'}`,
      boxShadow: scrolled ? '0 4px 24px rgba(15,23,42,0.08)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div className="max-w-6xl mx-auto px-8 py-3.5 flex items-center justify-between">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          className="text-xl font-black" style={{ color: 'var(--text-primary)' }}>
          JL<span style={{ color: 'var(--accent)' }}>.</span>
        </motion.div>

        <div className="hidden md:flex gap-7 items-center">
          {['About', 'Skills', 'Projects', 'Contact'].map(item => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a key={item} href={`#${id}`}
                className="text-sm font-semibold transition-all duration-200 relative"
                style={{ color: isActive ? 'var(--accent)' : 'var(--text-secondary)' }}
                onMouseOver={e => e.target.style.color = 'var(--accent)'}
                onMouseOut={e => e.target.style.color = isActive ? 'var(--accent)' : 'var(--text-secondary)'}>
                {item}
                {isActive && (
                  <motion.span layoutId="nav-indicator" style={{
                    position: 'absolute', bottom: -6, left: 0, right: 0,
                    height: 2, background: 'var(--accent)', borderRadius: 2
                  }} />
                )}
              </a>
            );
          })}
          <a href="mailto:ladanejagannath@gmail.com?subject=Job Opportunity: Hiring Inquiry" className="primary-btn"
            style={{ padding: '0.45rem 1.2rem', fontSize: '0.78rem', borderRadius: '8px' }}>
            HIRE ME
          </a>
        </div>
      </div>
    </nav>
  );
};

/* ── Section wrapper ──────────────────────────── */
const Section = ({ id, title, children, alt = false }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    viewport={{ once: true, margin: '-60px' }}
    style={{ background: alt ? 'rgba(255,255,255,0.55)' : 'transparent', backdropFilter: alt ? 'blur(6px)' : 'none' }}
  >
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-widest whitespace-nowrap"
          style={{ color: 'var(--text-primary)' }}>
          {title}
        </h2>
        <div className="section-line" />
      </div>
      {children}
    </div>
  </motion.section>
);

/* ── EmailJS Config ────────────────────────────────────
   Template variables: {{name}}, {{time}}, {{message}}, {{email}}, {{subject}}
   ─────────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID = 'service_ek4hx5f';  // ✅ fixed
const EMAILJS_TEMPLATE_ID = 'template_k9umlch'; // ✅ set
const EMAILJS_PUBLIC_KEY = 'kQrb7aYKz7KRJEZfE'; // ✅ set

/* ── API Configuration ─────────────────────────────────────────
   Points to /api/notify (Vercel Serverless Function).
   Set VITE_BACKEND_URL in .env if your API is on a different domain.
   ─────────────────────────────────────────────────── */
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || '';

/* ── Contact Form (EmailJS) ───────────────────────────────── */
const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success'|'error', msg }

  /* ── Validation ── */
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.email.trim()) e.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email address.';
    if (!form.subject.trim()) e.subject = 'Subject is required.';
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  };

  /* ── Toast helper ── */
  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 5000);
  };

  /* ── Field change — clears its own error on edit ── */
  const handleChange = ({ target: { name, value } }) => {
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  /* ── Submit handler ── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    try {
      // Formatted timestamp for {{time}} in the template
      const time = new Date().toLocaleString('en-IN', {
        weekday: 'short', year: 'numeric', month: 'short',
        day: 'numeric', hour: '2-digit', minute: '2-digit',
      });

      // 1️⃣  Send email via EmailJS (primary — serverless)
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name.trim(),    // → {{name}}
          time,                         // → {{time}}
          message: form.message.trim(), // → {{message}}
          email: form.email.trim(),   // → {{email}}
          subject: form.subject.trim(), // → {{subject}}
        },
        EMAILJS_PUBLIC_KEY,
      );

      // 2️⃣  Fire Telegram notification via Serverless Function (non-blocking)
      fetch(`${BACKEND_URL}/api/notify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      }).catch(err => console.warn('[WhatsApp notify] Backend unavailable:', err.message));
      // ↑ .catch() so it never throws — email success is all that matters to the user

      setForm({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      showToast('success', "✅ Message sent successfully! I'll get back to you soon.");
    } catch (err) {
      console.error('[EmailJS]', err);
      showToast('error', '❌ Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  /* ── Shared input style (error-aware) ── */
  const inputStyle = (field) => ({
    width: '100%',
    background: errors[field] ? 'rgba(254,226,226,0.5)' : 'rgba(248,250,252,0.8)',
    border: `1.5px solid ${errors[field] ? '#FCA5A5' : 'var(--border)'}`,
    borderRadius: 10,
    padding: '0.9rem 1.25rem',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
    fontFamily: '"Outfit", sans-serif',
    transition: 'all 0.2s ease',
    outline: 'none',
  });

  const focusStyle = (hasErr) => ({
    borderColor: hasErr ? '#F87171' : 'var(--accent)',
    boxShadow: '0 0 0 4px rgba(37,99,235,0.1)',
    background: '#fff',
  });
  const blurStyle = (hasErr) => ({
    borderColor: hasErr ? '#FCA5A5' : 'var(--border)',
    boxShadow: 'none',
  });

  return (
    <div className="p-8 rounded-2xl"
      style={{
        background: 'rgba(255,255,255,0.85)',
        border: '1px solid var(--border)',
        boxShadow: '0 4px 28px var(--shadow)',
        backdropFilter: 'blur(10px)',
      }}>

      {/* ── Toast notification ── */}
      {toast && (
        <div role="alert" aria-live="polite"
          className="mb-4 px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2"
          style={{
            background: toast.type === 'success' ? 'rgba(5,150,105,0.08)' : 'rgba(239,68,68,0.08)',
            border: `1px solid ${toast.type === 'success' ? 'rgba(5,150,105,0.3)' : 'rgba(239,68,68,0.3)'}`,
            color: toast.type === 'success' ? 'var(--success)' : '#EF4444',
            animation: 'fadeInDown 0.3s ease',
          }}>
          {toast.msg}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-label="Contact form">

        {/* Name + Email row */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label htmlFor="cf-name"
              className="block text-[10px] font-bold uppercase tracking-wider mb-1.5"
              style={{ color: 'var(--text-secondary)' }}>
              Full Name
            </label>
            <input
              id="cf-name" type="text" name="name" value={form.name}
              onChange={handleChange} placeholder="John Doe"
              autoComplete="name" aria-required="true"
              aria-describedby={errors.name ? 'cf-name-err' : undefined}
              style={inputStyle('name')}
              onFocus={e => Object.assign(e.target.style, focusStyle(!!errors.name))}
              onBlur={e => Object.assign(e.target.style, blurStyle(!!errors.name))}
            />
            {errors.name && (
              <p id="cf-name-err" className="text-[11px] mt-1 font-medium" style={{ color: '#EF4444' }}>
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="cf-email"
              className="block text-[10px] font-bold uppercase tracking-wider mb-1.5"
              style={{ color: 'var(--text-secondary)' }}>
              Email Address
            </label>
            <input
              id="cf-email" type="email" name="email" value={form.email}
              onChange={handleChange} placeholder="john@example.com"
              autoComplete="email" aria-required="true"
              aria-describedby={errors.email ? 'cf-email-err' : undefined}
              style={inputStyle('email')}
              onFocus={e => Object.assign(e.target.style, focusStyle(!!errors.email))}
              onBlur={e => Object.assign(e.target.style, blurStyle(!!errors.email))}
            />
            {errors.email && (
              <p id="cf-email-err" className="text-[11px] mt-1 font-medium" style={{ color: '#EF4444' }}>
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="cf-subject"
            className="block text-[10px] font-bold uppercase tracking-wider mb-1.5"
            style={{ color: 'var(--text-secondary)' }}>
            Subject
          </label>
          <input
            id="cf-subject" type="text" name="subject" value={form.subject}
            onChange={handleChange} placeholder="Project collaboration / Job opportunity..."
            aria-required="true"
            aria-describedby={errors.subject ? 'cf-subject-err' : undefined}
            style={inputStyle('subject')}
            onFocus={e => Object.assign(e.target.style, focusStyle(!!errors.subject))}
            onBlur={e => Object.assign(e.target.style, blurStyle(!!errors.subject))}
          />
          {errors.subject && (
            <p id="cf-subject-err" className="text-[11px] mt-1 font-medium" style={{ color: '#EF4444' }}>
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="cf-message"
            className="block text-[10px] font-bold uppercase tracking-wider mb-1.5"
            style={{ color: 'var(--text-secondary)' }}>
            Message
          </label>
          <textarea
            id="cf-message" name="message" value={form.message}
            onChange={handleChange} rows={5}
            placeholder="Hi Jagannath, I would like to discuss a project..."
            aria-required="true"
            aria-describedby={errors.message ? 'cf-message-err' : undefined}
            style={{ ...inputStyle('message'), resize: 'none' }}
            onFocus={e => Object.assign(e.target.style, focusStyle(!!errors.message))}
            onBlur={e => Object.assign(e.target.style, blurStyle(!!errors.message))}
          />
          {errors.message && (
            <p id="cf-message-err" className="text-[11px] mt-1 font-medium" style={{ color: '#EF4444' }}>
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit" disabled={loading}
          aria-busy={loading}
          style={{
            width: '100%', display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: '0.5rem',
            padding: '0.95rem', borderRadius: 10, border: 'none',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 700, fontSize: '0.95rem', color: '#fff',
            background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
            boxShadow: loading ? 'none' : '0 6px 20px rgba(37,99,235,0.3)',
            transition: 'all 0.25s ease',
            opacity: loading ? 0.75 : 1,
          }}
          onMouseOver={e => { if (!loading) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(37,99,235,0.4)'; } }}
          onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = loading ? 'none' : '0 6px 20px rgba(37,99,235,0.3)'; }}
        >
          {loading ? (
            <>
              <svg width={17} height={17} viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth={2.5}
                style={{ animation: 'spin 0.8s linear infinite' }}
                aria-hidden="true">
                <circle cx={12} cy={12} r={10} strokeOpacity={0.25} />
                <path d="M12 2a10 10 0 0 1 10 10" />
              </svg>
              Sending...
            </>
          ) : (
            <><MessageSquare size={17} aria-hidden="true" /> Send Message</>
          )}
        </button>

      </form>

      <style>{`
        @keyframes spin        { to   { transform: rotate(360deg); } }
        @keyframes fadeInDown  { from { opacity:0; transform:translateY(-8px); }
                                 to   { opacity:1; transform:translateY(0); } }
      `}</style>
    </div>
  );
};

const App = () => (
  <div style={{ color: 'var(--text-primary)' }} className="min-h-screen">

    {/* Background ambient orbs */}
    <div className="bg-orb" style={{
      width: 600, height: 600,
      top: '-10%', left: '-10%',
      background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
      animationDelay: '0s',
    }} />
    <div className="bg-orb" style={{
      width: 500, height: 500,
      bottom: '10%', right: '-5%',
      background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)',
      animationDelay: '-6s',
    }} />
    <div className="bg-orb" style={{
      width: 400, height: 400,
      top: '40%', left: '30%',
      background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)',
      animationDelay: '-3s',
    }} />

    {/* ════ NAVBAR ════ */}
    <Navbar />

    {/* ════ HERO ════ */}
    <section>
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT — text */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}>


            <h1 className="font-black leading-[1.05] mb-4"
              style={{ fontFamily: '"Poppins", sans-serif', fontSize: 'clamp(2.6rem, 6vw, 4.2rem)', color: 'var(--text-primary)', letterSpacing: '-0.03em', whiteSpace: 'nowrap' }}>
              Jagannath <span className="name-gradient">Ladane</span>
            </h1>

            <p className="font-bold mb-2" style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
              MCA Student &amp; AI Developer
            </p>

            <div className="text-lg md:text-xl font-medium mb-5 h-8" style={{ color: 'var(--text-secondary)' }}>
              <TypewriterText texts={[
                'Building Intelligent Software Solutions',
                'Secure System Design',
                'AI-Powered Applications',
                'Real-World Impact'
              ]} />
            </div>

            <p className="text-sm leading-relaxed mb-8 max-w-md" style={{ color: 'var(--text-secondary)', lineHeight: '1.75' }}>
              I build <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>scalable, intelligent applications</span> that solve
              real-world problems. Specialising in AI-driven products and security-first architecture. MCA at PCCOE Pune.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#projects" className="primary-btn">
                <Zap size={16} /> View Projects
              </a>
              <a href="/resume.pdf" download="jagannath_ladane_resume.pdf" className="ghost-btn">
                <Download size={15} /> Download Resume
              </a>
            </div>

            {/* inline stats with icons */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '200+', label: 'DSA Problems Solved', icon: <Code2 size={16} />, color: 'var(--accent)' },
                { value: '5 ★', label: 'Java @ HackerRank', icon: <Star size={16} />, color: '#F59E0B' },
                { value: '2+', label: 'Yrs Experience', icon: <Clock size={16} />, color: 'var(--success)' },
              ].map(s => (
                <div key={s.label} className="hero-stat">
                  <div className="flex justify-center mb-1" style={{ color: s.color }}>{s.icon}</div>
                  <div className="text-xl font-black" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[9px] uppercase tracking-wider mt-0.5" style={{ color: 'var(--text-secondary)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — photo */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
            className="flex justify-center md:justify-end">
            <div className="relative profile-float">
              {/* Animated spinning ring */}
              <div className="profile-ring-animate" />
              {/* Static base ring glow */}
              <div className="profile-ring-static" />
              {/* Blurred glow behind */}
              <div style={{
                position: 'absolute', inset: '-12px', borderRadius: '50%', zIndex: 0,
                background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)',
                filter: 'blur(8px)',
              }} />
              {/* Image container */}
              <div style={{
                position: 'relative', zIndex: 1,
                width: 290, height: 290,
                borderRadius: '50%', overflow: 'hidden',
                border: '4px solid rgba(255,255,255,0.9)',
                boxShadow:
                  '0 20px 50px rgba(37, 99, 235, 0.25), 0 0 0 8px rgba(37, 99, 235, 0.08)',
              }}>
                <img
                  src="/profile.png"
                  alt="Jagannath Ladane"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                  onError={e => {
                    e.target.style.display = 'none';
                    const p = e.target.parentNode;
                    p.style.background = 'linear-gradient(135deg, #EFF6FF, #DBEAFE)';
                    p.style.display = 'flex';
                    p.style.alignItems = 'center';
                    p.style.justifyContent = 'center';
                    const initials = document.createElement('span');
                    initials.textContent = 'JL';
                    initials.style.cssText = 'font-size:4rem; font-weight:900; color:#2563EB; font-family:Outfit,sans-serif;';
                    p.appendChild(initials);
                  }}
                />
              </div>
              {/* Available badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  border: '1px solid var(--border)',
                  boxShadow: '0 6px 20px rgba(37,99,235,0.15)',
                  zIndex: 2, whiteSpace: 'nowrap',
                  backdropFilter: 'blur(8px)'
                }}>
                <span className="pulse-dot" style={{ color: 'var(--success)', fontSize: '1rem' }}>●</span>
                <span style={{ color: 'var(--text-primary)' }}>Available for Work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ════ ABOUT ════ */}
    <Section id="about" title="Professional Story" alt>
      <div className="max-w-5xl mx-auto flex flex-col gap-12 items-center">

        {/* Headline + description */}
        <div className="text-center max-w-3xl flex flex-col items-center">
          <p className="text-xl md:text-2xl leading-relaxed mb-6" style={{ color: 'var(--text-primary)', lineHeight: 1.6 }}>
            I'm a <span className="font-bold" style={{ color: 'var(--accent)' }}>product-minded Software Engineer Aspirant</span> who
            bridges the gap between cutting-edge AI and real human problems.
          </p>
          <p className="mb-8 leading-relaxed text-base" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Currently pursuing MCA at PCCOE, I specialise in AI-driven applications and security-first design with
            a focus on scalability and exceptional user experience. From building intelligent farming assistants to
            military-grade encrypted diary platforms — I architect solutions that matter.
          </p>
          <p className="text-sm italic font-medium px-6 py-3 rounded-full inline-block"
            style={{ color: 'var(--accent)', background: 'rgba(37,99,235,0.05)', border: '1px solid rgba(37,99,235,0.15)' }}>
            "I love building products that combine intelligence, security, and delightful user experiences."
          </p>
        </div>

        {/* Two column layout for bottom section */}
        <div className="w-full grid md:grid-cols-2 gap-8 items-start">
          
          {/* Left: Skill highlights & CTA */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'AI & Machine Learning', icon: <BrainCircuit size={15} /> },
                { label: 'Full-Stack Development', icon: <Globe size={15} /> },
                { label: 'Security Engineering', icon: <ShieldCheck size={15} /> },
                { label: 'Mobile Development', icon: <AppWindow size={15} /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    border: '1px solid var(--border)',
                    backdropFilter: 'blur(6px)',
                    transition: 'all 0.25s ease',
                    cursor: 'default',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(37,99,235,0.1)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: '#EFF6FF', color: 'var(--accent)' }}>
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Dual CTA */}
            <div>
              <p className="text-sm font-semibold mb-3" style={{ color: 'var(--text-secondary)' }}>
                Ready to build something impactful?
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/resume.pdf" download="jagannath_ladane_resume.pdf" className="primary-btn">
                  <Download size={15} /> Download Resume
                </a>
                <a href="#contact" className="ghost-btn">
                  <MessageSquare size={15} /> Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* Right: Currently Building */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl h-full flex flex-col justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(6,182,212,0.04) 100%)',
              border: '1px solid rgba(37,99,235,0.18)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #2563eb, #06B6D4)', color: '#fff' }}>
                <Zap size={22} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>Currently Building</p>
                <p className="text-base" style={{ color: 'var(--text-secondary)' }}>Active focus areas</p>
              </div>
              <span className="ml-auto px-4 py-1.5 rounded-full text-xs font-bold uppercase hidden sm:block"
                style={{ background: 'rgba(5,150,105,0.12)', color: 'var(--success)', border: '1px solid rgba(5,150,105,0.25)' }}>
                In Progress
              </span>
            </div>
            <ul className="space-y-6">
              {[
                { text: 'AI-Powered Applications', sub: 'ML inference + real-world deployment' },
                { text: 'Secure Full-Stack Platforms', sub: 'End-to-end encrypted systems' },
                { text: 'Scalable Cloud Solutions', sub: 'AWS + distributed architectures' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-0.5 w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm font-black"
                    style={{ background: 'linear-gradient(135deg, #2563eb, #06B6D4)', color: '#fff' }}>
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-base font-semibold mb-0.5" style={{ color: 'var(--text-primary)' }}>{item.text}</p>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>

    {/* ════ SKILLS ════ */}
    <Section id="skills" title="Technical Arsenal" >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { title: 'Programming Languages', items: ['Java', 'JavaScript', 'TypeScript', 'SQL'], icon: <Code2 size={18} />, gradient: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)' },
          { title: 'Frontend', items: ['React', 'React Native', 'Expo', 'Tailwind CSS', 'HTML', 'CSS'], icon: <AppWindow size={18} />, gradient: 'linear-gradient(135deg, #F0FDF4, #DCFCE7)' },
          { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'], icon: <Cpu size={18} />, gradient: 'linear-gradient(135deg, #FFF7ED, #FED7AA)' },
          { title: 'Database', items: ['PostgreSQL', 'Firebase', 'PHPmyAdmin'], icon: <Database size={18} />, gradient: 'linear-gradient(135deg, #F5F3FF, #EDE9FE)' },
          { title: 'Cloud', items: ['AWS S3'], icon: <Globe size={18} />, gradient: 'linear-gradient(135deg, #F0FDFA, #CCFBF1)' },
          { title: 'Security', items: ['AES-256-GCM', 'bcrypt', 'JWT Auth'], icon: <ShieldCheck size={18} />, gradient: 'linear-gradient(135deg, #FFF1F2, #FFE4E6)' },
          { title: 'AI & APIs', items: ['OpenAI API', 'Gemini API', 'Hugging Face', 'Judge API'], icon: <BrainCircuit size={18} />, gradient: 'linear-gradient(135deg, #EEF2FF, #E0E7FF)' },
          { title: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'Vite'], icon: <Terminal size={18} />, gradient: 'linear-gradient(135deg, #FEFCE8, #FEF08A)' },
        ].map((cat, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.8)',
              border: '1px solid var(--border)',
              boxShadow: '0 2px 14px var(--shadow)',
              transition: 'border-color 0.25s, box-shadow 0.25s',
              backdropFilter: 'blur(8px)',
            }}
            onMouseOver={e => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.boxShadow = '0 12px 36px rgba(37,99,235,0.14)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.boxShadow = '0 2px 14px var(--shadow)';
            }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ background: cat.gradient, color: 'var(--accent)' }}>
              {cat.icon}
            </div>
            <h3 className="text-sm font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map(skill => <span key={skill} className="skill-badge">{skill}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>

    {/* ════ PROJECTS ════ */}
    <Section id="projects" title="Featured Work" alt >
      <div className="grid lg:grid-cols-2 gap-6">
        {[
          {
            title: 'PeekSathi', badge: 'AI + Real Impact',
            image: '/peeksathi.png',
            imageFit: 'contain',
            desc: 'AI-powered farming assistant detecting crop diseases from images, with treatment plans in Marathi & English.',
            bullets: ['Integrated OpenAI & Gemini for diagnosis', 'Multi-lingual treatment plans', 'Persistent crop history tracking'],
            tags: ['React Native', 'Expo', 'Firebase'],
          },
          {
            title: 'DailyDiary.in', badge: 'Security-First',
            icon: <ShieldCheck size={60} />, iconBg: 'linear-gradient(135deg, #F0FDF4, #DCFCE7)', iconColor: 'var(--success)',
            desc: 'Secure digital journaling platform with privacy-first architecture using military-grade encryption.',
            bullets: ['AES-256-GCM Encryption', 'AWS S3 Secure Storage', 'UUID Protected Schema'],
            tags: ['Node.js', 'Postgres', 'Bcrypt'],
          },
          {
            title: 'Contest Generator', badge: 'DSA Tooling',
            image: '/contest-gen.png',
            url: 'https://contest-generator-one.vercel.app/',
            desc: 'Web app for generating custom DSA contests and competitive programming rounds with custom problem selection and live leaderboard.',
            bullets: [],
            tags: ['TypeScript', 'React', 'Vite'],
          },
          {
            title: 'Library Catalogue', badge: 'Backend System',
            image: '/library.png',
            desc: 'Robust PHP-based system for managing and cataloguing library resources with advanced search and filtering.',
            bullets: [],
            tags: ['PHP', 'MySQL', 'HTML/CSS'],
          },
        ].map((p, i) => {
          const CardComponent = p.url ? motion.a : motion.div;
          return (
            <CardComponent
              key={i}
              href={p.url}
              target={p.url ? "_blank" : undefined}
              rel={p.url ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`rounded-2xl overflow-hidden ${p.url ? 'cursor-pointer' : ''}`}
              style={{
                background: 'rgba(255,255,255,0.85)',
                border: '1px solid var(--border)',
                boxShadow: '0 2px 16px var(--shadow)',
                transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                backdropFilter: 'blur(8px)',
              }}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(37,99,235,0.16)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = '0 2px 16px var(--shadow)';
              }}
            >
              {p.image ? (
                <div className="h-56 w-full border-b border-gray-100/10 flex items-center justify-center p-5" style={{ background: p.iconBg || '#f8fafc' }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className={`w-full h-full ${p.imageFit === 'contain' ? 'object-contain object-center mix-blend-multiply scale-110' : 'object-cover object-top rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-black/5'}`}
                  />
                </div>
              ) : (
                <div className="py-10 flex items-center justify-center" style={{ background: p.iconBg }}>
                  <span style={{ color: p.iconColor, opacity: 0.4 }}>{p.icon}</span>
                </div>
              )}
              <div className="p-6">
                <span className="tag mb-3 inline-block">{p.badge}</span>
                <h3 className="text-xl font-black mb-2" style={{ color: 'var(--text-primary)' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{p.desc}</p>
                {p.bullets.length > 0 && (
                  <ul className="space-y-1.5 mb-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {p.bullets.map(b => (
                      <li key={b} className="flex gap-2 items-center">
                        <ChevronRight size={12} style={{ color: 'var(--accent)', flexShrink: 0 }} />{b}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex gap-2 flex-wrap">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </CardComponent>
          )
        })}

        {/* ════ Personal Portfolio — full width ════ */}
        <motion.a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="lg:col-span-2 rounded-2xl overflow-hidden relative cursor-pointer block"
          style={{
            background: 'rgba(255,255,255,0.85)',
            border: '1px solid var(--border)',
            boxShadow: '0 2px 16px var(--shadow)',
            transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
            backdropFilter: 'blur(8px)',
          }}
          onMouseOver={e => {
            e.currentTarget.style.borderColor = 'var(--accent)';
            e.currentTarget.style.boxShadow = '0 16px 48px rgba(37,99,235,0.16)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.boxShadow = '0 2px 16px var(--shadow)';
          }}
        >
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 p-6 md:p-10 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100/10"
              style={{ background: 'linear-gradient(135deg, #F5F3FF, #EDE9FE)' }}>
              <img src="/portfolio-thumb.png" alt="Portfolio UI" className="w-full h-full object-cover object-left-top rounded-xl shadow-[0_8px_30px_rgba(139,92,246,0.15)] border border-black/5" />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <span className="tag mb-4 inline-block self-start" style={{ background: 'rgba(139,92,246,0.15)', color: '#8b5cf6' }}>Frontend & UI/UX</span>
              <h3 className="text-2xl font-black mb-3" style={{ color: 'var(--text-primary)' }}>
                Personal Portfolio
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                A highly-optimized, modern developer portfolio built to showcase technical expertise. Features premium styling with Tailwind CSS,
                fluid interactive animations with Framer Motion, and a secure serverless contact pipeline integrated directly with Telegram.
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="tag" style={{ background: 'transparent', border: '1px solid var(--border)' }}>React</span>
                <span className="tag" style={{ background: 'transparent', border: '1px solid var(--border)' }}>Tailwind CSS</span>
                <span className="tag" style={{ background: 'transparent', border: '1px solid var(--border)' }}>Framer Motion</span>
                <span className="tag" style={{ background: 'transparent', border: '1px solid var(--border)' }}>Node.js</span>
              </div>
            </div>
          </div>
        </motion.a>

        {/* CRM — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="lg:col-span-2 rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.85)',
            border: '1px solid var(--border)',
            boxShadow: '0 2px 16px var(--shadow)',
            transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
            backdropFilter: 'blur(8px)',
          }}
          onMouseOver={e => {
            e.currentTarget.style.borderColor = 'var(--accent)';
            e.currentTarget.style.boxShadow = '0 16px 48px rgba(37,99,235,0.16)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.boxShadow = '0 2px 16px var(--shadow)';
          }}
        >
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 p-6 md:p-10 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100/10"
              style={{ background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)' }}>
              <img src="/crm.png" alt="CRM Dashboard" className="w-full h-full object-cover object-left-top rounded-xl shadow-[0_8px_30px_rgba(37,99,235,0.15)] border border-black/5" />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <span className="tag mb-4 inline-block">Corporate Solution</span>
              <h3 className="text-2xl font-black mb-3" style={{ color: 'var(--text-primary)' }}>
                Customer Relationship Website (CRM)
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                High-performance CRM platform to streamline customer management, sales workflows, and business analytics with a clean, modern UI.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="tag">HTML5</span>
                <span className="tag">Tailwind</span>
                <span className="tag">JavaScript</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>

    {/* ════ ACHIEVEMENTS ════ */}
    <Section id="achievements" title="Success Metrics" >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            label: 'LeetCode Solved Problems', value: '200+', sub: 'Medium / Hard Focus',
            color: 'var(--accent)', icon: <LeetCodeIcon size={28} />,
            glow: 'rgba(37,99,235,0.12)',
          },
          {
            label: 'Java Rating', value: '5 ★', sub: 'Gold Badge @ HackerRank',
            color: '#F59E0B', icon: <HackerRankIcon size={28} />,
            glow: 'rgba(245,158,11,0.12)',
          },
          {
            label: 'SQL Rating', value: '3 ★', sub: 'Silver Badge @ HackerRank',
            color: 'var(--success)', icon: <Terminal size={28} />,
            glow: 'rgba(5,150,105,0.12)',
          },
        ].map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="stat-card">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ background: `radial-gradient(circle, ${s.glow}, transparent)`, color: s.color, border: `1px solid ${s.glow.replace('0.12', '0.3')}` }}>
              {s.icon}
            </div>
            <div className="text-[11px] uppercase tracking-widest mb-3" style={{ color: 'var(--text-secondary)' }}>{s.label}</div>
            <div className="text-5xl font-black mb-2" style={{ color: s.color }}>{s.value}</div>
            <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{s.sub}</div>
          </motion.div>
        ))}
      </div>
    </Section>

    {/* ════ EDUCATION ════ */}
    <Section id="education" title="Education" alt >
      <div className="grid md:grid-cols-2 gap-5">
        {[
          { deg: 'Master of Computer Applications', period: 'Pimpri Chinchwad College of Engineering Pune · 2025 – 2027', grade: 'SGPA: 8.2', primary: true },
          { deg: 'B.Sc Computer Science', period: 'MGMs College of CS And IT Nanded · 2021–2024', grade: 'CGPA: 8.22', primary: false },
          { deg: 'HSC', period: 'SSGM College Loha · 2020-2021', grade: 'Percentage: 81.17%', primary: false },
          { deg: 'SSC', period: 'Prataprao Patil Madhyamik Vidyalay Harsad Pati · 2018-2019', grade: 'Percentage: 70.80%', primary: false },
        ].map((e, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-7 rounded-2xl flex items-start gap-5"
            style={{
              background: 'rgba(255,255,255,0.8)',
              border: '1px solid var(--border)',
              boxShadow: '0 2px 12px var(--shadow)',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.25s ease',
            }}
            onMouseOver={ev => {
              ev.currentTarget.style.borderColor = 'var(--accent)';
              ev.currentTarget.style.transform = 'translateY(-3px)';
              ev.currentTarget.style.boxShadow = '0 12px 32px rgba(37,99,235,0.12)';
            }}
            onMouseOut={ev => {
              ev.currentTarget.style.borderColor = 'var(--border)';
              ev.currentTarget.style.transform = 'translateY(0)';
              ev.currentTarget.style.boxShadow = '0 2px 12px var(--shadow)';
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: e.primary ? 'linear-gradient(135deg, #EFF6FF, #DBEAFE)' : 'var(--bg-primary)', color: e.primary ? 'var(--accent)' : 'var(--text-secondary)' }}>
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{e.deg}</h3>
              <p className="text-sm mb-3" style={{ color: e.primary ? 'var(--accent)' : 'var(--text-secondary)' }}>{e.period}</p>
              <span className="tag">{e.grade}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>

    {/* ════ CONTACT ════ */}
    <Section id="contact" title="Get In Touch" >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-black mb-4 leading-snug" style={{ color: 'var(--text-primary)' }}>
            Let's build something <span style={{ color: 'var(--accent)' }}>extraordinary</span>.
          </h3>
          <p className="text-sm mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Open to roles in AI integration, secure system design, and product-focused software engineering.
            Let's connect and create intelligent solutions together.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { icon: <Mail size={16} />, label: 'Email', val: 'ladanejagannath@gmail.com' },
              { icon: <Phone size={16} />, label: 'Phone', val: '+91 9022301782' },
            ].map(c => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="social-icon" style={{ width: 44, height: 44, borderRadius: 10 }}>{c.icon}</div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-secondary)' }}>{c.label}</div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{c.val}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 pt-5" style={{ borderTop: '1px solid var(--border)' }}>
            <a href="https://github.com/ladane-lab" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub"><GitHubIcon size={17} /></a>
            <a href="https://www.linkedin.com/in/jagannath-ladane-71a748284/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn"><LinkedInIcon size={17} /></a>
            <a href="https://leetcode.com/u/ladane-lab/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LeetCode"><LeetCodeIcon size={17} /></a>
            <a href="https://www.hackerrank.com/profile/ladanejagannath" target="_blank" rel="noopener noreferrer" className="social-icon" title="HackerRank"><HackerRankIcon size={17} /></a>
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>

    {/* ════ FOOTER ════ */}
    <footer style={{
      background: 'linear-gradient(to bottom, #0f172a, #020617)',
      color: '#94a3b8',
      borderTop: '1px solid rgba(37,99,235,0.15)',
      boxShadow: '0 -10px 40px rgba(0,0,0,0.1)'
    }} className="py-16 px-6 relative overflow-hidden" >
      {/* Decorative top glow */}
      < div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)', opacity: 0.5 }} />

      < div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10" >
        <div className="text-center md:text-left">
          <div className="text-3xl font-black text-white mb-2 tracking-tight">
            JL<span style={{ color: 'var(--accent)' }}>.</span>
          </div>
          <div className="text-sm font-medium" style={{ color: '#cbd5e1' }}>MCA Student & AI Developer</div>
        </div>
        <div className="flex gap-5">
          {[
            { href: "https://github.com/ladane-lab", icon: <GitHubIcon size={20} />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/jagannath-ladane-71a748284/", icon: <LinkedInIcon size={20} />, label: "LinkedIn" },
            { href: "https://leetcode.com/u/ladane-lab/", icon: <LeetCodeIcon size={20} />, label: "LeetCode" },
            { href: "https://www.hackerrank.com/profile/ladanejagannath", icon: <HackerRankIcon size={20} />, label: "HackerRank" }
          ].map((link, idx) => (
            <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer"
              className="footer-social-icon" title={link.label}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)', color: '#94a3b8',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = 'var(--accent)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(37,99,235,0.5)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.color = '#94a3b8';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="text-xs font-bold uppercase tracking-widest" style={{ color: '#64748b' }}>© 2026 Jagannath Ladane</div>
      </div>
    </footer>
  </div>
);

export default App;

