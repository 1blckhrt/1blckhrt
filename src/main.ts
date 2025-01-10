import "./tailwind.css";
import { calculateAge } from "./util/helpers";

const age = calculateAge();

const age_span_element = document.querySelector<HTMLSpanElement>("#age");
if (age_span_element) {
  age_span_element.textContent = age.toString();
}
