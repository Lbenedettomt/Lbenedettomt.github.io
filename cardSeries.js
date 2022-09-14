function Card(serie) {
    let card = document.createElement("div")
    card.classList.add("cards")
    
    let poster = document.createElement("img")
    poster.src = serie.poster
    poster.alt = "Poster da série " + serie.titulo
    
    let titulo = document.createElement("p")
    titulo.innerText = serie.titulo
    
    let divNota = document.createElement("div")
    divNota.classList.add("nota")
    
    let estrela = document.createElement("span")
    estrela.classList.add("material-icons")
    estrela.classList.add("estrela")
    estrela.innerText = "star"
    
    let nota = document.createElement("span")
    nota.innerText = serie.nota
    
    divNota.appendChild(estrela)
    divNota.appendChild(nota)
    
    let botao = document.createElement("a")
    botao.classList.add("botao")
    botao.innerText = "detalhes"
    botao.onclick = function(){
        open(serie.detalhes, "_self")
    }

    card.appendChild(poster)
    card.appendChild(titulo)
    card.appendChild(divNota)
    card.appendChild(botao)

    return card
}