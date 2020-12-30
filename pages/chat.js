import { Fragment } from "react";
import NavbarPika from "./navbar";

function Chat() {
  return (
    <Fragment>
      <title>Chat</title>

      <NavbarPika />
      <Body />
    </Fragment>
  );
}

function Body() {
  return (
    <section className="section animate__animated animate__fadeIn">
      <div className="container has-text-centered">
        <div className="mt-4">
          <h1 className="title">
            Olá, mundo
                    </h1>
          <p className="subtitle">
            Chat em tempo real com <strong>React JS</strong>
          </p>
        </div>

        <div className="mt-5">
          <CaixaTexto />
          <Mensagens />
        </div>
      </div>
    </section>
  );

  function CaixaTexto() {
    return (
      <div className="field is-grouped">
        <p className="control is-expanded">
          <input className="input is-primary" type="text" placeholder="Digite sua mensagem aqui..."></input>
        </p>

        <p className="control">
          <a className="button is-primary">
            Enviar
          </a>
        </p>
      </div>
    );
  }

  function Mensagens() {
    const DUMMY_DATA = [
      {
        senderId: "Junior",
        text: "Qual é a melhor linguagem de programação?"
      },
      {
        senderId: "Guarino",
        text: "React!"
      }
    ];

    return (
      <ul className="box">
        {
          DUMMY_DATA.map(message => {
            return (
              <li className="mt-3" key={message.id}>
                <div>
                  <span className="tag is-primary has-text-weight-bold">{message.senderId}</span>

                  <span> {message.text}</span>
                </div>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default Chat;