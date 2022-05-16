class PostController{
    static BASE_URL = "https://api-blog-m2.herokuapp.com/";
    

    static receberPosts(page){
        const URL = `${this.BASE_URL}post?page=${page}`;
        return fetch(URL,{
            method: "GET",
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(response => response.json())
        .then(response => response.data)
        .catch(err => console.log(err));
    }

    static postarPost(postContent){
        const URL = `https://api-blog-m2.herokuapp.com/post`;

        fetch(URL, {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Baerer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(postContent)
        })
        .then(res => res.json())
        .then(res => console.log(res))
    
    }

    // static recebeUmPost(idPost){
    //     const URL = `${this.BASE_URL}post/${idPost}`;
    //     return fetch(URL,{
    //         method: "GET",
    //         headers:{
    //             "Authorization": `Bearer ${localStorage.getItem("token")}`
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(response => response.data)
    //     .catch(err => console.log(err));
    // }

    static editarPost(idPost, newContent){
        const URL = `${this.BASE_URL}post/${idPost}`;
        
        fetch(URL, {
            method: "PATCH",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Baerer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(newContent)
        })
        .then(res => res.json())

    }

    static excluirPost(idPost){
        const URL = `${this.BASE_URL}post/${idPost}`;
        
        fetch(URL, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Baerer ${localStorage.getItem("token")}`
            },
        })
        .then(res => console.log(res))

    }
}