function selected(elem){
    var x = document.getElementsByClassName('active');
    var prev;
    for(var i=0; i<x.length; i++){
        var prev = x[i];
        x[i].className = "passiv";
    }
    elem.className = "active";

    changeOptionselection(elem, prev);
}

function changeOptionselection(elem, prev){
    var title = elem.firstChild.innerHTML;

    switch (title) {
        case "Start":
            document.getElementById("Section_1").style.display = "block";
            break;
        case "Einfuegen":
            document.getElementById("Section_2").style.display = "block";
            break;
        default:
            return;
    }

    switch (prev.firstChild.innerHTML) {
        case "Start":
            document.getElementById("Section_1").style.display = "none";
            break;
        case "Einfuegen":
            document.getElementById("Section_2").style.display = "none";
            break;
        default:
            break;
    }



}
