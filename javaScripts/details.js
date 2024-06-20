const id = new URLSearchParams(window.location.search).get('id');
//
const deleteBtn = document.querySelector('.delete')
const container = document.querySelector('.details');
//fourth
//second
const renderDetails = async() =>{
  const url = 'http://localhost:3000/blogs/' + id;
    const res = await fetch(url);
    const blogs = await res.json();
console.log(blogs);
//five
const template = `<div class='details'>
<h2>${blogs.title}</h2>
    <p>${blogs.body}</p>
    <p><small>${blogs.likes} Likes<small/></p>
</div>   
  `
  container.innerHTML = template;
}
deleteBtn.addEventListener('click', async() => {
  const deleteBlogs = await fetch('http://localhost:3000/blogs/' +id, {
    method:'delete'
  })
  console.log(deleteBlogs)
  window.location.replace('../htmls/index.html')
})

//first
window.addEventListener('DOMContentLoaded', ()=>renderDetails());
