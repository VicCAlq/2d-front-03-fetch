import { useState } from "react";

export default function Atv04TratarErrosDeMuitos() {

  const [comentarios, setComentarios] = useState(
    <p>
      Aqui serão recebidos os comentários
    </p>
  );


  function carregarComentarios() {

    fetch(
      "https://jsonplaceholder.typicode.com/comments",
      { method: "GET" }
    )

    .then((resposta) => {

      if (!resposta.ok) {
        throw new Error(`Erro na requisição: ${resposta.status}`);
      }

      return resposta.json();

    })

    .then((listaDeComentarios) => {

      setComentarios(
        <div>

          {listaDeComentarios.map((comentario) => {

            return (
              <div key={comentario.id}>

                <p>
                  {comentario.postId}: {comentario.id} - {comentario.email}
                </p>

                <p>{comentario.name}</p>

                <p>{comentario.body}</p>

              </div>
            );

          })}

        </div>
      );

    })

    .catch((error) => {
      window.alert(error);
    });

  }


  return (
    <div>

      <button onClick={carregarComentarios}>
        Carregar comentários
      </button>

      {comentarios}

    </div>
  );

}
