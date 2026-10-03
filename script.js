/* EDITABLE CONTENT
   Update this profile object to change the portfolio's name, contact details,
   experience, methods, education and certificates. The cards below use it. */
const portfolio = {
  name: "M. Beer Mohamed",
  brandName: "BEER MOHAMED",
  certificateName: "Beer Mohammed M",
  role: "NDT Multi Technician",
  heroHeadline: ["M. Beer Mohamed"],
  summary: "ASNT Level II across UT, MT, PT and RT. Supporting process piping, fabrication and plant maintenance through practical inspection experience.",
  email: "Riorio8940@gmail.com",
  phone: "+91 73589 87215",
  phoneLink: "+917358987215",
  location: "Tiruchirappalli (Trichy), Tamil Nadu, India",
  languages: ["Tamil", "English", "Hindi"],
  availability: "Open to opportunities in India and the Middle East",
  linkedin: "",
  linkedinLabel: "LinkedIn profile",
  countries: ["India", "UAE", "Kuwait", "Saudi Arabia"],
  education: [
    { title: "Diploma in Mechanical Engineering", place: "Sriperumbudur Institute of Industrial Education · Kanchipuram, Tamil Nadu", result: "First class · April 2020" },
    { title: "SSLC", place: "State Board, Tamil Nadu", result: "March 2016" }
  ],
  taglines: ["NDT Multi Technician", "ASNT Level II Inspector", "Oil & Gas Shutdown Specialist"],
  capabilities: [
    { icon: "◉", title: "Ultrasonic Testing", description: "Flaw detection, thickness measurement, corrosion surveys and weld scanning.", tags: ["UT", "Corrosion survey"] },
    { icon: "⦿", title: "Magnetic Particle", description: "Surface inspection using AC and DC yokes.", tags: ["MT", "AC / DC yoke"] },
    { icon: "⌁", title: "Liquid Penetrant", description: "Colour contrast, fluorescent and solvent-removable penetrant testing.", tags: ["PT", "Surface inspection"] },
    { icon: "▤", title: "Radiographic Testing", description: "ASNT Level II RT qualification for radiographic testing work.", tags: ["RT", "Weld inspection"] }
  ],
  projects: [
    {
      name: "Process piping · Project SATORP",
      client: "SATORP · Saudi Aramco Total Refining and Petrochemical Company",
      employer: "Advanced Inspection Services (AIS)",
      role: "NDT Multi Technician",
      period: "Oct 2025 – Dec 2025",
      scope: "Process piping inspection.",
      tags: ["Saudi Arabia", "Process piping"]
    },
    {
      name: "Clean Fuel-MAA Block Shutdown 2024",
      client: "KNPC · Kuwait Petroleum Corporation subsidiary",
      employer: "Heisco Kuwait",
      role: "NDT Multi Technician",
      period: "Aug 2024 – Mar 2025",
      scope: "Shutdown scope covering Units 183, 283 and 135. Received a Certificate of Appreciation for exceptional performance and dedication.",
      tags: ["Kuwait", "Units 183 · 283 · 135"]
    }
  ],
  roles: [
    { employer: "Advanced Inspection Services (AIS)", project: "Project SATORP", country: "Saudi Arabia", title: "NDT Multi Technician", scope: "Process piping", period: "Oct 2025 – Dec 2025", start: [2025, 10], end: [2025, 12] },
    { employer: "Heisco Kuwait", project: "KNPC Shutdown", country: "Kuwait", title: "NDT Multi Technician", scope: "Shutdown project", period: "Aug 2024 – Mar 2025", start: [2024, 8], end: [2025, 3] },
    { employer: "Al-Masaood Energy", project: "Abu Dhabi", country: "UAE", title: "NDT Multi Technician", scope: "UT, MT, PT and TKY", period: "Jun 2023 – Aug 2023", start: [2023, 6], end: [2023, 8] },
    { employer: "National Inspection Services", project: "", country: "India", title: "NDT Multi Technician", scope: "UT, MT and PT", period: "Jan 2021 – May 2022", start: [2021, 1], end: [2022, 5] },
    { employer: "KGB Inspection Service", project: "Trichy", country: "India", title: "NDT Multi Technician", scope: "UTG, MT and PT", period: "Oct 2019 – Mar 2020", start: [2019, 10], end: [2020, 3] },
    { employer: "Sivaguru Engineering Works", project: "Coimbatore", country: "India", title: "Assistant NDT Technician", scope: "NDT support", period: "Jan 2019 – Jul 2019", start: [2019, 1], end: [2019, 7] }
  ],
  technicalGroups: [
    {
      icon: "⌁",
      title: "Methods",
      summary: "Inspection methods and activities.",
      tags: ["UT flaw detection", "Thickness testing", "Corrosion surveys", "Weld scanning", "MT · AC / DC yokes", "PT · colour contrast", "PT · fluorescent", "PT · solvent-removable", "RT", "Visual inspection", "TKY joint inspection"],
      note: "ASNT Level II · UT, MT, PT and RT"
    },
    {
      icon: "◉",
      title: "Equipment",
      summary: "Inspection equipment used in the field.",
      tags: ["Magnaport", "Magnaflux", "AC and DC yoke", "Solvent-removable PT system", "Modsonic", "Krautkramer USM 35/36", "Sonatest D-50", "Olympus 38DL Plus", "Olympus 45MG"],
      note: "MT · PT · UT flaw detectors · UT thickness gauges"
    },
    {
      icon: "§",
      title: "Codes & reporting",
      summary: "Piping codes, inspection references and supporting activities.",
      tags: ["ASME Section V — NDE", "ASME Section VIII Div. 1 — Boiler and Pressure Vessel", "ASME B31.3 — Process Piping", "ASME B31.1 — Power Piping", "NDT reports", "P&ID interpretation"],
      note: "Refinery and workshop NDT · plant shutdown and maintenance inspection"
    }
  ],
  certificates: [
    { method: "UT", title: "Ultrasonic Testing", number: "UT/204/20", date: "13 Sep 2020", training: "80 training hours", scores: "General 82.5 · Specific 80.0 · Practical 80.0 · Average 80.8" },
    { method: "MT", title: "Magnetic Particle Testing", number: "MT/204/20", date: "21 Sep 2020", training: "25 training hours", scores: "General 80.0 · Specific 80.0 · Practical 85.0 · Average 81.6" },
    { method: "PT", title: "Liquid Penetrant Testing", number: "PT/204/20", date: "26 Sep 2020", training: "25 training hours", scores: "General 85.0 · Specific 80.0 · Practical 85.0 · Average 83.3" },
    { method: "RT", title: "Radiographic Testing", number: "RT/204/20", date: "03 Sep 2020", training: "80 training hours", scores: "General 80.0 · Specific 85.0 · Practical 80.0 · Average 81.6" }
  ],
  recognition: {
    title: "Certificate of Appreciation",
    issuer: "KNPC · Kuwait Petroleum Corporation subsidiary",
    details: "Awarded to Jr NDT Inspector in recognition of exceptional performance and dedication during the Clean Fuel-MAA Block Shutdown 2024 (Units 183, 283 and 135).",
    signed: "Hussain Al-Shammari · Team Leader, I&CD-II-MAA"
  }
};

