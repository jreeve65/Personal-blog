const form = document.querySelector("form");
const userNameInput = document.querySelector("#username"); // takes submitted form username
const blogTitleInput = document.querySelector("#blogtitle");//takes the title of the form
const contentInput = document.querySelector("#blogcontent");// takes the blog content of the form
const handleFormSubmit = function (event) { //takes the form submission, stores it in an object and then takes the object to local storage.
    const posts = [];
    event.preventDefault();
    if (userNameInput.value == "" || blogTitleInput == "" || contentInput == "") {
        console.log("must have all fields filled out");
        return;
    }
    const newPost = {
        userName: userNameInput.value.trim(),
        blogTitle: blogTitleInput.value.trim(),
        content: contentInput.value.trim(),
    }
    console.log(newPost.userName);
    console.log(newPost.blogTitle);
    console.log(newPost.content);
    posts.push(newPost);
    console.log("these are retrieved from the posts array----------------------------------");
    console.log(posts[0].userName);
    console.log(posts[0].blogTitle);
    console.log(posts[0].content);
}

form.addEventListener("submit", handleFormSubmit)