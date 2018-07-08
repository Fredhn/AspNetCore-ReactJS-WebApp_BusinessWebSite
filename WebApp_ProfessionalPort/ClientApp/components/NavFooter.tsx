import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import { Menu, Container, Segment, Grid, List, Header, TableFooter, Icon, Label } from 'semantic-ui-react';

export class NavFooter extends React.Component<{}, {}>
{
    static contextTypes =
        {
            router: PropTypes.object
        }

    public render() {
        return <div>
            <Segment inverted vertical style={{ padding: '5em 0em' }}>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Sobre' />
                                <List link inverted>
                                    <List.Item as='a'>Empresa</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Serviços' />
                                <List link inverted>
                                    <List.Item as='a'>Produtos</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Header as='h4' inverted>
                                    Quer falar conosco?
                                </Header>
                                <List link inverted>
                                    <List.Item as='a'>Contato</List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
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
        </div>;
    }
}
