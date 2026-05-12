/* =========================================
   SHREEDHA TECHNOLOGIES - MAIN JAVASCRIPT
   ========================================= */

const ICONS = {
  security: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><rect x="9" y="11" width="6" height="5" rx="1"/><path d="M12 11V9a2 2 0 1 1 4 0v2"/></svg>`,
  network: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/><line x1="10" y1="6" x2="10.01" y2="6"/><line x1="10" y1="18" x2="10.01" y2="18"/></svg>`,
  billing: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>`,
  hardware: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>`,
  led: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  av: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
  ac: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v4"/><path d="M15 20H22"/><path d="M15 16H22"/><path d="M8 16H11"/><path d="M8 12H15"/><path d="M18 12V22"/><path d="M18 5V9"/></svg>`,
  isp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`,
  cctv: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  access: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  compliance: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  audit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  tax: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  payroll: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  brand: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.5 1.5"/><path d="M7 11c.1-1.2.4-2.1.5-2"/><path d="M11 7c1.2-.1 2.1-.4 2-.5"/></svg>`
};

const TECH_SERVICES = [
  { cat: "DIGITAL DEFENSE", icon: ICONS.security, title: "Cyber Security", desc: "Enterprise-grade protection strategies to safeguard your critical data and network assets.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
  { cat: "CONNECTIVITY", icon: ICONS.network, title: "Networking / Security", desc: "High-performance network design with integrated security for seamless business continuity.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800" },
  { cat: "RETAIL TECH", icon: ICONS.billing, title: "Billing Solutions", desc: "Intelligent POS hardware and software ecosystems tailored for modern commerce.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" },
  { cat: "COMPUTING", icon: ICONS.hardware, title: "Computer Hardware", desc: "Quality accessories and high-performance components for every business scale.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
  { cat: "DIGITAL SIGNAGE", icon: ICONS.led, title: "LED Sign Boards", desc: "Modern digital signage that captures attention and elevates your brand's physical presence.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" },
  { cat: "COLLABORATION", icon: ICONS.av, title: "AV Solutions", desc: "State-of-the-art meeting room setups optimized for global collaboration.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" },
  { cat: "ENVIRONMENTAL", icon: ICONS.ac, title: "Air Conditioners", desc: "Cooling solutions designed specifically for critical data rooms and corporate offices.", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" },
  { cat: "INTERNET", icon: ICONS.isp, title: "Internet Service (ISP)", desc: "High-speed, dedicated fiber connectivity ensuring your business is always online.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
  { cat: "SURVEILLANCE", icon: ICONS.cctv, title: "CCTV & Surveillance", desc: "Advanced video monitoring and recording systems for comprehensive site security.", img: "https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=80&w=800" }
];

const COMPLIANCE_SERVICES = [
  { cat: "LEGAL", icon: ICONS.compliance, title: "Statutory Compliance", desc: "End-to-end management of industrial legal obligations and regulatory standards.", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" },
  { cat: "ESTABLISHMENT", icon: ICONS.compliance, title: "Establishment Compliance", desc: "Adherence support for commercial offices, shops, and establishment regulations.", img: "https://images.unsplash.com/photo-1423592707957-3b212afa6733?auto=format&fit=crop&q=80&w=800" },
  { cat: "FINANCE", icon: ICONS.audit, title: "Audit and Taxation", desc: "Professional auditing and strategic tax consultations to optimize your business finances.", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" },
  { cat: "TAXATION", icon: ICONS.tax, title: "GST Services", desc: "Seamless registration and periodic filing management for effortless tax compliance.", img: "https://images.unsplash.com/photo-1554224155-1696413575b3?auto=format&fit=crop&q=80&w=800" },
  { cat: "HUMAN RESOURCES", icon: ICONS.payroll, title: "Payroll Services", desc: "Accurate payroll processing and management of employee-related benefits.", img: "https://images.unsplash.com/photo-1454165833767-02a698d58745?auto=format&fit=crop&q=80&w=800" },
  { cat: "STRATEGY", icon: ICONS.brand, title: "Branding Solutions", desc: "Creative brand strategy and identity design to help your business lead the market.", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" }
];

// ── RENDER CARDS ──────────────────────────────────────────────────────────────
function renderServices() {
  const techGrid = document.getElementById("techGrid");
  const compGrid = document.getElementById("complianceGrid");

  TECH_SERVICES.forEach((s, i) => {
    try {
      if (!techGrid) return;
      const card = document.createElement("div");
      card.className = "service-card";
      card.setAttribute("data-aos", "fade-up");
      card.style.transitionDelay = `${i * 0.06}s`;
      card.innerHTML = `
        <div class="card-img-wrap">
          <img src="${s.img}" alt="${s.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'" />
          <div class="card-img-overlay"></div>
          <div class="card-icon-overlay">${s.icon}</div>
        </div>
        <div class="card-body">
          <span class="card-cat">${s.cat}</span>
          <h3 class="service-title">${s.title}</h3>
          <p class="service-desc">${s.desc}</p>
        </div>`;
      techGrid.appendChild(card);
    } catch (e) { console.error("Error creating tech card:", e); }
  });

  COMPLIANCE_SERVICES.forEach((s, i) => {
    try {
      if (!compGrid) return;
      const card = document.createElement("div");
      card.className = "service-card";
      card.setAttribute("data-aos", "fade-up");
      card.style.transitionDelay = `${i * 0.06}s`;
      card.innerHTML = `
        <div class="card-img-wrap">
          <img src="${s.img}" alt="${s.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'" />
          <div class="card-img-overlay"></div>
          <div class="card-icon-overlay">${s.icon}</div>
        </div>
        <div class="card-body">
          <span class="card-cat">${s.cat}</span>
          <h3 class="service-title">${s.title}</h3>
          <p class="service-desc">${s.desc}</p>
        </div>`;
      compGrid.appendChild(card);
    } catch (e) { console.error("Error creating compliance card:", e); }
  });
}

// ── NAVBAR ────────────────────────────────────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    let current = "";
    sections.forEach(sec => { if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute("id"); });
    document.querySelectorAll(".nav-link").forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  }, { passive: true });
}

// ── HAMBURGER ─────────────────────────────────────────────────────────────────
function initHamburger() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  hamburger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    const spans = hamburger.querySelectorAll("span");
    if (open) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
      spans.forEach(s => { s.style.transform = ""; s.style.opacity = ""; });
    }
  });
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.querySelectorAll("span").forEach(s => { s.style.transform = ""; s.style.opacity = ""; });
    });
  });
}

