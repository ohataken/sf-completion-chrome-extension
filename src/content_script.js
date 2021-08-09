function findLabelElement(callback) {
  const labels = document.querySelectorAll("label");

  for (let i = 0; i < labels.length; ++i) {
    if (callback(labels[i], i, labels)) {
      return labels[i];
    }
  }
}

function evaluateTextItem(item) {
  const { labelName, value } = item;
  const label = findLabelElement((label, i, labels) => {
    return 0 <= label.innerHTML.indexOf(labelName);
  });
  const name = label.getAttribute("for");
  const el = document.querySelector(`input[type='text'][name='${name}']`);
  el.value = value;
}

function evaluateCheckboxItem(item) {
  const { labelName, value } = item;
  const label = findLabelElement((label, i, labels) => {
    return 0 <= label.innerHTML.indexOf(labelName);
  });
  const name = label.getAttribute("for");
  const el = document.querySelector(`input[type='checkbox'][name='${name}']`);
  el.checked = value;
}

function evaluateSelectItem(item) {
  const { labelName, value } = item;
  const label = findLabelElement((label, i, labels) => {
    return 0 <= label.innerHTML.indexOf(labelName);
  });
  const name = label.getAttribute("for");
  const el = document.querySelector(`option[value='${value}']`);
  el.selected = true;
}

function evaluateTextareaItem(item) {
  const { labelName, value } = item;
  const label = findLabelElement((label, i, labels) => {
    return 0 <= label.innerHTML.indexOf(labelName);
  });
  const name = label.getAttribute("for");
  const el = document.querySelector(`textarea[name='${name}']`);
  el.textContent = value;
}

function evaluateItems(items) {
  items.forEach((item) => {
    if (false) {
    } else if (item.valueType === "text") {
      evaluateTextItem(item);
    } else if (item.valueType === "checkbox") {
      evaluateCheckboxItem(item);
    } else if (item.valueType === "select") {
      evaluateSelectItem(item);
    } else if (item.valueType === "textarea") {
      evaluateTextareaItem(item);
    }
  });
}

function evaluateJSON(object) {
  evaluateItems(object.items);
}

chrome.runtime.onMessage.addListener(async (req, sender, sendResponse) => {
  evaluateJSON(JSON.parse(req.json));
  sendResponse({});
});

