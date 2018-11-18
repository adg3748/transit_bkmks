chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.bookmarks.getTree(function(roots){
    var url = roots[0].children[0].children[0].url
    //var url = roots[0].children[0].children[0].url.match(/(http.+)(?=\')/)[0];
      console.log(url);
      chrome.tabs.create({'url':url}, function(tab){console.log(tab);});
      console.log(roots);
  });
});
