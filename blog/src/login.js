function adicionaSubmitLogin(){
   const formLogin = document.getElementById("login-usuario");
   formLogin.addEventListener("submit", loginUsuario);
}

function loginUsuario(event){
   event.preventDefault();

   const dados = receberDadosLogin(event);
   UsuarioController.logarUsuario(dados);
}

function receberDadosLogin(event){
   const formItens =[...event.target];
   const values = {};
   
   formItens.forEach(item =>{
      if(item.name != ""){
         values[item.name] = item.value;
      }
   })   
   return values;
}

async function receberDadosUsuarioLogado(){
   const dados = await UsuarioController.dadosUsuarioLogado();
}
//receberDadosUsuarioLogado();

// function adicionaEventoBtnLogout(){
//    const btnLogout = document.getElementById("logout");
//    btnLogout.addEventListener("click", logoutUsuario);
// }

// function logoutUsuario(){

// }

adicionaSubmitLogin();