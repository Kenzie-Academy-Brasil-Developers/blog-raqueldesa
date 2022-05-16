function adicionaSubmitCadastrar(){
   const formCadastro = document.getElementById("cadastro-usuario");
   formCadastro.addEventListener("submit", cadastrarUsuario);
}
function cadastrarUsuario(event){
   event.preventDefault();

   const dados = receberDadosCadastro(event);
   UsuarioController.cadastrarUsuario(dados);
}

function receberDadosCadastro(event){
   const formItens =[...event.target];
   const values = {};
   
   formItens.forEach(item =>{
      if(item.name != ""){
         values[item.name] = item.value;
      }
   })   
   return values;
}

adicionaSubmitCadastrar();