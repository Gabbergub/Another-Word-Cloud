// Words drawn from Ofcom Offensive Language Study via iheartbritain.com
// Weight is INVERTED from severity: Level 1 (most acceptable) = smallest, Level 5 (least acceptable) = biggest
// Category: "pre" = Pre-Watershed, "post" = Post-Watershed, "disc" = Discriminatory Language
// Post-Watershed entries show how the same word shifts level after 9pm

const words = [

  // ─── PRE-WATERSHED ───────────────────────────────────────────────────────────
  { text: "Fuck",            weight: 100, level: 5, category: "pre"  },
  { text: "Cunt",            weight: 96,  level: 5, category: "pre"  },
  { text: "Motherfucker",    weight: 92,  level: 5, category: "pre"  },
  { text: "Pussy",           weight: 88,  level: 5, category: "pre"  },
  { text: "Cock",            weight: 68,  level: 4, category: "pre"  },
  { text: "Twat",            weight: 64,  level: 4, category: "pre"  },
  { text: "Shit",            weight: 50,  level: 3, category: "pre"  },
  { text: "Bastard",         weight: 47,  level: 3, category: "pre"  },
  { text: "Bitch",           weight: 44,  level: 3, category: "pre"  },
  { text: "Dick",            weight: 42,  level: 3, category: "pre"  },
  { text: "Wanker",          weight: 40,  level: 3, category: "pre"  },
  { text: "Shag",            weight: 38,  level: 3, category: "pre"  },
  { text: "Slag",            weight: 36,  level: 3, category: "pre"  },
  { text: "Bloody",          weight: 26,  level: 2, category: "pre"  },
  { text: "Bollocks",        weight: 25,  level: 2, category: "pre"  },
  { text: "Bugger",          weight: 24,  level: 2, category: "pre"  },
  { text: "Crap",            weight: 23,  level: 2, category: "pre"  },
  { text: "Goddamn",         weight: 22,  level: 2, category: "pre"  },
  { text: "Piss",            weight: 21,  level: 2, category: "pre"  },
  { text: "Arse",            weight: 12,  level: 1, category: "pre"  },
  { text: "Breasts",         weight: 11,  level: 1, category: "pre"  },
  { text: "Bum",             weight: 10,  level: 1, category: "pre"  },
  { text: "Damn",            weight: 9,   level: 1, category: "pre"  },
  { text: "Tits",            weight: 8,   level: 1, category: "pre"  },

  // ─── POST-WATERSHED ──────────────────────────────────────────────────────────
  // Same words but re-rated for post-9pm context
  { text: "Cunt",           weight: 100, level: 5, category: "post" },
  { text: "Motherfucker",   weight: 96,  level: 5, category: "post" },
  { text: "Fuck",           weight: 80,  level: 4, category: "post" },
  { text: "Pussy",          weight: 50,  level: 3, category: "post" },
  { text: "Cock",           weight: 30,  level: 2, category: "post" },
  { text: "Twat",           weight: 28,  level: 2, category: "post" },
  { text: "Bastard",        weight: 26,  level: 2, category: "post" },
  { text: "Bitch",          weight: 14,  level: 1, category: "post" },
  { text: "Bloody",         weight: 13,  level: 1, category: "post" },
  { text: "Bollocks",       weight: 12,  level: 1, category: "post" },
  { text: "Crap",           weight: 11,  level: 1, category: "post" },
  { text: "Slag",           weight: 11,  level: 1, category: "post" },
  { text: "Shit",           weight: 10,  level: 1, category: "post" },
  { text: "Dick",           weight: 10,  level: 1, category: "post" },
  { text: "Bugger",         weight: 9,   level: 1, category: "post" },
  { text: "Goddamn",        weight: 9,   level: 1, category: "post" },
  { text: "Wanker",         weight: 9,   level: 1, category: "post" },
  { text: "Piss",           weight: 8,   level: 1, category: "post" },
  { text: "Shag",           weight: 8,   level: 1, category: "post" },

  // ─── DISCRIMINATORY LANGUAGE ─────────────────────────────────────────────────
  // Shown as they appear in the Ofcom source data (partially censored where noted)
  { text: "Ret*rded",        weight: 96,  level: 5, category: "disc" },
  { text: "Gyppo",           weight: 93,  level: 5, category: "disc" },
  { text: "Pikey",           weight: 90,  level: 5, category: "disc" },
  { text: "Cripple",         weight: 87,  level: 5, category: "disc" },
  { text: "Schizo",          weight: 68,  level: 4, category: "disc" },
  { text: "Ch*nk",           weight: 65,  level: 4, category: "disc" },
  { text: "Y*d",             weight: 62,  level: 4, category: "disc" },
  { text: "M*ng",            weight: 60,  level: 4, category: "disc" },
  { text: "Fenian",          weight: 58,  level: 4, category: "disc" },
  { text: "T*welhead",       weight: 56,  level: 4, category: "disc" },
  { text: "Hun",             weight: 54,  level: 4, category: "disc" },
  { text: "Nazi",            weight: 52,  level: 4, category: "disc" },
  { text: "N*gger",          weight: 50,  level: 3, category: "disc" },
  { text: "P*ki",            weight: 47,  level: 3, category: "disc" },
  { text: "Spastic",         weight: 44,  level: 3, category: "disc" },
  { text: "Dyke",            weight: 42,  level: 3, category: "disc" },
  { text: "F*ggot",          weight: 40,  level: 3, category: "disc" },
  { text: "Homo",            weight: 26,  level: 2, category: "disc" },
  { text: "Gender-bender",   weight: 24,  level: 2, category: "disc" },
  { text: "Chick w/a dick",  weight: 22,  level: 2, category: "disc" },
  { text: "Tranny",          weight: 20,  level: 2, category: "disc" },
  { text: "Nutter",          weight: 12,  level: 1, category: "disc" },
  { text: "Looney",          weight: 11,  level: 1, category: "disc" },
  { text: "Mental",          weight: 10,  level: 1, category: "disc" },
  { text: "Lezza",           weight: 9,   level: 1, category: "disc" },
  { text: "Poof",            weight: 8,   level: 1, category: "disc" },
  { text: "Queer",           weight: 8,   level: 1, category: "disc" },
  { text: "Jesus Christ",    weight: 7,   level: 1, category: "disc" },
];

