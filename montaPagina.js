
function criaElemento(tipoElemento){
    dados  = JSON.parse(localStorage.dados_planta);
    let quantidade = 0;
    let localizacaoElemento = document.getElementById('div_tipo')
    
    for (quantidade = 0; dados.length; quantidade++) {
        while (tipoElemento == dados[quantidade].tipoPlanta) {
            let lineBreak = document.createElement("br")
    
            let novaImagem = document.createElement('img');
            novaImagem.id = `imagem${quantidade}`
            novaImagem.src = `${dados[quantidade].urlFoto}`
            localizacaoElemento.appendChild(novaImagem)
            localizacaoElemento.appendChild(lineBreak)
            
    
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
    
            let novoTipo = document.createElement('input');
            novoTipo.id = `tipo${quantidade}`
            novoTipo.type = 'text'
            localizacaoElemento.appendChild(novoTipo)
            localizacaoElemento.appendChild(lineBreak)
    
            preencheDados(quantidade)

            quantidade++
    
            
    
        }
        
    }
    
    

}

// Preenchimento dos campos na tela
function preencheDados(p1){
    dados  = JSON.parse(localStorage.dados_planta)
    document.getElementById(`imagem${p1}`).value = dados[p1].urlFoto
    document.getElementById(`data${p1}`).value = dados[p1].dataFoto
    document.getElementById(`descricao${p1}`).value = dados[p1].textoDescricao
    document.getElementById(`tipo${p1}`).value = dados[p1].tipoPlanta

}

