import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import Ask from './Ask';
import Footer from './Footer';

export default function App() {
    return (
        <>
            <Container>
                <Nav></Nav>
                <Ask></Ask>
                <Footer></Footer>
            </Container>
        </>
    )
}

const Container = styled.div`
background-color: #FB6B6B;
width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin: 0px;
padding: 0px;
`



