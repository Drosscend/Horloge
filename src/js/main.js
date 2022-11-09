const spanH = document.getElementById("h");
const spanm = document.getElementById("m");
const spans = document.getElementById("s");
const span_label = document.getElementById("label-s");

/**
 * Met à jour l'heure et fait clignoter le séparateur
 */
function main() {
  var h;
  var m;
  var s;
  // Mettre à jour l'heure
  setInterval(function () {
    const date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }
    spanH.innerHTML = h;
    spanm.innerHTML = m;
    spans.innerHTML = s;
  }, 1000);

  // Faire clignoter le séparateur
  setInterval(function () {
    if (span_label.style.opacity == 0.5) {
      span_label.style.opacity = 1;
    } else {
      span_label.style.opacity = 0.5;
    }
  }, 500);
}

main();
