var x = document.getElementById('wireframe');
var y = document.getElementById('final');

function toggleWireframe() {
  if (x.classList.contains("display-some") && y.classList.contains("display-none")) {
    return
  } else if (x.classList.contains("display-none") && y.classList.contains("display-some")) {
    y.classList.toggle("display-none");
    y.classList.toggle("display-some");
    x.classList.toggle("display-some");
    x.classList.toggle("display-none");
  }
}

function toggleFinal() {
  if (y.classList.contains("display-none") && x.classList.contains("display-some")) {
    y.classList.toggle("display-none");
    y.classList.toggle("display-some");
    x.classList.toggle("display-some");
    x.classList.toggle("display-none");
  } else if (y.classList.contains("display-some") && x.classList.contains("display-none")) {
    return
  }
}
