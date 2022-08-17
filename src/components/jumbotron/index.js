import React from 'react';
import { Inner, Item, Container, Pane, Title, SubTitle, Image } from './styles/jumbotron';

const Jumbotron = ({children, direction = "row", ...restProprs}) => {
    return (
        <Item {...restProprs}>
            <Inner direction={direction}>
                {children}
            </Inner>            
        </Item>
    );
}

export default Jumbotron;

Jumbotron.Container = function JumbotronContainer({children, ...restProprs}) {
    return <Container {...restProprs}>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane({children, ...restProprs}) {
    return <Pane {...restProprs}>{children}</Pane>
}

Jumbotron.Title = function JumbotronTitle({children, ...restProprs}) {
    return <Title {...restProprs}>{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProprs}) {
    return <SubTitle {...restProprs}>{children}</SubTitle>
}

Jumbotron.Image = function JumbotronImage({...restProprs}) {
    return <Image {...restProprs}></Image>
}