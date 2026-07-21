(() => {
  const c = window.SITE_CONTENT;
  if (!c) return;

  const byId = (id) => document.getElementById(id);
  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  document.title = `${c.displayName} · Mathematics`;
  byId("brand-name").textContent = c.displayName;
  byId("hero-eyebrow").textContent = `${c.institution} · ${c.department}`;
  byId("hero-name").textContent = c.name;
  byId("hero-korean-name").textContent = c.koreanName;
  byId("hero-lead").textContent = c.heroLead;
  byId("hero-note").textContent = c.heroNote;
  byId("footer-name").textContent = c.name;
  byId("year").textContent = new Date().getFullYear();

  byId("hero-actions").innerHTML = c.links.map((link) => {
    const className = `button button-${escapeHtml(link.style || "secondary")}`;
    const external = link.href.startsWith("http");
    return `<a class="${className}" href="${escapeHtml(link.href)}"${external ? ' target="_blank" rel="noreferrer"' : ""}>${escapeHtml(link.label)}${external ? '<span aria-hidden="true">↗</span>' : ""}</a>`;
  }).join("");

  byId("profile-facts").innerHTML = c.facts.map(([label, value]) =>
    `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`
  ).join("");

  byId("about-copy").innerHTML = c.about.map((paragraph) =>
    `<p>${escapeHtml(paragraph)}</p>`
  ).join("");

  byId("interest-grid").innerHTML = c.interests.map((item, index) => `
    <article class="interest-card reveal" style="--delay:${index * 90}ms">
      <span class="interest-symbol" aria-hidden="true">${escapeHtml(item.symbol)}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
    </article>
  `).join("");

  byId("project-list").innerHTML = c.projects.map((project, index) => {
    const activeLink = Boolean(project.linkHref);
    return `
      <article class="project-row reveal" style="--delay:${index * 90}ms">
        <div class="project-index">${String(index + 1).padStart(2, "0")}</div>
        <div class="project-copy">
          <p class="project-eyebrow">${escapeHtml(project.eyebrow)}</p>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
        </div>
        ${activeLink
          ? `<a class="project-link" href="${escapeHtml(project.linkHref)}" target="_blank" rel="noreferrer">${escapeHtml(project.linkLabel)} <span aria-hidden="true">↗</span></a>`
          : `<span class="project-link project-link-muted">${escapeHtml(project.linkLabel)}</span>`}
      </article>`;
  }).join("");

  byId("contact-copy").textContent = c.contactCopy;
  const social = c.socialLinks.map((link) =>
    `<a href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)} <span aria-hidden="true">↗</span></a>`
  ).join("");

  byId("contact-card").innerHTML = `
    <p class="contact-label">Email</p>
    <p class="contact-email">${escapeHtml(c.emailDisplay)}</p>
    <div class="contact-links">${social}</div>
  `;

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }));

  const themeToggle = document.querySelector(".theme-toggle");
  const savedTheme = localStorage.getItem("pooha-theme");
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;
  themeToggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("pooha-theme", next);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();
