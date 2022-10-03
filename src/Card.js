import { useState } from 'react';
import styled from 'styled-components';
import setaplay from './img/seta_play.png';
import setavirar from './img/seta_virar.png'

export default function Card({ numberQ, question, answer }) {
    const [openCard, setOpenCard] = useState(false)
    const [rotate, setRotate] = useState(false)

    function questionDisplay() {
        setOpenCard(true);
    }
    function answerDisplay() {
        setRotate(true)
    }

    return (
        <CardRecall data-identifier="flashcard-question" openCard={openCard}>
            <p data-identifier="flashcard-answer">{!openCard ? `Pergunta ${numberQ}` : rotate ? answer : question}</p>
            {!openCard && (<Button data-identifier="flashcard-show-btn" onClick={questionDisplay}><img src={setaplay} alt='' /></Button>)}
            {openCard && (<Button data-identifier="flashcard-turn-btn" onClick={answerDisplay} margintop = '100px'><img src={setavirar} alt=''/></Button>)}
        </CardRecall>
    )
}
const CardRecall = styled.div`
width: 300px;
height: ${({ openCard }) => (openCard ? '115px' : '50px')};
background-color: ${({ openCard }) => (openCard ? '#ffffd4' : '#ffffff')};
margin: 12px;
padding: 15px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: flex;
align-items: ${({ openCard }) => (openCard ? 'start' : 'center')};
justify-content: space-between;
p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
}
`

const Button = styled.button`
    margin-top: ${(props) => props.margintop};
    background: transparent;
    border: none !important;
    font-size:0;
`