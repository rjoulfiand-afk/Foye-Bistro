/**
 * FOYE BISTRO — INTERACTION & RENDER LOGIC
 * Vanilla JS bersih tanpa library tambahan, siap dipindah ke resources/js/app.js di Laravel.
 */

document.addEventListener("DOMContentLoaded", () => {
  initRestaurantInfo();
  initWhatsAppLinks();
  initMenuTabs();
  renderSignatureMenu("all");
  renderSpaces();
  renderFullMenuDrawer();
  initDrawerEvents();
});

/* =========================================================
   1. HYDRATE STATIC RESTAURANT INFO
   ========================================================= */
function initRestaurantInfo() {
  const { restaurant } = FOYE_DATA;

  const heroImg = document.getElementById("hero-image");
  if (heroImg) heroImg.src = restaurant.heroImage;

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setText("info-hours", restaurant.hours);
  setText("info-address", restaurant.locationShort);
  setText("loc-address", restaurant.locationFull);
  setText("loc-hours", restaurant.hours);

  const mapsBtn = document.getElementById("loc-maps-btn");
  if (mapsBtn) mapsBtn.href = restaurant.googleMapsUrl;

  const igBtn = document.getElementById("loc-ig-btn");
  if (igBtn) igBtn.href = restaurant.instagramUrl;
}

/* =========================================================
   2. CONTEXTUAL WHATSAPP LINKS
   ========================================================= */
function buildWhatsAppUrl(type = "general") {
  const { whatsappNumber, waMessages } = FOYE_DATA.restaurant;
  const message = waMessages[type] || waMessages.general;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function initWhatsAppLinks() {
  document.querySelectorAll("[data-wa]").forEach((el) => {
    const type = el.getAttribute("data-wa");
    el.setAttribute("href", buildWhatsAppUrl(type));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });
}

/* =========================================================
   3. CURATED MENU TABS & CARDS
   ========================================================= */
let activeCategory = "all";

function initMenuTabs() {
  const tabsContainer = document.getElementById("menu-tabs");
  if (!tabsContainer) return;

  tabsContainer.innerHTML = FOYE_DATA.categories
    .map((cat) => {
      const isActive = cat.id === activeCategory;
      return `
        <button
          type="button"
          role="tab"
          aria-selected="${isActive}"
          data-category="${cat.id}"
          class="menu-tab px-4 py-2 text-xs sm:text-sm font-medium rounded-sm transition-colors ${
            isActive
              ? "bg-foye-teal text-foye-paper"
              : "bg-transparent text-foye-ink/70 hover:text-foye-teal border border-foye-ink/15"
          }"
        >
          ${cat.label}
        </button>
      `;
    })
    .join("");

  tabsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".menu-tab");
    if (!btn) return;

    activeCategory = btn.dataset.category;
    updateTabStyles();
    renderSignatureMenu(activeCategory);
  });
}

function updateTabStyles() {
  document.querySelectorAll(".menu-tab").forEach((btn) => {
    const isActive = btn.dataset.category === activeCategory;
    btn.setAttribute("aria-selected", isActive);
    btn.className = `menu-tab px-4 py-2 text-xs sm:text-sm font-medium rounded-sm transition-colors ${
      isActive
        ? "bg-foye-teal text-foye-paper"
        : "bg-transparent text-foye-ink/70 hover:text-foye-teal border border-foye-ink/15"
    }`;
  });
}

function renderSignatureMenu(category) {
  const grid = document.getElementById("menu-grid");
  if (!grid) return;

  const items =
    category === "all"
      ? FOYE_DATA.signatureMenus
      : FOYE_DATA.signatureMenus.filter((item) => item.category === category);

  grid.innerHTML = items
    .map(
      (item, index) => `
      <article class="group menu-card-animate" style="animation-delay: ${index * 45}ms">
        <div class="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-foye-surface">
          <img
            src="${item.image}"
            alt="${item.name}"
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          ${
            item.is_signature
              ? `<span class="absolute top-3 left-3 bg-foye-red text-white text-[10px] font-semibold uppercase tracking-[0.16em] px-2.5 py-1 rounded-[2px]">
                  Chef's Pick
                </span>`
              : ""
          }
        </div>

        <div class="pt-4">
          <div class="flex items-baseline justify-between gap-4">
            <h3 class="font-serif text-2xl font-semibold text-foye-ink leading-snug group-hover:text-foye-teal transition-colors">
              ${item.name}
            </h3>
            <span class="price-num text-sm font-semibold text-foye-teal shrink-0">
              ${item.price}
            </span>
          </div>
          <p class="mt-1.5 text-xs sm:text-sm text-foye-ink/70 leading-relaxed line-clamp-2">
            ${item.description}
          </p>
        </div>
      </article>
    `
    )
    .join("");
}