// Category colours
const CAT_COLORS = {
  pre:  '#DC143C', // crimson   — Pre-Watershed
  post: '#228B22', // green    — Post-Watershed
  disc: '#0057A8', // cobalt    — Discriminatory
  //disc: '#228B22', // green     — Discriminatory//
};

function getSizeClass(weight) {
  if (weight >= 95) return 's10';
  if (weight >= 85) return 's9';
  if (weight >= 70) return 's8';
  if (weight >= 55) return 's7';
  if (weight >= 40) return 's6';
  if (weight >= 30) return 's5';
  if (weight >= 20) return 's4';
  if (weight >= 14) return 's3';
  if (weight >= 8)  return 's2';
  return 's1';
}

const cloud = document.getElementById('cloud');
cloud.style.position = 'relative';

let activeCategory = null;

const sorted = [...words].sort((a, b) => b.weight - a.weight);

const centerX = cloud.offsetWidth / 2;
const centerY = cloud.offsetHeight / 2;

const placedRects = [];
const centerWordsCount = 4;
const centerWords = [];
const centerWordSpans = [];
const orbitWords = [];

const centerPadding = 60;
let maxW = 0;
let maxH = 0;

let orbitSpeedMultiplier = 1;
const orbitSlider = document.getElementById('orbitSlider');
const orbitSpeedValue = document.getElementById('orbitSpeedValue');
if (orbitSlider && orbitSpeedValue) {
  orbitSlider.addEventListener('input', function(e) {
    orbitSpeedMultiplier = parseFloat(e.target.value) / 50;
    if (orbitSpeedMultiplier < 0.01) orbitSpeedMultiplier = 0;
    orbitSpeedValue.textContent = orbitSpeedMultiplier === 0 ? 'Stopped' : orbitSpeedMultiplier.toFixed(2) + 'x';
  });
  orbitSpeedMultiplier = parseFloat(orbitSlider.value) / 50;
  orbitSpeedValue.textContent = orbitSpeedMultiplier === 0 ? 'Stopped' : orbitSpeedMultiplier.toFixed(2) + 'x';
}

