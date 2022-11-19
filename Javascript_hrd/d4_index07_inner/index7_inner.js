
function innText(){
    let now = new Date();
    document.getElementById("current").innerText = "<em>" + now + "</em>";
}

function innHtml(){
    let now = new Date();
    document.getElementById("current").innerHTML = "<em>" + now + "</em>";
}
