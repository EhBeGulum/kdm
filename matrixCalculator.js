/**
 * Kader Matrisi Hesaplayıcı — Referans code.js + inputs_compatibility.js'den BIREBIR
 */

// ─── Temel indirgeme (bir adım: units + tens) ────────────────────────────────
function reduceNumber(number) {
  let num = number;
  if (number > 22) {
    num = (number % 10) + Math.floor(number / 10);
  }
  return num;
}

// ─── Yıl hesabı ───────────────────────────────────────────────────────────────
function calculateYear(year) {
  let y = 0;
  let yr = year;
  while (yr > 0) { y += yr % 10; yr = Math.floor(yr / 10); }
  return reduceNumber(y);
}

// ─── Tek kişi tam matris hesabı ───────────────────────────────────────────────
function calculateMatrix(day, month, year) {
  const aPoint = reduceNumber(day);
  const bPoint = month;                 // ay: ham değer (1-12)
  const cPoint = calculateYear(year);

  // Temel noktalar (code.js'deki calculatePoints birebir)
  const dpoint = reduceNumber(aPoint + bPoint + cPoint);
  const epoint = reduceNumber(aPoint + bPoint + cPoint + dpoint); // MERKEZ

  const fpoint = reduceNumber(aPoint + bPoint);   // AB köşegeni
  const gpoint = reduceNumber(bPoint + cPoint);   // BC köşegeni
  const hpoint = reduceNumber(dpoint + aPoint);   // DA köşegeni
  const ipoint = reduceNumber(cPoint + dpoint);   // CD köşegeni

  const jpoint = reduceNumber(dpoint + epoint);   // D_iç
  const npoint = reduceNumber(cPoint + epoint);   // C_iç
  const lpoint = reduceNumber(jpoint + npoint);
  const mpoint = reduceNumber(lpoint + npoint);
  const kpoint = reduceNumber(jpoint + lpoint);

  const qpoint = reduceNumber(npoint + cPoint);   // C_orta
  const rpoint = reduceNumber(jpoint + dpoint);   // D_orta
  const spoint = reduceNumber(aPoint + epoint);   // A_iç
  const tpoint = reduceNumber(bPoint + epoint);   // B_iç
  const opoint = reduceNumber(aPoint + spoint);   // A_orta
  const ppoint = reduceNumber(bPoint + tpoint);   // B_orta

  const upoint = reduceNumber(fpoint + gpoint + hpoint + ipoint);
  const vpoint = reduceNumber(epoint + upoint);
  const wpoint = reduceNumber(spoint + epoint);   // greenA (yesilA)
  const xpoint = reduceNumber(tpoint + epoint);   // greenB (yesilB)

  // Köşegen kol düğümleri
  const f2point = reduceNumber(fpoint + upoint);
  const f1point = reduceNumber(fpoint + f2point);
  const g2point = reduceNumber(gpoint + upoint);
  const g1point = reduceNumber(gpoint + g2point);
  const i2point = reduceNumber(ipoint + upoint);
  const i1point = reduceNumber(ipoint + i2point);
  const h2point = reduceNumber(hpoint + upoint);
  const h1point = reduceNumber(hpoint + h2point);

  // Amaç noktaları
  const skypoint      = reduceNumber(bPoint + dpoint);
  const earthpoint    = reduceNumber(aPoint + cPoint);
  const perspurpose   = reduceNumber(skypoint + earthpoint);
  const femalepoint   = reduceNumber(gpoint + hpoint);   // dişil soy
  const malepoint     = reduceNumber(fpoint + ipoint);   // eril soy
  const socialpurpose = reduceNumber(femalepoint + malepoint);
  const generalpurpose   = reduceNumber(perspurpose + socialpurpose);
  const planetarypurpose = reduceNumber(socialpurpose + generalpurpose);

  // Yaş yayı (code.js'deki yıl hesabı)
  const afpoint  = reduceNumber(aPoint + fpoint);
  const af1point = reduceNumber(aPoint + afpoint);
  const af2point = reduceNumber(aPoint + af1point);
  const af3point = reduceNumber(afpoint + af1point);
  const af4point = reduceNumber(afpoint + fpoint);
  const af5point = reduceNumber(afpoint + af4point);
  const af6point = reduceNumber(af4point + fpoint);
  const fbpoint  = reduceNumber(fpoint + bPoint);
  const fb1point = reduceNumber(fpoint + fbpoint);
  const fb2point = reduceNumber(fpoint + fb1point);
  const fb3point = reduceNumber(fbpoint + fb1point);
  const fb4point = reduceNumber(fbpoint + bPoint);
  const fb5point = reduceNumber(fbpoint + fb4point);
  const fb6point = reduceNumber(fb4point + bPoint);
  const bgpoint  = reduceNumber(bPoint + gpoint);
  const bg1point = reduceNumber(bPoint + bgpoint);
  const bg2point = reduceNumber(bPoint + bg1point);
  const bg3point = reduceNumber(bgpoint + bg1point);
  const bg4point = reduceNumber(bgpoint + gpoint);
  const bg5point = reduceNumber(bgpoint + bg4point);
  const bg6point = reduceNumber(bg4point + gpoint);
  const gcpoint  = reduceNumber(gpoint + cPoint);
  const gc1point = reduceNumber(gpoint + gcpoint);
  const gc2point = reduceNumber(gpoint + gc1point);
  const gc3point = reduceNumber(gcpoint + gc1point);
  const gc4point = reduceNumber(gcpoint + cPoint);
  const gc5point = reduceNumber(gcpoint + gc4point);
  const gc6point = reduceNumber(gc4point + cPoint);
  const cipoint  = reduceNumber(cPoint + ipoint);
  const ci1point = reduceNumber(cPoint + cipoint);
  const ci2point = reduceNumber(cPoint + ci1point);
  const ci3point = reduceNumber(cipoint + ci1point);
  const ci4point = reduceNumber(cipoint + ipoint);
  const ci5point = reduceNumber(cipoint + ci4point);
  const ci6point = reduceNumber(ci4point + ipoint);
  const idpoint  = reduceNumber(ipoint + dpoint);
  const id1point = reduceNumber(ipoint + idpoint);
  const id2point = reduceNumber(ipoint + id1point);
  const id3point = reduceNumber(idpoint + id1point);
  const id4point = reduceNumber(idpoint + dpoint);
  const id5point = reduceNumber(idpoint + id4point);
  const id6point = reduceNumber(id4point + dpoint);
  const dhpoint  = reduceNumber(dpoint + hpoint);
  const dh1point = reduceNumber(dpoint + dhpoint);
  const dh2point = reduceNumber(dpoint + dh1point);
  const dh3point = reduceNumber(dhpoint + dh1point);
  const dh4point = reduceNumber(dhpoint + hpoint);
  const dh5point = reduceNumber(dhpoint + dh4point);
  const dh6point = reduceNumber(dh4point + hpoint);
  const hapoint  = reduceNumber(hpoint + aPoint);
  const ha1point = reduceNumber(hpoint + hapoint);
  const ha2point = reduceNumber(hpoint + ha1point);
  const ha3point = reduceNumber(hapoint + ha1point);
  const ha4point = reduceNumber(hapoint + aPoint);
  const ha5point = reduceNumber(hapoint + ha4point);
  const ha6point = reduceNumber(ha4point + aPoint);

  // ChartHeart — 7 çakra × 3 beden (Physics/Energy/Emotions)
  const chartHeart = {
    // Fiziksel beden (sol sütun → merkez → sağ sütun)
    sahphysics:  aPoint,                              // Taç çakra (sahasrara)
    ajphysics:   opoint,                              // Ajna
    vishphysics: spoint,                              // Vishudha
    anahphysics: wpoint,                              // Anahata
    manphysics:  epoint,                              // Manipura (merkez)
    svadphysics: jpoint,                              // Svadhisthana
    mulphysics:  cPoint,                              // Muladhara

    // Enerji bedeni
    sahenergy:   bPoint,
    ajenergy:    ppoint,
    vishenergy:  tpoint,
    anahenergy:  xpoint,
    manenergy:   epoint,
    svadenergy:  npoint,
    mulenergy:   dpoint,

    // Duygusal beden
    sahemotions:  reduceNumber(aPoint + bPoint),
    ajemotions:   reduceNumber(opoint + ppoint),
    vishemotions: reduceNumber(spoint + tpoint),
    anahemotions: reduceNumber(wpoint + xpoint),
    manemotions:  reduceNumber(epoint + epoint),
    svademotions: reduceNumber(jpoint + npoint),
    mulemotions:  reduceNumber(cPoint + dpoint),
  };

  return {
    // ─── Dört köşe ────────────────────────────────────────────────────────────
    a: aPoint, b: bPoint, c: cPoint, d: dpoint, e: epoint,

    // ─── Köşegenler ───────────────────────────────────────────────────────────
    ab: fpoint, bc: gpoint, da: hpoint, cd: ipoint,

    // ─── İç katman ────────────────────────────────────────────────────────────
    aInner: spoint, bInner: tpoint, cInner: npoint, dInner: jpoint,

    // ─── Orta katman ──────────────────────────────────────────────────────────
    aMid: opoint, bMid: ppoint, cMid: qpoint, dMid: rpoint,

    // ─── Yeşil eksenler ───────────────────────────────────────────────────────
    greenA: wpoint, greenB: xpoint,
    greenC: reduceNumber(npoint + epoint),
    greenD: reduceNumber(jpoint + epoint),

    // ─── Para / Aşk hattı ─────────────────────────────────────────────────────
    moneyM:       reduceNumber(fpoint + gpoint),   // AB+BC
    moneyDot1:    reduceNumber(hpoint + fpoint),   // DA+AB (kalp ❤️)
    moneyDot3:    reduceNumber(gpoint + ipoint),   // BC+CD (para $)
    moneyPathLower:  kpoint,
    moneyPathMiddle: lpoint,
    moneyPathUpper:  mpoint,

    // ─── Amaç ─────────────────────────────────────────────────────────────────
    skyEnergy:        skypoint,
    earthEnergy:      earthpoint,
    personalPurpose:  perspurpose,
    fatherLine:       malepoint,
    motherLine:       femalepoint,
    socialPurpose:    socialpurpose,
    generalPurpose:   generalpurpose,
    planetaryPurpose: planetarypurpose,

    // ─── Köşegen kol düğümleri ────────────────────────────────────────────────
    abInner: f2point, abOuter: f1point,
    bcInner: g2point, bcOuter: g1point,
    cdInner: i2point, cdOuter: i1point,
    daInner: h2point, daOuter: h1point,

    // ─── U/V ──────────────────────────────────────────────────────────────────
    u: upoint, v: vpoint,

    // ─── 7 Çakra × 3 Beden ───────────────────────────────────────────────────
    chartHeart,

    // ─── Yaş yayı (5'er yıllık) ──────────────────────────────────────────────
    age5:  aPoint,  age6:  afpoint,  age7:  af1point, age8:  af2point,
    age9:  af3point, age10: af4point, age11: af5point, age12: af6point,
    age13: fbpoint,  age14: fb1point, age15: fb2point, age16: fb3point,
    age17: fb4point, age18: fb5point, age19: fb6point, age20: bPoint,
    age21: bgpoint,  age22: bg1point, age23: bg2point, age24: bg3point,
    age25: bg4point, age26: bg5point, age27: bg6point, age28: gcpoint,
    age29: gc1point, age30: gc2point, age31: gc3point, age32: gc4point,
    age33: gc5point, age34: gc6point, age35: cPoint,
    age36: cipoint,  age37: ci1point, age38: ci2point, age39: ci3point,
    age40: ci4point, age41: ci5point, age42: ci6point, age43: idpoint,
    age44: id1point, age45: id2point, age46: id3point, age47: id4point,
    age48: id5point, age49: id6point, age50: dpoint,
    age51: dhpoint,  age52: dh1point, age53: dh2point, age54: dh3point,
    age55: dh4point, age56: dh5point, age57: dh6point, age58: hapoint,
    age59: ha1point, age60: ha2point, age61: ha3point, age62: ha4point,
    age63: ha5point, age64: ha6point, age65: aPoint,
  };
}

