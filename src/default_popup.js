window.addEventListener("DOMContentLoaded", (event) => {
  const form = document.querySelector("#form");
  const textarea = form.querySelector("textarea[name='json']");

  form.addEventListener("submit", (e) => {
    e.stopPropagation();
    e.preventDefault();

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { json: textarea.value }, (response) => {
      });
    });
  });

});
