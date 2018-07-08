import * as React from 'react';
import { Form, Button, Segment, Grid, Header, Message, Image, Container, Card, Label, TableFooter, Icon, Menu, List, Divider } from 'semantic-ui-react';
import * as PropTypes from 'prop-types';
import { RouteComponentProps } from 'react-router';
import { NavFooter } from './NavFooter';

const src = 'https://images.vexels.com/media/users/3/145115/isolated/preview/2524a0ccde54fa314963826809cb6e52-snowflake-linha-duas-setas-by-vexels.png';

interface ProductsPageState {
    fixed: boolean;
}

export class AboutPage extends React.Component<RouteComponentProps<{}>, ProductsPageState> {

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
                    <Grid>
                        <Header
                            image={src}
                            content='Neves Technology'
                            style={{
                                fontSize: '3em',
                                fontWeight: 'normal',
                                marginBottom: 0,
                                marginTop: '0.5em'
                            }}
                        />
                        <Header
                            as='h1'
                            content=' A Neves Technology foi fundada em 2018 e tem como propósito dar soluções tecnológicas, inteligentes para problemas do dia-a-dia de empresas, aumentando sua produtividade e fornecendo apoio para gestão do negócio.'
                            color="black"
                            style={{
                                fontSize: '1.2em',
                                fontWeight: 'normal',
                                marginTop: '4.0em'
                            }}
                        />
                    </Grid>
                </Segment>
            </Container>
            <NavFooter />
        </div>);
        }
}
