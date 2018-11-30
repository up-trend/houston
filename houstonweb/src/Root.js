//@ts-check
import React, { Component } from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Root extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="home">Houston Chat</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="/about">
                            About
                        </NavItem>
                        <NavItem eventKey={2} href="/login">
                            Login
                        </NavItem>
                    </Nav>
                </Navbar>

                {this.props.children}
            </div>
        )
    }
}



export default Root;   