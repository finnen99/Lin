var xhttp = new XMLHttpRequest();
var txt;
var id = 0;
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        txt = this.responseText.split(",");

        for (let index = 0; index < txt.length; index++) {
            document.getElementById("titulo_tarjeta"+id).innerHTML = txt[index];
            document.getElementById("titulo_modal"+id).innerHTML = txt[index];
            id = id +1;
        }
    }
};
xhttp.open("GET", "js/titulos.txt", true);
xhttp.send();


