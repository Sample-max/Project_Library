const myLibrary = [];

function Book(title,author,pages,read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
  this.id=crypto.randomUUID();
}
function old_books(){
myLibrary[0] = new Book("To kill a mockingbird","Harper Lee",336,true);
myLibrary[1] = new Book("1984","George Orwell",328,true);
myLibrary[2] =new Book("War and Peace","Leo Tolstoy",1215,false);
myLibrary[3]= new Book("Don Quixote","Miguel de Cervantes",976,true);
myLibrary[4]=new Book("Hamlet","William Shakespeare",128,false);
myLibrary[5]=new Book("The Great Gatsby","F. Scott Fitzgerald",180,false);
myLibrary[6]=new Book("The Lord of the Rings","J.R.R Tolkien",1216,true);
myLibrary[7]=new Book("Harry Potter and the Order of the Phoenix","J.K. Rowling",766,false);
myLibrary[8]=new Book("The Stand","Stephen King",824,false);
myLibrary[9]=new Book("The Shining","Stephen King",447,false);
for(let i=0;i<myLibrary.length;i++){
  const card = document.createElement('div');
card.className='card'
const top=document.createElement('div')
top.className='top'
const p1=document.createElement('p')
p1.className='title'
p1.textContent=myLibrary[i].title
const btn=document.createElement('button')
btn.className='remove'
btn.title="delete book"
top.appendChild(p1)
top.appendChild(btn)
card.appendChild(top)
btn.addEventListener("click", () => {
  card.remove()
   myLibrary.splice(myLibrary.findIndex(b => b.id === Book.id), 1);
});
const div1=document.createElement('div')
div1.className='author'

const span1=document.createElement('span')
span1.textContent='Author: '

div1.appendChild(span1)
const p3=document.createElement('p')
p3.textContent=myLibrary[i].author
p3.className='authorname'
div1.appendChild(p3)
card.appendChild(div1)

const p4=document.createElement('p')
p4.className='pages'
p4.textContent=myLibrary[i].pages+" pages"
card.appendChild(p4)

const div2=document.createElement('div')
div2.className='status'
const span2=document.createElement('span')
span2.textContent='Read: '
div2.appendChild(span2)
const label=document.createElement('label')
label.className='switch'
const input=document.createElement('input')
input.type='checkbox'
input.id='toggle'
input.checked = myLibrary[i].read === true || myLibrary[i].read === "true";
label.appendChild(input)
const span3=document.createElement('span')
span3.className='slider round'
label.appendChild(span3)
div2.appendChild(label)
card.appendChild(div2)
input.checked=myLibrary[i].read;
document.getElementById('main-content').appendChild(card)
}
}
function addBookToLibrary() {
  const title=prompt("Enter the title of the book:-")
  const author=prompt("Enter the author of the book:-")
  const pages=prompt("Enter the number of pages in the book:-")
  let read;
  while (true) {
    read = prompt("Have you read the book? (true/false)").toLowerCase().trim();
    if (read === "true" || read === "false") {
      break;
    }
    alert("Please enter either 'true' or 'false'.");
  }
  myLibrary[length+1]= new Book(title,author,pages,read)
  // take params, create a book then store it in the array
 
}
function display(){
const card = document.createElement('div');
card.className='card'
const top=document.createElement('div')
top.className='top'
const p1=document.createElement('p')
p1.className='title'
p1.textContent=myLibrary[length+1].title
const btn=document.createElement('button')
btn.className='remove'
btn.title="delete book"
top.appendChild(p1)
top.appendChild(btn)
card.appendChild(top)
btn.addEventListener("click", () => {
   card.remove()
    myLibrary.splice(myLibrary.findIndex(b => b.id === book.id), 1);
});
const div1=document.createElement('div')
div1.className='author'

const span1=document.createElement('span')
span1.textContent='Author: '

div1.appendChild(span1)
const p3=document.createElement('p')
p3.textContent=myLibrary[length+1].author
p3.className='authorname'
div1.appendChild(p3)
card.appendChild(div1)

const p4=document.createElement('p')
p4.className='pages'
p4.textContent=myLibrary[length+1].pages+" pages"
card.appendChild(p4)

const div2=document.createElement('div')
div2.className='status'
const span2=document.createElement('span')
span2.textContent='Read: '
div2.appendChild(span2)
const label=document.createElement('label')
label.className='switch'
const input=document.createElement('input')
input.type='checkbox'
input.id='toggle'
input.checked = myLibrary[length+1].read === true || myLibrary[length+1].read === "true";
label.appendChild(input)
const span3=document.createElement('span')
span3.className='slider round'
label.appendChild(span3)
div2.appendChild(label)
card.appendChild(div2)
document.getElementById('main-content').appendChild(card)
}

const AddButton = document.querySelector('#add');
const DeleteButton=document.querySelector("#delete");

const favDialog = document.getElementById("favDialog");
const confirmBtn = favDialog.querySelector("#confirmBtn");
const Title=favDialog.querySelector("#Title")
const Author=favDialog.querySelector("#Author")
const Pages=favDialog.querySelector("#Pages")
const Read=favDialog.querySelector("#Read")
AddButton.addEventListener("click", () => {
  favDialog.showModal();
  //addBookToLibrary()
  //display()
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  
  const title=Title.value
  const author=Author.value
  const pages=Pages.value
  const read=Read.value
  myLibrary[length+1]= new Book(title,author,pages,read)
  display();
  favDialog.close();
  Title.value=null;
  Author.value=null;
  Pages.value=null
  Read.value=null
});
DeleteButton.addEventListener("click", () => {
 const element= document.getElementById('main-content');
 element.removeChild(element.lastChild);
});
old_books()