import { DATE_OF_BIRTH, TIME_FORMAT_OPTIONS } from "./constants";

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
