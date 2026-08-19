const ROOT = document.documentElement.dataset.root || "";
const PAGE = document.documentElement.dataset.page || "home";

let currentLang = "en";

function asset(path) {
  return ROOT + path;
}

function renderPubs(target, items) {
  if (!target) return;
  target.innerHTML = items
    .map((p) => {
      const title = p.href
        ? `<a class="title" href="${p.href}" target="_blank" rel="noopener">${p.title}</a>`
        : `<span class="title">${p.title}</span>`;
      const venue = p.href
        ? `<a class="venue" href="${p.href}" target="_blank" rel="noopener">${p.venue}</a>`
        : `<span class="venue">${p.venue}</span>`;
      const badge = p.badge ? `<span class="badge">${p.badge}</span>` : "";
      const note = p.note ? ` · ${p.note}` : "";
      return `<li><div>
        ${title}
        <div class="meta">${p.authors}</div>
        <div class="meta">${venue}${note}${badge}</div>
      </div></li>`;
    })
    .join("");
}

function renderTimeline(target, items) {
  if (!target) return;
  target.innerHTML = items
    .map(
      (e) => `<li>
        <span class="when">${e.when}</span>
        <span class="what">${e.what}</span>
        <div class="where">${e.where}</div>
      </li>`
    )
    .join("");
}

function renderPlain(target, items) {
  if (!target) return;
  target.innerHTML = items.map((t) => `<li>${t}</li>`).join("");
}

function headerHTML(lang) {
  const d = I18N[lang];
  const researchCurrent = DIRECTIONS.some((x) => x.id === PAGE);
  const dirLinks = DIRECTIONS.map(
    (dir) =>
      `<a href="${asset(dir.page)}" data-nav="${dir.id}" class="${PAGE === dir.id ? "is-active" : ""}">${dir.nav[lang]}</a>`
  ).join("");
  return `
    <a class="brand" href="${asset("index.html")}" data-i18n="brand.name">${d["brand.name"]}</a>
    <nav class="nav" id="nav">
      <a href="${asset("index.html")}" class="${PAGE === "home" ? "is-active" : ""}">${d["nav.home"]}</a>
      <div class="nav-group${researchCurrent ? " is-current" : ""}">
        <span class="nav-label">${d["nav.research"]}</span>
        <div class="nav-drop">${dirLinks}</div>
      </div>
      <a href="${asset("papers.html")}" class="${PAGE === "papers" ? "is-active" : ""}">${d["nav.papers"]}</a>
      <a href="${asset("about.html")}" class="${PAGE === "about" ? "is-active" : ""}">${d["nav.about"]}</a>
    </nav>
    <div class="header-actions">
      <button class="lang-toggle" id="langToggle" type="button" aria-label="Switch language">${lang === "zh" ? "EN" : "中文"}</button>
      <button class="menu-toggle" id="menuToggle" type="button" aria-label="Menu">Menu</button>
    </div>`;
}

function bindChrome() {
  const langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => applyLang(currentLang === "zh" ? "en" : "zh"));
  }
  const nav = document.getElementById("nav");
  const menu = document.getElementById("menuToggle");
  if (menu && nav) {
    menu.addEventListener("click", () => nav.classList.toggle("open"));
  }
}

function pageTitle(lang) {
  const name = I18N[lang]["brand.name"];
  if (PAGE === "home") return name;
  if (PAGE === "papers") return `${I18N[lang]["pub.title"]} · ${name}`;
  if (PAGE === "about") return `${I18N[lang]["about.title"]} · ${name}`;
  const dir = DIRECTIONS.find((d) => d.id === PAGE);
  if (dir) return `${dir.nav[lang]} · ${name}`;
  return name;
}

function renderHome(lang) {
  const dict = I18N[lang];
  const selected = document.getElementById("selected-list");
  if (selected) {
    selected.innerHTML = SELECTED.map(
      (p) => `<li><a href="${p.href}" target="_blank" rel="noopener">${p.title}</a><span> · ${p.venue[lang]}</span></li>`
    ).join("");
  }
  const grid = document.getElementById("research-grid");
  if (!grid) return;
  grid.innerHTML = DIRECTIONS.map(
    (d) => `<a class="research-card" href="${asset(d.page)}">
      <h3>${d.title[lang]}</h3>
      <p>${d.body[lang]}</p>
      <span class="card-hint">${dict["research.open"]}</span>
    </a>`
  ).join("");
}

function renderResearch(lang) {
  const article = document.getElementById("article");
  if (!article) return;
  const dict = I18N[lang];
  const d = DIRECTIONS.find((x) => x.id === PAGE);
  if (!d) return;
  const works = d.works
    .map((w) => {
      const name = w.href
        ? `<a href="${w.href}" target="_blank" rel="noopener">${w.name}</a>`
        : w.name;
      return `<li>${name}<span> · ${w.note[lang]}</span></li>`;
    })
    .join("");
  const figs = (d.figures || [])
    .map((f) => {
      const cap = f.caption[lang];
      const img = `<img src="${asset(f.src)}" alt="${cap}" loading="lazy" />`;
      const linked = f.href
        ? `<a href="${f.href}" target="_blank" rel="noopener">${img}</a>`
        : img;
      return `<figure>${linked}<figcaption>${cap}</figcaption></figure>`;
    })
    .join("");
  const code =
    d.code.length === 0
      ? ""
      : `<h2>${dict["research.code"]}</h2>
         <p class="code-links">${d.code
           .map((c) => `<a href="${c.href}" target="_blank" rel="noopener">${c.label}</a>`)
           .join("")}</p>`;
  const story = d.story ? `<p class="story">${d.story[lang]}</p>` : "";
  article.innerHTML = `
    <p class="page-kicker">${dict["research.title"]}</p>
    <h1>${d.title[lang]}</h1>
    <p class="lede">${d.body[lang]}</p>
    <h2>${dict["research.contrib"]}</h2>
    <p>${d.contrib[lang]}</p>
    ${story}
    <h2>${dict["research.works"]}</h2>
    <ul class="work-list">${works}</ul>
    <h2>${dict["research.figures"]}</h2>
    <div class="fig-stack">${figs}</div>
    ${code}`;
}

function applyLang(lang) {
  currentLang = lang;
  const dict = I18N[lang];
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = pageTitle(lang);
  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = headerHTML(lang);
    bindChrome();
  }
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
  });
  const footerName = document.getElementById("footer-name");
  if (footerName) footerName.textContent = dict["brand.name"];
  if (PAGE === "home") renderHome(lang);
  if (DIRECTIONS.some((d) => d.id === PAGE)) renderResearch(lang);
  if (PAGE === "papers") {
    renderPubs(document.getElementById("pubs-review"), PUBS_REVIEW);
    renderPubs(document.getElementById("pubs-published"), PUBS_PUBLISHED);
  }
  if (PAGE === "about") {
    renderTimeline(document.getElementById("edu-list"), EDU[lang]);
    renderPlain(document.getElementById("honor-list"), HONORS[lang]);
    renderPlain(document.getElementById("hobby-list"), HOBBIES[lang]);
  }
  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  applyLang(localStorage.getItem("lang") || "en");
});
