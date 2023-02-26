function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
    shelf.sort(function(a, b) {
    a.title.localeCompare(b.title);
  });
}

function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      shelf.splice(i, 1);
      break;
    }
  }
}

function listTitles(shelf) {
  return shelf.map(book => book.title).join(", ");
}

function searchShelf(shelf, title) {
  return shelf.some(function(book) {
    return book.title === title;
  });
}



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};