document.documentElement.classList.add("js-enabled");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const monthsWorked = portfolio.roles.reduce((sum, role) => {
  const start = role.start[0] * 12 + role.start[1];
  const end = role.end[0] * 12 + role.end[1];
  return sum + end - start + 1;
}, 0);
const yearsWorked = (monthsWorked / 12).toFixed(1);

// Render the capability cards with small inline symbols rather than image files.
const capabilitySymbols = [
  '<path d="M2 12h5l2-7 4 14 3-10 2 3h4"/>',
  '<circle cx="12" cy="12" r="8"/><path d="M12 7v10m-5-5h10"/>',
  '<path d="M5 5h14v14H5z"/><path d="M8 15c2-6 6-6 8 0"/>',
  '<path d="M5 4h14v16H5z"/><path d="M8 8h8m-8 4h8m-8 4h5"/>'
];
const capabilityContainer = document.querySelector("#capability-cards");
portfolio.capabilities.forEach((item, index) => {
  const card = document.createElement("article");
  card.className = "capability-card reveal";
  card.innerHTML = `<span class="capability-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${capabilitySymbols[index]}</svg></span><h3>${item.title}</h3><p>${item.description}</p>`;
  capabilityContainer.append(card);
});

// The two feature projects headline the work history; the complete list follows.
const projectContainer = document.querySelector("#project-feature-grid");
portfolio.projects.forEach((project, index) => {
  const card = document.createElement("article");
  card.className = "project-feature reveal";
  card.innerHTML = `<p class="eyebrow">${index === 0 ? "PROJECT EXPERIENCE" : "PROJECT RECOGNITION"} <span>${project.period}</span></p><div><h3>${project.name}</h3><span class="project-client">${project.client}</span><p><strong>${project.role}</strong> · ${project.employer}<br>${project.scope}</p><div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div></div>`;
  projectContainer.append(card);
});
const experienceList = document.querySelector("#experience-list");
portfolio.roles.forEach((role) => {
  const row = document.createElement("article");
  row.className = "experience-item reveal";
  row.innerHTML = `<time class="experience-date">${role.period}</time><div><h3>${role.title}</h3><p>${role.employer}${role.project ? ` · ${role.project}` : ""} · ${role.country}<br>${role.scope}</p></div>`;
  experienceList.append(row);
});

