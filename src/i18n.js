import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// LANGUAGE RESOURCES
const resources = {
  // ENGLISH
  en: {
    translation: {
      "Welcome to React": "Welcome to React",
      Tickets: "Tickets",
      Offers: "Offers",
      Blog: "Blog",
      Contact: "Contact",
      "Sign in": "Sign in",
      "Happiness gained from traveling": "Happiness gained from traveling",
      Hotels: "Hotels",
      "Car rental": "Car rental",
      Bilateral: "Bilateral",
      Unilateral: "Unilateral",
      Passenger: "Passenger",
      Adult: "Adult",
      Child: "Child",
      Newborn: "Newborn",
      Disabled: "Disabled",
      "From the age of 11": "From the age of 11",
      "2-11 years old": "2-11 years old",
      "Up to 2 years": "Up to 2 years",
      Cancel: "Cancel",
      Submit: "Submit",
      "Economy class": "Economy class",
      "Premium class": "Premium class",
      "Business class": "Business class",
      "First class": "First class",
      From: "From",
      To: "To",
      "Choose the airport": "Choose the airport",
    },
  },
  // GEORGIAN
  ka: {
    translation: {
      "Welcome to React": "React-ში კეთილი მოსვლა",
      Tickets: "ავიაბილეთები",
      Offers: "შეთავაზებები",
      Blog: "ბლოგი",
      Contact: "დაკავშირება",
      "Sign in": "შესვლა",
      "Happiness gained from traveling": "მოგზაურობით მიღებული ბედნიერება",
      Hotels: "სასტუმროები",
      "Car rental": "მანქანის ქირაობა",
      Bilateral: "ორმხრივი",
      Unilateral: "ცალმხრივი",
      Passenger: "მგზავრი",
      Adult: "ზრდასრული",
      Child: "ბავშვი",
      Newborn: "ჩვილი",
      Disabled: "შშმ",
      "From the age of 11": "11 წლიდან",
      "2-11 years old": "2-11 წლის",
      "Up to 2 years": "2 წლამდე",
      Cancel: "გაუქმება",
      Submit: "დასტური",
      "Economy class": "ეკონომ კლასი",
      "Premium class": "პრემიუმ ეკონომ კლასი",
      "Business class": "ბიზნეს კლასი",
      "First class": "პირველი კლასი",
      From: "საიდან",
      To: "სად",
      "Choose the airport": "აირჩიე აეროპორტი",
    },
  },
  // GERMAN
  de: {
    translation: {
      "Welcome to React": "Willkommen bei React",
      Tickets: "Flugtickets",
      Offers: "Bietet",
      Blog: "Bloggen",
      Contact: "Kontakt",
      "Sign in": "Anmelden",
      "Happiness gained from traveling":
        "Glück, das das Reisen mit sich bringt",
      Hotels: "Hotels",
      "Car rental": "Autovermietung",
      Bilateral: "Bilateral",
      Unilateral: "Einseitig",
      Passenger: "Passagier",
      Adult: "Erwachsene",
      Child: "Kind",
      Newborn: "Neugeborenes",
      Disabled: "Behinderte",
      "From the age of 11": "Ab 11 Jahren",
      "2-11 years old": "2-11 Tage",
      "Up to 2 years": "Bis zu 2 Jahre",
      Cancel: "Stornieren",
      Submit: "Einreichen",
      "Economy class": "Economy klasse",
      "Premium class": "Premium klasse",
      "Business class": "Business klasse",
      "First class": "Erste klasse",
      From: "Aus",
      To: "Zu",
      "Choose the airport": "Wählen Sie den Flughafen",
    },
  },
};

// i18next CONFIGURATION
i18n.use(initReactI18next).init({
  resources,
  lng: "ka", // DEFAULT
  fallbackLng: "en", // FALLBACK
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
