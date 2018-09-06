
let el = document.getElementById('element');
let el2 = document.getElementById('element2');
let body = document.getElementsByTagName('body');
el.innerHTML = '<p><a class="waves-effect waves-light btn-large" id="alawwa" href="#">Alawwa</a></p>';
el2.innerHTML = '<p><a class="waves-effect waves-light blue darken-1 btn-large" id="maho" href="#"> Maho</a></p>';
document.getElementById('alawwa').onclick = function (e) {
    e.preventDefault();
    document.body.innerHTML += '<webview id="alawwa" class="dps" src="https://www.google.com"></webview>';
    document.getElementById("element").style.display = "none";
    document.getElementById("element2").style.display = "none";
    document.getElementById("panel").style.display = "none";
}
document.getElementById('maho').onclick = function (e) {
    e.preventDefault();
    document.body.innerHTML += '<webview id="alawwa" class="dps" src="https://www.yahoo.com"></webview>';
    document.getElementById("element").style.display = "none";
    document.getElementById("element2").style.display = "none";
    document.getElementById("panel").style.display = "none";
}