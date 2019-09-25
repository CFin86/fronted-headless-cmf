//const pTitle = document.getElementById('post-lists');
//const pContain = document.createElement('div')
const pContain = document.getElementById('posts-list');

const pBody = document.getElementById('posts-content');
window.onload = function getWPPosts(){
    
    fetch('https://dev-headless-cmf.pantheonsite.io/wp-json/wp/v2/posts')
    
    // response
    .then(r => r.json())
    .then(posts => {
        console.log(posts)
        posts.map(post => {
            const pDiv = document.createElement('h2')
            let pContent = document.createElement('h3')

            pDiv.innerHTML = post.title.rendered;
            let rawWpContent = post.content.rendered;
            
            let renderedContentValue = rawWpContent.replace(/<\/?p[^>]*>/g, "");
            pContent.innerHTML = renderedContentValue;
            console.log("this is pContetn", renderedContentValue)
            pContain.appendChild(pDiv)
            pBody.appendChild(pContent)
           // pTitle.innerHTML = post.title.rendered;
           // pContain.appendChild(pTitle)
        })
    })
}