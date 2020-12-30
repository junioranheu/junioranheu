import { Fragment } from "react";
import NavbarPika from "./navbar";

function Sobre() {
  return (
    <Fragment>
      <NavbarPika />
      <Body />
    </Fragment>
  );
}

function Body() {
  return (
    <p>kapas</p>
  );
}

export default Sobre;