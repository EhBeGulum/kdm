/**
 * Kader Matrisi Hesaplayıcı — Referans code.js'den BIREBIR formüller
 * Yaş yayı: MatrixData.swift'in beklediği 16 alan (age5...age80)
 */

function reduceNumber(number) {
  let num = number;
  if (number > 22) {
    num = (number % 10) + Math.floor(number / 10);
  }
  return num;
}

function calculateYear(year) {
  let y = 0;
  let yr = year;
  while (yr > 0) { y += yr % 10; yr = Math.floor(yr / 10); }
  return reduceNumber(y);
}

function calculateMatrix(day, month, year) {
  const aPoint = reduceNumber(day);
  const bPoint = month;               // ay ham değer (1-12)
  const cPoint = calculateYear(year);

  const dpoint = reduceNumber(aPoint + bPoint + cPoint);
  const epoint = reduceNumber(aPoint + bPoint + cPoint + dpoint);

  const fpoint = reduceNumber(aPoint + bPoint);   // AB
  const gpoint = reduceNumber(bPoint + cPoint);   // BC
  const hpoint = reduceNumber(dpoint + aPoint);   // DA
  const ipoint = reduceNumber(cPoint + dpoint);   // CD

  const jpoint = reduceNumber(dpoint + epoint);   // D_iç
  const npoint = reduceNumber(cPoint + epoint);   // C_iç
  const lpoint = reduceNumber(jpoint + npoint);
  const mpoint = reduceNumber(lpoint + npoint);
  const kpoint = reduceNumber(jpoint + lpoint);

  const qpoint = reduceNumber(npoint + cPoint);
  const rpoint = reduceNumber(jpoint + dpoint);
  const spoint = reduceNumber(aPoint + epoint);   // A_iç
  const tpoint = reduceNumber(bPoint + epoint);   // B_iç
  const opoint = reduceNumber(aPoint + spoint);
  const ppoint = reduceNumber(bPoint + tpoint);

  const upoint = reduceNumber(fpoint + gpoint + hpoint + ipoint);
  const vpoint = reduceNumber(epoint + upoint);
  const wpoint = reduceNumber(spoint + epoint);   // greenA
  const xpoint = reduceNumber(tpoint + epoint);   // greenB

  const f2point = reduceNumber(fpoint + upoint);
  const f1point = reduceNumber(fpoint + f2point);
  const g2point = reduceNumber(gpoint + upoint);
  const g1point = reduceNumber(gpoint + g2point);
  const i2point = reduceNumber(ipoint + upoint);
  const i1point = reduceNumber(ipoint + i2point);
  const h2point = reduceNumber(hpoint + upoint);
  const h1point = reduceNumber(hpoint + h2point);

  const skypoint      = reduceNumber(bPoint + dpoint);
  const earthpoint    = reduceNumber(aPoint + cPoint);
  const perspurpose   = reduceNumber(skypoint + earthpoint);
  const femalepoint   = reduceNumber(gpoint + hpoint);
  const malepoint     = reduceNumber(fpoint + ipoint);
  const socialpurpose    = reduceNumber(femalepoint + malepoint);
  const generalpurpose   = reduceNumber(perspurpose + socialpurpose);
  const planetarypurpose = reduceNumber(socialpurpose + generalpurpose);

  // ─── Yaş yayı — 16 değer, MatrixData.swift ile birebir eşleşir ─────────────
  // 5'er yıllık: köşe değerleri + köşegenler + ara noktalar (code.js years objesi)
  const afpoint = reduceNumber(aPoint + fpoint);   // A→AB arası ilk nokta
  const fbpoint = reduceNumber(fpoint + bPoint);   // AB→B arası ilk nokta
  const bgpoint = reduceNumber(bPoint + gpoint);   // B→BC arası ilk nokta
  const gcpoint = reduceNumber(gpoint + cPoint);   // BC→C arası ilk nokta
  const cipoint = reduceNumber(cPoint + ipoint);   // C→CD arası ilk nokta
  const idpoint = reduceNumber(ipoint + dpoint);   // CD→D arası ilk nokta
  const dhpoint = reduceNumber(dpoint + hpoint);   // D→DA arası ilk nokta
  const hapoint = reduceNumber(hpoint + aPoint);   // DA→A arası ilk nokta

  // ─── ChartHeart — 7 çakra × 3 beden ─────────────────────────────────────────
  const chartHeart = {
    sahphysics: aPoint,  ajphysics: opoint,   vishphysics: spoint,
    anahphysics: wpoint, manphysics: epoint,  svadphysics: jpoint,  mulphysics: cPoint,
    sahenergy:   bPoint, ajenergy:  ppoint,   vishenergy:  tpoint,
    anahenergy:  xpoint, manenergy: epoint,   svadenergy:  npoint,  mulenergy: dpoint,
    sahemotions:  reduceNumber(aPoint + bPoint),
    ajemotions:   reduceNumber(opoint + ppoint),
    vishemotions: reduceNumber(spoint + tpoint),
    anahemotions: reduceNumber(wpoint + xpoint),
    manemotions:  reduceNumber(epoint + epoint),
    svademotions: reduceNumber(jpoint + npoint),
    mulemotions:  reduceNumber(cPoint + dpoint),
  };

  return {
    a: aPoint, b: bPoint, c: cPoint, d: dpoint, e: epoint,
    ab: fpoint, bc: gpoint, da: hpoint, cd: ipoint,
    aInner: spoint, bInner: tpoint, cInner: npoint, dInner: jpoint,
    aMid: opoint,   bMid: ppoint,   cMid: qpoint,   dMid: rpoint,
    greenA: wpoint, greenB: xpoint,
    greenC: reduceNumber(npoint + epoint),
    greenD: reduceNumber(jpoint + epoint),
    moneyM:    reduceNumber(fpoint + gpoint),
    moneyDot1: reduceNumber(hpoint + fpoint),
    moneyDot3: reduceNumber(gpoint + ipoint),
    moneyPathLower: kpoint, moneyPathMiddle: lpoint, moneyPathUpper: mpoint,
    skyEnergy: skypoint,  earthEnergy: earthpoint,
    personalPurpose: perspurpose, fatherLine: malepoint, motherLine: femalepoint,
    socialPurpose: socialpurpose, generalPurpose: generalpurpose,
    planetaryPurpose: planetarypurpose,
    abInner: f2point, abOuter: f1point,
    bcInner: g2point, bcOuter: g1point,
    cdInner: i2point, cdOuter: i1point,
    daInner: h2point, daOuter: h1point,
    u: upoint, v: vpoint,
    chartHeart,
    // ─── 16 yaş değeri — MatrixData.swift ile birebir ──────────────────────
    age5:  afpoint,   // A→AB arası
    age10: fpoint,    // AB köşegeni
    age15: fbpoint,   // AB→B arası
    age20: bPoint,    // B köşesi
    age25: bgpoint,   // B→BC arası
    age30: gpoint,    // BC köşegeni
    age35: gcpoint,   // BC→C arası
    age40: cPoint,    // C köşesi
    age45: cipoint,   // C→CD arası
    age50: ipoint,    // CD köşegeni
    age55: idpoint,   // CD→D arası
    age60: dpoint,    // D köşesi
    age65: dhpoint,   // D→DA arası
    age70: hpoint,    // DA köşegeni
    age75: hapoint,   // DA→A arası
    age80: aPoint,    // A köşesi
  };
}

