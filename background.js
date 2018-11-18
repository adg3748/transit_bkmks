chrome.runtime.onInstalled.addListener(function() {
  chrome.bookmarks.getTree(function(roots){
    var bkmk_br = roots[0].children[0].children // Array
    var $folder;
    if(!bkmk_br.some(function(bkmk){ // if there is no transit-bkmks folder
      if(bkmk.title=='transit-bkmks'){
        $folder = bkmk;
        console.log('I found you!', $folder);
        return true;
      }
    })){
      chrome.bookmarks.create({ 'parentId': '1', 'index': 0, 'title': 'transit-bkmks' });
    }
  });
  chrome.storage.sync.set({color: '#3aa757'}, function() {
  });
});

chrome.browserAction.onClicked.addListener(function(tab) {
  var i = 0;
  chrome.bookmarks.getTree(function(roots){
    var bkmk_br = roots[0].children[0].children // Array
    var $folder;
    bkmk_br.some(function(bkmk){
      if(bkmk.title=='transit-bkmks'){
        $folder = bkmk;
        console.log('I found you!', $folder);
        return true;
      }
    });
    var url = $folder.children[i].url;
    console.log(url);
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
