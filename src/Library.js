function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };
}

function addBook(library, book) {
  library.shelves[book.genre].push(book);
}

function checkoutBook(library, title, genre) {
  // Check if the book exists on the shelf
  var bookIndex = library.shelves[genre].findIndex(function(book) {
    return book.title === title;
  });

  // If book exists on the shelf, remove it from the shelf and return a success message
  if (bookIndex !== -1) {
    library.shelves[genre].splice(bookIndex, 1);
    return "You have now checked out " + title + " from the " + library.name;
  } else {
    // If book does not exist on the shelf, return a failure message
    return "Sorry, there are currently no copies of " + title + " available at the " + library.name;
  }
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};