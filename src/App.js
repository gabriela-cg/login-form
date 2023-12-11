
import { useState } from 'react';
import logo from './assets/sustentacao2.png'
import fundo from './assets/pexels-matthew-montrone-1179225.jpg'
import './style.css'


function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    
      <div className="app-container">
        <div className="left-column">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              <img src={logo} alt="" />
            </span>

            {/* input de email */}
            <div className="wrap-input">
              <input className={email !== "" ? 'has-val input' : 'input'}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)} />
              <span className="focus-input" data-placeholder="E-mail"></span>
            </div>

            {/* input de senha */}
            <div className="wrap-input">
              <input className={password !== "" ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            {/* esqueci minha senha */}
            <div className="text-center">
              <span className="txt1" hr>Esqueceu sua senha?</span>
              <a className="txt2" href="#">Clique aqui</a>

            </div>

            {/* botão */}
            <div className="container-login-form-btn">
              <button className="login-form-btn">Entrar</button>
            </div>

            {/* adm */}
            <div className="text-center">
              <span className="txt1" hr>Administrador da conta?</span>
              <a className="txt2" href="#">Entre aqui</a>

            </div>
          </form>

        </div>

         
        </div>

        <div className="fundo">
        <div className="right-column">
        <img className= "image" src={fundo} alt="" /> 
        </div> 


          
        </div>
      </div>





  );
}

export default App;
