import { LANYARD_URL, DATE_OF_BIRTH, STATUS_COLORS } from "./constants";

/*
 * Fetches my Discord status via Lanyard.
 */
export async function getStatus() {
  try {
    const response = await fetch(LANYARD_URL, { cache: "no-store" });
    const { data } = await response.json();
    return data.discord_status || "offline";
  } catch {
    return "offline";
  }
}

/*
 * Updates the status text color based on my status.
 */
export async function updateStatusColor() {
  const statusText = document.querySelector("#status-text");
  if (!statusText) return;

  const status = await getStatus();
  const color = STATUS_COLORS[status] || "black";

  statusText.textContent = `Currently ${status}`;
  statusText.style.color = color;
}

/*
 * Calculates my age.
 */
export function calculateAge() {
  return new Date(Date.now() - DATE_OF_BIRTH.getTime()).getFullYear() - 1_970;
}
