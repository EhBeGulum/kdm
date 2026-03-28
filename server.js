const express = require('express');
const cors    = require('cors');
const { calculateMatrix, calculateCompatibility } = require('./matrixCalculator');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ─── Sağlık kontrolü ─────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'Kader Matrisi API' });
});

// ─── POST /api/matrix — Tek kişi matrisi ─────────────────────────────────────
// Body: { "day": 15, "month": 6, "year": 1990 }
app.post('/api/matrix', (req, res) => {
  const { day, month, year } = req.body;

  if (!day || !month || !year) {
    return res.status(400).json({ error: 'day, month, year zorunludur.' });
  }

  const d = parseInt(day);
  const m = parseInt(month);
  const y = parseInt(year);

  if (d < 1 || d > 31 || m < 1 || m > 12 || y < 1900 || y > 2100) {
    return res.status(400).json({ error: 'Geçersiz tarih değerleri.' });
  }

  try {
    const result = calculateMatrix(d, m, y);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─── POST /api/compatibility — İki kişi uyum matrisi ─────────────────────────
// Body: {
//   "person1": { "day": 15, "month": 6,  "year": 1990 },
//   "person2": { "day": 22, "month": 11, "year": 1988 }
// }
app.post('/api/compatibility', (req, res) => {
  const { person1, person2 } = req.body;

  if (!person1 || !person2) {
    return res.status(400).json({ error: 'person1 ve person2 zorunludur.' });
  }

  const { day: d1, month: m1, year: y1 } = person1;
  const { day: d2, month: m2, year: y2 } = person2;

  if (!d1 || !m1 || !y1 || !d2 || !m2 || !y2) {
    return res.status(400).json({ error: 'Her kişi için day, month, year zorunludur.' });
  }

  try {
    const result = calculateCompatibility(
      parseInt(d1), parseInt(m1), parseInt(y1),
      parseInt(d2), parseInt(m2), parseInt(y2)
    );
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Kader Matrisi API çalışıyor → http://localhost:${PORT}`);
});
