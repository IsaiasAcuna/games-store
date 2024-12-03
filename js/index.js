
let juegos = [ //Estrutura Array
    { //Elemento 1 | posicion 0
        nombre: "Uncharted 4",
        precio: 5000,
        id: 1 //Dato clave 
    },
    { //Elemento 2 | posicion 1
        nombre: "The Last of Us",
        precio: 7000,
        id: 2
    },
    { //Elemento 3 | posicion 2
        nombre: "GTA V",
        precio: 13000,
        id: 3
    },
    {
        nombre: "The Last of Us: Part II",
        precio: 18000,
        id: 4 
    },
    {
        nombre: "Spider-Man",
        precio: 10000,
        id: 5 
    },
    {
        nombre: "God of War",
        precio: 12000,
        id: 6 
    },
]

function cargarProducto(posicion){
	const carrito = document.querySelector("#carritto");
	//const infoProducto = document.createElement("div");
	const textoInfo = document.getElementById("textoInfo")
    const infoProducto = document.createElement("div");
	const btnVaciar = document.querySelector(".noVisible")

	if(textoInfo != null){
		textoInfo.remove()
		btnVaciar.style.display = "block";
	}

	infoProducto.innerHTML = `
		<h4>${juegos[posicion].nombre}</h4>
		<p>$${juegos[posicion].precio}</p>
	`
	carrito.appendChild(infoProducto)
}

function vaciarCarrito(){
	const carrito = document.getElementById("carritto");
	carrito.innerHTML = `<p id="textoInfo">Carrito vacio</p>
						<div class="noVisible">
							<button onclick="vaciarCarrito()" type="button" class="btn btn-danger">Vaciar
							</button>
						</div>`
}