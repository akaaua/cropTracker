
// Preenchimento dos campos na tela
function preencheDados(){
    dados  = JSON.parse(localStorage.dados_planta)
    document.getElementById("data_foto_crop").value = dados[0].dataFoto
    document.getElementById("texto_descricao_crop").value = dados[0].textoDescricao
    document.getElementById("tipo_plantacao_crop").value = dados[0].tipoPlanta

}