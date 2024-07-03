const body = document.body;
//creates a cost varible to read data in local storage
const blogData = getLocalStorage();
function displayData() {
    //create element to contain the post we will appened everything later in function to this parent
    const postContainer = document.createElement('section');
    //create child header element with the text content of the blog title in an h1 element
    const postHeader = document.createElement('header');
    const h1El = document.createElement('h1');
    
    // create a child element that contains the text of the content
    const postContent = document.createElement('p');
    // create child element that stores text posted by and then the posters user name
    const postUsername = document.createElement('p');
}

// for (let i = 0; i < blogData.length; i++) {
//     console.log(blogData[i]);
// }

