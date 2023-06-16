import React, { useState } from "react";
import { useLocation, useOutlet, NavLink } from "react-router-dom";
import { routes } from "./router/router";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./assets/css/style.css";
import { motion } from "framer-motion";

interface AppProps {
  isActive: string;
}
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

function App(props: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  return (
    <>
      {/* <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
        <Toggle onClick={() => setIsOpen((isOpen) => !isOpen)} />
        <Items />
      </motion.nav> */}
      <Navbar bg="light">
        <Nav className="mx-auto">
          {routes.map((route) => (
            <Nav.Link key={route.path} as={NavLink} to={route.path} end>
              {route.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>
      <Container className="container">
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            <div ref={nodeRef} className="page">
              {currentOutlet}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </Container>
    </>
  );
}

export default App;
