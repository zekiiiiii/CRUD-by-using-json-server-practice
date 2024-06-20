const container = document.querySelector(".blogs");
const searchForm = document.querySelector(".search");
const searchBtn = document.querySelector(".search-btn");

const renderBlogs = async (term) => {
  let url = "http://localhost:3000/blogs?_sort=likes&_order=desc";

  if (term) {
    url += `&q=${term}`;
  }

  const res = await fetch(url);
  const blog = await res.json();

  let template = "";
  blog.forEach((blogx) => {
    template += `
      <div class="post">
        <h2>${blogx.title}</h2>
        <p>${blogx.body.slice(0, 150)}</p>
        <p><small>${blogx.likes} likes</small></p>
        <a href="../htmls/details.html?id=${blogx.id}">Go to details...</a>
      </div>`;
  });

  container.innerHTML = template;
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  renderBlogs(searchForm.term.value.trim());
});

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  renderBlogs(searchForm.term.value.trim());
});

window.addEventListener("DOMContentLoaded", () => renderBlogs());
