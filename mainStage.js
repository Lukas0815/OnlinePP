$(document).ready(function(){

    //getSlideCount();
    loadSlides();
    setListeners();
    alert(getXmlNode("currentSlide"));
    modifyXml();
});

function getSlideCount(){
    return getXmlNode("totalSlides");
}

function setListeners(){

        //highligths the current prevpanel
        $current = $("#prevPanelContainer div").first();
         $("#prevPanelContainer div").click(function(){
             $(".current").toggleClass("current", false);
             $(this).toggleClass("current", true);
             $current = $(this);

             //set showpanel to currentSlide
             //$current.children() accesses the <slide> element
             $("#showpanel").load("presentation.xml #" + $current.children().attr('id'));
         });
}

function loadSlides(){
    //sets the showpanel to first slide on first load
    $("#showpanel").load("presentation.xml #1");

    //creates the prevpanels by checking the amount of slides
    for(var i=0; i<getSlideCount(); i++){
        $("#prevPanelContainer").append($("<div></div>")
        .load("presentation.xml #" + (i+1)));
    }

    //sets the borders
    $("#prevPanelContainer div").toggleClass("normal");
    $("#prevPanelContainer div").first().toggleClass("current");
}

//General acces of a XML file and return its DOM object
function accessXML(filepath){
    var xml = new XMLHttpRequest();
    xml.open('GET', filepath, false);
    xml.send();
    return xml.responseText;
}

//returns the text of a node in a XML file
function getXmlNode(node){
    var xmlDoc = accessXML("presentation.xml");
    //alert($(xmlDoc).find(node).text() + " lol");
    return $(xmlDoc).find(node).text();
}



function modifyXml(){

    $.ajax({
      url:'mainStage.php',
      type: "POST",
      data: {node: "currentSlide", value: 2, file: "presentation.xml"},
      complete: function (response) {
          alert(response.responseText);
      }
  });
}
