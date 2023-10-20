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

const formReserva = document.getElementById("form-reserva");

formReserva.addEventListener("submit", handleSubmit());

async function handleSubmit(event) {
    event.preventDefault()
    const formReserva = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: formReserva,
        headers: {
            "Accept": "application/json"
        }
    })
    if (response.ok) {
        this.reset()
        alert("Reserva realizada con exito, muchas gracias por elegirnos.")
    }
};

document.getElementById('reservarBtn').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'index.html';
    alert("Reserva realizada con exito, muchas gracias por elegirnos.");
}
)