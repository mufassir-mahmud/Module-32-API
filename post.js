function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => getPost(data))
}

function getPost(posts){
    const postContainer = document.getElementById('post-container')
    for(const post of posts){
        console.log(post);
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <h4>User -${post.userId}</h4>
        <h5>Post - ${post.title}</h5>
        <p>Post Descriptin - ${post.body}</p>
        
        
        `;
        postContainer.appendChild(postDiv)
    }
}
loadPost()