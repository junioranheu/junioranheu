import { Fragment, useState } from "react";
import NavbarPika from "./navbar";

function Home() {
    return (
        <Fragment>
            <NavbarPika />
            <Body />
        </Fragment>
    );
}

function Body() {
    return (
        <section class="section">
            <div class="container has-text-centered">
                <div class="mt-4">
                    <h1 class="title">
                        Olá, mundo
                    </h1>
                    <p class="subtitle">
                        Esse é meu primeiro site com <strong>React JS</strong>
                    </p>
                </div>

                <div>
                    <Contador />
                </div>

                <div class="mt-6">
                    <div class="columns">
                        <div class="column" style={{ backgroundColor: "pink" }}>
                            Coluna 1 de 3
                        </div>
                        <div class="column" style={{ backgroundColor: "lightBlue" }}>
                            Coluna 2 de 3
                        </div>
                        <div class="column" style={{ backgroundColor: "yellow" }}>
                            Coluna 3 de 3
                        </div>
                    </div>
                </div>

                <p class="subtitle mt-6">
                    /npm run dev/
                </p>

                <div class="field is-grouped">
                    <p class="control is-expanded">
                        <input class="input is-primary" type="text" placeholder="Digite sua mensagem aqui..."></input>
                    </p>
                    <p class="control">
                        <a class="button is-primary">
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
                <p class="has-text-weight-bold">{contador}</p>
            </div>

            <button class="button is-primary is-outlined mt-2"
                onClick={adicionarContador}>Adicionar</button>
        </div>
    );
}

export default Home;