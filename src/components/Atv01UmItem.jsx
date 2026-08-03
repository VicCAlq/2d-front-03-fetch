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
 
import { useState } from 'react';
export default function Atv01UmItem() {
  const [resultado, setResultado] = useState(<p>A atividade carregada aparecerá aqui.</p>);
  async function carregarAtividade() {
    await fetch('https://jsonplaceholder.typicode.com/todos/1', { method: 'GET' })
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error(`Erro na requisição! Status: ${resposta.status}`);
        }
        return resposta.json();
      })
      .then((dados) => {
        const status = dados.completed ? "feito" : "a fazer";
        setResultado(<p>{dados.id} - {dados.title}: {status}</p>);
      })
      .catch((error) => {
        setResultado(<p>Ocorreu um erro ao buscar a atividade.</p>);
      });
  }
  return (
    <div>
      <button onClick={() => carregarAtividade()}>
        Clique abaixo para carregar uma atividade
      </button>
      {resultado}
    </div>
  );
}