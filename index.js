const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        id:0
    },
    {
        name: "Gustave sCourbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        id:1
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        id:2
    }
]

function getPost(obj){
    let flag = 1
    Object.values(obj).forEach(value => renderPost(Object.values(value)))
            let heartIcons=document.querySelectorAll('.hearts')
            for (let heartIcon of heartIcons) {
            let likes =  document.querySelectorAll(`#${heartIcon.id} ~ .like`)
            
            /*heartIcon.addEventListener("click", function () {likes[0].innerHTML +=`deneme`});*/
            heartIcon.addEventListener("click" ,function(e)
  {
    // Retrieve id from clicked element
    flag ++
    
    let elementId = e.target.id
    let pos = obj.map(e => e.username).indexOf(elementId);
    let likeScore = obj[pos].likes 
    if (flag % 2 == 0){
       likeScore++
       heartIcons[pos].src="images/liked.png"
    }else{
         heartIcons[pos].src="images/icon-heart.png"
    }
    

    likes[0].innerHTML =`${likeScore} likes`
    })
            
}

function renderPost(obj){
    let section = document.getElementById("main")
    section.innerHTML +=`<div class="user">
                <img class="logo" src="${obj[3]}">
            <div class="user-info">
                <h1 id="user-name">${obj[0]}</h1>
                <h1 id="user-loc">${obj[2]}</h1>
             </div>   
            </div>
            <div class="post-container">
            <img class="post" src="${obj[4]}">
             <img class="icon hearts" id="${obj[1]}" src="images/icon-heart.png">
             <img class="icon" src="images/icon-comment.png">
             <img class="icon" src="images/icon-dm.png"">
             <p class="like"> ${obj[6]} likes</p>
             <p>Someone <span>${obj[5]}</span></p>
             
    </div>`
            
}      
                 
}
       

getPost(posts)



  
