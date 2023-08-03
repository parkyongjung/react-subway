import React from 'react';
// import { useLocation, useOutlet, NavLink } from 'react-router-dom';
import { useLocation, useOutlet } from 'react-router-dom';
import { routes } from './router/router';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
// import { Container, Navbar, Nav } from 'react-bootstrap';
import './assets/css/style.css';
import { InnerContainer } from './components/layout/InnerContainer';
import AppBar from './components/appBar/AppBar';
// import { Menu } from './components/menu/Menu';
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
            {/* <Menu /> */}
            <InnerContainer>
                <AppBar />
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
            </InnerContainer>
        </>
    );
}

export default App;
