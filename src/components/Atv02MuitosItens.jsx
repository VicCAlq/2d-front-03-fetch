/*
  * ATIVIDADE 02: MUITOS ITENS
  *
  * Crie e exporte por padrão um componente chamado Atv02MuitosItens, que deve ter
  * uma <div>, e dentro desta <div> um <button> com o conteúdo 
  * "Clique abaixo para carregar várias atividades", que quando pressionado
  * fará uma requisição usando "fetch" para a URL abaixo:
  *
  * https://jsonplaceholder.typicode.com/todos
  *
  * Esta URL envia uma lista de objetos JSON, cada um com as propriedades:
  * userId: número inteiro
  * id: número inteiro
  * title: texto
  * completed: booleano
  *
  * Ao receber este conteúdo, ele deve ser exibido da seguinte forma
  * dentro de uma <div> abaixo do <button>, onde cada item será
  * um <p> dentro dessa view:
  * [id] - [title]: [status]
  * Os colchetes indicam que deve se tratar de uma variável, e não
  * do texto dentro deles.
  * O valor de "status" deve ser "feito" se completed for true, 
  * ou "a fazer" se completed for false
  */


import {useState} from "react"

export default  function Atv02MuitosItens(){

  const [comentario, setComentario] = useState ()

  async function carregarComentario() {
    await fetch(
      "https://jsonplaceholder.typicode.com/todos",
      {method: "GET"}
    )                                                                                                                                                                                                                                                                                                                                                                     

    .then((resposta) => {
      if(!resposta.ok){
        throw new Error(`Error na requisição: ${resposta.status}`);
      }
      return resposta.json()  
    })
    .then((comentariosRecebidos) => {
      setComentario(<div>
        {comentariosRecebidos.map((comentario) => {
          return(<div  key = {comentario.id}>
            <p>
            {comentario.id} - {comentario.title}: {""}
            {comentario.completed ? "feito" : "a fazer"}</p>
          </div>)
        })}

      </div>)

      })
      .catch ((erro) => {
        window.alert(erro)
    })
  }
  return(
    <div>
      <button onClick={()=> carregarComentario() }>
       Clique abaixo para carregar várias atividades
      </button>
      {comentario}
    </div>
  )
}