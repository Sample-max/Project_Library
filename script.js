class Book {
  constructor(title, author, pages, read) {
    if (!new.target) {
      throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
  }
}
class LibraryManager {
  constructor() {
    this.books = [];
    this.mainContent = document.getElementById("main-content");
  }

  addOldBooks() {
    const data = [
      ["To Kill a Mockingbird", "Harper Lee", 336, true],
      ["1984", "George Orwell", 328, true],
      ["War and Peace", "Leo Tolstoy", 1215, false],
      ["Don Quixote", "Miguel de Cervantes", 976, true],
      ["Hamlet", "William Shakespeare", 128, false],
      ["The Great Gatsby", "F. Scott Fitzgerald", 180, false],
      ["The Lord of the Rings", "J.R.R. Tolkien", 1216, true],
      ["Harry Potter and the Order of the Phoenix", "J.K. Rowling", 766, false],
      ["The Stand", "Stephen King", 824, false],
      ["The Shining", "Stephen King", 447, false],
    ];

    data.forEach(([title, author, pages, read]) => {
      const book = new Book(title, author, pages, read);
      this.books.push(book);
      this.renderBookCard(book);
    });
  }

  renderBookCard(book) {
    const card = document.createElement("div");
    card.className = "card";

    const top = document.createElement("div");
    top.className = "top";

    const titleEl = document.createElement("p");
    titleEl.className = "title";
    titleEl.textContent = book.title;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "remove";
    deleteBtn.title = "Delete book";

    deleteBtn.addEventListener("click", () => {
      card.remove();
      this.books = this.books.filter(b => b.id !== book.id);
    });

    top.appendChild(titleEl);
    top.appendChild(deleteBtn);
    card.appendChild(top);

    const authorDiv = document.createElement("div");
    authorDiv.className = "author";
    authorDiv.innerHTML = `<span>Author: </span><p class="authorname">${book.author}</p>`;
    card.appendChild(authorDiv);

    const pagesP = document.createElement("p");
    pagesP.className = "pages";
    pagesP.textContent = `${book.pages} pages`;
    card.appendChild(pagesP);

    const statusDiv = document.createElement("div");
    statusDiv.className = "status";
    statusDiv.innerHTML = `<span>Read: </span>`;

    const label = document.createElement("label");
    label.className = "switch";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = book.read;
    input.addEventListener("change", () => {
      book.read = input.checked;
    });

    const slider = document.createElement("span");
    slider.className = "slider round";

    label.appendChild(input);
    label.appendChild(slider);
    statusDiv.appendChild(label);
    card.appendChild(statusDiv);

    this.mainContent.appendChild(card);
  }

  handleButtons() {
    const addButton = document.querySelector("#add");
    const deleteButton = document.querySelector("#delete");
    const favDialog = document.getElementById("favDialog");
    const confirmBtn = favDialog.querySelector("#confirmBtn");

    const Title = favDialog.querySelector("#Title");
    const Author = favDialog.querySelector("#Author");
    const Pages = favDialog.querySelector("#Pages");
    const Read = favDialog.querySelector("#Read");

    addButton.addEventListener("click", () => favDialog.showModal());

    confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const form = document.getElementById('bookForm');
if (!form.checkValidity()) {
  form.reportValidity(); // Shows native browser messages
  return;
}
  const title = Title.value.trim();
  const author = Author.value.trim();
  const pagesStr = Pages.value.trim();
  const readStr = Read.value;

  // All inputs are valid
  const pages = parseInt(pagesStr);
  const read = readStr === "true";

  const book = new Book(title, author, pages, read);
  this.books.push(book);
  this.renderBookCard(book);

  favDialog.close();

  // Reset form
  Title.value = "";
  Author.value = "";
  Pages.value = "";
  Read.value = "";
});


    deleteButton.addEventListener("click", () => {
      const last = this.mainContent.lastChild;
      if (last) {
        const bookId = this.books[this.books.length - 1].id;
        this.books = this.books.filter(book => book.id !== bookId);
        this.mainContent.removeChild(last);
      }
    });
  }
}
const lib = new LibraryManager();
  lib.addOldBooks();
  lib.handleButtons();