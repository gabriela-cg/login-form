
import logo from './assets/sustentacao2.png'
import './'


function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              <img src={logo} alt=""/>
            </span>

            {/* input de email */}
            <div className="wrap-input">
              <input type="email"/>
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            {/* input de senha */}
            <div className="wrap-input">
              <input type="password"/>
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            {/* botão */}
            <div className="container-login-form-btn">
              <button className="login-form-btn">Entrar</button>              
            </div>

            {/* esqueci minha senha */}
            <div className="text-center">
              <span className="txt1" hr>Esqueceu sua senha?</span>
              <a className="txt2" href="#">Clique aqui</a>   
                           
            </div>



          </form>

        </div>
      </div>
    </div>
    
    
  );
}

export default App;
