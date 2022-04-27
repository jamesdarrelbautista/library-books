let library = [];

function Books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Books.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
}


function deleteChild() {
    let textSection = document.querySelector(".text-section");

    let child = textSection.lastElementChild;
    while (child) {
        textSection.removeChild(child);
        child = textSection.lastElementChild;
    }

}

let submit = document.querySelector(".submit");

let addBookToLibrary = function () {
    deleteChild();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("input[name='read']:checked").value;


    let book = new Books(title, author, pages, read)

    library.push(book);
    library.forEach((book) => {
        let title = document.createElement("div");
        console.log('title', title)
        title.innerHTML = `
        <h1> ${book.title} </h1> by ${book.author}; ${book.pages} pages; Read status: ${book.read}`;
        document.querySelector(".text-section").appendChild(title);
    })
    console.log(library);
}

// add to library button action
submit.addEventListener("click", ()=>{
    addBookToLibrary();
    let form = document.querySelector('.form-section');
    form.style.display = "none";
});

// add new book
let newBook = document.querySelector('.new-book');

newBook.addEventListener('click',()=>{
    let form = document.querySelector('.form-section');
    form.style.display = "flex";

});