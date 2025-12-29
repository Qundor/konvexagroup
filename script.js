// ==============================
// HAMBURGER MENU
// ==============================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close menu when link clicked
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// ==============================
// LIGHT/DARK MODE TOGGLE
// ==============================
const darkToggle = document.getElementById("dark-toggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  // Save preference in localStorage
  if(document.body.classList.contains("dark-mode")){
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

// Set mode on page load based on localStorage
if(localStorage.getItem("mode") === "dark"){
  document.body.classList.add("dark-mode");
}

// ==============================
// TRANSLATION
// ==============================
const translations = {
  en: {
    "logo": "Konvexa Group",
    "nav-home": "Home",
    "nav-network": "Our Network",
    "nav-contact": "Contact",
    "hero-title": "Connecting Africa to Europe Seamlessly",
    "hero-desc": "Discover high-quality African resources, trusted suppliers, and sustainable partnerships backed by Konvexa Group’s expertise.",
    "learn-more": "Learn More",
    "contact-us": "Contact Us",
    "mission-title": "Our Mission",
    "mission-desc": "Our mission is simple: to simplify international sourcing. Through our strong, vetted networks across Southern and Eastern Africa, we give European importers direct access to high-quality resources, sustainable partnerships, and fully transparent supply chains.",
    "mission-desc-2": "We don’t just facilitate transactions—we build trust. By combining local African market expertise with European business standards, we ensure every connection we broker is professional, reliable, and mutually profitable.",
    "gallery-title": "Gallery",
    "network-title": "Our Network",
    "markets-title": "Markets",
    "markets-desc": "Africa’s markets are rich, diverse, and full of potential. We leverage our local insights to connect European businesses with opportunities across Southern and Eastern Africa. Our team constantly monitors market trends, identifies high-demand commodities, and ensures that importers have access to reliable and sustainable sources.",
    "suppliers-title": "Suppliers",
    "suppliers-desc": "We partner with carefully vetted suppliers throughout Southern and Eastern Africa to ensure high-quality products, reliable delivery, and sustainable practices. Every supplier undergoes a rigorous screening process to verify their production capabilities, quality standards, and commitment to professional partnerships.",
    "importers-title": "Importers",
    "importers-desc": "European businesses gain direct access to Africa’s finest resources with full transparency and accountability. Konvexa Group combines local market intelligence with European business standards, ensuring that every connection is professional, reliable, and mutually profitable.",
    "contact-title": "Contact Us",
    "contact-phone": "Phone:",
    "contact-email": "Email:",
    "contact-address": "Address:",
    "contact-whatsapp": "WhatsApp:",
    "ceo-title": "CEO",
    "ceo-name": "Name:",
    "ceo-phone": "Phone:",
    "ceo-email": "Email:",
    "form-name": "Your Name",
    "form-email": "Your Email",
    "form-subject": "Subject",
    "form-message": "Message",
    "send-message": "Send Message"
  },
  pl: {
    "logo": "Konvexa Group",
    "nav-home": "Strona główna",
    "nav-network": "Nasza Sieć",
    "nav-contact": "Kontakt",
    "hero-title": "Łączymy Afrykę z Europą bez przeszkód",
    "hero-desc": "Odkryj wysokiej jakości afrykańskie zasoby, zaufanych dostawców i trwałe partnerstwa wspierane przez Konvexa Group.",
    "learn-more": "Dowiedz się więcej",
    "contact-us": "Skontaktuj się z nami",
    "mission-title": "Nasza Misja",
    "mission-desc": "Naszą misją jest uproszczenie międzynarodowego zaopatrzenia. Dzięki silnym i sprawdzonym sieciom w Afryce Południowej i Wschodniej zapewniamy europejskim importerom bezpośredni dostęp do wysokiej jakości zasobów, trwałych partnerstw i całkowicie przejrzystych łańcuchów dostaw.",
    "mission-desc-2": "Nie tylko ułatwiamy transakcje – budujemy zaufanie. Łącząc lokalną wiedzę rynkową z afrykańskich rynków z europejskimi standardami biznesowymi, zapewniamy, że każde połączenie, które pośredniczymy, jest profesjonalne, niezawodne i korzystne dla obu stron.",
    "gallery-title": "Galeria",
    "network-title": "Nasza Sieć",
    "markets-title": "Rynki",
    "markets-desc": "Rynki Afryki są bogate, różnorodne i pełne potencjału. Wykorzystujemy lokalną wiedzę, aby połączyć europejskie firmy z możliwościami w Afryce Południowej i Wschodniej. Nasz zespół stale monitoruje trendy rynkowe i identyfikuje towary o wysokim popycie, zapewniając dostęp do rzetelnych i zrównoważonych źródeł.",
    "suppliers-title": "Dostawcy",
    "suppliers-desc": "Współpracujemy ze starannie wyselekcjonowanymi dostawcami w Afryce Południowej i Wschodniej, aby zapewnić wysoką jakość produktów, niezawodną dostawę i zrównoważone praktyki. Każdy dostawca przechodzi rygorystyczny proces weryfikacji zdolności produkcyjnych, standardów jakości i zaangażowania w profesjonalne partnerstwa.",
    "importers-title": "Importerzy",
    "importers-desc": "Europejskie firmy zyskują bezpośredni dostęp do najlepszych zasobów Afryki, z pełną przejrzystością i odpowiedzialnością. Konvexa Group łączy lokalną wiedzę rynkową z europejskimi standardami biznesowymi, zapewniając, że każde połączenie jest profesjonalne, niezawodne i korzystne dla obu stron.",
    "contact-title": "Skontaktuj się z nami",
    "contact-phone": "Telefon:",
    "contact-email": "E-mail:",
    "contact-address": "Adres:",
    "contact-whatsapp": "WhatsApp:",
    "ceo-title": "Dyrektor Generalny",
    "ceo-name": "Imię:",
    "ceo-phone": "Telefon:",
    "ceo-email": "E-mail:",
    "form-name": "Twoje imię",
    "form-email": "Twój e-mail",
    "form-subject": "Temat",
    "form-message": "Wiadomość",
    "send-message": "Wyślij wiadomość"
  }
};

// Function to switch language
function setLanguage(lang) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if(translations[lang][key]){
      el.textContent = translations[lang][key];
    }
  });
}

// Language selector
document.getElementById('language-selector').addEventListener('change', e => {
  setLanguage(e.target.value);
});

// Default language
setLanguage('en');