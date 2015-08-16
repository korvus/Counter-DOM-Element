window.onload = function() {
    document.getElementById("allDOM").onclick = function(){

      chrome.tabs.executeScript(null,
        {code:"alert(document.getElementsByTagName('*').length);"}
      );

    }

    document.getElementById("outline").onclick = function(){
      chrome.tabs.executeScript(null,
        {file:"actions/theOutlining.js"}
      );
    }


    document.getElementById("listSpacer").onclick = function(){
      chrome.tabs.executeScript(null,
        {file:"actions/countSpacer.js"}
      );
    }

    document.getElementById("uselessDOMnodes").onclick = function(){
      chrome.tabs.executeScript(null,
        {file:"actions/useless.js"}
      );
    }


}