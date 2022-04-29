const valorDigitado = document.querySelector('#cambio')
const Resultado = document.querySelector("#Resultado")
const botaoCalular = document.querySelector('#botaoCalcular') 
const url = 'https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=2e24d37a9602fdd9e46a'
let Moeda = document.forms['cambio']['valor']
let valor = document.querySelector('#valor')
let dolar = document.querySelector('#dolar')
let span = Moeda.nextSibling.nextSibling
botaoCalular.onclick = aoClicarNoBotao


function transformarEmJson(response) {
    return response.json()
}

async function aoClicarNoBotao(event){
    event.preventDefault()
    const dados = await fetch(url)
    .then(transformarEmJson)
    const {USD_BRL} = dados
    dolar.innerHTML = 'Valor de $' + Moeda.value + '='
    cambiado = Moeda.value * USD_BRL
    Resultado.innerHTML = ' R$' + parseFloat(cambiado.toFixed(2))
    let span = Moeda.nextSibling.nextSibling
    if(valor.value){
        valor.classList.remove('valorError');
        dolar.innerHTML = 'Valor de $' + Moeda.value + '='
        Resultado.innerHTML = ' R$' + parseFloat(cambiado.toFixed(2))  
    } else if(!valor.value){
        valor.classList.add('valorError')
        dolar.innerHTML = ''
        Resultado.innerHTML = 'Digite algum valor'
    }
    if(valor.value < 0){
        valor.classList.add('negativeError')
        dolar.innerHTML = ''
        Resultado.innerHTML = 'Sem numeros negativos'
    } else if(valor.value){
        valor.classList.remove('negativeError');
        dolar.innerHTML = 'Valor de $' + Moeda.value + '='
        Resultado.innerHTML = ' R$' + parseFloat(cambiado.toFixed(2)) 
    }
    valor.value = ''
}
