import styled from 'styled-components';

export default function Footer() {
    return (
        <FooterContain>
            <FooterRecall>
                <ButtonRed><p>Não lembrei!</p></ButtonRed>
                <ButtonYellow><p>Quase não lembrei!</p></ButtonYellow>
                <ButtonGreen><p>Zap!</p></ButtonGreen>
            </FooterRecall>
            <h1>0/4 CONCLUÍDOS</h1>
        </FooterContain>
    )
}

const FooterContain = styled.div`
background-color: #FFFFFF;
h1{
    font-family: 'Recursive';
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}
`
const FooterRecall = styled.div`
display : flex;
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
    }
`
const ButtonRed = styled.div`
margin-top: 9px;
margin-left: 5px;
margin-right: 5px;
width: 90px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: #FFFFFF;
background:#FF3030;
border-radius: 5px;
border: 1px solid #FF3030;
padding:5px;
`
const ButtonYellow = styled.div`
margin-top: 9px;
margin-left: 5px;
margin-right: 5px;
width: 90px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: #FFFFFF;
background: #FF922E;
border-radius: 5px;
border: 1px solid #FF922E;
padding:5px;
`
const ButtonGreen = styled.div`
margin-top: 9px;
margin-left: 5px;
margin-right: 5px;
width: 90px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: #FFFFFF;
background: #2FBE34;
border-radius: 5px;
border: 1px solid #2FBE34;
padding:5px;
`