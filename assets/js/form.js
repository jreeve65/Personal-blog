const form = document.querySelector("form");
const userNameInput = document.querySelector("#username"); // takes submitted form username
const blogTitleInput = document.querySelector("#blogtitle");//takes the title of the form
const contentInput = document.querySelector("#blogcontent");// takes the blog content of the form
const posts = [];
const handleFormSubmit = function (event) { //takes the form submission, stores it in an object and then takes the object to local storage.

    event.preventDefault();
    if (userNameInput.value == "" || blogTitleInput == "" || contentInput == "") {
        console.log("must have all fields filled out");
        return;
    }
    //object created to store all values in the array.
    const newPost = {
        userName: userNameInput.value.trim(),
        blogTitle: blogTitleInput.value.trim(),
        content: contentInput.value.trim(),
    }
    // console.log(newPost.userName);
    // console.log(newPost.blogTitle);
    // console.log(newPost.content);
    posts.push(newPost);
    
}
form.addEventListener("submit", handleFormSubmit);
// console.log(posts[0].blogTitle);
// console.log(posts[0].content);
console.log(posts);// if posts is a global array why cant i access it out side of add event listener function?