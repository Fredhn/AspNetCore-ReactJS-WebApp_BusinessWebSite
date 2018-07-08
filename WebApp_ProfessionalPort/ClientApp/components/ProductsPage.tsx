import * as React from 'react';
import { Form, Button, Segment, Grid, Header, Message, Image, Container, Card, Label, TableFooter, Icon, Menu, List, Divider } from 'semantic-ui-react';
import * as PropTypes from 'prop-types';
import { RouteComponentProps } from 'react-router';
import { NavFooter } from './NavFooter';

const src = 'https://images.vexels.com/media/users/3/145115/isolated/preview/2524a0ccde54fa314963826809cb6e52-snowflake-linha-duas-setas-by-vexels.png';

interface ProductsPageState {
    fixed: boolean;
}

export class ProductsPage extends React.Component<RouteComponentProps<{}>, ProductsPageState>
{

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
            <Container>
                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Segment inverted>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Plataformas Web
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    Desenvolvimento de Plataformas Web, para fazer face às especificidades dos processos de negócio da sua empresa através da criação de ambientes interativos que têm uma premissa definida pelo tipo de resultado final que eles oferecem: 
                                        seja interações sociais, seja vendas ou funcionalidades diversas. 
                                </p>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                <Image size='large' src='http://slides.nchuit.cc/104A/104A_HTML/img/cross-platform.png' />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column floated='right' width={6}>
                                <Image size='medium' src='http://www.jmkxyy.com/how-it-works-icon/how-it-works-icon-1.jpg' />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Segment inverted>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Integrações
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    O termo "integração" refere-se a uma atividade de desenvolvimento de software em que componentes de software separados são combinados em um todo.
                                        A integração é realizada em vários níveis, e tem como principal objetivo tornar subsistemas em um sistema completo.
                                </p>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Segment inverted>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Aplicações Mobile
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    Os aplicativos para dispositivos móveis tornam o seu negócio mais fácil de ser acessado pois é um canal da sua empresa que está instalado no smartphone do seu cliente.
                                        Tem a capacidade de fornecer à esse cliente notificações sobre sua empresa, como marketing e propaganda. 
                                        Dessa forma, os aplicativos aumentam o engajamento do seu cliente e de outros potenciais clientes do seu negócio.
                                </p>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                <Image size='medium' src='https://s22451.pcdn.co/wp-content/uploads/2015/07/get_everthing.png' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Container>
            <NavFooter />
        </div>);
        }
}
