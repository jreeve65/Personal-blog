const dataToStore = JSON.parse(localStorage.getItem("post"));
const posts = [];
posts.push(dataToStore);

for(let i =0; i< posts.length;i++) {
    console.log(posts[i].userName);
    console.log(posts[i].blogTitle);
    console.log(posts[i].content);
}
