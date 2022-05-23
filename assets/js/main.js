
let primerosTres = []

function topTres(){

    let nom = ''
    let esc = ''
    let pun = ''

    let nomTopTres = JSON.parse(sessionStorage.getItem('topTresN'))
        nomTopTres !== null ? nom = [...nomTopTres] : console.log(nom, "esta vacio")

    let escTopTres = JSON.parse(sessionStorage.getItem('topTresE'))
        escTopTres !== null ? esc = [...escTopTres] : console.log(esc, "esta vacio")
    
    let punTopTres = JSON.parse(sessionStorage.getItem('topTresP'))
        punTopTres !== null ? pun = [...punTopTres] : console.log(pun, "esta vacio")

    console.log(nom, esc, pun)

    for(let i = 0; i<nom.length; i++){
        primerosTres.push({nombre: nom[i], escuderia: esc[i], puntos: pun[i]})
    }

    console.log(primerosTres)
}

topTres()