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

acaoBotao.addEventListener("click", function(){

    let dataFoto = document.getElementById("data_foto").value;
    let textoDescricao = document.getElementById("texto_descricao").value;
    let tipoPlanta = document.getElementById("tipo_plantacao").value

    
    
    
})    
    
})