// const promise1 = new Promise((resolve, reject)=>{
//     // try{
//     //     resolve('hello');
//     // }
//    // catch(error){
//         reject('bağlantı hatası');
//    // }

// });

// console.log(promise1)
// promise1
//     .then(value => {
//         console.log(value);
//     }).catch(error => {
//         console.log('Error: ', error)
//     });

const books = [
    {name: 'BOOK 1', author: 'yazar1'},
    {name: 'BOOK 2', author: 'yazar2'},
    {name: 'BOOK 3', author: 'yazar3'},
];
const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
};

const addBook =  (newBook) => {
    const promise2 = new Promise((resolve, reject)=>{
        books.push(newBook);
        resolve(books);
        //reject('BIR HATA OLUSTU')
    });
    return promise2;

}
//listBooks();

addBook({name:'Kitap10', author: 'Yazar 10'})
    .then(()=>{
        console.log('YENI LISTE');
        listBooks();
    }).catch((error)=>{
        console.log(error);
    });
