
class UsuarioController{
   static BASE_URL = "https://api-blog-m2.herokuapp.com/"
   
   static cadastrarUsuario(dadosUsuario){
      const URL = `${this.BASE_URL}user/register`;

      fetch(URL,{
         method: "POST",
         headers:{
            "Content-Type": "application/json"
         },
         body: JSON.stringify(dadosUsuario)
      })
      .then((response)=>{
         return response.json();
      })
      .then((response)=>{
         window.location = "./src/pages/login.html"
      })
      .catch((err)=>{
         console.error(err);
      })
   }
   static logarUsuario(dadosUsuario){
      const URL = `${this.BASE_URL}user/login`;

      fetch(URL,{
         method: "POST",
         headers:{
            "Content-Type": "application/json"
         },
         body: JSON.stringify(dadosUsuario)
      })
      .then((response)=>{
         return response.json();
      })
      .then((response)=>{
         console.log(response);
         localStorage.setItem("token", response.token);
         localStorage.setItem("id", response.userId);
      })
      .then(()=>{
         window.location = "home.html";
      })
      .catch((err)=>{
         console.error(err);
      })
   }

   static dadosUsuarioLogado(){
      const URL = `${this.BASE_URL}user/${localStorage.getItem("id")}`;

      return fetch(URL, {
         method: "GET",
         headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(response => response.json())
      .then(res => res)
      .catch(err => console.log(err));
   }

}

