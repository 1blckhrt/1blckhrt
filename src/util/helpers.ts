import { DATE_OF_BIRTH } from "./constants";

/*
 * Calculates my age.
 */
export function calculateAge() {
  return new Date(Date.now() - DATE_OF_BIRTH.getTime()).getFullYear() - 1_970;
}
