var posts=["2024/09/28/hello-world/","2024/09/29/my-first-blog/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };