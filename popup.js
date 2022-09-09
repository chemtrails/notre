let area = document.querySelector('textarea');
let btn = document.querySelector('button');

chrome.storage.sync.get(['text'], function(result) {
    if (result.text) {
        area.value = result.text;
    }
});

area.addEventListener('keyup', () => {
    chrome.storage.sync.set({'text': area.value});
});

btn.addEventListener('click', () => {
    navigator.clipboard.writeText(area.value);
});