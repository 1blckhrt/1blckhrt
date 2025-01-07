import { LANYARD_URL, DATE_OF_BIRTH } from "./constants";

/*
 * Fetches my Discord Status via Lanyard.
 */
export async function GetStatus() {
  const response = await fetch(LANYARD_URL, { cache: "no-store" });
  const { data } = await response.json();
  return data.discord_status;
}

/*
 * Calculates my age.
 */
export function calculateAge() {
  return new Date(Date.now() - DATE_OF_BIRTH.getTime()).getFullYear() - 1_970;
}
