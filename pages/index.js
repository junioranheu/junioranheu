import { Fragment, useState } from "react";
import NavbarPika from "./navbar";

function Home() {
    return (
        <Fragment>
            <title>Início</title>

            <NavbarPika />
            <Body />
        </Fragment>
    );
}

function Body() {
    return (
        <section className="section">
            <div className="container has-text-centered">
                <div className="mt-4">
                    <h1 className="title">
                        Olá, mundo
                    </h1>
                    <p className="subtitle">
                        Esse é meu primeiro site com <strong>React JS</strong>
                    </p>
                </div>

                <div>
                    <Contador />
                </div>

                <div className="mt-6">
                    <div className="columns">
                        <div className="column" style={{ backgroundColor: "pink" }}>
                            Coluna 1 de 3
                        </div>
                        <div className="column" style={{ backgroundColor: "lightBlue" }}>
                            Coluna 2 de 3
                        </div>
                        <div className="column" style={{ backgroundColor: "yellow" }}>
                            Coluna 3 de 3
                        </div>
                    </div>
                </div>

                <p className="subtitle mt-6">
                    /npm run dev/
                </p>

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
            </div>
        </section>
    );
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <hr />

            <div>
                <p className="has-text-weight-bold">{contador}</p>
            </div>

            <button className="button is-primary is-outlined mt-2"
                onClick={adicionarContador}>Adicionar</button>
        </div>
    );
}

export default Home;