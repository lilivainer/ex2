// יצירת משתנה שמכיל נתוני ספר
const book = {
  title: "Scope & Closures",
  author: "Kyle Simpson",
  description:
    "Parts of the language that many JavaScript programmers simply avoid.",
  coverImage:
    "https://res.cloudinary.com/practicaldev/image/fetch/s--rT5htF3e--/c_limit,f_auto,fl_progressive,q_80,w_375/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9xy1f7vdvmf6j0g2daok.png", // ניתן להחליף לתמונה אחרת
};

// פונקציה ליצירת HTML לתצוגת הספר
function displayBook(book) {
  const bookContainer = document.getElementById("book-display");

  // יצירת HTML לספר
  bookContainer.innerHTML = `
    <img class="book-cover" src="${book.coverImage}" alt="${book.title}">
    <div class="book-title">${book.title}</div>
    <div class="book-author">By ${book.author}</div>
    <div class="book-description">${book.description}</div>
  `;
}

// קריאה לפונקציה
displayBook(book);
