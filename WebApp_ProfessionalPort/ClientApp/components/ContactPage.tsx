import * as React from 'react';
import { Form, Button, Segment, Grid, Header, Message, Image, Container, Card, Label, TableFooter, Icon, Menu, List, Divider, Input, TextArea, Checkbox } from 'semantic-ui-react';
import * as PropTypes from 'prop-types';
import { RouteComponentProps } from 'react-router';
import { NavFooter } from './NavFooter';

const src = 'https://images.vexels.com/media/users/3/145115/isolated/preview/2524a0ccde54fa314963826809cb6e52-snowflake-linha-duas-setas-by-vexels.png';

interface ProductsPageState {
    fixed: boolean;
}

export class ContactPage extends React.Component<RouteComponentProps<{}>, ProductsPageState> {

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
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Segment inverted>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        Fale Conosco
                                    </Header>
                                    <Form>
                                        <Form.Group widths='equal'>
                                            <Form.Field control={Input} label='Nome' placeholder='First name'/>
                                            <Form.Field control={Input} label='Sobrenome' placeholder='Last name' />
                                        </Form.Group>
                                        <Form.Field control={Input} label='Email' placeholder='Email' />
                                        <Form.Field control={TextArea} label='Como podemos ajudar?' placeholder='...' />
                                        <Form.Field control={Button}>Enviar</Form.Field>
                                    </Form>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                <Image size='large' src='https://images.vexels.com/media/users/3/145115/isolated/preview/2524a0ccde54fa314963826809cb6e52-snowflake-linha-duas-setas-by-vexels.png' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Container>
            <NavFooter />
        </div>);
        }
}
