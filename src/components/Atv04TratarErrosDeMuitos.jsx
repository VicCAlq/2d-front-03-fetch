import { useState } from "react";

export default function Atv04TratarErrosDeMuitos() {
  const [comentarios, setComentarios] = useState([]);
  const [erro, setErro] = useState("");

  const carregarComentarios = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("Erro na requisição");
        }
        return resposta.json();
      })
      .then((dados) => {
        setComentarios(dados);
        setErro("");
      })
      .catch((erro) => {
        setErro(erro.message);
        setComentarios([]);
      });
  };

  return (
    <div>
      <button onClick={carregarComentarios}>
        Clique abaixo para carregar uma atividade
      </button>

      {erro && <p>{erro}</p>}

      <div>
        {comentarios.map((comentario) => (
          <div key={comentario.id}>
            <p>
              {comentario.postId}: {comentario.id} - {comentario.email}
            </p>
            <p>{comentario.name}</p>
            <p>{comentario.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}