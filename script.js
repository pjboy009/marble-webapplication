
  // ── BASIC SETTINGS ──
  const PASS = 'marble123'; // demo password
  const STORAGE_KEY = 'dhandai_marbles';
  const PHONE = '919876543210'; // replace with real client WhatsApp number
  const MAPS_LINK = 'https://www.google.com/maps/search/?api=1&query=Dongergaon+Road+Shahada+Nandurbar+425409';

  const defaultMarbles = [
    { id: 1, name: 'Makrana White', desc: 'Pure white marble with subtle natural veins. Perfect for flooring and wall cladding in living rooms and temples.', qty: '1200 sq ft available', color: 'mp-white', image: '' },
    { id: 2, name: 'Black Galaxy', desc: 'Stunning deep black marble with golden sparkle. Ideal for countertops, feature walls and premium interiors.', qty: '800 sq ft available', color: 'mp-black', image: '' },
    { id: 3, name: 'Rainforest Green', desc: 'Rich green marble with brown and white veins resembling a forest canopy. Unique and eye-catching for statement floors.', qty: '600 sq ft available', color: 'mp-green', image: '' },
    { id: 4, name: 'Jaisalmer Gold', desc: 'Warm golden-beige stone with a smooth finish. Popular for exterior cladding, pathways and traditional homes.', qty: '1500 sq ft available', color: 'mp-beige', image: '' },
    { id: 5, name: 'Silver Grey', desc: 'Elegant grey marble with white streaks. A modern, versatile choice that suits both contemporary and classic designs.', qty: '900 sq ft available', color: 'mp-gray', image: '' },
    { id: 6, name: 'Rosa Pink', desc: 'Soft pink marble with delicate veining. Adds warmth and charm to bedrooms, bathrooms and decorative surfaces.', qty: '400 sq ft available', color: 'mp-pink', image: '' },
  ];

  function escapeHTML(str='') {
    return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[s]));
  }

  function getMarbles() {
    try {
      const d = localStorage.getItem(STORAGE_KEY);
      return d ? JSON.parse(d) : defaultMarbles;
    } catch(e) { return defaultMarbles; }
  }

  function saveMarbles(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch(e) {}
  }

  function marbleVisual(m) {
    if (m.image && m.image.trim()) {
      return `<div class="marble-card-photo-wrap"><img class="marble-card-photo" src="${escapeHTML(m.image)}" alt="${escapeHTML(m.name)}"></div>`;
    }
    return `<div class="marble-placeholder ${escapeHTML(m.color)}"></div>`;
  }

  function modalVisual(m) {
    if (m.image && m.image.trim()) {
      return `<img src="${escapeHTML(m.image)}" alt="${escapeHTML(m.name)}">`;
    }
    return `<div class="marble-placeholder ${escapeHTML(m.color)}" style="height:100%; min-height:280px;"></div>`;
  }

  // ── RENDER COLLECTION ──
  function renderCards() {
    const marbles = getMarbles();
    const grid = document.getElementById('marbleGrid');
    grid.innerHTML = marbles.map(m => `
      <div class="marble-card reveal">
        <button onclick="openProductModal(${m.id})" style="border:0;background:transparent;padding:0;width:100%;cursor:pointer;text-align:left;">
          ${marbleVisual(m)}
        </button>
        <div class="marble-card-body">
          <div class="marble-card-name">${escapeHTML(m.name)}</div>
          <p class="marble-card-desc">${escapeHTML(m.desc)}</p>
          <div class="marble-card-meta">
            <span class="marble-card-qty">${escapeHTML(m.qty)}</span>
            <a href="#contact" class="marble-card-btn" onclick="setRequirement('I am interested in ${escapeHTML(m.name)} marble. ${escapeHTML(m.qty)}')">Enquire →</a>
          </div>
        </div>
      </div>
    `).join('');
    observeReveal();
  }

  // ── PRODUCT DETAIL MODAL ──
  function openProductModal(id) {
    const m = getMarbles().find(x => x.id === id);
    if(!m) return;
    document.getElementById('productModalImage').innerHTML = modalVisual(m);
    document.getElementById('productModalTitle').textContent = m.name;
    document.getElementById('productModalDesc').textContent = m.desc;
    document.getElementById('productModalQty').textContent = m.qty;
    const text = encodeURIComponent(`Hello Dhandai Marble!\n\nI am interested in: ${m.name}\nAvailability: ${m.qty}\nPlease share price, size options and details.`);
    document.getElementById('productWaBtn').href = `https://wa.me/${PHONE}?text=${text}`;
    document.getElementById('productOverlay').classList.add('open');
  }
  function closeProductModal() {
    document.getElementById('productOverlay').classList.remove('open');
  }

  function setRequirement(text) {
    setTimeout(() => {
      const msg = document.getElementById('fmsg');
      if(msg) {
        msg.value = text;
        msg.focus();
      }
    }, 200);
  }

  // ── ADMIN ──
  let loggedIn = false;

  function openAdmin() {
    document.getElementById('adminOverlay').classList.add('open');
    document.getElementById('adminLogin').style.display = loggedIn ? 'none' : 'block';
    document.getElementById('adminPanel').style.display = loggedIn ? 'block' : 'none';
    if(loggedIn) renderAdminList();
  }

  function closeAdmin() {
    document.getElementById('adminOverlay').classList.remove('open');
    document.getElementById('adminPwd').value = '';
    document.getElementById('loginErr').style.display = 'none';
  }

  function doLogin() {
    const pwd = document.getElementById('adminPwd').value;
    if(pwd === PASS) {
      loggedIn = true;
      document.getElementById('adminLogin').style.display = 'none';
      document.getElementById('adminPanel').style.display = 'block';
      document.getElementById('loginErr').style.display = 'none';
      renderAdminList();
    } else {
      document.getElementById('loginErr').style.display = 'block';
    }
  }

  function adminLogout() {
    loggedIn = false;
    closeAdmin();
  }

  function renderAdminList() {
    const marbles = getMarbles();
    const list = document.getElementById('adminCardsList');
    list.innerHTML = marbles.length ? marbles.map(m => `
      <div class="admin-card-item">
        <div>
          <strong>${escapeHTML(m.name)}</strong><br>
          <small style="color:#7a7570;">${escapeHTML(m.qty)}</small>
        </div>
        <div>
          <button onclick="editMarble(${m.id})">Edit</button>
          <button onclick="deleteMarble(${m.id})">✕ Remove</button>
        </div>
      </div>
    `).join('') : '<p style="font-size:0.85rem;color:#7a7570;">No marbles added yet.</p>';
  }

  function saveMarbleFromAdmin() {
    const id = document.getElementById('editingId').value;
    const name = document.getElementById('newName').value.trim();
    const desc = document.getElementById('newDesc').value.trim();
    const qty  = document.getElementById('newQty').value.trim();
    const color= document.getElementById('newColor').value;
    const image= document.getElementById('newImageUrl').value.trim();
    if(!name || !desc || !qty) { alert('Please fill in name, description and quantity.'); return; }

    const marbles = getMarbles();
    if(id) {
      const idx = marbles.findIndex(m => m.id === Number(id));
      if(idx > -1) marbles[idx] = { ...marbles[idx], name, desc, qty, color, image };
    } else {
      const newId = marbles.length ? Math.max(...marbles.map(m=>m.id)) + 1 : 1;
      marbles.push({ id: newId, name, desc, qty, color, image });
    }
    saveMarbles(marbles);
    renderCards();
    renderAdminList();
    clearAdminForm();
  }

  function editMarble(id) {
    const m = getMarbles().find(x => x.id === id);
    if(!m) return;
    document.getElementById('editingId').value = m.id;
    document.getElementById('newName').value = m.name;
    document.getElementById('newDesc').value = m.desc;
    document.getElementById('newQty').value = m.qty;
    document.getElementById('newColor').value = m.color;
    document.getElementById('newImageUrl').value = m.image || '';
    document.getElementById('newName').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function clearAdminForm() {
    document.getElementById('editingId').value = '';
    document.getElementById('newName').value = '';
    document.getElementById('newDesc').value = '';
    document.getElementById('newQty').value = '';
    document.getElementById('newImageUrl').value = '';
    document.getElementById('newColor').value = 'mp-white';
  }

  function deleteMarble(id) {
    if(!confirm('Remove this marble from the listing?')) return;
    let marbles = getMarbles().filter(m => m.id !== id);
    saveMarbles(marbles);
    renderCards();
    renderAdminList();
  }

  // ── CONTACT FORM ──
  function submitForm() {
    const name = document.getElementById('fname').value.trim();
    const phone= document.getElementById('fphone').value.trim();
    const msg  = document.getElementById('fmsg').value.trim();
    const el   = document.getElementById('formMsg');
    if(!name || !phone) {
      el.className = 'form-msg error';
      el.textContent = 'Please enter your name and phone number.';
      return;
    }
    const text = encodeURIComponent(`Hello Dhandai Marble!\n\nName: ${name}\nPhone: ${phone}\nMessage: ${msg || 'I am interested in your marble collection.'}`);
    window.open(`https://wa.me/${PHONE}?text=${text}`, '_blank');
    el.className = 'form-msg success';
    el.textContent = 'Opening WhatsApp to connect with us…';
    document.getElementById('fname').value='';
    document.getElementById('fphone').value='';
    document.getElementById('femail').value='';
    document.getElementById('fmsg').value='';
  }

  // ── NAVBAR SCROLL ──
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  });

  // ── HAMBURGER ──
  document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('open');
    document.getElementById('mobileMenu').classList.toggle('open');
  });
  document.getElementById('mobileClose').addEventListener('click', () => {
    document.getElementById('hamburger').classList.remove('open');
    document.getElementById('mobileMenu').classList.remove('open');
  });
  document.querySelectorAll('.mob-link').forEach(l => l.addEventListener('click', () => {
    document.getElementById('hamburger').classList.remove('open');
    document.getElementById('mobileMenu').classList.remove('open');
  }));

  // ── SCROLL REVEAL ──
  let revealObserver;
  function observeReveal() {
    if(revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }});
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
  }

  // ── EXTRA INTERACTIONS ──
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
      closeAdmin();
      closeProductModal();
    }
  });
  document.getElementById('adminOverlay').addEventListener('click', function(e) {
    if(e.target === this) closeAdmin();
  });
  document.getElementById('productOverlay').addEventListener('click', function(e) {
    if(e.target === this) closeProductModal();
  });

  // Make contact address open map
  document.querySelectorAll('.contact-item')[0].style.cursor = 'pointer';
  document.querySelectorAll('.contact-item')[0].addEventListener('click', () => window.open(MAPS_LINK, '_blank'));

  // ── INIT ──
  renderCards();
  observeReveal();
