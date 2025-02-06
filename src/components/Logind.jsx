import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import logo from './Flemming logo.png'

const LogindContainer = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

.login{
    
    background-color: #0A265C;
    margin: 35px;
    padding: 50px;
    text-align: center;
}
.login img {
    width: 200px;
    height: 200px;
    margin-bottom: 40px;
  }
  form {
    background: #ffffff;
    width: 100%;
    max-width: 680px;
    padding: 15px 50px 35px;
    color: #0A265C;
    box-shadow: 3px 3px 3px #ACA69A;
}
label{
    font-size: 24px;
}
input{
    font-size: 24px;
}
.sub{
    background: #9E8948;
    width: 110px;
    cursor: pointer;
    margin-top: 15px;
}
@media screen and (max-width: 768px) {
    .login img {
      width: 150px;
      height: 150px;
    }

    form {
      padding: 15px;
    }

    label {
      font-size: 20px;
    }

    input {
      font-size: 20px;
    }
}
@media screen and (max-width: 430px) {
    .login img {
      width: 120px;
      height: 120px;
      margin-bottom: 20px;
    }

    form {
      padding: 10px;
    }

    label {
      font-size: 18px;
    }

    input {
      font-size: 18px;
    }
}

`
export default function Logind() {
  return (
    <>
        <Header/>
        <LogindContainer>
           <div className="login">
                <img src={logo} alt="Logo" />
                <form action="#" method="post">
                    <label htmlFor="password">Kode:</label>
                    <input type="password" id="password" name="password" />
                    <input className="sub" type="submit" value="Log ind" />
                </form>
            </div>
       </LogindContainer>
       <Footer />


    </>
  )
}
