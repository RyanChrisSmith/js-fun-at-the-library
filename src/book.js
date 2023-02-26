function createTitle(title) {
  return "The " + title;
}


function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  };
}

function saveReview(newReview, reviewsArray) {
  if (!reviewsArray.includes(newReview)){
    reviewsArray.push(newReview);
  }
}

function calculatePageCount(bookTitle) {
  var pageCount = 20 * bookTitle.length;
  return pageCount;
}

function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre
  };
  return book;
}

function editBook(book) {
  book.pageCount = book.pageCount * .75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}