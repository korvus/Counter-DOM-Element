chrome.commands.onCommand.addListener(function(command){
  chrome.tabs.update({}, function(tab) {
    if (command == 'calculate-DOM'){

      chrome.tabs.executeScript(null,
        {code:"alert(document.getElementsByTagName('*').length);"}
      );

    }
  });
});