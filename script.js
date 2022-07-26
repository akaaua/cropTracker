const imagem_enviada = document.querySelector("#imagem_enviada");
let imagem_carregada = '';
let acaoBotao = document.getElementById("submeter_informacoes");


imagem_enviada.addEventListener("change", function(){
    const leitor = new FileReader();
    leitor.addEventListener("load", () => {
        
        imagem_carregada = leitor.result;
        document.querySelector("#mostrar_imagem").style.backgroundImage = `url(${imagem_carregada})`
        
    })
    leitor.readAsDataURL(this.files[0]);

})

acaoBotao.addEventListener("click", function(){


    let dataFoto = document.getElementById("data_foto");
    let textoDescricao = document.getElementById("texto_descricao");
    let tipoPlanta = document.getElementById("tipo_plantacao");

    let dadosLocais = JSON.parse(localStorage.getItem("dados_planta"));
    
    if(dadosLocais == null){
        localStorage.setItem("dados_planta", "[]");
        dadosLocais = [];
    }
    
    let auxRegistro ={ 
        dataFoto: dataFoto.value,
        textoDescricao: textoDescricao.value,
        tipoPlanta: tipoPlanta.value
    }

    dadosLocais.push(auxRegistro);
    localStorage.setItem("dados_planta", JSON.stringify(dadosLocais));

    dataFoto.value = "";
    textoDescricao.value = "";
    tipoPlanta.value = "";
})

function preencheCampos(){

    document.getElementById("data_foto").value = JSON.parse(localStorage.getItem("dados_planta"))
    document.getElementById("texto_descricao").value = JSON.parse(localStorage.auxRegistro.textoDescricao)
    document.getElementById("tipo_plantacao").value = JSON.parse(localStorage.auxRegistro.tipoPlanta)

}