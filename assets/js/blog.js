const body = document.body;
//creates a cost varible to read data in local storage
const blogData = getLocalStorage();
function displayData(index) {
    //create element to contain the post we will appened everything later in function to this parent
    const postContainer = document.createElement('section');
    //create child header element with the text content of the blog title in an h1 element
    const postHeader = document.createElement('header');
    const h1El = document.createElement('h1');
    h1El.textContent = blogData[index].blogTitle;
    // create a child element that contains the text of the content
    const postContent = document.createElement('p');
    postContent.textContent = blogData[index].content;
    // create child element that stores text posted by and then the posters user name
    const postUsername = document.createElement('p');
    postUsername.textContent = `posted by ${blogData[index].userName}`;
    postContainer.append(postHeader,h1El,postContent,postUsername);
    body.append(postContainer);
}

for (let i = 0; i < blogData.length; i++) {
     displayData(i)
}

