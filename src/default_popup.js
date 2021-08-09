window.addEventListener("DOMContentLoaded", (event) => {
  const form = document.querySelector("#form");
  const textarea = form.querySelector("textarea[name='json']");

  form.addEventListener("submit", (e) => {
    e.stopPropagation();
    e.preventDefault();

});
