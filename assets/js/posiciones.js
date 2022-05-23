let pilotos = [
    {posicion: 0, nombre: "l. hamilton", escuderia: "mercedes", puntos: 28},
    {posicion: 0, nombre: "g. russell", escuderia: "mercedes", puntos: 49},
    {posicion: 0, nombre: "m. verstappen", escuderia: "red bull", puntos: 59},
    {posicion: 0, nombre: "s. perez", escuderia: "red bull", puntos: 54},
    {posicion: 0, nombre: "c. leclerc", escuderia: "ferrari", puntos: 86},
    {posicion: 0, nombre: "c. sainz jr.", escuderia: "ferrari", puntos: 38},
    {posicion: 0, nombre: "l. norris", escuderia: "mclaren", puntos: 35}];

function borrarTabla(){
    let columna = table.rows.length;
        for (let i = columna - 1; i >= 0; i--) {
            table.deleteRow(i);
        }
}
    
function crearTabla(){
    
    borrarTabla()
    
    const table = document.getElementById('table');
    
    pilotos.forEach(item => {
    
        const tr = document.createElement('tr');
    
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
    
        const pos = document.createTextNode(item.posicion);
        const name = document.createTextNode(item.nombre)
        const esc = document.createTextNode(item.escuderia)
        const puntos = document.createTextNode(item.puntos)
    
        td1.appendChild(pos);
        td2.appendChild(name)
        td3.appendChild(esc)
        td4.appendChild(puntos)
    
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
    
        table.appendChild(tr);
    })
}
    
function buscarPiloto() {
    
    borrarTabla()
    
    let input = document.getElementById("buscar");
    filtro = input.value.toLowerCase();
    pilotos.forEach(item => {
    if (item.nombre.indexOf(filtro) > -1) {
        const tr = document.createElement('tr');
    
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
    
        const pos = document.createTextNode(item.posicion);
        const name = document.createTextNode(item.nombre)
        const esc = document.createTextNode(item.escuderia)
        const puntos = document.createTextNode(item.puntos)
    
        td1.appendChild(pos);
        td2.appendChild(name)
        td3.appendChild(esc)
        td4.appendChild(puntos)
    
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
    
        table.appendChild(tr);
        }
    })
}
    

function actualizarDatos(){
    let pilotosLocal = JSON.parse(sessionStorage.getItem('pilotos'))
        pilotosLocal !== null ? pilotos = [...pilotosLocal] : console.log(pilotosLocal, "esta vacio")
}    

function extTopTres (){

    const [piloto1, piloto2, piloto3] = pilotos.map(item => item.nombre)
    console.log("Desestructuracion de pilotos", piloto1, piloto2, piloto3)
    sessionStorage.setItem("topTresN", JSON.stringify([piloto1, piloto2, piloto3]));

    const [esc1, esc2, esc3] = pilotos.map(item => item.escuderia)
    console.log("Desestructuracion de pilotos", esc1, esc2, esc3)
    sessionStorage.setItem("topTresE", JSON.stringify([esc1, esc2, esc3]));

    const [puntos1, puntos2, puntos3] = pilotos.map(item => item.puntos)
    console.log("Desestructuracion de pilotos", puntos1, puntos2, puntos3)
    sessionStorage.setItem("topTresP", JSON.stringify([puntos1, puntos2, puntos3]));
}

actualizarDatos()
console.log(pilotos)

pilotos.sort((a, b) => {return b.puntos - a.puntos;});

extTopTres()

for(let i = 0; i < pilotos.length; i++){
    pilotos[i].posicion = i + 1
}

crearTabla()

let boton = document.getElementById("botonAdd")

boton.onclick = () => {
    sessionStorage.setItem("pilotos", JSON.stringify(pilotos));
    window.location.href = "../views/login.html"
}

const search = document.getElementById("buscar")
search.addEventListener("keypress", function onEvent(evento) {
    if (evento.key === "Enter") buscarPiloto();
});

const pilotos1 = {...pilotos}
console.log(pilotos1, "spread de pilotos")




