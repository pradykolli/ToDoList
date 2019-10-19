import React , { Component } from 'react';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
     } from 'reactstrap';

    class AppNavbar extends Component{
        // Since we have used arrow notation for the method we donot have to include any constructor.
        // constructor(props){
        //     super(props);

        //     // this.toggle = this.toggle.bind(this);
        //     this.state = {
        //         isOpen: false
        //     }
        // } 
        state = {
            isOpen: false
        }
        toggle = () => {

            this.setState ({ 
                isOpen: !this.state.isOpen
            });
        }
        render(){
            return(
                <div>
                    <Navbar color="dark" dark expand="sm" className="mb-5">
                        <Container>
                            <NavbarBrand href="/">ReactPrady</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen = {this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink href="https://github.com/pradykolli">Prady's GitHub</NavLink>
                                    </NavItem>    
                                </Nav> 
                            </Collapse>
                        </Container>
                    </Navbar>
                </div>
            );
        }
    }
    
    export default AppNavbar;