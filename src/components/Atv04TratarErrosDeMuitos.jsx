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

import { useState } from 'react';
export default function Atv04TratarErrosDeMuitos() {
  const [r, setR] = useState("");
  async function f() {
    await fetch('https://jsonplaceholder.typicode.com/comments')
      .then((a) => {
        if (!a.ok) {
          throw new Error();
        }
        return a.json();
      })
      .then((b) => {
        setR(
          b.map((i) => (
            <div key={i.id}>
              <p>{i.postId}: {i.id} - {i.email}</p>
              <p>{i.name}</p>
              <p>{i.body}</p>
            </div>
          ))
        );
      })
      .catch((c) => {
        setR(<p>Erro</p>);
      });
  }
  return (
    <div>
      <button onClick={f}>
        Clique abaixo para carregar uma atividade
      </button>
      <div>{r}</div>
    </div>
  );
}