/**
 * Kader Matrisi Hesaplayıcı
 * Referans JS implementasyonundan alınan BIREBIR aynı algoritma.
 */

// ─── Temel indirgeme (ONE step: units + tens, NOT recursive) ─────────────────
function reduceNumber(number) {
  let num = number;
  if (number > 22) {
    num = (number % 10) + Math.floor(number / 10);
  }
  return num;
}

// ─── Yıl hesabı: tüm rakamları topla, sonra bir kez reduce et ────────────────
function calculateYear(year) {
  let y = 0;
  let yr = year;
  while (yr > 0) {
    y += yr % 10;
    yr = Math.floor(yr / 10);
  }
  return reduceNumber(y);
}

// ─── Tek kişi matris hesabı ───────────────────────────────────────────────────
function calculateMatrix(day, month, year) {
  const a = reduceNumber(day);
  const b = reduceNumber(month);
  const c = calculateYear(year);
  const d = reduceNumber(a + b + c);
  const e = reduceNumber(a + b + c + d); // MERKEZ

  // Köşegen (diagonal) düğümler
  const ab = reduceNumber(a + b); // AB (f in JS)
  const bc = reduceNumber(b + c); // BC (g in JS)
  const da = reduceNumber(d + a); // DA (h in JS)
  const cd = reduceNumber(c + d); // CD (i in JS)

  // İç katman (_inner)
  const dInner = reduceNumber(d + e); // j
  const cInner = reduceNumber(c + e); // n
  const aInner = reduceNumber(a + e); // s
  const bInner = reduceNumber(b + e); // t

  // Orta katman (_mid)
  const aMid = reduceNumber(a + aInner); // o
  const bMid = reduceNumber(b + bInner); // p
  const cMid = reduceNumber(cInner + c); // q
  const dMid = reduceNumber(dInner + d); // r

  // Para yolu ara noktaları (l, m, k in JS)
  const lPoint = reduceNumber(dInner + cInner);
  const mPoint = reduceNumber(lPoint + cInner);
  const kPoint = reduceNumber(dInner + lPoint);

  // u = köşegenlerin toplamı (merkez etrafı)
  const u = reduceNumber(ab + bc + da + cd);
  const v = reduceNumber(e + u);

  // Yeşil güç kanalları (eksen orta noktaları)
  const greenA = reduceNumber(aInner + e); // w
  const greenB = reduceNumber(bInner + e); // x
  const greenC = reduceNumber(cInner + e);
  const greenD = reduceNumber(dInner + e);

  // Köşegen kol düğümleri (inner/outer on each diagonal arm)
  const abInner = reduceNumber(ab + u); // f2
  const abOuter = reduceNumber(ab + abInner); // f1
  const bcInner = reduceNumber(bc + u); // g2
  const bcOuter = reduceNumber(bc + bcInner); // g1
  const cdInner = reduceNumber(cd + u); // i2
  const cdOuter = reduceNumber(cd + cdInner); // i1
  const daInner = reduceNumber(da + u); // h2
  const daOuter = reduceNumber(da + daInner); // h1

  // Soy ağacı / amaç
  const skyEnergy    = reduceNumber(b + d);
  const earthEnergy  = reduceNumber(a + c);
  const personalPurpose = reduceNumber(skyEnergy + earthEnergy);
  const motherLine   = reduceNumber(bc + da); // dişil soy
  const fatherLine   = reduceNumber(ab + cd); // eril soy
  const socialPurpose  = reduceNumber(motherLine + fatherLine);
  const generalPurpose = reduceNumber(personalPurpose + socialPurpose);
  const planetaryPurpose = reduceNumber(socialPurpose + generalPurpose);

  // Para/Aşk noktaları
  const moneyM    = reduceNumber(ab + bc);  // paraM
  const moneyDot1 = reduceNumber(da + ab);  // kalp (paraDot1)
  const moneyDot3 = reduceNumber(bc + cd);  // para (paraDot3)

  // Yaş yayı (her 10 yılın başında = köşegen/köşe değeri, arasında = reduce(başlangıç + bitiş))
  const age5  = reduceNumber(a + ab);
  const age10 = ab;
  const age15 = reduceNumber(ab + b);
  const age20 = b;
  const age25 = reduceNumber(b + bc);
  const age30 = bc;
  const age35 = reduceNumber(bc + c);
  const age40 = c;
  const age45 = reduceNumber(c + cd);
  const age50 = cd;
  const age55 = reduceNumber(cd + d);
  const age60 = d;
  const age65 = reduceNumber(d + da);
  const age70 = da;
  const age75 = reduceNumber(da + a);
  const age80 = a;

  return {
    // Dört köşe
    a, b, c, d,
    // Merkez
    e,
    // Köşegenler
    ab, bc, cd, da,
    // İç katman
    aInner, bInner, cInner, dInner,
    // Orta katman
    aMid, bMid, cMid, dMid,
    // Yeşil güç kanalları
    greenA, greenB, greenC, greenD,
    // Para / Aşk noktaları
    moneyM, moneyDot1, moneyDot3,
    // Para yolu görsel noktaları (k, l, m)
    moneyPathLower:  kPoint,
    moneyPathMiddle: lPoint,
    moneyPathUpper:  mPoint,
    // Soy / Amaç
    skyEnergy, earthEnergy,
    personalPurpose, fatherLine, motherLine,
    socialPurpose, generalPurpose, planetaryPurpose,
    // Köşegen kol düğümleri (görsel için)
    abInner, abOuter,
    bcInner, bcOuter,
    cdInner, cdOuter,
    daInner, daOuter,
    // U/V (iç merkez düğümleri)
    u, v,
    // Yaş yayı
    age5, age10, age15, age20,
    age25, age30, age35, age40,
    age45, age50, age55, age60,
    age65, age70, age75, age80,
  };
}

// ─── İki kişi uyum matrisi ────────────────────────────────────────────────────
function calculateCompatibility(day1, month1, year1, day2, month2, year2) {
  const p1 = calculateMatrix(day1, month1, year1);
  const p2 = calculateMatrix(day2, month2, year2);

  // Her node = reduce(p1.node + p2.node)
  const compat = {};
  for (const key of Object.keys(p1)) {
    compat[key] = reduceNumber(p1[key] + p2[key]);
  }
  return {
    person1: p1,
    person2: p2,
    compatibility: compat,
  };
}

module.exports = { calculateMatrix, calculateCompatibility, reduceNumber };