/* =========================================================
   4. SPACES & VIP ROOM CARDS
   ========================================================= */
function renderSpaces() {
  const grid = document.getElementById("spaces-grid");
  if (!grid) return;

  grid.innerHTML = FOYE_DATA.spaces
    .map(
      (space) => `
      <article class="min-w-[82vw] sm:min-w-[340px] md:min-w-0 snap-center flex flex-col bg-foye-teal-dark/50 border ${
        space.highlight ? "border-foye-red/70" : "border-foye-paper/15"
      } rounded-sm overflow-hidden">
        <div class="relative aspect-[4/3] w-full overflow-hidden bg-foye-teal-dark">
          <img
            src="${space.image}"
            alt="${space.name}"
            loading="lazy"
            class="w-full h-full object-cover"
          />
          <span class="absolute bottom-3 left-3 bg-foye-ink/80 backdrop-blur-xs text-foye-paper text-[10px] uppercase tracking-[0.16em] px-2.5 py-1 rounded-[2px]">
            ${space.capacity}
          </span>
        </div>

        <div class="p-6 flex flex-col flex-1">
          <p class="text-[10px] uppercase tracking-[0.2em] ${
            space.highlight ? "text-foye-paper font-semibold" : "text-foye-paper/60"
          } mb-1.5">
            ${space.tag}
          </p>
          <h3 class="font-serif text-2xl font-medium text-white">${space.name}</h3>
          <p class="mt-2.5 text-xs sm:text-sm text-foye-paper/75 leading-relaxed flex-1">
            ${space.description}
          </p>
        </div>
      </article>
    `
    )
    .join("");
}

/* =========================================================
   5. SLIDE-OVER FULL MENU DRAWER
   ========================================================= */
function renderFullMenuDrawer() {
  const container = document.getElementById("full-menu-content");
  if (!container) return;

  container.innerHTML = FOYE_DATA.fullMenuList
    .map(
      (group) => `
      <div>
        <h4 class="font-serif text-2xl font-semibold text-foye-teal pb-2 border-b border-foye-ink/15">
          ${group.section}
        </h4>
        <ul class="mt-4 space-y-4">
          ${group.items
            .map(
              (item) => `
            <li class="flex items-baseline justify-between gap-4">
              <div>
                <p class="text-sm font-semibold text-foye-ink">${item.name}</p>
                <p class="text-xs text-foye-ink/60 mt-0.5">${item.desc}</p>
              </div>
              <span class="price-num text-sm font-semibold text-foye-teal shrink-0">${item.price}</span>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
    `
    )
    .join("");
}

function initDrawerEvents() {
  const drawer = document.getElementById("menu-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  const panel = document.getElementById("drawer-panel");
  const openBtn = document.getElementById("open-full-menu-btn");
  const closeBtn = document.getElementById("close-drawer-btn");

  if (!drawer || !openBtn) return;

  const openDrawer = () => {
    drawer.classList.remove("hidden");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    // Trigger CSS transition on next frame
    requestAnimationFrame(() => {
      backdrop.classList.remove("opacity-0");
      panel.classList.remove("translate-x-full");
    });
  };

  const closeDrawer = () => {
    backdrop.classList.add("opacity-0");
    panel.classList.add("translate-x-full");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setTimeout(() => {
      drawer.classList.add("hidden");
    }, 300);
  };

  openBtn.addEventListener("click", openDrawer);
  closeBtn.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !drawer.classList.contains("hidden")) {
      closeDrawer();
    }
  });
}