require('dotenv').config();
const express      = require('express');
const cors         = require('cors');
const contactRoutes = require('./routes/contactRoutes');

const app  = express();
const PORT = process.env.PORT || 3001;

// ── Middleware ─────────────────────────────────────────────
app.use(cors({
  origin: [
    'http://localhost:5173',  // Vite dev server
    'http://localhost:4173',  // Vite preview
    process.env.FRONTEND_URL, // Production domain
  ].filter(Boolean),
  methods: ['POST'],
}));
app.use(express.json({ limit: '10kb' })); // guard against large payloads

// ── Health check ───────────────────────────────────────────
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

// ── Routes ─────────────────────────────────────────────────
app.use('/api', contactRoutes);

// ── 404 catch-all ─────────────────────────────────────────
app.use((_req, res) => res.status(404).json({ message: 'Route not found.' }));

// ── Start ──────────────────────────────────────────────────
app.listen(PORT, () =>
  console.log(`✅  Backend running on http://localhost:${PORT}`)
);
