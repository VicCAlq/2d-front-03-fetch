/*
  * ATIVIDADE 04: TRATAR ERROS DE MUITOS
  *
  * Crie e exporte por padrão um componente chamado Atv04TratarErrosDeMuitos, 
  * que deve ter uma <div>, e dentro desta <div> um <button> com o 
  * conteúdo "Clique abaixo para carregar uma atividade", que quando 
  * pressionado fará uma requisição usando "fetch" para a URL abaixo:
  *
  * https://jsonplaceholder.typicode.com/comments
  *
  * Esta URL envia uma lista de objetos JSON, cada um com as propriedades:
  * postId: número inteiro
  * id: número inteiro
  * name: texto
  * email: texto
  * body: texto
  *
  * Ao receber este conteúdo, você deve tratar ele dentro do primeiro ".then"
  * para verificar se existe um "ok" dentro da resposta, e tratar por erros
  * de requisição após o segundo ".then" dentro de um ".catch".
  *
  * No segundo ".then" o valor recebido deve ser exibido da forma abaixo:
  * Dentro de um elemento <div> abaixo do <button>, cada item será
  * exibido dentro de sua própria <div> com o conteúdo abaixo:
  * <p>[postId]: [id] - [email]</p>
  * <p>[name]</p>
  * <p>[body]</p>
  * Os colchetes indicam que deve se tratar de uma variável, e não
  * do texto dentro deles.
  */

import { useState } from 'react'

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


export default function Atv04TratarErrosDeMuitos(){
const [resultado, setResultado] = useState(<p>Os dados do usuário aparecerão no lugar deste texto</p>)

  async function carregarUsuario(){
    await fetch(
     'https://jsonplaceholder.typicode.com/comments',
     {method: 'GET',}
    )
    .then((resposta)=>{
      if(!resposta.ok){
        throw new Error (`Erro na requisição! Status: ${resposta.status}`);
      }
      return resposta.json()
    })
    .then((resul)=>{
      console.log(resul)
      const listausu = <div> {resul.map((resul) =>
      {
         return <div  style={{
        margin: "10px", padding: "5px", backgroundColor: "#a89", borderRadius: "5px",
      }}>
        <p>{resul.postId} - {resul.id}: {resul.email}</p>
        <p>{resul.name}</p>
        <p>{resul.body}</p>
      </div>
      })}
      </div>
      setResultado(listausu)
    })
    .catch(error => {
      console.log("Erro: ", error)
    })
  }
  return( 
      <div style={estilo.usuario}>

      <p>
        Carregue o usuário abaixo:
      </p>

      <button style={estilo.botao} onClick={() => carregarUsuario()}>
        <p style={estilo.textoBotao}>Carregar usuário</p>
      </button>

      <div>
      {resultado}
      </div>
      
    </div>
  )
}