// Group methods, instruments and standards into editable skill cards.
const technicalGrid = document.querySelector("#technical-grid");
portfolio.technicalGroups.forEach((group) => {
  const card = document.createElement("article");
  card.className = "technical-card reveal";
  card.innerHTML = `<div class="technical-card-head"><span aria-hidden="true">${group.icon}</span><h3>${group.title}</h3></div><p>${group.summary}</p><div class="tag-list">${group.tags.map((tag) => `<span>${tag}</span>`).join("")}</div><p class="card-foot">${group.note}</p>`;
  technicalGrid.append(card);
});

// Every certificate displays its number, date, training, exam results and validity.
const certificateGrid = document.querySelector("#certificate-grid");
portfolio.certificates.forEach((certificate) => {
  const card = document.createElement("article");
  card.className = "certificate-card reveal";
  card.innerHTML = `<div class="cert-head"><span class="cert-method">${certificate.method}</span><span class="cert-date">Issued<br>${certificate.date}</span></div><h3>${certificate.title}</h3><p class="cert-number">${certificate.number}</p><span class="cert-status">Renewed · valid to 2030</span><div class="cert-details"><span>ASNT SNT-TC-1A · 2016 edition</span><span>${certificate.training}</span><span>${certificate.scores}</span><span>National Inspection Services, Trichy</span></div>`;
  certificateGrid.append(card);
});

const recognitionPanel = document.querySelector("#recognition-panel");
recognitionPanel.innerHTML = `<span class="recognition-icon" aria-hidden="true">✦</span><div><p class="eyebrow">PROJECT RECOGNITION</p><h3>${portfolio.recognition.title}</h3><p>${portfolio.recognition.issuer}. ${portfolio.recognition.details}</p><p class="recognition-sign">Signed by ${portfolio.recognition.signed}.</p></div>`;

// Use only supplied contact details; the LinkedIn line stays an honest placeholder.
const linkedin = portfolio.linkedin
  ? `<a class="contact-item" href="${portfolio.linkedin}" target="_blank" rel="noreferrer"><span class="contact-symbol" aria-hidden="true">in</span><span><small>LINKEDIN</small><strong>${portfolio.linkedinLabel}</strong></span></a>`
  : `<div class="contact-item"><span class="contact-symbol" aria-hidden="true">in</span><span><small>LINKEDIN</small><strong>${portfolio.linkedinLabel} · placeholder</strong></span></div>`;
