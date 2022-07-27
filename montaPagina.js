
function criaElemento(){
    dados  = JSON.parse(localStorage.dados_planta);
    let quantidade = '';
    let localizacaoElemento = document.getElementById('div_tipo')
    
    
    while (quantidade < dados.length) {
        let lineBreak = document.createElement("br")
        

        let novaData = document.createElement('input');
        novaData.id = `data${quantidade}`
        novaData.type = "date"
        localizacaoElemento.appendChild(novaData)
        localizacaoElemento.appendChild(lineBreak)
        

        let novaDescricao = document.createElement('input');
        novaDescricao.id = `descricao${quantidade}`
        novaDescricao.type = 'text'
        localizacaoElemento.appendChild(novaDescricao)
        localizacaoElemento.appendChild(lineBreak)

        let novoTipo = document.createElement('select');
        novoTipo.id = `tipo${quantidade}`
        novoTipo.type = 'select'
        localizacaoElemento.appendChild(novoTipo)
        localizacaoElemento.appendChild(lineBreak)

        quantidadeAnterior = quantidade
        quantidade++
        return preencheData(quantidadeAnterior)
        

    }
    
}


function preencheData(p1){
    dados  = JSON.parse(localStorage.dados_planta)
    document.getElementById(`data${p1}`).value = dados[p1].dataFoto

}

// Preenchimento dos campos na tela
function preencheDados(){
    dados  = JSON.parse(localStorage.dados_planta)
    document.getElementById('p1').value = dados[p1].dataFoto
    document.getElementById('p1').value = dados[p1].textoDescricao
    document.getElementById('p1').value = dados[p1].tipoPlanta

}

