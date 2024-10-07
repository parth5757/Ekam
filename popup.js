document.addEventListener('DOMContentLoaded', () => {
  const keywordInput = document.getElementById('keyword');
  const addKeywordButton = document.getElementById('addKeyword');
  const keywordsList = document.getElementById('keywordsList');

  function updateKeywordsList() {
    chrome.storage.local.get("keywords", (data) => {
      let keywords = data.keywords || [];
      keywordsList.innerHTML = '';
      for (let keyword of keywords) {
        let li = document.createElement('li');
        li.textContent = keyword;
        keywordsList.appendChild(li);
      }
    });
  }

  addKeywordButton.addEventListener('click', () => {
    let keyword = keywordInput.value.trim();
    if (keyword) {
      chrome.storage.local.get("keywords", (data) => {
        let keywords = data.keywords || [];
        if (!keywords.includes(keyword.toLowerCase())) {
          keywords.push(keyword.toLowerCase());
          chrome.storage.local.set({ keywords: keywords }, updateKeywordsList);
        }
      });
    }
    keywordInput.value = '';
  });

  updateKeywordsList();
});
