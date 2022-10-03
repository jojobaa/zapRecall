import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import Ask from './Ask';

export default function App() {
    return (
        <Container>
            <div>
                <Nav></Nav>
                <Ask></Ask>
            </div>
        </Container>
    )
}

const Container = styled.div`
background-color: #FB6B6B;
width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px;
padding: 0px;
padding-bottom: 200px;
`



