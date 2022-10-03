import styled from 'styled-components';
import logo from './img/logo.png';

export default function Nav() {
    return (
        <NavRecall>
                <img src={logo} alt='' />
                <h1>Zap Recall</h1>
        </NavRecall>
    )
}

const NavRecall = styled.div`
display: flex;
align-items: center;
img{
    width: 52px;
}
h1{
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
}

`