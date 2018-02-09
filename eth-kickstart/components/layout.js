import React from 'react';
import Header from './header';
import {Container} from 'semantic-ui-react'

export default props => {
    return(
        <Container>
            <Header />
            {props.children}
            <h1>I'm a footer</h1>
        </Container>
    )
}