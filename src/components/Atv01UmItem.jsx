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
  */import { useState } from 'react'

const estilo = {
  usuario: {
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

export default function Atv01UmItem (){
  const [resultado, setResultado] = useState(<p>Os dados do usuário aparecerão no lugar deste texto</p>)

  async function Carregar() {
      await fetch(
        'https://jsonplaceholder.typicode.com/todos/1', 
        { method: 'GET', }
      )
      .then((resposta) => {
          console.log(resposta)
          return resposta.json()
        })
        .then((resultado) => {
          console.log(resultado)
          let status = ""
          if(resultado.status == true){
            status = "feito"
          }
          else{
            status = "a fazer"
          }
          const usuario = <div 
          style={{margin: "10px", padding: "5px", backgroundColor: "#a89", borderRadius: "5px",}}>
            <p>{resultado.id} - {resultado.title}: {status}</p>
          </div>

          setResultado(usuario)
        })
      }
    
    
    return(
      <div style={estilo.usuario}>
        <p>Um item:</p>
        <button style={estilo.botao} onClick={() => Carregar()}><p style={estilo.textoBotao}>Clique abaixo para carregar uma atividade</p></button>
        {resultado}
      </div>
    )
}
