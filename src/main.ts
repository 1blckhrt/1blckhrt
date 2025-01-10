import "./tailwind.css";
import { calculateAge, displayCurrentTime, displayStatus } from "./util/helpers";

document.addEventListener("DOMContentLoaded", async () => {
  calculateAge();
  displayCurrentTime();
  await displayStatus();
});
