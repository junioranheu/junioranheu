import { Fragment, useState } from "react";
import NavbarPika from "./navbar";
import aulaService from '../services/AulaService';

function Teste() {
    return (
        <Fragment>
            <title>Teste</title>

            <NavbarPika />
            <Body />
        </Fragment>
    );
}


function Body() {
    const [aulas, setAulas] = useState(null);

    return (
        <section className="section animate__animated animate__fadeIn">
            <div className="container has-text-centered">
                <div className="mt-6">
                    <h1 className="title">
                        Olá, mundo
                    </h1>
                    <p className="subtitle">
                        Página com conexão com o BD, via API, no <strong>React JS</strong>
                    </p>
                </div>

                <div className="mt-6">
                    {
                        aulas === null ?

                        <button className="button is-primary is-outlined" onClick={CarregarAulas}>Não clique aqui</button>

                            :

                            <Lista />
                    }
                </div>
            </div>
        </section>
    );

    function CarregarAulas() {
        aulaService.pegarAulas()
            .then(function (resposta) {
                console.log(resposta.data);
                setAulas(resposta.data);
            })
            .catch((error) => {
                console.log("Deu zika");
                console.log(error);
            });
    }

    function Lista() {
        return (
            <div className="tile is-ancestor animate__animated animate__fadeIn">
                <div className="tile is-vertical is-12">
                    <div className="tile">
                        {
                            aulas.map(item => {
                                return (
                                    <div className="tile is-parent" style={{ cursor: "pointer" }} key={item.id}>
                                        <article className="tile is-child">
                                            <p className="subtitle">
                                                <span className="has-text-weight-bold">{item.nome}</span>
                                                <br />{item.descricao}
                                            </p>

                                            <figure className="image is-1by1">
                                                <img title={item.nome} src={item.imagem}></img>
                                            </figure>
                                        </article>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Teste;