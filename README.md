# 🪨 Dhandai Marble — Premium Natural Stone DEMO Website 

<div align="center">

![Dhandai Marble](https://img.shields.io/badge/Dhandai-Marble-b8966a?style=for-the-badge&labelColor=1a1a18)
![HTML5](https://img.shields.io/badge/HTML5-Single%20File-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Styled-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)

**A luxury business website for Dhandai Marble — natural stone supplier based in Shahada, Nandurbar, Maharashtra.**

[🌐 View Live](#) · [📞 WhatsApp Business](https://wa.me/91XXXXXXXXXX) · [🗺️ Find on Maps](#)

</div>

---

## ✨ What This Website Does

This is a **complete, single-file business website** for a marble supplier. No frameworks, no backend — just one `.html` file that works everywhere.

| Feature | Description |
|---|---|
| 🏠 **Hero Section** | Full-screen landing with animated marble stone blocks |
| 📦 **Product Collection** | Dynamic marble cards loaded from localStorage |
| 🛠️ **Services** | Custom cutting, bulk supply, home delivery, expert guidance |
| 🏢 **About Section** | Business story, 15+ years experience badge |
| 🖼️ **Gallery** | Project showcase with hover overlays |
| 💬 **Testimonials** | Customer reviews grid |
| 📬 **Contact Form** | WhatsApp-integrated enquiry form |
| 🔐 **Admin Panel** | Password-protected panel to add/edit/remove marble listings |

---

## 🗂️ Project Structure

```
Marble Website/              ← Your project folder
│
├── index.html                 ← Main website (all-in-one file)
├── style.css                  ← (if separate)
├── script.js                  ← (if separate)
├── source code.txt            ← Notes / source reference
├── README.md                  ← This file
│
└── photos/                    ← Your marble & project photos
    ├── marble-white.jpg
    ├── marble-black.jpg
    ├── gallery-1.jpg
    └── ...
```

---

## 🔐 Admin Panel — How to Use

The website has a **built-in admin panel** to manage marble listings without touching code.

### Access the Admin Panel
1. Open the website
2. **Triple-click** the footer logo (or find the hidden admin trigger)
3. Enter the admin password
4. Add, edit, or remove marble cards

### Adding a New Marble
| Field | Example |
|---|---|
| Name | `Italian White Carrara` |
| Description | `Classic white marble with grey veining` |
| Availability | `In Stock — 500 sq ft available` |
| Color Theme | `mp-white / mp-black / mp-green / mp-beige / mp-gray / mp-pink` |
| Image URL | `https://yoursite.com/photos/marble.jpg` or leave blank for CSS texture |

> 🗄️ All marble data is saved in **localStorage** — it stays even after you close the browser.

---

## 📱 Pages & Sections

```
🏠 Home (Hero)
   └─ Animated headline + CTA buttons + floating stone blocks

📊 Stats Bar
   └─ 15+ Years · 200+ Clients · 30+ Varieties · 100% Natural

🪨 Collection (#collection)
   └─ Dynamic grid of marble cards (managed via Admin Panel)

🛠️ Services (#services)
   └─ Custom Cutting · Bulk Supply · Home Delivery · Expert Guidance

🏢 About (#about)
   └─ Business story + features + 15-year badge

🖼️ Gallery (#gallery)
   └─ Project photos grid — Flooring, Countertop, Living Room, Staircase, Bathroom

⭐ Testimonials (#testimonials)
   └─ Ramesh Patil · Suresh Builder · Priya Desai

📬 Contact (#contact)
   └─ WhatsApp-linked form + address + map link
```

---

## 💬 WhatsApp Integration

When a customer fills the contact form or clicks **"Enquire"** on a marble card, the website:

1. Builds a pre-filled WhatsApp message
2. Opens `wa.me/91XXXXXXXXXX?text=...`
3. Customer sends it directly — no email setup needed ✅

To update the phone number, find this line in the HTML:
```javascript
const PHONE = '91XXXXXXXXXX'; // ← Change this to your number
```

---

## 🗺️ Business Info

| Detail | Info | DEMO**
|---|---|
| 📍 Location | Dongergaon Road, Shahada, Nandurbar, Maharashtra |
| 🏭 Est. | Shahada, Nandurbar |
| 📦 Serves | Shahada, Nandurbar & surrounding areas |
| 🪨 Varieties | 30+ types of natural marble |
| 👥 Experience | 15+ years |

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--cream` | `#f5f0e8` | Backgrounds |
| `--gold` | `#b8966a` | Accents, highlights |
| `--dark` | `#1a1a18` | Text, buttons |
| `--text-light` | `#7a7570` | Descriptions |
| Font (Display) | Cormorant Garamond | Headings, logo |
| Font (Body) | Jost | All body text |


---

## 🔧 Common Customisations

**Change business phone number:**
```javascript
const PHONE = '919XXXXXXXXX'; //
```

**Change admin password:**
```javascript
const PASS = 'your pass- marble123'; //
```

**Change Google Maps link:**
```javascript
const MAPS_LINK = 'https://maps.google.com/?q=Dhandai+Marble+Shahada';
```

**Add real photos to gallery:**
Replace `<div class="gallery-placeholder gp-1">` with:
```html
<img src="photos/your-photo.jpg" alt="Project" style="width:100%;height:100%;object-fit:cover;">
```

---

## 📄 License

This website was built by **Pranay Jamdade** the website use name of **Dhandai Marble**, Shahada, Nandurbar.  
All content, business information, and branding belong to Dhandai Marble and Pranay Jamdade.

---

<div align="center">

Made with ❤️ for **ALL OF YOU**
*"Keep supporting me ;)"*

</div>