// ── COUNTER ───────────────────────────────────────────────────────────────────
function initCounters() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        let start = 0;
        const step = target / (1800 / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { entry.target.textContent = target; clearInterval(timer); }
          else entry.target.textContent = Math.floor(start);
        }, 16);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".stat-number[data-target]").forEach(el => observer.observe(el));
}

// ── AOS ───────────────────────────────────────────────────────────────────────
function initAOS() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseFloat(entry.target.style.transitionDelay || "0") * 1000;
        setTimeout(() => entry.target.classList.add("aos-animate"), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  document.querySelectorAll("[data-aos]").forEach(el => observer.observe(el));
}

// ── SMOOTH SCROLL ─────────────────────────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) { e.preventDefault(); window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" }); }
    });
  });
}

// ── CONTACT FORM (EmailJS Integration) ────────────────────────────────────────
function initContactForm() {
  // Initialize EmailJS with Public Key
  if (typeof emailjs !== 'undefined') {
    emailjs.init("7LawkLDsDb6qn7DAP");
  }

  const form = document.getElementById("contactForm");
  const successEl = document.getElementById("formSuccess");
  const submitBtn = document.getElementById("submitBtn");
  if (!form) return;

  form.addEventListener("submit", async e => {
    e.preventDefault();

    // Disable button & show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending...</span> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:spin 1s linear infinite"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`;

    // Collect form data
    const templateParams = {
      from_name:  document.getElementById("name")?.value    || "",
      from_email: document.getElementById("email")?.value   || "",
      phone:      document.getElementById("phone")?.value   || "Not provided",
      service:    document.getElementById("service")?.value || "General Inquiry",
      message:    document.getElementById("message")?.value || "",
    };

    try {
      if (typeof emailjs === 'undefined') {
        throw new Error("Email service is currently unavailable.");
      }
      await emailjs.send("service_7ve6xhq", "template_ij0osqr", templateParams);

      // ✅ SUCCESS — Show success UI
      form.style.transition = "opacity 0.4s ease";
      form.style.opacity = "0";
      setTimeout(() => {
        form.style.display = "none";
        successEl.style.display = "flex";
        successEl.style.flexDirection = "column";
        successEl.style.alignItems = "center";
        successEl.style.opacity = "0";
        successEl.innerHTML = `
          <div class="success-icon">✓</div>
          <h3 style="font-size:1.5rem;font-weight:800;color:var(--text);margin-bottom:0.75rem;">Message Sent!</h3>
          <p style="color:var(--text-muted);margin-bottom:2rem;text-align:center;">Thank you! Our team will get back to you within 24 hours.</p>
          <button onclick="location.reload()" class="btn btn-outline" style="cursor:pointer;">Send Another Message</button>
        `;
        setTimeout(() => { successEl.style.transition = "opacity 0.5s ease"; successEl.style.opacity = "1"; }, 50);
      }, 400);

    } catch (error) {
      // ❌ ERROR — Show error message
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>Send Inquiry</span>`;
      
      // Show error toast
      const toast = document.createElement("div");
      toast.style.cssText = `
        position:fixed; bottom:2rem; right:2rem; z-index:9999;
        background:#BE123C; color:white; padding:1rem 1.5rem;
        border-radius:10px; font-weight:600; font-size:0.9rem;
        box-shadow:0 10px 30px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease;
      `;
      toast.textContent = "❌ Failed to send. Please try again or call us directly.";
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 5000);
    }
  });
}

// ── CARD TILT ─────────────────────────────────────────────────────────────────
function initCardTilt() {
  document.querySelectorAll(".service-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left, y = e.clientY - rect.top;
      card.style.transform = `translateY(-8px) perspective(1000px) rotateX(${((y - rect.height/2)/rect.height)*-5}deg) rotateY(${((x - rect.width/2)/rect.width)*5}deg)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });
}

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  try { renderServices(); } catch (e) { console.error("Error rendering services:", e); }
  try { initNavbar(); } catch (e) { console.error("Error initializing navbar:", e); }
  try { initHamburger(); } catch (e) { console.error("Error initializing hamburger:", e); }
  try { initSmoothScroll(); } catch (e) { console.error("Error initializing smooth scroll:", e); }
  try { initContactForm(); } catch (e) { console.error("Error initializing contact form:", e); }
  
  requestAnimationFrame(() => {
    try { initAOS(); } catch (e) { console.error("Error initializing AOS:", e); }
    try { initCounters(); } catch (e) { console.error("Error initializing counters:", e); }
    try { setTimeout(initCardTilt, 300); } catch (e) { console.error("Error initializing card tilt:", e); }
  });
});
