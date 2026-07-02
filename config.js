/**
 * FERCHO The Barber — Site Configuration
 * ─────────────────────────────────────────────────────────────
 * Phase 2: Set GOOGLE_SCRIPT_URL to your deployed Apps Script
 * web app URL to enable form submissions.
 *
 * Deploy steps (Phase 2):
 *  1. Open script.google.com → New project
 *  2. Paste the doPost() handler (provided separately)
 *  3. Deploy → Web app → "Anyone" access → Copy URL
 *  4. Paste URL in GOOGLE_SCRIPT_URL below
 * ─────────────────────────────────────────────────────────────
 */
const CONFIG = {
  // ── Phase 2: Paste your Google Apps Script URL here ──
  GOOGLE_SCRIPT_URL: "",          // e.g. "https://script.google.com/macros/s/AKfy.../exec"

  // ── Booking ──
  BOOKSY_URL:        "https://ferchothebarbernyc.booksy.com/a/",
  THECUT_URL:        "https://book.thecut.co/Ferney-Lopez-flots9s",

  // ── Social Media ──
  INSTAGRAM:         "https://www.instagram.com/ferchothebarbernyc",
  TIKTOK:            "https://www.tiktok.com/@ferchobarbernyc",
  FACEBOOK:          "https://www.facebook.com/elferchobarbernyc",

  // ── Contact ──
  EMAIL:             "ferneylopezpatino6@gmail.com",
  PHONE_PRIMARY:     "+16467081885",
  PHONE_PRIMARY_DISPLAY: "+1 (646) 708-1885",
  PHONE_SECONDARY:   "+19177838481",
  PHONE_SECONDARY_DISPLAY: "+1 (917) 783-8481",

  // ── Location ──
  ADDRESS_LINE1:     "5504 Hudson Ave",
  ADDRESS_LINE2:     "West New York, NJ 07093",
  ADDRESS_COUNTRY:   "United States",
  GOOGLE_MAPS_URL:   "https://www.google.com/maps/place/5504+Hudson+Ave+Apt+B4,+West+New+York,+NJ+07093/",

  // ── Business Hours ──
  HOURS: {
    sunday:    "7:00 AM – 7:00 PM",
    monday:    "9:00 AM – 9:00 PM",
    tuesday:   "7:00 AM – 9:00 PM",
    wednesday: "7:00 AM – 9:00 PM",
    thursday:  "7:00 AM – 10:00 PM",
    friday:    "7:00 AM – 10:00 PM",
    saturday:  "7:00 AM – 10:00 PM",
  },

  // ── Site ──
  SITE_NAME:    "FERCHO The Barber",
  SITE_URL:     "https://ferchothebarber.com",    // update when domain is live
};