// ─── İki kişi uyum matrisi (inputs_compatibility.js'den birebir) ─────────────
function calculateCompatibility(day1, month1, year1, day2, month2, year2) {
  const p1 = calculateMatrix(day1, month1, year1);
  const p2 = calculateMatrix(day2, month2, year2);

  const R = (key) => reduceNumber(p1[key] + p2[key]);

  // Uyum noktaları (inputs_compatibility.js fillMatrix'ten birebir)
  const compatB = reduceNumber(p1.b + p2.b);
  const compatD = reduceNumber(p1.d + p2.d);
  const compatA = reduceNumber(p1.a + p2.a);
  const compatC = reduceNumber(p1.c + p2.c);
  const compatF = reduceNumber(p1.ab + p2.ab);
  const compatI = reduceNumber(p1.cd + p2.cd);
  const compatG = reduceNumber(p1.bc + p2.bc);
  const compatH = reduceNumber(p1.da + p2.da);

  const compatSky   = reduceNumber(compatB + compatD);
  const compatEarth = reduceNumber(compatA + compatC);
  const compatRel   = reduceNumber(compatSky + compatEarth);
  const compatMale  = reduceNumber(compatF + compatI);
  const compatFem   = reduceNumber(compatG + compatH);
  const compatUnion = reduceNumber(compatMale + compatFem);
  const compatH1    = compatRel;
  const compatH2    = compatUnion;
  const compatHarmony = reduceNumber(compatH1 + compatH2);

  const compatibility = {
    a: compatA, b: compatB, c: compatC, d: compatD,
    e:  R('e'),
    ab: compatF, bc: compatG, da: compatH, cd: compatI,
    aInner: R('aInner'), bInner: R('bInner'),
    cInner: R('cInner'), dInner: R('dInner'),
    aMid: R('aMid'), bMid: R('bMid'), cMid: R('cMid'), dMid: R('dMid'),
    greenA: R('greenA'), greenB: R('greenB'),
    greenC: R('greenC'), greenD: R('greenD'),
    moneyM: R('moneyM'), moneyDot1: R('moneyDot1'), moneyDot3: R('moneyDot3'),
    u: R('u'), v: R('v'),
    // Özel uyum noktaları
    sky:          compatSky,
    earth:        compatEarth,
    relationship: compatRel,      // ilişki enerjisi
    male:         compatMale,     // eril uyum
    female:       compatFem,      // dişil uyum
    union:        compatUnion,    // birlik enerjisi
    harmony1:     compatH1,
    harmony2:     compatH2,
    harmony:      compatHarmony,  // genel uyum
  };

  return { person1: p1, person2: p2, compatibility };
}

module.exports = { calculateMatrix, calculateCompatibility, reduceNumber };
