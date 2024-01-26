const postId = localStorage.getItem('post_id');

fetch("https://dummyjson.com/posts/" + postId).then((lockedData) => lockedData.json())
  .then((data) => {
    // Select the document element

    console.log(data);
    const title = document.querySelector(".post-title");
    const text = document.querySelector(".post-text");
    const commentsHolder = document.querySelector(".right-comment");
    title.innerHTML = data.title;
    text.innerHTML = data.body;

    fetch('https://dummyjson.com/comments').then(locked => locked.json()).then(({ comments }) => {
      for (let ix = 0; ix < comments.length; ix++) {
        const element = comments[ix];
        //     commentsHolder.innerHTML = `
        // <div class="right-post">
        // <div class="post-person"></div>
        // <div>
        //     <div class="person-name">Darab!</div>
        //     <div class="comment">
        //         Great Blog!
        //     </div>
        // </div>
        // </div>`
      }
    })

  });
function openPost(id) {
  window.location.pathname = '/views/post.html'
  window.localStorage.setItem('post_id', id);
}

fetch("https://dummyjson.com/posts")
  .then((lockedData) => lockedData.json())
  .then((data) => {
    // Select the document element
    const section2 = document.querySelector("#section-2");
    section2.innerHTML = ''
    for (let i = 0; i < data.posts.length; i++) {
      console.log(data.posts[i])
      section2.innerHTML += `
        <div class="card" onclick="openPost(${data.posts[i].id})">
            <div class="card-image"><img src="/assets/test-2.jpg" alt=""></div>
            <div class="card-text">
              ${data.posts[i].title}
            </div>
            <div class="card-items">
              <span class="reactions">🩷${data.posts[i].reactions}</span>
            </div>
        </div>`;
    }
  });
fetch("https://dummyjson.com/posts")
  .then((lockedData) => lockedData.json())
  .then((data) => {
    // Select the document element
    const section3 = document.querySelector("#section-3");
    section3.innerHTML = ''
    for (let i = 0; i < data.posts.length; i++) {
      console.log(data.posts[i])
      section3.innerHTML += `
        <div class="card" onclick="openPost(${data.posts[i].id})">
            <div class="card-image"><img src="/assets/test-2.jpg" alt=""></div>
            <div class="card-text">
              ${data.posts[i].title}
            </div>
            <div class="card-items">
              <span class="reactions">🩷${data.posts[i].reactions}</span>
            </div>
        </div>`;
    }
  });