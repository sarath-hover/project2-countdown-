const endDate = "6 August 2023 07:59 AM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
// const clock = () => {

// }

function clock() {
  const end = new Date(endDate);
  const now = new Date();

  //   console.log(end);
  //   console.log(now);

  const diff = (end - now) / 1000;
  // console.log(diff);

  // === FOR STOP THE COUNTDOWN WHEN ITS HITS ZERO ===

  if (diff < 0) return;

  //   ====== CONVERTS INTO DAYS ======

  // ==== DAYS CALCULATION =====

  inputs[0].value = Math.floor(diff / 3600 / 24);

  // ======= HOURS CALCULATION =======

  inputs[1].value = Math.floor(diff / 3600) % 24;

  // ======== MINUTES CALCULATION ========

  inputs[2].value = Math.floor(diff / 60) % 60;

  // ======== SECONDS CALCULATION ========

  inputs[3].value = Math.floor(diff % 60);
}

// ====== INITIAL CALL =========

clock();

/** ======= CALCULATION HINTS ========
 *  1  DAY      = 24   HOURS
 *  1  HOUR     = 60   MINUTES
 *  60 MINUTES  = 3600 SECONDS
 */

// ==== FOR CONTINOUSLY REFRESH ====

setInterval(() => {
  clock();
}, 1000);
