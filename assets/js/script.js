const imagem_enviada = document.querySelector("#imagem_enviada");
let imagem_carregada = '';
let urlImagem = '';
let botaoIncluir = document.getElementById("submeter_informacoes");


// Recebe a imagem e inclui ela na página web
imagem_enviada.addEventListener("change", function(){
    const leitor = new FileReader();
    leitor.addEventListener("load", () => {
        
        imagem_carregada = leitor.result;
        
        document.querySelector("#mostrar_imagem").style.backgroundImage = `url(${imagem_carregada})`
        
    })
    leitor.readAsDataURL(this.files[0]);

    urlImagem = document.getElementById("mostrar_imagem").style

    return urlImagem
    


})



// Pegar os itens preenchidos da página e adicionar eles ao localStorage
botaoIncluir.addEventListener("click", function(){

    //const leitor = new FileReader();
    //imagem_carregada = leitor.result;
    let urlFoto = urlImagem
    let dataFoto = document.getElementById("data_foto");
    let textoDescricao = document.getElementById("texto_descricao");
    let tipoPlanta = document.getElementById("tipo_plantacao");
    
    let dadosLocais = JSON.parse(localStorage.getItem("dados_planta"));
    
    if(dadosLocais == null){
        localStorage.setItem("dados_planta", "[]");
        dadosLocais = [];
    }
    
    let auxRegistro ={
        
        urlFoto: `${imagem_carregada}`,
        dataFoto: dataFoto.value,
        textoDescricao: textoDescricao.value,
        tipoPlanta: tipoPlanta.value
    }

    dadosLocais.push(auxRegistro);
    localStorage.setItem("dados_planta", JSON.stringify(dadosLocais));

    urlFoto.value = "";
    dataFoto.value = "";
    textoDescricao.value = "";
    tipoPlanta.value = "";
})




