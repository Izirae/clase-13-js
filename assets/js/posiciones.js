// let pilotos = [
//     {posicion: 0, nombre: "l. hamilton", escuderia: "mercedes", puntos: 28},
//     {posicion: 0, nombre: "g. russell", escuderia: "mercedes", puntos: 49},
//     {posicion: 0, nombre: "m. verstappen", escuderia: "red bull", puntos: 59},
//     {posicion: 0, nombre: "s. perez", escuderia: "red bull", puntos: 54},
//     {posicion: 0, nombre: "c. leclerc", escuderia: "ferrari", puntos: 86},
//     {posicion: 0, nombre: "c. sainz jr.", escuderia: "ferrari", puntos: 38},
//     {posicion: 0, nombre: "l. norris", escuderia: "mclaren", puntos: 35}];
let pilotos = []
// async function traerPilotos(){

//     await fetch('http://ergast.com/api/f1/current/driverStandings.json')

//     .then((response) => response.json())
//     .then((data) => {
//     // data.MRData.StandingsTable.StandingsLists[0].DriverStandings.forEach((race) => {
//         // console.log(race)
//     // .then( (resp) => resp.json() )
//     // .then( (data) => {
//     //     console.log(data["MRData"]["StandingsTable"]["StandingsLists"][0]["DriverStandings"][0].Driver)
//     // })
//     let pilotos = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
//         // console.log(pilotos, "pilotos")
//     return pilotos
// })
// }

function borrarTabla(){
    let columna = table.rows.length;
        for (let i = columna - 1; i >= 0; i--) {
            table.deleteRow(i);
        }
}
    
async function crearTabla(){
    
    await fetch('http://ergast.com/api/f1/current/driverStandings.json')

    .then((response) => response.json())
    .then((data) => {
    data.MRData.StandingsTable.StandingsLists[0].DriverStandings.forEach((race) => {
        pilotos.push(race)
    })
    })

    console.log(pilotos, "pilotos tabla")
    borrarTabla()
    const table = document.getElementById('table');
    
    pilotos.forEach(item => {
    
        const tr = document.createElement('tr');
    
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
    
        const pos = document.createTextNode(item.position);
        const name = document.createTextNode(item.Driver.givenName + ' ' + item.Driver.familyName)
        const esc = document.createTextNode(item.Constructors[0].name)
        const puntos = document.createTextNode(item.points)
    
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




