const imagem_enviada = document.querySelector("#imagem_enviada");
let imagem_carregada = '';

imagem_enviada.addEventListener("change", function(){
    const leitor = new FileReader();
    leitor.addEventListener("load", () => {
        imagem_carregada = leitor.result;
        document.querySelector("#mostrar_imagem").style.backgroundImage = `url(${imagem_carregada})`
    })
    leitor.readAsDataURL(this.files[0]);
})