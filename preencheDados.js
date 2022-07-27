let cropsCheck = document.getElementById("crops_link")




// Preenchimento dos campos na tela - Em Andamento
function preencheDados(){
    dados  = JSON.parse(localStorage.dados_planta)
    document.getElementById("data_foto_crop").value = dados[0].dataFoto
    document.getElementById("texto_descricao_crop").value = dados[0].textoDescricao
    document.getElementById("tipo_plantacao_crop").value = dados[0].tipoPlanta

}