
function criaElemento(tipoElemento){
    dados  = JSON.parse(localStorage.dados_planta);
    let quantidade = 0;
    let localizacaoElemento = document.getElementById('div_tipo')
    let counter = 0

    dados.forEach(element => {

        if(tipoElemento == element.tipoPlanta){
            
            let lineBreak = document.createElement("br")

            let novaImagem = document.createElement('img');
            novaImagem.id = `imagem${counter}`
            novaImagem.src = `${element.urlFoto}`
            localizacaoElemento.appendChild(novaImagem)
            localizacaoElemento.appendChild(lineBreak)


            let novaData = document.createElement('input');
            novaData.id = `data${counter}`
            novaData.type = 'date'
            localizacaoElemento.appendChild(novaData)
            localizacaoElemento.appendChild(lineBreak)


            let novaDescricao = document.createElement('input');
            novaDescricao.id = `descricao${counter}`
            novaDescricao.type = 'text'
            localizacaoElemento.appendChild(novaDescricao)
            localizacaoElemento.appendChild(lineBreak)

            let novoTipo = document.createElement('input');
            novoTipo.id = `tipo${counter}`
            novoTipo.type = 'text'
            localizacaoElemento.appendChild(novoTipo)
            localizacaoElemento.appendChild(lineBreak)

            let botaoDeletar = document.createElement('button');
            botaoDeletar.setAttribute("onclick", `excluirElemento(${counter})`);
            botaoDeletar.id = `deletar${counter}`
            botaoDeletar.innerHTML = `Excluir`
            botaoDeletar.className = `#botao_deletar`
            localizacaoElemento.appendChild(botaoDeletar)
            localizacaoElemento.appendChild(lineBreak)

            let botaoAtualizar = document.createElement('button');
            botaoAtualizar.setAttribute("onclick", `atualizarElemento(${counter})`);
            botaoAtualizar.id = `atualizar${counter}`
            botaoAtualizar.innerHTML = `Atualizar`
            botaoAtualizar.className = `#botao_atualizar`
            localizacaoElemento.appendChild(botaoAtualizar)
            localizacaoElemento.appendChild(lineBreak)

            preencheDados(counter)

        }

        counter++
        
    })


  

}

// Preenchimento dos campos na tela
function preencheDados(p1){
    dados  = JSON.parse(localStorage.dados_planta)
    document.getElementById(`imagem${p1}`).value = dados[p1].urlFoto
    document.getElementById(`data${p1}`).value = dados[p1].dataFoto
    document.getElementById(`descricao${p1}`).value = dados[p1].textoDescricao
    document.getElementById(`tipo${p1}`).value = dados[p1].tipoPlanta

    return dados

}

function excluirElemento(posicao){
    dados[posicao].urlFoto = ''
    dados[posicao].dataFoto = ''
    dados[posicao].textoDescricao = ''
    dados[posicao].tipoPlanta = ''

    localStorage.setItem("dados_planta", JSON.stringify(dados));
}

function atualizarElemento(posicao){
    
    window.open('index.html');
    preencheDados(posicao);
    
    /* 
    dados[posicao].urlFoto = ''
    dados[posicao].dataFoto = ''
    dados[posicao].textoDescricao = ''
    dados[posicao].tipoPlanta = ''

    localStorage.setItem("dados_planta", JSON.stringify(dados)); 
    */
}