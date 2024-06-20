//1
const formTagName = document.querySelector("form"); //by tag/class/id name
//3
const addBlogs = async (event) => {
  event.preventDefault();
  const doc = {
    title: formTagName.title.value,
    body: formTagName.body.value,
    likes: 0,
  };
  try {
    let url = "http://localhost:3000/blogs";

    const postBlogs = await fetch(url, {
      method: "post",
      body: JSON.stringify(doc),
      headers: { "Content-Type": "application/json" },
    });

    if (postBlogs.ok) {
      window.location.replace("../htmls/index.html");
        } else {
      const errorMessage = await postBlogs.text();
      const errorStatus = postBlogs.status;
      alert("Error" + errorMessage + errorStatus);
    }
  } catch (error) {
    console.error("An error occurred:", error);
    alert("Oops! An error occurred. Please try again later.");
  }
};
//2
formTagName.addEventListener("submit", addBlogs);
