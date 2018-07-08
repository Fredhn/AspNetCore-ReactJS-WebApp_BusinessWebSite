import * as React from 'react';
import { Form, Button, Segment, Grid, Header, Message, Image, Container, Card, Label, TableFooter, Icon, Menu, List, Divider } from 'semantic-ui-react';
import * as PropTypes from 'prop-types';
import { Router } from 'react-router';
import { Route, Redirect } from 'react-router';
import { RouteComponentProps } from 'react-router';

const src = 'https://images.vexels.com/media/users/3/145115/isolated/preview/2524a0ccde54fa314963826809cb6e52-snowflake-linha-duas-setas-by-vexels.png';

interface HomeState {
    fixed: boolean;
}

export class Home extends React.Component<RouteComponentProps<{}>, HomeState> {

    static contextTypes =
        {
            router: PropTypes.object
        }

    constructor() {
        super();

        this.state = { fixed: false };
    }

    public render() {

        const { fixed } = this.state

        return (<div>
            <Container style={{ padding: '1em 0em' }} vertical>
            <Container text>
                <Header
                    image={src}
                    content='Neves Technology'
                    style={{
                        fontSize: '3em',
                        fontWeight: 'normal',
                        marginBottom: 0,
                        marginLeft: '-6.0em',
                        marginTop: '0.5em'
                    }}
                />
                    <Grid>
                        <Segment
                            as='h1'
                            inverted
                        content=' A Neves Technology foi fundada em 2018 e tem como propósito dar soluções tecnológicas, inteligentes para problemas do dia-a-dia de empresas, aumentando sua produtividade e fornecendo apoio para gestão do negócio.'
                        color="black"
                        style={{
                            fontSize: '1.2em',
                            fontWeight: 'normal',
                            marginTop: '4.0em',
                            marginLeft: '-13.0em',
                            marginRight: '25.0em'
                        }}
                    />
                        <Button primary size='huge' style={{
                            fontSize: '1.2em',
                            fontWeight: 'normal',
                            marginTop: '0.5em',
                            marginLeft: '-13.0em',
                            marginRight: '25.0em'
                        }} onClick={this.handleProdutoClick}>
                        Conheça nossos produtos
                        <Icon name="angle double right" />
                    </Button>
                </Grid>
                </Container>
            </Container>
            <Container style={{ height: '100%' }}>
                <footer>
                    <div style={{ position: 'fixed', bottom: 25, right: 40 }}>
                        <TableFooter as='h2' color='blue'>
                            <Label>
                                <Icon name='copyright' /> Neves Solutions, Co. All rights reserved.
                            </Label>
                        </TableFooter>
                    </div>
                </footer>
            </Container>
        </div>);
    }

    handleProdutoClick = () => {
        console.log("Clicked Produto");
        this.context.router.history.push({ pathname: '/products' });
    }
}
