
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>

function validarDiaLaborable(inputFecha) {
let fechaSeleccionada = new Date(inputFecha.value);
let diaabierto = fechaSeleccionada.getDay();
if (diaabierto === 0 || diaabierto === 6) {
document.getElementById("mensajeError").textContent = "Ese dia la cancha no esta abierta";
inputFecha.value = ""; 
} else {
document.getElementById("mensajeError").textContent = "";
}
    }


    let reservarBtn = document.getElementById("reservarBtn");

    function reservarBoton(){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'La reserva ha sido confirmada con éxito.',
            showConfirmButton: true,
            timer: 1500,
        })
        
        setTimeout(function() {
            location.href = "index.html";
        }, 3000);
    }
    
    reservarBtn.addEventListener('click', ()=> {
        preventDefault(); // Esto cancela el comportamiento del clic
        Toastify({
        
            text: "Reservado con exito.",
            
            duration: 2000,
            style:{
                fontFamily: "Verdana",
                fontSize: "15px",
                color: "White",
                border: "1px",
                borderStyle: "solid",
                }
    
            }).showToast();
});