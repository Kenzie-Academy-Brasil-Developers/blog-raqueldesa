


async function receberPosts(page){
    const posts = await PostController.receberPosts(page);
    console.log(posts);

    mostrarPostsTela(posts);

}

function adicionaEventoBtnProxAnte(){
    const btnAnte = document.getElementById("btn-ante");
    const btnProx = document.getElementById("btn-prox");
    let page = 1;

    btnAnte.addEventListener("click", ()=>{
        receberPosts(page--);
    });
    btnProx.addEventListener("click", ()=>{
        receberPosts(page++);
    });
}


function mostrarPostsTela(posts){
    
    const containerPosts = document.getElementById("container-posts");
    containerPosts.innerHTML = " ";
    posts.forEach(post => {
        const idLogado = localStorage.getItem("id");
        const idUsuarioPost = post.owner.id;
        const idPost = post.id;

        const div =  document.createElement("div");
        const div2 =  document.createElement("div");
        const img = document.createElement("img");
        const nomeUsuario = document.createElement("h4");
        const textPost = document.createElement("p");
        
        div.classList.add("post");
        div.classList.add("div2");
        img.src = post.owner.avatarUrl;

        nomeUsuario.innerText = post.owner.username;
        textPost.innerText = post.post;
        div2.append(nomeUsuario, textPost)

        div.append(img, div2);
        if(idUsuarioPost == idLogado){
            const btnEditar = document.createElement("button");
            const btnExcluir = document.createElement("button");

            btnEditar.innerText = "Editar";
            btnExcluir.innerText = "Excluir";

            btnEditar.id = "btn-editar";
            btnExcluir.id = "btn-excluir";

            div2.append(btnExcluir);
            div2.append(btnEditar)

            btnEditar.addEventListener("click", ()=>{
                editarPost(div2, textPost, idPost);
            });

            btnExcluir.addEventListener("click",()=>{
                excluirPost(containerPosts, div, idPost);
            })

            
        }
        
        containerPosts.append(div);
    });
}

function adicionaEventoBtnPostar(){
    const btnPostar = document.getElementById("adicionar-post");
    btnPostar.addEventListener("click", postarPost);
    
 }

async function postarPost(){
    const postContent = {};
    postContent.content = document.getElementById("input-novo-post").value;
    
    await PostController.postarPost(postContent);
    receberPosts(1);
    document.getElementById("input-novo-post").value = ''
 }

 async function editarPost(div, textPost, idPost){
    const inputNovoPost = document.createElement("input");
    const btnSalvar = document.createElement("button");

    btnSalvar.innerText = "Salvar";
    div.append(btnSalvar);

    inputNovoPost.value = textPost.textContent;
    //console.log(textPost);
    div.replaceChild(inputNovoPost, textPost);

    btnSalvar.addEventListener("click",()=>{
        salvarPost(idPost, inputNovoPost.value);
        div.removeChild(btnSalvar);

        const newP = document.createElement("p");
        newP.innerText = inputNovoPost.value;

        div.replaceChild(newP, inputNovoPost);
    })
 }

async function salvarPost(idPost, novoPost){
    const newContent = {};
    //console.log(idPost);
    newContent.newContent = novoPost;
    await PostController.editarPost(idPost, newContent);
}

async function excluirPost(post, div, idPost){
    await PostController.excluirPost(idPost);
    post.removeChild(div);
}
async function receberDadosUsuarioLogado(){
    const dados = await UsuarioController.dadosUsuarioLogado();
    const nome = document.getElementById("nome-usuario");
    const srcImg = document.getElementById("foto-usuario");
    srcImg.src = dados.avatarUrl;
    nome.innerText =dados.username;
 }

 function LogOut(){
    localStorage.setItem("token","")
    window.location = 'login.html'
 }

 const btnLogOut = document.getElementById("logout");
 btnLogOut.addEventListener("click",LogOut)

adicionaEventoBtnProxAnte();
receberPosts(1);
adicionaEventoBtnPostar();
receberDadosUsuarioLogado()

