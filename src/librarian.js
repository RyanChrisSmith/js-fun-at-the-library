class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name, isMorning) {
    if (isMorning) {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }

  findBook(title) {
    const shelves = this.library.shelves;
    for (const genre in shelves) {
      const bookIndex = shelves[genre].findIndex(book => book.title === title);
      if (bookIndex !== -1) {
        shelves[genre].splice(bookIndex, 1);
        return `Yes, we have ${title}`;
      }
    }
    return `Sorry, we do not have ${title}`;
  }

  calculateLateFee(daysLate) {
    return Math.ceil(.25 * daysLate)
  }
}

module.exports = Librarian;