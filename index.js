var setaDirteita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsqueda = window.document.getElementById("seta-esquerda") 


function RolarParaDireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaDirteita.style = "display:none"
    setaEsqueda.style = "display:flex; margin-top:55px"
}

function RolaParaEsquerda() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setaDirteita.style = "display:flex; margin-top:55px"
    setaEsqueda.style = "display:none"
}