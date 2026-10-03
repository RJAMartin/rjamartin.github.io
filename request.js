import { prepareRequest } from "./request-model.js";
const form = document.querySelector("#request-form");
const status = document.querySelector("#request-status");
const fallback = document.querySelector("#request-fallback");
const preview = document.querySelector("#request-preview");
function prepare() {
  if (!form.reportValidity()) return;
  const request = prepareRequest(Object.fromEntries(new FormData(form)));
  preview.value = request.body;
  fallback.hidden = false;
  return request;
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const request = prepare();
  if (!request) return;
  status.textContent =
    "Opening an email draft. Review it and press Send in your email app. If nothing opens or the message is cut short, use Copy request or Download brief. Nothing has been sent by this page.";
  window.location.href = request.mailto;
});
document.querySelector("#copy-request").addEventListener("click", async () => {
  const request = prepare();
  if (!request) return;
  try {
    await navigator.clipboard.writeText(request.body);
    status.textContent =
      "Request copied. Paste it into an email to rmartin1995@gmail.com and send when ready.";
  } catch {
    fallback.open = true;
    preview.focus();
    preview.select();
    status.textContent =
      "Clipboard access is unavailable. Your request is selected below; copy it manually and send it by email.";
  }
});
document.querySelector("#download-request").addEventListener("click", () => {
  const request = prepare();
  if (!request) return;
  const url = URL.createObjectURL(
    new Blob(
      [
        `To: rmartin1995@gmail.com\nSubject: ${request.subject}\n\n${request.body}`,
      ],
      { type: "text/plain;charset=utf-8" },
    ),
  );
  const a = document.createElement("a");
  a.href = url;
  a.download = "project-request.txt";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  status.textContent =
    "Brief downloaded. Attach it to an email to rmartin1995@gmail.com. Nothing has been sent yet.";
});

const brief = form.elements.namedItem("brief");
form.addEventListener("input", () => {
  status.textContent = "";
  fallback.hidden = true;
  brief.setCustomValidity(
    brief.value.trim().length >= 20
      ? ""
      : "Please describe your idea in at least 20 characters.",
  );
});
document.querySelector("#request-fields").disabled = false;
