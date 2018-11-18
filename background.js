chrome.runtime.onInstalled.addListener(function() {
  chrome.bookmarks.create({ 'parentId': '1', 'index': 0, 'title': 'transit-bkmks' });
  chrome.storage.sync.set({color: '#3aa757'}, function() {
  });
});
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.bookmarks.getTree(function(roots){
//    var url = roots[0].children[0].children[0].url
//      console.log(url);
//      chrome.tabs.create({'url':url}, function(tab){console.log(tab);});
      console.log(roots);
  });
});
