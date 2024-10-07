chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ keywords: ["study iq", "tmkoc", "minitv", "mx player", "south movie", "korean","study glows", "ankit awasthi", "#status", "reels", "shorts", "Sony Sab", "affairs", "drama", "food Vlog", "street food", "Jio Cinema", "Cricket", "Pahul Walia", "rj raunac", "tanay", "Dhruv Rathee", "swagger sharma", "web series", "movie", "studyiq", "yrkkh", "bollywood", "roast", "hindi knowledge show", "pakistan", "china", "Physics Wallah", "esral", "maddam sir", "russia", "song", "sonyliv", "study i" ,"tenali", "virat kohli", "Rohit Sharma", "Rohit", "TATA IPL", "RCB", "GT vs", "Darshan Raval", "Arjit singh", "T seies", "neha kakkar", "Ashish Chanchalni", "Triggered inssan", "Fukra inssan", "world affairs", "unacadmy", "csk", "t-series", "tmk", "study   q", "पंडित रामा कृष्णा", "comedian", "vlogger", "travel", "comedian", "तारक मेहता का उल्टा चश्मा"]});
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'checkTitle') {
    chrome.storage.local.get("keywords", (data) => {
      let keywords = data.keywords || [];
      for (let keyword of keywords) {
        if (message.title.toLowerCase().includes(keyword.toLowerCase())) {
          chrome.tabs.remove(sender.tab.id, () => {
            chrome.notifications.create({
              type: 'basic',
              iconUrl: 'icon.png',
              title: 'Tab Closed',
              message: `Closed tab because it contained the keyword: "${keyword}".`
            });
          });
          break;
        }
      }
    });
  }
});