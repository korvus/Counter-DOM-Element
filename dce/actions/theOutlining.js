if(myElements){
  
  for (var i = 0; i < myElements.length; i++) {
    myElements[i].style.outline = "none";
  }
  myElements = undefined;

}else{

  var myElements = document.querySelectorAll("*");

  //https://html.spec.whatwg.org/multipage/indices.html#element-content-categories
  var childrenPhrasing = ['abbr','b','bdi','bdo','button','cite','code','data','dfn','em','h1','h2','h3','h4','h5','h6','i','kbd','label','legend','mark','meter','output','p','pre','progress','q','rp','rt','ruby','s','samp','small','span','strong','sub','summary','sup','time','u','var'];
  var tableElts = ['table','tr','td','th','thead','tbody','tfoot','caption','colgroup'];

  var color = "0f65da";
  for (var i = 0; i < myElements.length; i++) {


    //console.log(myElements[i]+" --> "+myElements[i].nodeName);
    /*
    if(myElements[i].nodeName=="TABLE"){

    }
    */
    if(childrenPhrasing.indexOf(myElements[i].nodeName.toLowerCase()) != -1){
      color = "ceda0f";
    }else if(tableElts.indexOf(myElements[i].nodeName.toLowerCase()) > -1){
      color = "E03926";
    }else{
      color = "0f65da";
    }

    myElements[i].style.outline = "1px solid #"+color;
  }

}
