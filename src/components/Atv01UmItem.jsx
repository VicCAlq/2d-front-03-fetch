/*
  * ATIVIDADE 01: UM ITEM
  *
  * Crie e exporte por padrão um componente chamado Atv01UmItem, que deve ter
  * uma <div>, e dentro desta <div> um <button> com o conteúdo 
  * "Clique abaixo para carregar uma atividade", que quando pressionado
  * fará uma requisição usando "fetch" para a URL abaixo:
  *
  * https://jsonplaceholder.typicode.com/todos/1
  *
  * Esta URL envia um objeto JSON com as propriedades:
  * userId: número inteiro
  * id: número inteiro
  * title: texto
  * completed: booleano
  *
  * Ao receber este conteúdo, ele deve ser exibido da seguinte forma
  * dentro de um elemento <p> abaixo do <button>:
  * [id] - [title]: [status]
  * Os colchetes indicam que deve se tratar de uma variável, e não
  * do texto dentro deles.
  * O valor de "status" deve ser "feito" se completed for true, 
  * ou "a fazer" se completed for false
  */
import { useState } from 'react'

export default function Atv01UmItem() {
  const [resultado, setResultado] = useState(<p>Os dados do usuário aparecerão no lugar deste texto</p>)
async function carregamentoDeUsuario(params) {
  
}
  await fetch (
    https://jsonplaceholder.typicode.com/todos/1
    { method: 'GET', }
  )
  .then((resposta) => {
      console.log(resposta)
      return resposta.json()
  })
  .then((resultado) => {
    console.log(resultado)
    const usuario = <div style={{
        margin: "10px", padding: "5px", backgroundColor: "#a89", borderRadius: "5px",
      }}>
        <p>id: {resultado.email}</p>
        <p>title: {resultado.website}</p>
        <p>status: {resultado.}</p>
      </div>
  })
  
  <div>
    <button style={estilo.botao} onClick={() => carregamentoDeUsuario()}></button>
  </div>
}