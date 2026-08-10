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
  */import { useState } from "react"

const estilo = {
  tarefa: {
    backgroundColor: "#dac",
    padding: "10px",
    borderRadius: "10px",
    margin: "20px",
  },
  textoBotao: {
    color: "#eee",
    fontSize: "16px",
  },
  botao: {
    borderRadius: "5px",
    backgroundColor: "#505560",
    padding: "10px",
    margin: "10px",
  },
}

export default function Atv02MuitosItens(){
const [resultado, setResultado] = useState(<p>Os dados do usuário aparecerão no lugar deste texto</p>)
    async function Carregar() {
      await fetch(
        'https://jsonplaceholder.typicode.com/todos', 
        { method: 'GET', }
      )
      .then((resposta) => {
          console.log(resposta)
          return resposta.json()
        })
      .then((resultado) => {
        
        const lista = <>
          {resultado.map(tarefa => {

            let status = ""
            if (tarefa.status == true){
              status = "feito"
            }
            else{
              status = "a fazer"
            }
            return <div 
            style={{margin: "10px", padding: "5px", backgroundColor: "#a89", borderRadius: "5px",}}>
              <p>{tarefa.id} - {tarefa.title}: {status}</p>
            </div>
          })}
        </>
          setResultado(lista)
      })
    }
  return(
    <div style={estilo.tarefa}>
      <button style={estilo.botao} 
      onClick={() => Carregar()}><p style={estilo.textoBotao}>Clique abaixo para carregar várias atividades</p></button>
      {resultado}
    </div>
  )
}

