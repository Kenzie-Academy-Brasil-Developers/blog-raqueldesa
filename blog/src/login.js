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


adicionaSubmitLogin();
