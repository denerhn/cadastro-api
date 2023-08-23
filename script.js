function viaCep(){
let valorCEP = document.querySelector('#cep').value; 

fetch('https://viacep.com.br/ws/' + valorCEP + '/json/')
.then(function(respostaAPI) {
    console.log('Resposta da API', respostaAPI)

    respostaAPI.json()
    .then(function(retornoEmJson){
        console.log('retorno em JSON', retornoEmJson)

        document.querySelector('#rua').value = retornoEmJson.logradouro;
        document.querySelector('#bairro').value = retornoEmJson.bairro;
        document.querySelector('#uf').value = retornoEmJson.uf;
        document.querySelector('#localidade').value = retornoEmJson.localidade;
    })
})

}
function Cadastrar(){
    let campos = document.querySelectorAll('input');

    for(let i = 0; i < campos.length; i++) {
        if(campos[i].value === ""){
            alert('Preencha o campo: '+ campos[i].id)
            return
        }
    }

    alert('Dados enviados com sucesso');
    document.querySelectorAll('input').value ='';
}