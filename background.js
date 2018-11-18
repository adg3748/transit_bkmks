var bkmk_num = 0;

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({key: 0}, function() {
    console.log('Value is set to ' + '0');
  });
  chrome.bookmarks.getTree(function(roots){
    var bkmk_br = roots[0].children[0].children // Array
    var folder;
    if(!bkmk_br.some(function(bkmk){ // if there is no transit-bkmks folder
      if(bkmk.title=='transit-bkmks'){
        folder = bkmk;
        return true;
      }
    })){
      chrome.bookmarks.create({ 'parentId': '1', 'index': 0, 'title': 'transit-bkmks' });
    }
  });
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.bookmarks.getTree(function(roots){
    var bkmk_br = roots[0].children[0].children // Array
    bkmk_br.some(function(bkmk){
      if(bkmk.title=='transit-bkmks'){
        folder = bkmk;
        return true;
      }
    });
    var len = folder.children.length;
    var num = bkmk_num % len;
    var url = folder.children[num].url;
    bkmk_num += 1;
    chrome.tabs.update({ 'url': url }, function(tab){});
  });
});

//  chrome.storage.sync.set({key: bkmk_num}, function() {
//    console.log('=', 'Value is set to ' + bkmk_num);
//  });


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