// Orbit spread: 1.45 = current minimum, slider adds up to +2.55 (max 4.0x)
let orbitSpreadMultiplier = 1.45;
const spreadSlider = document.getElementById('spreadSlider');
const spreadValue = document.getElementById('spreadValue');
if (spreadSlider && spreadValue) {
  spreadSlider.addEventListener('input', function(e) {
    const t = parseFloat(e.target.value) / 100;
    orbitSpreadMultiplier = 1.45 + t * 2.55;
    spreadValue.textContent = orbitSpreadMultiplier.toFixed(2) + 'x';
  });
  orbitSpreadMultiplier = 1.45 + (parseFloat(spreadSlider.value) / 100) * 2.55;
  spreadValue.textContent = orbitSpreadMultiplier.toFixed(2) + 'x';
}

// Vertical spread: 1.0 = default (circular), slider adds up to +3.0 (max 4.0x)
let orbitSpreadYMultiplier = 1.0;
const vspreadSlider = document.getElementById('vspreadSlider');
const vspreadValue  = document.getElementById('vspreadValue');
if (vspreadSlider && vspreadValue) {
  vspreadSlider.addEventListener('input', function(e) {
    const t = parseFloat(e.target.value) / 100;
    orbitSpreadYMultiplier = 1.0 + t * 3.0;
    vspreadValue.textContent = orbitSpreadYMultiplier.toFixed(2) + 'x';
  });
  orbitSpreadYMultiplier = 1.0 + (parseFloat(vspreadSlider.value) / 100) * 3.0;
  vspreadValue.textContent = orbitSpreadYMultiplier.toFixed(2) + 'x';
}

for (let i = 0; i < centerWordsCount; i++) {
  const temp = document.createElement('span');
  temp.className = `word ${getSizeClass(sorted[i].weight)}`;
  temp.textContent = sorted[i].text;
  temp.style.position = 'absolute';
  cloud.appendChild(temp);
  const rect = temp.getBoundingClientRect();
  cloud.removeChild(temp);
  maxW = Math.max(maxW, rect.width);
  maxH = Math.max(maxH, rect.height);
}

const sharedRadius = Math.max(maxW, maxH) + centerPadding + 40;

for (let i = 0; i < sorted.length; i++) {
  const w = sorted[i];
  const span = document.createElement('span');
  span.className = `word ${getSizeClass(w.weight)} cat-${w.category}`;
  span.textContent = w.text.charAt(0).toUpperCase() + w.text.slice(1);
  span.style.position = 'absolute';
  span.dataset.level = w.level;
  span.dataset.category = w.category;
  span.style.setProperty('color', CAT_COLORS[w.category], 'important');

  cloud.appendChild(span);
  const spanRect = span.getBoundingClientRect();
  cloud.removeChild(span);

  if (i < centerWordsCount) {
    const angle = (i / centerWordsCount) * 2 * Math.PI;
    const x = centerX + sharedRadius * Math.cos(angle);
    const y = centerY + sharedRadius * Math.sin(angle);

    span.style.left = `${x - spanRect.width / 2}px`;
    span.style.top  = `${y - spanRect.height / 2}px`;

    cloud.appendChild(span);
    centerWords.push({ x, y, width: spanRect.width, height: spanRect.height });
    centerWordSpans.push(span);

    placedRects.push({
      left:   x - spanRect.width  / 2,
      right:  x + spanRect.width  / 2,
      top:    y - spanRect.height / 2,
      bottom: y + spanRect.height / 2
    });
  } else {
    cloud.appendChild(span);
    orbitWords.push({ span, spanRect, i });
  }
}

// ── Category filter ──────────────────────────────────────────────────────────
function applyFilter(cat) {
  activeCategory = cat;
  document.querySelectorAll('.word').forEach(function(span) {
    span.style.opacity = (!cat || span.dataset.category === cat) ? '1' : '0.08';
  });
  document.querySelectorAll('.legend-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.cat === (cat || 'all'));
  });
}

// Script runs after DOM is ready (async defer), so wire buttons directly
document.querySelectorAll('.legend-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    applyFilter(btn.dataset.cat === 'all' ? null : btn.dataset.cat);
  });
});
applyFilter(null);

// ── Collision resolution ─────────────────────────────────────────────────────
const PADDING = 20;