document.querySelector("#contact-info").innerHTML = `<p class="contact-intro">${portfolio.availability}. Based in ${portfolio.location}. Languages: ${portfolio.languages.join(", ")}.</p><a class="contact-item" href="mailto:${portfolio.email}"><span class="contact-symbol" aria-hidden="true">✉</span><span><small>EMAIL</small><strong>${portfolio.email}</strong></span></a><a class="contact-item" href="tel:${portfolio.phoneLink}"><span class="contact-symbol" aria-hidden="true">⌕</span><span><small>PHONE</small><strong>${portfolio.phone}</strong></span></a>${linkedin}`;

// Keep the year and honest experience total current from the work-date records.
document.querySelector("#current-year").textContent = new Date().getFullYear();
document.querySelector("#credential-note").textContent = `Certificate name: ${portfolio.certificateName}. Issued by NIS (ISO 9001:2015) through written and practical examinations under NIS procedure WP-001/Rev-03. Each certificate records 2 years of work experience, SSLC education and normal colour vision.`;
document.querySelector("#hero-title").textContent = portfolio.heroHeadline.join(" ");
document.querySelector(".hero-description").textContent = portfolio.summary;
document.querySelectorAll("[data-profile-brand]").forEach((element) => { element.textContent = portfolio.brandName; });
document.querySelector("#portrait-name").textContent = portfolio.name.toUpperCase();
document.querySelector(".portrait-card img").alt = `Portrait of ${portfolio.name}`;
document.querySelector("#hero-contact").innerHTML = `<a href="mailto:${portfolio.email}">${portfolio.email}</a><span aria-hidden="true">|</span><a href="tel:${portfolio.phoneLink}">${portfolio.phone}</a><span aria-hidden="true">|</span><span>${portfolio.location}</span>`;
const diploma = portfolio.education[0];
const school = portfolio.education[1];
document.querySelector("#education-summary").innerHTML = `<span>EDUCATION</span><p>${diploma.title} · ${diploma.result}<i></i> ${school.title} · ${school.place} · ${school.result}</p><small>${diploma.place}</small>`;
document.querySelectorAll("[data-count]").forEach((node, index) => {
  if (index === 3) node.innerHTML = `${yearsWorked}<span> yr</span>`;
});
document.querySelector(".stat-card:not(.stat-card-wide) strong").innerHTML = `${yearsWorked}<span> yr</span>`;
document.title = `${portfolio.name} | ${portfolio.role}`;

// Reveal content when it enters view, and highlight the matching navigation item.
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    observer.unobserve(entry.target);
  });
}, { threshold: .1, rootMargin: "0px 0px -25px 0px" });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const navLinks = [...document.querySelectorAll(".nav-link")];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      const isActive = link.hash === `#${entry.target.id}`;
      link.classList.toggle("active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  });
}, { rootMargin: "-30% 0px -65% 0px" });
document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

let progressPending = false;
window.addEventListener("scroll", () => {
  if (progressPending) return;
  progressPending = true;
  requestAnimationFrame(() => {
    const range = document.documentElement.scrollHeight - window.innerHeight;
    document.querySelector(".scroll-progress span").style.width = `${range > 0 ? window.scrollY / range * 100 : 0}%`;
    progressPending = false;
  });
}, { passive: true });

// Accessible mobile menu: toggle, close after selection, and support Escape.
const menuButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  navMenu.classList.remove("is-open");
}
menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  navMenu.classList.toggle("is-open", isOpen);
});
navMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

