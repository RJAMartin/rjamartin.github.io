export const recipient = "rmartin1995@gmail.com";
export function prepareRequest(values) {
  const clean = (key) => String(values[key] || "").trim();
  const name = clean("name");
  const kind = clean("kind");
  const subject = `${kind} request — ${name}`.replace(/[\r\n]/g, " ");
  const body = [
    "Hi Renaud,",
    "",
    `I have a request: ${kind}.`,
    "",
    `Name: ${name}`,
    `Reply email: ${clean("email")}`,
    "",
    "The idea:",
    clean("brief"),
    "",
    `Budget: ${clean("budget") || "Not specified"}`,
    `Timing: ${clean("timing") || "Not specified"}`,
    "",
    "Prepared with the request form at https://rjamartin.github.io/",
  ].join("\n");
  return {
    subject,
    body,
    mailto: `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };
}
