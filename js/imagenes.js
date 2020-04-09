var imagenes = [1,2,3,4,5,6,7,8,9,10];
var galeria = document.getElementById('galeria');
var id = 0;

for(imagen of imagenes){
    galeria.innerHTML += `
    <div class="card">
        <a href="#" data-toggle="modal" data-target="#id${id}">
            <img src="imgs/principal/${imagen}.jpeg" alt="el inicio" title="" class="card-img-top principal">
        </a>
        <div class="card-body bg-primary">
            <h5 class="card-title titulo" id=${"titulo_tarjeta"+id}></h5>
        </div>
    </div>
    <!-- modal -->
    <div class="modal fade" id="id${id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <button type="button" class="close mr-2" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <div class="modal-dialog" role="document">
        <div class="modal-content bg-primary ">
            <div class="modal-body" id="carrusel${id}">
                <h5 class="modal-title text-center titulo"  id=${"titulo_modal"+id}></h5>
               <!-- <img src="imgs/principal/${imagen}.jpeg" alt="" class="img-fluid rounded"> -->
            </div>
        </div>
        </div>
    </div>
    `

    id = id +1;
    console.log(id);
    
};

