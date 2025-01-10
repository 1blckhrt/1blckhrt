import "./tailwind.css";
import { calculateAge, displayCurrentTime } from "./util/helpers";

document.addEventListener("DOMContentLoaded", () => {
  calculateAge();
  displayCurrentTime();
});
