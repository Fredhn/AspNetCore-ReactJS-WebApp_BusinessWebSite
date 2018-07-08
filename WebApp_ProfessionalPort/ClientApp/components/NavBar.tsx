import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import { Menu, Container } from 'semantic-ui-react';

interface NavbarState {
    Home: boolean;
    Produtos: boolean;
    Empresa: boolean;
    Contato: boolean;
}

export class NavBar extends React.Component<{}, NavbarState>
{
    static contextTypes =
        {
            router: PropTypes.object
        }

    constructor() {
        super();

        this.state = { Home: false, Produtos: false, Empresa: false, Contato: false };
    }

    public render() {
        return <div>
            <Menu inverted size='large'>
                <Container>
                    <Menu.Item as='a' onClick={this.handleHomeClick} active={this.state.Home}>
                        Home
                    </Menu.Item>
                    <Menu.Item as='a' onClick={this.handleProdutoClick} active={this.state.Produtos}>
                        Produtos
                    </Menu.Item>
                    <Menu.Item as='a' onClick={this.handleEmpresaClick} active={this.state.Empresa}>
                        Empresa
                    </Menu.Item>
                    <Menu.Item as='a' onClick={this.handleContatoClick} active={this.state.Contato} position='right'>
                        Contato
                    </Menu.Item>
                </Container>
            </Menu>
        </div>;
    }

    handleHomeClick = () => {
        console.log("Clicked Home");
        this.setState({ Home: true, Produtos: false, Empresa: false, Contato: false });
        this.context.router.history.push({ pathname: '/' });
    }

    handleProdutoClick = () => {
        console.log("Clicked Produto");
        this.setState({ Produtos: true, Home: false, Empresa: false, Contato: false });
        this.context.router.history.push({ pathname: '/products' });
    }

    handleEmpresaClick = () => {
        console.log("Clicked Empresa");
        this.setState({ Empresa: true, Home: false, Produtos: false, Contato: false });
        this.context.router.history.push({ pathname: '/about' });
    }

    handleContatoClick = () => {
        console.log("Clicked Contato");
        this.setState({ Contato: true, Home: false, Produtos: false, Empresa: false });
        this.context.router.history.push({ pathname: '/contact' });
    }
}
