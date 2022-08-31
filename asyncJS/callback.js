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

const addBook =  (newBook, callback) => {
    books.push(newBook);
    callback();
}
//listBooks();

addBook({name:'Kitap4', author: 'Yazar 4'}, listBooks);
