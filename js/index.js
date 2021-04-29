const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
  getPosts();
};

const getPosts = () => {
  fetch(API_URL, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      buildPosts(data);
    });
};

const buildPosts = (blogPosts) => {
  let blogPostContent = "";

  blogPosts.forEach((post) => {
    const postDate = new Date(parseInt(post.added_date)).toDateString();
    const postImg = `${API_BASE_URL}${post.post_image}`;
    const postLink = `post.html?id=${post.id}`;

    blogPostContent += `
    <a class="post-link" href="${postLink}" >
      <div class="post">
          <div class="post-image" style="background-image:url(${postImg})"></div>
          <div class="post-content">
            <div class="post-date">${postDate}</div>
            <div class="post-titlte"><h4>${post.title}</h4></div>
            <div class="post-text">${post.content}</div>
          </div>
        </div>
        </a>
        `;

    document.querySelector(".blog-posts").innerHTML = blogPostContent;
  });
};