function resolveAllCollisions() {
  const all = [
    ...centerWordSpans.map(span => ({ span })),
    ...orbitWords.map(obj  => ({ span: obj.span }))
  ];
  for (let i = 0; i < all.length; i++) {
    for (let j = i + 1; j < all.length; j++) {
      const a = all[i], b = all[j];
      const ax = parseFloat(a.span.style.left) || 0;
      const ay = parseFloat(a.span.style.top)  || 0;
      const aw = a.span.offsetWidth, ah = a.span.offsetHeight;
      const bx = parseFloat(b.span.style.left) || 0;
      const by = parseFloat(b.span.style.top)  || 0;
      const bw = b.span.offsetWidth, bh = b.span.offsetHeight;
      const dx = (ax + aw / 2) - (bx + bw / 2);
      const dy = (ay + ah / 2) - (by + bh / 2);
      const overlapX = (aw + bw) / 2 + PADDING - Math.abs(dx);
      const overlapY = (ah + bh) / 2 + PADDING - Math.abs(dy);
      if (overlapX > 0 && overlapY > 0) {
        if (overlapX < overlapY) {
          const moveX = overlapX / 2 * (dx >= 0 ? 1 : -1);
          a.span.style.left = `${ax + moveX}px`;
          b.span.style.left = `${bx - moveX}px`;
        } else {
          const moveY = overlapY / 2 * (dy >= 0 ? 1 : -1);
          a.span.style.top = `${ay + moveY}px`;
          b.span.style.top = `${by - moveY}px`;
        }
      }
    }
  }
}

// ── Orbit animation ──────────────────────────────────────────────────────────
function animateOrbits() {
  const now = Date.now();
  if (orbitSpeedMultiplier === 0) { requestAnimationFrame(animateOrbits); return; }

  centerWordSpans.forEach((span, i) => {
    const base = centerWords[i];
    const angle = now * (0.00008 + 0.00003 * i) * orbitSpeedMultiplier + (2 * Math.PI * i) / centerWordSpans.length;
    const x = centerX + (6 + 3 * i) * Math.cos(angle);
    const y = centerY + (6 + 3 * i) * Math.sin(angle);
    span.style.left = `${x - base.width  / 2}px`;
    span.style.top  = `${y - base.height / 2}px`;
    centerWords[i].x = x;
    centerWords[i].y = y;
  });

  orbitWords.forEach((obj) => {
    const center = centerWords[obj.i % centerWordsCount];
    const t = (obj.i - centerWordsCount) / (orbitWords.length - 1);
    const baseRadius = 60 + (Math.min(centerX, centerY) * 0.48 - 60) * t + 30;
    const radiusX = baseRadius * orbitSpreadMultiplier;  // horizontal spread
    const radiusY = baseRadius * orbitSpreadYMultiplier; // vertical spread
    const angle = now * (0.0005 + 0.0002 * (obj.i % 5)) * 0.25 * orbitSpeedMultiplier + (2 * Math.PI * (obj.i % 13)) / 13;
    obj.span.style.left = `${center.x + radiusX * Math.cos(angle) - obj.spanRect.width  / 2}px`;
    obj.span.style.top  = `${center.y + radiusY * Math.sin(angle) - obj.spanRect.height / 2}px`;
  });

  for (let i = 0; i < 5; i++) resolveAllCollisions();
  requestAnimationFrame(animateOrbits);
}

animateOrbits();

// ── Censor / Invert toggles ──────────────────────────────────────────────────
window.addEventListener('load', function () {
  var effectOn = true;
  var glyphPool = ['#', '$', '%', '&', '@', '!', '?', '*', '^', '~'];

  function randomGlyph() { return glyphPool[Math.floor(Math.random() * glyphPool.length)]; }

  function obfuscateRandom(str) {
    if (!str || str.length === 0) return str;
    var result = str[0];
    for (var i = 1; i < str.length; i++) {
      // preserve existing asterisks
      result += str[i] === '*' ? '*' : randomGlyph();
    }
    return result;
  }

  function applyEffect() {
    document.querySelectorAll('.word').forEach(function (span) {
      var original = span.dataset.original;
      if (!original) return;
      span.textContent = effectOn ? obfuscateRandom(original) : original;
    });
  }

  document.getElementById('toggleEffect').addEventListener('change', function (e) {
    effectOn = e.target.checked;
    applyEffect();
  });

  document.getElementById('toggleColors').addEventListener('change', function (e) {
    document.body.classList.toggle('inverted', e.target.checked);
  });

  document.querySelectorAll('.word').forEach(function (span) {
    span.dataset.original = span.textContent;
  });
  applyEffect();
});