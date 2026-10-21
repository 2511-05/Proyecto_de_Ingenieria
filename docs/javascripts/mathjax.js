window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document.addEventListener("DOMContentLoaded", function () {
  if (window.MathJax && window.MathJax.startup && window.MathJax.startup.document) {
    window.MathJax.startup.document.state(0);
    window.MathJax.typeset();
  }
});