// Post Sıralama ve Post Ekleme
// Blog oluşturmaya hazır mısınız? Konsol ekranında 
// postlarımızı sıralayalım, 
// sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.

const blogs = [
    {name: 'blog1', author: 'x'},
    {name: 'blog2', author: 'y'},
];
function listBlogs(){
    blogs.map(blog=>{
        console.log('BLOG: ', blog);
    })
}
function createNewPost(newBlog){
    const promise = new Promise((resolve, reject)=>{
        blogs.push(newBlog);
        resolve(blogs);
    });
    return promise;
}

createNewPost({name: 'blog3', author: 'z'}).then(()=>{
    console.log('new blog list:');
    listBlogs();
}).catch((err)=>{
    console.log(err);
})