// Cycle through the supplied job titles without motion when reduced-motion is on.
if (!reducedMotion) {
  const typedRole = document.querySelector("#typed-role");
  let phraseIndex = 0;
  let letter = portfolio.taglines[0].length;
  let erasing = false;
  function typePhrase() {
    const phrase = portfolio.taglines[phraseIndex];
    typedRole.textContent = phrase.slice(0, letter);
    let delay = erasing ? 35 : 58;
    if (!erasing && letter === phrase.length) {
      erasing = true;
      delay = 1500;
    } else if (erasing && letter === 0) {
      erasing = false;
      phraseIndex = (phraseIndex + 1) % portfolio.taglines.length;
      delay = 330;
    }
    letter += erasing ? -1 : 1;
    window.setTimeout(typePhrase, delay);
  }
  window.setTimeout(typePhrase, 1900);
}

// Netlify receives a regular URL-encoded POST; feedback is announced to assistive tech.
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");
contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  formStatus.textContent = "";
  formStatus.classList.remove("is-error");
  if (!contactForm.reportValidity()) return;
  const submitButton = contactForm.querySelector("[type='submit']");
  submitButton.disabled = true;
  submitButton.textContent = "Sending…";
  try {
    const response = await fetch(window.location.pathname, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(contactForm))
    });
    if (!response.ok) throw new Error(`Form submission returned ${response.status}.`);
    contactForm.reset();
    formStatus.textContent = "Thank you. Your message has been sent.";
  } catch (error) {
    console.error("Contact form submission failed:", error);
    formStatus.textContent = `Message could not be sent. Please email ${portfolio.email}.`;
    formStatus.classList.add("is-error");
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = 'Send enquiry <span aria-hidden="true">→</span>';
  }
});

// Use the pinned Three.js build for a subtle inspection-ring motif. The CSS
// waveform remains visible on devices without WebGL or with reduced motion.
function startInspectionScene() {
  if (reducedMotion || !window.THREE || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)) return;
  const host = document.querySelector(".method-card");
  const canvas = document.createElement("canvas");
  canvas.className = "inspection-canvas";
  canvas.setAttribute("aria-hidden", "true");
  host.prepend(canvas);

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "low-power" });
  } catch (error) {
    console.info("3D inspection motif unavailable; keeping the CSS waveform.", error);
    canvas.remove();
    return;
  }
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, .1, 30);
  camera.position.z = 4.6;
  const assembly = new THREE.Group();
  scene.add(assembly);
  const outer = new THREE.Mesh(
    new THREE.TorusGeometry(.86, .09, 16, 72),
    new THREE.MeshPhysicalMaterial({ color: 0x35bb51, metalness: .36, roughness: .2, clearcoat: 1, clearcoatRoughness: .12 })
  );
  assembly.add(outer);
  const inner = new THREE.Mesh(
    new THREE.TorusGeometry(.63, .018, 8, 72),
    new THREE.MeshBasicMaterial({ color: 0x86ffa0, transparent: true, opacity: .65 })
  );
  assembly.add(inner);
  scene.add(new THREE.HemisphereLight(0xd4ffdd, 0x061208, 1.8));
  const light = new THREE.PointLight(0x4bf16d, 15, 8);
  light.position.set(1.8, 2, 3);
  scene.add(light);
  let visible = true;
  let active = !document.hidden;
  let frame = 0;
  function resize() {
    const bounds = host.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));
    renderer.setSize(bounds.width, bounds.height, false);
    camera.aspect = bounds.width / bounds.height;
    camera.updateProjectionMatrix();
  }
  function render(time) {
    frame = 0;
    if (!visible || !active) return;
    outer.rotation.x += .002;
    outer.rotation.y = Math.sin(time * .0004) * .15;
    inner.rotation.z = time * .00012;
    renderer.render(scene, camera);
    frame = requestAnimationFrame(render);
  }
  function requestRender() {
    if (!frame && visible && active) frame = requestAnimationFrame(render);
  }
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) requestRender();
    else if (frame) {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  });
  observer.observe(host);
  document.addEventListener("visibilitychange", () => {
    active = !document.hidden;
    if (active) requestRender();
    else if (frame) {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  });
  window.addEventListener("resize", resize, { passive: true });
  resize();
  requestRender();
}
startInspectionScene();
