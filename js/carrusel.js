var txt;
var cadena;
var cantidad_tarjetas = 10;

var elementos = [["1.gif","2.gif"],
                ["1.jpg","2.jpg","3.jpg","4.jpg","5.gif"],
                ["1.jpg","2.jpg","3.jpg"],
                ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.png"],
                ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"],
                ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.png","7.png"],
                ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"],
                ["1.jpg","2.jpg","3.jpg","4.png"],
                ["1.jpg","2.jpg"],
                ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg"]];

for (let index = 0; index < cantidad_tarjetas; index++) {
    document.getElementById("carrusel"+index).innerHTML += `
            <div id="carruselContainer${index}" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators" id="indicador${index}">

            </ol>

            <div class="carousel-inner" id="inner${index}">
                
            </div>

            <a class="carousel-control-prev" href="#carruselContainer${index}" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carruselContainer${index}" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>`;   
}

for (let index_elementos = 0; index_elementos < cantidad_tarjetas; index_elementos++) { 
    
    for (let index_indicador = 0; index_indicador < elementos[index_elementos].length; index_indicador++) {
        if(index_indicador == 0){
            document.getElementById("indicador"+index_elementos).innerHTML +=`
            <li data-target="#carruselContainer${index_elementos}" data-slide-to="${index_indicador}" class="active"></li>`;
        }else{
            document.getElementById("indicador"+index_elementos).innerHTML +=`
            <li data-target="#carruselContainer${index_elementos}" data-slide-to="${index_indicador}"></li>`;
        }
    }

    for (let index_inner = 0; index_inner < elementos[index_elementos].length; index_inner++) {
        if(index_inner == 0){
            document.getElementById("inner"+index_elementos).innerHTML += `
            <div class="carousel-item active">
                <img class="d-block w-100" src="imgs/${index_elementos+1}/${elementos[index_elementos][index_inner]}" alt="slider">
            </div>`;
        }else{
            document.getElementById("inner"+index_elementos).innerHTML +=`
            <div class="carousel-item">
                <img class="d-block w-100" src="imgs/${index_elementos+1}/${elementos[index_elementos][index_inner]}" alt="slider">
            </div>`;
        }
    }
}