var parrafos;
var archivo = new XMLHttpRequest();
var index = 0;
archivo.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        parrafos = this.responseText.split("|");
        for(parrafo of parrafos){
            document.getElementById("carrusel"+index).innerHTML += `
            ${parrafo}
            `;
            index = index+1;
        }    
    }
};
archivo.open("GET", "js/parrafos.txt", true);
archivo.send();