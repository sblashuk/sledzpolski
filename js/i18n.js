(function () {
    // Config
    const supported = ["en","pl", "ru"];
    const defaultLang = "pl";

    // Button state classes for active/inactive (Bootstrap)
    const ACTIVE_CLASS = "btn-light";
    const INACTIVE_CLASS = "btn-outline-light";

    // Helpers
    const getParamLang = () => new URLSearchParams(location.search).get("lang");
    const stored = localStorage.getItem("lang");
    const browser = (navigator.language || "pl").slice(0,2);

    // Decide initial language: URL param > stored > browser > default
    let lang = (getParamLang() || stored || browser || defaultLang).toLowerCase();
    if (!supported.includes(lang)) lang = defaultLang;

    // Apply HTML lang attribute early for AT/SEO
    document.documentElement.setAttribute("lang", lang);

    // Load and apply translations
    async function loadLocale(l) {
        const res = await fetch(`/locales/${l}.json`, { cache: "no-store" });
        if (!res.ok) throw new Error(`Missing locale ${l}`);
        return res.json();
    }

    function translatePage(dict) {
        // Update text nodes
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");

            if (!(key in dict)) return;

            if (el.hasAttribute("data-typed-items")) {
                el.setAttribute("data-typed-items", dict[key])
            } else {
                el.textContent = dict[key];
            }
        });
    }

    function setSwitcherState(active) {
        // Update legacy button-style toggles (backward compatible)
        document.querySelectorAll('[data-lang]').forEach(btn => {
            const isActive = btn.getAttribute('data-lang') === active;

            // Toggle-style buttons (old UI)
            if (btn.classList && btn.classList.contains('btn')) {
                btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
                if (typeof ACTIVE_CLASS !== 'undefined' && typeof INACTIVE_CLASS !== 'undefined') {
                    btn.classList.toggle(ACTIVE_CLASS, isActive);
                    btn.classList.toggle(INACTIVE_CLASS, !isActive);
                }
                btn.classList.toggle('active', isActive);
            }

            // Dropdown items (new UI): radio semantics + hide active item
            if (btn.classList && btn.classList.contains('dropdown-item')) {
                btn.setAttribute('aria-checked', isActive ? 'true' : 'false');
                btn.classList.toggle('d-none', isActive);
            }
        });

        // Update the dropdown toggle button to show only the active language
        const toggle = document.getElementById('langDropdown');
        if (toggle) {
            let label;
            switch (active) {
                case 'en':
                    label = "English";
                    break;
                case 'pl':
                    label = "Polish"
                    break;
                case 'ru':
                    label = "Russian";
                    break
            }

            toggle.textContent = (active || 'PL').toUpperCase();
            toggle.setAttribute('data-current-lang', active);
            toggle.setAttribute('aria-label', 'Language selector, current ' + label);
        }
    }

    async function setLang(l, pushUrl = false) {
        if (!supported.includes(l)) return;
        const dict = await loadLocale(l).catch(() => null);
        if (!dict) return;
        translatePage(dict);
        setSwitcherState(l);
        document.documentElement.setAttribute("lang", l);
        localStorage.setItem("lang", l);
        if (pushUrl) {
            const url = new URL(location.href);
            url.searchParams.set("lang", l);
            history.replaceState({}, "", url);
        }
    }

    // Wire up buttons
    window.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll("[data-lang]").forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                setLang(lang, true);
                // If this is from the dropdown, close it (Bootstrap 5)
                const ddToggle = document.getElementById('langDropdown');
                if (ddToggle && window.bootstrap && window.bootstrap.Dropdown) {
                    try {
                        const inst = window.bootstrap.Dropdown.getInstance(ddToggle) || new window.bootstrap.Dropdown(ddToggle);
                        inst.hide();
                    } catch (e) { /* noop */ }
                }
            });
        });
    });

    // Initial render
    setLang(lang, false);
})();