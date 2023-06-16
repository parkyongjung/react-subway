import React from 'react';
import { useLocation, useOutlet, NavLink } from 'react-router-dom';
import { routes } from './router/router';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './assets/css/style.css';
import { Menu } from './components/menu/Menu';
interface AppProps {
    isActive: string;
    name: string;
}

function App(props: AppProps) {
    const location = useLocation();
    const currentOutlet = useOutlet();
    const { nodeRef } =
        routes.find((route) => route.path === location.pathname) ?? {};
    return (
        <>
            <Menu />
            <Container className='container'>
                <Navbar bg='light'>
                    <Nav className='mx-auto'>
                        {routes.map((route) => (
                            <Nav.Link
                                key={route.path}
                                as={NavLink}
                                to={route.path}
                                end
                            >
                                {route.name}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar>
                <SwitchTransition>
                    <CSSTransition
                        key={location.pathname}
                        nodeRef={nodeRef}
                        timeout={300}
                        classNames='page'
                        unmountOnExit
                    >
                        <div ref={nodeRef} className='page'>
                            {currentOutlet}
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </Container>
        </>
    );
}

export default App;
