chrome.runtime.onInstalled.addListener(function() {
  chrome.bookmarks.create({ 'parentId': '1', 'index': 0, 'title': 'transit-bkmks' });
  chrome.storage.sync.set({color: '#3aa757'}, function() {
  });
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.bookmarks.getTree(function(roots){
    var url = 'https://stackoverflow.com' // roots[0].children[0].children[0].url
    console.log(url);
    chrome.tabs.update({'url':url}, function(tab){console.log(tab);});
    console.log(roots);
    console.log(roots[0].children[0].children);
    var bkmk_br = roots[0].children[0].children // Array
    bkmk_br.some(function(bkmk){
      if(bkmk.title=='transit-bkmks'){
        var folder = bkmk;
        console.log('I found you!', folder);
        return true;
      }
    });
  });
});

//Array(1)
//0:
//children: Array(2)
//0:
//children: Array(125)
//[0 … 99]
//0:
//children: Array(0)
//length: 0
//__proto__: Array(0)
//dateAdded: 1542548448670
//dateGroupModified: 1542548448670
//id: "1288"
//index: 0
//parentId: "1"
//title: "transit-bkmks"
