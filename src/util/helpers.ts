import { DATE_OF_BIRTH, LANYARD_URL, STATUS_COLORS, TIME_FORMAT_OPTIONS } from "./constants";

/*
 * Calculates my age.
 */
export function calculateAge() {
  const age = new Date(Date.now() - DATE_OF_BIRTH.getTime()).getFullYear() - 1_970;

  const age_span_element = document.querySelector<HTMLSpanElement>("#age");
  if (age_span_element) {
    age_span_element.textContent = age.toString();
  }
}

/*
 * Displays my current time.
 */
export function displayCurrentTime() {
  const now = new Date();

  const formattedTime = new Intl.DateTimeFormat("en-US", TIME_FORMAT_OPTIONS).format(now);

  const timeElement = document.querySelector<HTMLSpanElement>("#current-time");
  if (timeElement) {
    timeElement.textContent = formattedTime;
  }
}

/*
 * Fetches my Discord status via Lanyard.
 */
export async function getStatus() {
  try {
    const response = await fetch(LANYARD_URL, { cache: "no-store" });
    const { data } = await response.json();
    return data.discord_status || "Offline";
  } catch {
    return "offline";
  }
}

/*
 * Displays a small colored circle based on the Discord status.
 */
export async function displayStatus() {
  const status = await getStatus();
  const statusColor = STATUS_COLORS[status] || "gray";

  const statusCircleElement = document.querySelector<HTMLSpanElement>("#status-circle");
  if (statusCircleElement) {
    statusCircleElement.style.display = "inline-block";
    statusCircleElement.style.width = "12px";
    statusCircleElement.style.height = "12px";
    statusCircleElement.style.borderRadius = "50%";
    statusCircleElement.style.backgroundColor = statusColor;
  }

  const statusText = document.querySelector<HTMLSpanElement>("#status-text");

  if (statusText) {
    switch (status) {
      case "online":
        statusText.textContent = "Online";
        break;
      case "idle":
        statusText.textContent = "Idle";
        break;
      case "dnd":
        statusText.textContent = "Do Not Disturb";
        break;
      case "offline":
        statusText.textContent = "Offline";
        break;
      default:
        statusText.textContent = "Unknown";
    }
  }
}
