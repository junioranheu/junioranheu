import { Fragment } from "react";
import NavbarPika from "./navbar";

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
    return (
        <section className="section animate__animated animate__fadeIn">
            <div className="container has-text-centered">
                <div className="mt-6">
                    <h1 className="title">
                        Olá, mundo
                    </h1>
                    <p className="subtitle">
                        Página com cards em <strong>React JS</strong>
                    </p>
                </div>

                <div className="mt-6">
                    <Lista />
                </div>
            </div>
        </section>
    );

    function Lista() {
        const DUMMY_DATA = [
            {
                id: 1,
                nome: "Teste",
                desc: "Testando essa djonga",
                img: "https://images.pexels.com/photos/556668/pexels-photo-556668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=480"
            },
            {
                id: 2,
                nome: "Kapas",
                desc: "Kapas kapas & kapas",
                img: "https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=480"
            },
            {
                id: 3,
                nome: "Louquinha",
                desc: "Louca... louquinha!",
                img: "https://images.pexels.com/photos/310418/pexels-photo-310418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=480"
            }
        ];

        return (
            <div className="tile is-ancestor">
                <div className="tile is-vertical is-12">
                    <div className="tile">
                        {
                            DUMMY_DATA.map(item => {
                                return (
                                    <div className="tile is-parent" style={{ cursor: "pointer" }}>
                                        <article className="tile is-child">
                                            <p className="subtitle">
                                                <span className="has-text-weight-bold">{item.nome}</span>
                                                <br />{item.desc}
                                            </p>

                                            <figure className="image is-1by1">
                                                <img title={item.nome} src={item.img}></img>
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