/**
 * ARTIST ID — vCard Generator
 * Generates a valid vCard 3.0 string and triggers a browser download.
 * Fields with empty values are omitted automatically.
 */

function escapeVCardValue(value) {
  if (!value) return "";
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

export function generateVCard(contact) {
  const {
    name,
    email,
    phone,
    org,
    website,
    title: jobTitle,
    instagram,
    spotify,
  } = contact;

  const lines = ["BEGIN:VCARD", "VERSION:3.0"];

  if (name) {
    const parts = name.split(" ");
    const last = parts.pop() || "";
    const first = parts.join(" ");
    lines.push(`N:${escapeVCardValue(last)};${escapeVCardValue(first)};;;`);
    lines.push(`FN:${escapeVCardValue(name)}`);
  }

  if (org) lines.push(`ORG:${escapeVCardValue(org)}`);
  if (jobTitle) lines.push(`TITLE:${escapeVCardValue(jobTitle)}`);
  if (email) lines.push(`EMAIL;TYPE=WORK,INTERNET:${escapeVCardValue(email)}`);
  if (phone) lines.push(`TEL;TYPE=WORK,VOICE:${escapeVCardValue(phone)}`);
  if (website) lines.push(`URL:${escapeVCardValue(website)}`);
  if (instagram) lines.push(`X-SOCIALPROFILE;TYPE=instagram:${escapeVCardValue(instagram)}`);
  if (spotify) lines.push(`X-SOCIALPROFILE;TYPE=spotify:${escapeVCardValue(spotify)}`);

  lines.push(`NOTE:${escapeVCardValue("ARTIST ID — " + name + " | Your music. Your world. One tap away.")}`);
  lines.push("END:VCARD");

  return lines.join("\r\n");
}

export function downloadVCard(contact) {
  const vcardString = generateVCard(contact);
  const blob = new Blob([vcardString], { type: "text/vcard;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const fileName = contact.name
    ? contact.name.replace(/\s+/g, "_") + ".vcf"
    : "contact.vcf";

  link.setAttribute("href", url);
  link.setAttribute("download", fileName);
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