function calculateCompatibility(day1, month1, year1, day2, month2, year2) {
  const p1 = calculateMatrix(day1, month1, year1);
  const p2 = calculateMatrix(day2, month2, year2);

  const R = (key) => reduceNumber(p1[key] + p2[key]);

  const compatB = reduceNumber(p1.b + p2.b);
  const compatD = reduceNumber(p1.d + p2.d);
  const compatA = reduceNumber(p1.a + p2.a);
  const compatC = reduceNumber(p1.c + p2.c);
  const compatF = reduceNumber(p1.ab + p2.ab);
  const compatI = reduceNumber(p1.cd + p2.cd);
  const compatG = reduceNumber(p1.bc + p2.bc);
  const compatH = reduceNumber(p1.da + p2.da);

  const compatSky      = reduceNumber(compatB + compatD);
  const compatEarth    = reduceNumber(compatA + compatC);
  const compatRel      = reduceNumber(compatSky + compatEarth);
  const compatMale     = reduceNumber(compatF + compatI);
  const compatFem      = reduceNumber(compatG + compatH);
  const compatUnion    = reduceNumber(compatMale + compatFem);
  const compatHarmony  = reduceNumber(compatRel + compatUnion);

  return {
    person1: p1,
    person2: p2,
    compatibility: {
      a: compatA, b: compatB, c: compatC, d: compatD, e: R('e'),
      ab: compatF, bc: compatG, da: compatH, cd: compatI,
      aInner: R('aInner'), bInner: R('bInner'), cInner: R('cInner'), dInner: R('dInner'),
      aMid: R('aMid'), bMid: R('bMid'), cMid: R('cMid'), dMid: R('dMid'),
      greenA: R('greenA'), greenB: R('greenB'), greenC: R('greenC'), greenD: R('greenD'),
      moneyM: R('moneyM'), moneyDot1: R('moneyDot1'), moneyDot3: R('moneyDot3'),
      moneyPathLower: R('moneyPathLower'), moneyPathMiddle: R('moneyPathMiddle'), moneyPathUpper: R('moneyPathUpper'),
      u: R('u'), v: R('v'),
      abInner: R('abInner'), abOuter: R('abOuter'),
      bcInner: R('bcInner'), bcOuter: R('bcOuter'),
      cdInner: R('cdInner'), cdOuter: R('cdOuter'),
      daInner: R('daInner'), daOuter: R('daOuter'),
      age5: R('age5'), age10: R('age10'), age15: R('age15'), age20: R('age20'),
      age25: R('age25'), age30: R('age30'), age35: R('age35'), age40: R('age40'),
      age45: R('age45'), age50: R('age50'), age55: R('age55'), age60: R('age60'),
      age65: R('age65'), age70: R('age70'), age75: R('age75'), age80: R('age80'),
      skyEnergy: compatSky, earthEnergy: compatEarth,
      personalPurpose: R('personalPurpose'), fatherLine: R('fatherLine'), motherLine: R('motherLine'),
      socialPurpose: R('socialPurpose'), generalPurpose: R('generalPurpose'),
      planetaryPurpose: R('planetaryPurpose'),
      sky: compatSky, earth: compatEarth,
      relationship: compatRel, male: compatMale, female: compatFem,
      union: compatUnion, harmony: compatHarmony,
    }
  };
}

module.exports = { calculateMatrix, calculateCompatibility, reduceNumber };
