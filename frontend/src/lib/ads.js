// Google Ads Conversion Tracking helper.
// AW-18318323179 is the Google Ads account (global tag lives in public/index.html).
//
// TODO — Replace placeholder labels below with values from
// Google Ads → Tools → Conversions → your action → "Tag setup → send_to".
// Format expected: "AW-18318323179/AbC-DeFgHiJk123"
//
// Once you have the label(s) from Google Ads, change ONLY the values in
// GADS_LABELS and the tag will start firing automatically across the site.

const GADS_ACCOUNT = "AW-18318323179";

export const GADS_LABELS = {
  // Fires when a user opens WhatsApp (Home / Pricing / Contact / floating button).
  whatsapp: `${GADS_ACCOUNT}/PLACEHOLDER_WHATSAPP_LABEL`,
  // Fires on successful contact-form submission (Contact page).
  contact: `${GADS_ACCOUNT}/PLACEHOLDER_CONTACT_LABEL`,
  // Fires on outbound tel: click (Hero / Header / Contact).
  call: `${GADS_ACCOUNT}/PLACEHOLDER_CALL_LABEL`,
};

// Report a conversion. Safe no-op if gtag isn't loaded (e.g. dev / ad-blocker).
export const trackConversion = (kind, extra = {}) => {
  const send_to = GADS_LABELS[kind];
  if (!send_to || send_to.includes("PLACEHOLDER")) {
    // Still push a debug event so PostHog / other analytics can capture it.
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", `pending_${kind}`, { send_to: GADS_ACCOUNT, ...extra });
    }
    return;
  }
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", { send_to, ...extra });
  }
};
