/* =============================================================================
   app.js — HIMU TECHNOLOGIES INC.
   -----------------------------------------------------------------------------
   You do not need to edit this file. It reads everything from content.js and
   builds the page. If content.js is updated, this file adapts automatically:
   add an engagement and it appears, remove a service and the grid re-flows.

   No frameworks, no build step, no dependencies, no analytics, no cookies.

   Contents
     1.  Small helpers
     2.  Content access (safe lookups)
     3.  Theme (light / dark / system)
     4.  Navigation, mobile menu, scroll spy, progress bar
     5.  Hero (text, proof points, portrait with monogram fallback)
     6.  Section headings
     7.  Executive impact
     8.  Services
     9.  Engagements and filtering
     10. Full career history — resume download band
     11. Testimonials (carousel or LinkedIn invitation)
     12. About and credentials
     13. Contact
     14. Footer
     15. Resume download (local, private counting)
     16. Back to top, print, scroll reveal
     17. Start
   ========================================================================== */

(function () {
  "use strict";

  /* ==========================================================================
     1. SMALL HELPERS
     ====================================================================== */
  var $  = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var prefersReducedMotion = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  /* Create an element with attributes and children in one call. */
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        var value = attrs[key];
        if (value === null || value === undefined || value === false) { return; }
        if (key === "class") { node.className = value; }
        else if (key === "text") { node.textContent = value; }
        else if (key === "html") { node.innerHTML = value; }
        else if (key === "dataset") {
          Object.keys(value).forEach(function (d) { node.dataset[d] = value[d]; });
        }
        else if (key.indexOf("on") === 0 && typeof value === "function") {
          node.addEventListener(key.slice(2).toLowerCase(), value);
        }
        else { node.setAttribute(key, value === true ? "" : value); }
      });
    }
    (children || []).forEach(function (child) {
      if (child === null || child === undefined || child === false) { return; }
      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    });
    return node;
  }

  /* Build an <svg><use href="#i-name"></use></svg> icon reference. */
  function icon(name, className) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", className || "icon");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    var use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", "#i-" + name);
    svg.appendChild(use);
    return svg;
  }

  /* Everything from content.js is inserted as plain text, never as markup.
     A stray "<" in an engagement description can never become an element. */
  function asText(text) {
    return document.createTextNode(String(text === undefined || text === null ? "" : text));
  }

  function setText(node, text) {
    if (!node) { return; }
    node.textContent = String(text === undefined || text === null ? "" : text);
  }

  function announce(message) {
    var region = $("#live-region");
    if (region) { region.textContent = message; }
  }

  /* localStorage is wrapped because it throws in private windows and when a
     visitor has blocked site data. The site must work either way. */
  var store = {
    get: function (key) { try { return window.localStorage.getItem(key); } catch (e) { return null; } },
    set: function (key, value) { try { window.localStorage.setItem(key, value); } catch (e) { /* ignore */ } }
  };

  /* ==========================================================================
     2. CONTENT ACCESS
     ====================================================================== */
  var C = window.SITE_CONTENT || {};

  /* Reads "identity.fullName" style paths without throwing if a key is absent,
     so a partially edited content.js degrades gracefully instead of blanking
     the whole page. */
  function get(path, fallback) {
    var parts = String(path).split(".");
    var value = C;
    for (var i = 0; i < parts.length; i++) {
      if (value === null || value === undefined) { return fallback; }
      value = value[parts[i]];
    }
    return (value === undefined || value === null) ? fallback : value;
  }

  function list(path) {
    var value = get(path, []);
    return Array.isArray(value) ? value : [];
  }

  /* Fill every element carrying data-content="some.path" */
  function bindContentAttributes() {
    $$("[data-content]").forEach(function (node) {
      var value = get(node.getAttribute("data-content"), "");
      if (value !== "") { setText(node, value); }
    });
  }

  /* ==========================================================================
     3. THEME
     ====================================================================== */
  var THEME_KEY = "himu-theme";

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function currentThemeIsDark() {
    var chosen = document.documentElement.getAttribute("data-theme");
    if (chosen === "dark") { return true; }
    if (chosen === "light") { return false; }
    return systemPrefersDark();
  }

  function syncThemeButton() {
    var button = $("#theme-toggle");
    if (!button) { return; }
    var dark = currentThemeIsDark();
    button.setAttribute("aria-pressed", dark ? "true" : "false");
    button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    button.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
  }

  function initTheme() {
    var saved = store.get(THEME_KEY);
    if (saved === "dark" || saved === "light") {
      document.documentElement.setAttribute("data-theme", saved);
    }
    syncThemeButton();

    var button = $("#theme-toggle");
    if (button) {
      button.addEventListener("click", function () {
        var next = currentThemeIsDark() ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        store.set(THEME_KEY, next);
        syncThemeButton();
        announce(next === "dark" ? "Dark mode enabled" : "Light mode enabled");
      });
    }

    /* If the visitor has never chosen, follow their system when it changes. */
    if (window.matchMedia) {
      var media = window.matchMedia("(prefers-color-scheme: dark)");
      var onChange = function () {
        if (!store.get(THEME_KEY)) { syncThemeButton(); }
      };
      if (media.addEventListener) { media.addEventListener("change", onChange); }
      else if (media.addListener) { media.addListener(onChange); }
    }
  }

  /* ==========================================================================
     4. NAVIGATION
     ====================================================================== */
  function buildNavigation() {
    var items = list("navigation");
    var navList = $("#nav-list");
    var footerList = $("#footer-nav-list");

    if (navList) {
      navList.textContent = "";
      items.forEach(function (item) {
        navList.appendChild(el("li", null, [
          el("a", { href: "#" + item.id, "data-nav": item.id, text: item.label })
        ]));
      });
    }

    if (footerList) {
      footerList.textContent = "";
      items.forEach(function (item) {
        footerList.appendChild(el("li", null, [
          el("a", { href: "#" + item.id, text: item.label })
        ]));
      });
      var linkedIn = get("contact.linkedIn", "");
      if (linkedIn) {
        var li = el("li");
        var a = el("a", { href: linkedIn, target: "_blank", rel: "noopener noreferrer" });
        a.appendChild(icon("linkedin"));
        a.appendChild(document.createTextNode("LinkedIn"));
        li.appendChild(a);
        footerList.appendChild(li);
      }
      var resume = get("contact.resumeFile", "");
      if (resume) {
        var li2 = el("li");
        var a2 = el("a", { href: resume, download: true, "data-resume-link": "footer" });
        a2.appendChild(icon("download"));
        a2.appendChild(document.createTextNode("Resume"));
        li2.appendChild(a2);
        footerList.appendChild(li2);
      }
    }
  }

  function initMobileNav() {
    var toggle = $("#nav-toggle");
    var nav = $("#site-nav");
    if (!toggle || !nav) { return; }

    function close() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) { close(); }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        close();
        toggle.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) { close(); }
    });
  }

  function initScrollEffects() {
    var header = $("#site-header");
    var progress = $("#scroll-progress span");
    var backToTop = $("#back-to-top");
    var ticking = false;

    function update() {
      var y = window.scrollY || document.documentElement.scrollTop;
      if (header) { header.classList.toggle("is-stuck", y > 8); }
      if (progress) {
        var max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + "%";
      }
      if (backToTop) { backToTop.hidden = y < 600; }
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });

    update();
  }

  function initScrollSpy() {
    var links = $$("[data-nav]");
    if (!links.length || !("IntersectionObserver" in window)) { return; }

    var map = {};
    links.forEach(function (link) { map[link.getAttribute("data-nav")] = link; });

    /* Sections that have no nav link of their own report under a neighbour:
       the impact strip belongs to "home", the resume band to "experience",
       and the credentials block to "about". */
    var sectionIds = Object.keys(map).concat(["impact", "resume-band", "credentials"]);
    var visible = {};

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        visible[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
      });

      var bestId = null;
      var bestRatio = 0;
      Object.keys(visible).forEach(function (id) {
        if (visible[id] > bestRatio) { bestRatio = visible[id]; bestId = id; }
      });

      if (bestId === "impact") { bestId = "home"; }
      if (bestId === "resume-band") { bestId = "experience"; }
      if (bestId === "credentials") { bestId = "about"; }

      links.forEach(function (link) {
        var active = link.getAttribute("data-nav") === bestId;
        link.classList.toggle("is-active", active);
        if (active) { link.setAttribute("aria-current", "true"); }
        else { link.removeAttribute("aria-current"); }
      });
    }, { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.15, 0.4, 0.75] });

    sectionIds.forEach(function (id) {
      var section = document.getElementById(id);
      if (section) { observer.observe(section); }
    });
  }

  /* ==========================================================================
     5. HERO
     ====================================================================== */
  function buildHero() {
    var proof = $("#hero-proof");
    if (proof) {
      proof.textContent = "";
      list("identity.heroProof").forEach(function (line) {
        proof.appendChild(el("li", { text: line }));
      });
    }

    /* Monogram everywhere the brand mark appears */
    var monogram = get("identity.monogram", "MK");
    $$(".brand-mark").forEach(function (node) { node.textContent = monogram; });
    var portraitMonogram = $("#portrait-monogram");
    if (portraitMonogram) { portraitMonogram.textContent = monogram; }

    /* Load the photograph only if it actually exists. If it is missing or
       fails to load, the monogram simply stays — no broken image icon. */
    var src = get("identity.headshot", "");
    var portrait = $("#portrait");
    if (src && portrait) {
      var probe = new Image();
      probe.onload = function () {
        var img = el("img", {
          src: src,
          alt: get("identity.headshotAlt", "Professional headshot"),
          width: probe.naturalWidth || 600,
          height: probe.naturalHeight || 600,
          loading: "eager",
          decoding: "async"
        });
        portrait.textContent = "";
        portrait.appendChild(img);
      };
      probe.onerror = function () { /* keep the monogram */ };
      probe.src = src;
    }
  }

  /* ==========================================================================
     6. SECTION HEADINGS
     ====================================================================== */
  function buildSectionHeads() {
    $$("[data-section]").forEach(function (head) {
      var key = head.getAttribute("data-section");
      var data = get("sections." + key, null);
      if (!data) { return; }
      var eyebrow = $(".eyebrow", head);
      var heading = head.querySelector("h2, h3");
      var intro = $(".section-intro", head);
      if (eyebrow && data.eyebrow) { eyebrow.appendChild(document.createTextNode(data.eyebrow)); }
      if (heading && data.heading) { setText(heading, data.heading); }
      if (intro) {
        if (data.intro) { setText(intro, data.intro); }
        else { intro.remove(); }
      }
    });
  }

  /* ==========================================================================
     7. EXECUTIVE IMPACT
     ====================================================================== */
  function buildImpact() {
    var grid = $("#impact-grid");
    if (!grid) { return; }
    grid.textContent = "";

    var items = list("impact");

    /* The row fills exactly, whether there are two, three or four indicators,
       so the hairline slab never shows an empty cell. */
    grid.style.setProperty("--impact-count", String(Math.max(items.length, 1)));

    items.forEach(function (item) {
      var context = el("p", { class: "impact-context" });
      setText(context, item.context || "");

      var value = String(item.value || "");
      /* A short figure ("22+") gets the display size; a phrase
         ("Enterprise-scale") steps down so it stays on one or two lines. */
      var valueClass = "impact-value" + (value.length > 7 ? " is-phrase" : "");

      grid.appendChild(el("div", { class: "impact-item", "data-reveal": true }, [
        item.unit ? el("span", { class: "impact-unit", text: item.unit }) : null,
        el("span", { class: valueClass, text: value }),
        el("span", { class: "impact-label", text: item.label || "" }),
        context
      ]));
    });
  }

  /* ==========================================================================
     8. SERVICES
     ====================================================================== */
  var KNOWN_ICONS = ["transformation", "ai", "data", "shield", "markets", "platform", "governance", "change"];

  function buildServices() {
    var grid = $("#service-grid");
    if (!grid) { return; }
    grid.textContent = "";

    list("services").forEach(function (service) {
      var iconName = KNOWN_ICONS.indexOf(service.icon) !== -1 ? service.icon : "governance";

      var points = el("ul", { class: "service-points" });
      (service.points || []).forEach(function (point) {
        points.appendChild(el("li", null, [asText(point)]));
      });

      var badge = el("span", { class: "service-icon" });
      badge.appendChild(icon(iconName));

      grid.appendChild(el("article", { class: "service-card", "data-reveal": true }, [
        badge,
        el("h3", { text: service.title || "" }),
        el("p", { class: "service-summary", text: service.summary || "" }),
        (service.points && service.points.length) ? points : null
      ]));
    });
  }

  /* ==========================================================================
     9. ENGAGEMENTS AND FILTERING
     ====================================================================== */
  var engagementCards = [];

  function buildEngagements() {
    var grid = $("#engagement-grid");
    var bar = $("#filter-bar");
    if (!grid) { return; }

    var engagements = list("engagements");
    var filters = list("engagementFilters");

    grid.textContent = "";
    engagementCards = [];

    engagements.forEach(function (item, index) {
      var categories = Array.isArray(item.categories) ? item.categories : [];

      /* --- head -------------------------------------------------------
         Dates are deliberately secondary here: this is a curated portfolio,
         not a chronology. An engagement with period set to "" simply shows
         no date at all. */
      var meta = null;
      if (item.period || item.location) {
        meta = el("p", { class: "engagement-meta" });
        setText(meta, [item.period, item.location].filter(Boolean).join(" · "));
      }

      var head = el("div", { class: "engagement-head" }, [
        el("h3", { class: "engagement-org", text: item.organization || "" }),
        item.sector ? el("p", { class: "engagement-sector", text: item.sector }) : null,
        item.role ? el("p", { class: "engagement-role", text: item.role }) : null,
        meta
      ]);

      /* --- scale tags -------------------------------------------------- */
      var tags = null;
      if (item.scale && item.scale.length) {
        tags = el("div", { class: "scale-tags" });
        item.scale.forEach(function (tag) {
          var chip = el("span", { class: "scale-tag" });
          setText(chip, tag);
          tags.appendChild(chip);
        });
      }

      /* --- measurable outcomes ----------------------------------------- */
      var outcomes = null;
      if (item.outcomes && item.outcomes.length) {
        outcomes = el("div", { class: "outcome-block" }, [
          el("p", { class: "field-label", text: "Measurable outcome" })
        ]);
        var ol = el("ul", { class: "outcome-list" });
        item.outcomes.forEach(function (line) {
          var li = el("li");
          li.appendChild(icon("arrow-right"));
          li.appendChild(el("span", null, [asText(line)]));
          ol.appendChild(li);
        });
        outcomes.appendChild(ol);
      }

      /* --- expandable detail: leadership contribution, then solution --- */
      var toggle = null;
      var detailWrap = null;
      var hasDetail = item.contribution || item.solution || (item.stack && item.stack.length);

      if (hasDetail) {
        var detailId = "engagement-detail-" + index;
        var inner = el("div", { class: "detail-inner" });

        if (item.contribution) {
          inner.appendChild(el("div", { class: "detail-field" }, [
            el("p", { class: "field-label", text: "Leadership contribution" }),
            el("p", { class: "field-text" }, [asText(item.contribution)])
          ]));
        }
        if (item.solution) {
          inner.appendChild(el("div", { class: "detail-field" }, [
            el("p", { class: "field-label", text: "Solution delivered" }),
            el("p", { class: "field-text" }, [asText(item.solution)])
          ]));
        }
        if (item.stack && item.stack.length) {
          var stackRow = el("div", { class: "stack-row" });
          item.stack.forEach(function (tech) {
            stackRow.appendChild(el("span", { class: "stack-chip", text: tech }));
          });
          inner.appendChild(stackRow);
        }

        detailWrap = el("div", { class: "engagement-detail", id: detailId, dataset: { open: "false" } }, [
          el("div", null, [inner])
        ]);

        toggle = el("button", {
          class: "engagement-toggle",
          type: "button",
          "aria-expanded": "false",
          "aria-controls": detailId
        }, [
          el("span", { text: "Contribution and solution" })
        ]);
        toggle.appendChild(icon("chevron"));

        toggle.addEventListener("click", function () {
          var open = detailWrap.dataset.open === "true";
          detailWrap.dataset.open = open ? "false" : "true";
          toggle.setAttribute("aria-expanded", open ? "false" : "true");
          $("span", toggle).textContent = open ? "Contribution and solution" : "Hide contribution and solution";
        });
      }

      /* The challenge leads the card: the business problem before the tools. */
      var challenge = null;
      if (item.challenge) {
        challenge = el("div", { class: "challenge-block" }, [
          el("p", { class: "field-label", text: "Challenge" }),
          el("p", { class: "engagement-summary" }, [asText(item.challenge)])
        ]);
      }

      var body = el("div", { class: "engagement-body" }, [
        challenge,
        tags,
        outcomes,
        toggle,
        detailWrap
      ]);

      var card = el("article", {
        class: "engagement-card",
        "data-reveal": true,
        dataset: { categories: categories.join(" ") }
      }, [head, body]);

      grid.appendChild(card);
      engagementCards.push({ node: card, categories: categories });
    });

    /* --- filter buttons ------------------------------------------------ */
    if (bar && filters.length) {
      bar.textContent = "";
      filters.forEach(function (filter, index) {
        var count = filter.id === "all"
          ? engagementCards.length
          : engagementCards.filter(function (c) { return c.categories.indexOf(filter.id) !== -1; }).length;

        if (filter.id !== "all" && count === 0) { return; }

        var button = el("button", {
          class: "filter-btn",
          type: "button",
          "aria-pressed": index === 0 ? "true" : "false",
          dataset: { filter: filter.id }
        }, [
          el("span", { text: filter.label }),
          el("span", { class: "filter-count", text: String(count) })
        ]);

        button.addEventListener("click", function () { applyFilter(filter.id); });
        bar.appendChild(button);
      });
    }

    applyFilter("all", true);
  }

  function applyFilter(filterId, silent) {
    var shown = 0;

    engagementCards.forEach(function (card) {
      var match = filterId === "all" || card.categories.indexOf(filterId) !== -1;
      card.node.hidden = !match;
      if (match) {
        shown++;
        /* Re-run the reveal animation when the visitor changes filter, but not
           on first paint — the scroll observer handles that. */
        if (!silent && !prefersReducedMotion) {
          card.node.classList.remove("is-revealed");
          window.requestAnimationFrame(function () { card.node.classList.add("is-revealed"); });
        }
      }
    });

    $$(".filter-btn").forEach(function (button) {
      button.setAttribute("aria-pressed", button.dataset.filter === filterId ? "true" : "false");
    });

    var label = "All Engagements";
    list("engagementFilters").forEach(function (f) { if (f.id === filterId) { label = f.label; } });

    var status = $("#filter-status");
    var message = "Showing " + shown + " of " + engagementCards.length +
                  " engagements" + (filterId === "all" ? "" : " — " + label);
    if (status) { status.textContent = message; }
    if (!silent) { announce(message); }
  }

  /* ==========================================================================
     10. FULL CAREER HISTORY — resume download band
     --------------------------------------------------------------------------
     The engagements above are curated on purpose. This band is the site's
     answer to "where is the rest of it?" and points at the same resume file
     as every other download button, so the link is only ever set in one place.
     ====================================================================== */
  function buildResumeBand() {
    var band = get("resumeCta", null);
    var section = $("#resume-band");
    if (!section) { return; }

    /* If the whole resumeCta block has been deleted from content.js, remove
       the band rather than leaving an empty panel on the page. */
    if (!band) { section.remove(); return; }

    var eyebrow = $("#resume-band-eyebrow");
    var heading = $("#resume-band-heading");
    var body = $("#resume-band-body");
    var note = $("#resume-band-note");

    if (eyebrow) { setText(eyebrow, band.eyebrow || ""); }
    if (heading) { setText(heading, band.heading || ""); }
    if (body) { setText(body, band.body || ""); }
    if (note) {
      if (band.note) { setText(note, band.note); }
      else { note.remove(); }
    }
  }

  /* ==========================================================================
     11. TESTIMONIALS
     --------------------------------------------------------------------------
     A testimonial appears only when permissionConfirmed === true. Quotes are
     rendered exactly as written in content.js — never trimmed or reworded.
     ====================================================================== */
  function buildTestimonials() {
    var region = $("#testimonial-region");
    if (!region) { return; }
    region.textContent = "";

    var approved = list("testimonials").filter(function (t) {
      return t && t.permissionConfirmed === true && typeof t.exactQuote === "string" && t.exactQuote.trim() !== "";
    });

    if (!approved.length) {
      buildTestimonialInvitation(region);
      return;
    }

    var track = el("div", { class: "carousel-track", id: "carousel-track" });

    approved.forEach(function (t, index) {
      var quoteMark = icon("quote", "icon testimonial-quote-icon");

      var meta = [];
      if (t.relationship) { meta.push(t.relationship); }
      if (t.date) { meta.push(t.date); }

      var attribution = el("div", { class: "testimonial-attribution" }, [
        el("span", { class: "testimonial-name", text: t.clientName || "" }),
        el("span", { class: "testimonial-role", text: [t.clientTitle, t.organization].filter(Boolean).join(", ") }),
        meta.length ? el("span", { class: "testimonial-meta", text: meta.join(" · ") }) : null
      ]);

      if (t.linkedInSource) {
        attribution.appendChild(el("a", {
          class: "testimonial-meta",
          href: t.linkedInSource,
          target: "_blank",
          rel: "noopener noreferrer",
          text: "View on LinkedIn"
        }));
      }

      var slide = el("div", {
        class: "testimonial",
        role: "group",
        "aria-roledescription": "slide",
        "aria-label": "Testimonial " + (index + 1) + " of " + approved.length
      }, [
        quoteMark,
        /* textContent — the quotation is reproduced verbatim */
        el("blockquote", { text: t.exactQuote }),
        attribution
      ]);

      track.appendChild(slide);
    });

    var viewport = el("div", { class: "carousel-viewport" }, [track]);
    var dots = el("div", { class: "carousel-dots", role: "tablist", "aria-label": "Choose testimonial" });
    var prev = el("button", { class: "icon-btn", type: "button", "aria-label": "Previous testimonial" });
    var next = el("button", { class: "icon-btn", type: "button", "aria-label": "Next testimonial" });
    prev.appendChild(icon("arrow-left"));
    next.appendChild(icon("arrow-right"));

    var carousel = el("div", {
      class: "carousel",
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": "Client testimonials",
      tabindex: "0"
    }, [
      viewport,
      approved.length > 1
        ? el("div", { class: "carousel-controls" }, [dots, el("div", { class: "carousel-arrows" }, [prev, next])])
        : null
    ]);

    region.appendChild(carousel);

    if (approved.length < 2) { return; }

    var current = 0;

    function show(index) {
      current = (index + approved.length) % approved.length;
      track.style.transform = "translateX(" + (-100 * current) + "%)";
      $$(".carousel-dot", dots).forEach(function (dot, i) {
        dot.setAttribute("aria-current", i === current ? "true" : "false");
      });
      announce("Testimonial " + (current + 1) + " of " + approved.length);
    }

    approved.forEach(function (t, index) {
      var dot = el("button", {
        class: "carousel-dot",
        type: "button",
        "aria-label": "Testimonial " + (index + 1) + (t.clientName ? " — " + t.clientName : ""),
        "aria-current": index === 0 ? "true" : "false"
      });
      dot.addEventListener("click", function () { show(index); });
      dots.appendChild(dot);
    });

    prev.addEventListener("click", function () { show(current - 1); });
    next.addEventListener("click", function () { show(current + 1); });

    carousel.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft")  { event.preventDefault(); show(current - 1); }
      if (event.key === "ArrowRight") { event.preventDefault(); show(current + 1); }
    });

    show(0);
  }

  function buildTestimonialInvitation(region) {
    var fallback = get("testimonialFallback", {});
    var linkedIn = get("contact.linkedIn", "");

    var cta = el("a", {
      class: "btn btn-primary",
      href: linkedIn || "#contact",
      target: linkedIn ? "_blank" : null,
      rel: linkedIn ? "noopener noreferrer" : null
    });
    cta.appendChild(icon("linkedin"));
    cta.appendChild(el("span", { text: fallback.ctaLabel || "View recommendations on LinkedIn" }));

    region.appendChild(el("div", { class: "testimonial-invite", "data-reveal": true }, [
      el("h3", { text: fallback.heading || "Recommendations" }),
      el("p", { text: fallback.body || "" }),
      cta
    ]));
  }

  /* ==========================================================================
     12. ABOUT AND CREDENTIALS
     ====================================================================== */
  function buildAbout() {
    var body = $("#about-body");
    if (body) {
      body.textContent = "";
      list("about.paragraphs").forEach(function (paragraph) {
        body.appendChild(el("p", null, [asText(paragraph)]));
      });
    }

    var principles = $("#principle-list");
    if (principles) {
      principles.textContent = "";
      list("about.principles").forEach(function (p) {
        principles.appendChild(el("article", { class: "principle", "data-reveal": true }, [
          el("h3", { text: p.title || "" }),
          el("p", { text: p.body || "" })
        ]));
      });
    }
  }

  function buildCredentials() {
    var certs = $("#cert-list");
    if (certs) {
      certs.textContent = "";
      list("credentials.certifications").forEach(function (c) {
        certs.appendChild(el("li", null, [
          el("span", { class: "cert-abbr", text: c.abbr || "" }),
          el("span", { class: "cert-name" }, [
            document.createTextNode(c.name || ""),
            c.body ? el("span", { class: "cert-body", text: c.body }) : null
          ])
        ]));
      });
    }

    var edu = $("#edu-list");
    if (edu) {
      edu.textContent = "";
      list("credentials.education").forEach(function (e) {
        edu.appendChild(el("li", null, [
          el("span", { class: "edu-degree", text: e.degree || "" }),
          el("span", { class: "edu-inst", text: e.institution || "" }),
          e.location ? el("span", { class: "edu-loc", text: e.location }) : null
        ]));
      });
    }

    var pd = $("#pd-list");
    if (pd) {
      pd.textContent = "";
      list("credentials.professionalDevelopment").forEach(function (item) {
        pd.appendChild(el("li", { text: item }));
      });
    }

    var caps = $("#capability-grid");
    if (caps) {
      caps.textContent = "";
      list("credentials.capabilityGroups").forEach(function (group) {
        caps.appendChild(el("div", { class: "capability", "data-reveal": true }, [
          el("h4", { text: group.title || "" }),
          el("p", { text: group.items || "" })
        ]));
      });
    }
  }

  /* ==========================================================================
     13. CONTACT
     ====================================================================== */
  function mailto(address, subject, body) {
    return "mailto:" + address +
           "?subject=" + encodeURIComponent(subject || "") +
           "&body=" + encodeURIComponent(body || "");
  }

  function buildContact() {
    var listNode = $("#contact-list");
    var email = get("contact.email", "");
    var phone = get("contact.phone", "");
    var phoneHref = get("contact.phoneHref", phone);
    var linkedIn = get("contact.linkedIn", "");
    var linkedInLabel = get("contact.linkedInLabel", linkedIn);
    var resume = get("contact.resumeFile", "");
    var location = get("contact.location", "");

    function row(iconName, label, value, href, extraAttrs) {
      var content = [
        icon(iconName),
        el("span", null, [
          el("span", { class: "contact-label", text: label }),
          el("span", { class: "contact-value", text: value })
        ])
      ];
      var inner = href
        ? el("a", Object.assign({ href: href }, extraAttrs || {}), content)
        : el("span", { class: "contact-static" }, content);
      return el("li", null, [inner]);
    }

    if (listNode) {
      listNode.textContent = "";
      if (email)    { listNode.appendChild(row("mail", "Email", email, "mailto:" + email)); }
      if (phone)    { listNode.appendChild(row("phone", "Telephone", phone, "tel:" + phoneHref)); }
      if (linkedIn) { listNode.appendChild(row("linkedin", "LinkedIn", linkedInLabel, linkedIn, { target: "_blank", rel: "noopener noreferrer" })); }
      if (resume)   { listNode.appendChild(row("download", "Resume", get("contact.resumeLabel", "Download Resume (PDF)"), resume, { download: true, "data-resume-link": "contact" })); }
      if (location) { listNode.appendChild(row("location", "Based in", location, null)); }
    }

    var cta = $("#meeting-cta");
    if (cta && email) {
      cta.setAttribute("href", mailto(email, get("contact.meetingSubject", ""), get("contact.meetingBody", "")));
    }
  }

  /* ==========================================================================
     14. FOOTER
     ====================================================================== */
  function buildFooter() {
    var year = $("#footer-year");
    if (year) { year.textContent = String(new Date().getFullYear()); }
  }

  /* ==========================================================================
     15. RESUME DOWNLOAD
     --------------------------------------------------------------------------
     Counting happens entirely inside the visitor's own browser. Nothing is
     sent anywhere — there is no server and no third-party analytics. The count
     is here so that Mohammed can read it in his own browser console with:
         localStorage.getItem("himu-resume-downloads")
     ====================================================================== */
  var DOWNLOAD_KEY = "himu-resume-downloads";

  function initResumeLinks() {
    var href = get("contact.resumeFile", "");
    var label = get("contact.resumeLabel", "Download Resume (PDF)");

    var heroBtn = $("#hero-resume");
    var headerBtn = $("#header-resume");
    var bandBtn = $("#band-resume");

    if (heroBtn) {
      heroBtn.setAttribute("href", href || "#");
      heroBtn.setAttribute("data-resume-link", "hero");
      if (!href) { heroBtn.setAttribute("aria-disabled", "true"); }
      var heroSpan = $("span", heroBtn);
      if (heroSpan) { heroSpan.textContent = "Download Resume"; }
    }
    if (headerBtn) {
      headerBtn.setAttribute("href", href || "#");
      headerBtn.setAttribute("data-resume-link", "header");
      headerBtn.setAttribute("title", label);
    }
    if (bandBtn) {
      bandBtn.setAttribute("href", href || "#");
      bandBtn.setAttribute("data-resume-link", "career-history");
      bandBtn.setAttribute("title", label);
      if (!href) { bandBtn.setAttribute("aria-disabled", "true"); }
    }

    document.addEventListener("click", function (event) {
      var link = event.target.closest ? event.target.closest("[data-resume-link]") : null;
      if (!link) { return; }

      /* If no resume file has been uploaded yet, say so plainly instead of
         sending the visitor to a 404 page. */
      var target = link.getAttribute("href");
      if (!target || target === "#") {
        event.preventDefault();
        announce("The resume file has not been uploaded yet.");
        window.alert("The resume PDF has not been added to this site yet. Please use the contact details to request a copy.");
        return;
      }

      var count = parseInt(store.get(DOWNLOAD_KEY) || "0", 10);
      store.set(DOWNLOAD_KEY, String((isNaN(count) ? 0 : count) + 1));
      store.set(DOWNLOAD_KEY + "-last", new Date().toISOString());
      announce("Resume download started.");
    });
  }

  /* ==========================================================================
     16. BACK TO TOP, PRINT, SCROLL REVEAL
     ====================================================================== */
  function initBackToTop() {
    var button = $("#back-to-top");
    if (!button) { return; }
    button.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
      var skip = $(".skip-link");
      if (skip) { skip.focus({ preventScroll: true }); }
    });
  }

  function initPrint() {
    var button = $("#print-btn");
    if (!button) { return; }
    /* The print stylesheet builds its own concise layout — the expanded
       contribution and solution text is deliberately left off paper — so
       there is nothing to prepare here beyond opening the print dialogue. */
    button.addEventListener("click", function () { window.print(); });
  }

  function initReveal() {
    var targets = $$("[data-reveal]");
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach(function (node) { node.classList.add("is-revealed"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        var index = Array.prototype.indexOf.call(entry.target.parentNode.children, entry.target);
        entry.target.style.transitionDelay = Math.min(index, 5) * 55 + "ms";
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });

    targets.forEach(function (node) { observer.observe(node); });
  }

  /* Smooth scrolling for in-page links, with focus moved for keyboard users */
  function initSmoothScroll() {
    document.addEventListener("click", function (event) {
      var link = event.target.closest ? event.target.closest('a[href^="#"]') : null;
      if (!link) { return; }
      var id = link.getAttribute("href").slice(1);
      if (!id) { return; }
      var target = document.getElementById(id);
      if (!target) { return; }

      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });

      if (history.replaceState) { history.replaceState(null, "", "#" + id); }

      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      target.addEventListener("blur", function once() {
        target.removeAttribute("tabindex");
        target.removeEventListener("blur", once);
      });
    });
  }

  /* Keep the document metadata in step with content.js */
  function applyMeta() {
    var title = get("meta.pageTitle", "");
    if (title) { document.title = title; }

    function setMeta(selector, value) {
      if (!value) { return; }
      var node = document.querySelector(selector);
      if (node) { node.setAttribute("content", value); }
    }
    setMeta('meta[name="description"]', get("meta.description", ""));
    setMeta('meta[name="keywords"]', get("meta.keywords", ""));
    setMeta('meta[property="og:title"]', get("identity.fullName", "") + " — " + get("identity.title", ""));
    setMeta('meta[property="og:description"]', get("identity.tagline", ""));
    setMeta('meta[name="twitter:description"]', get("identity.tagline", ""));

    var url = get("meta.siteUrl", "");
    if (url) {
      var canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) { canonical.setAttribute("href", url); }
      setMeta('meta[property="og:url"]', url);
    }
  }

  /* ==========================================================================
     17. START
     ====================================================================== */
  function init() {
    if (!window.SITE_CONTENT) {
      /* content.js failed to load or has a syntax error. Say so clearly
         rather than leaving a blank page with no explanation. */
      var main = $("#main");
      if (main) {
        main.prepend(el("div", {
          class: "shell",
          style: "padding:3rem 0;",
          text: "Site content could not be loaded. Check content.js for a missing comma or bracket, then reload."
        }));
      }
      return;
    }

    applyMeta();
    bindContentAttributes();
    buildSectionHeads();
    buildNavigation();
    buildHero();
    buildImpact();
    buildServices();
    buildEngagements();
    buildResumeBand();
    buildTestimonials();
    buildAbout();
    buildCredentials();
    buildContact();
    buildFooter();

    initTheme();
    initMobileNav();
    initScrollEffects();
    initScrollSpy();
    initResumeLinks();
    initBackToTop();
    initPrint();
    initSmoothScroll();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
