const bookService = require("../services/bookService");

exports.getAllBook = (req, res) => {
    const books = bookService.getAllBook();
    res.json({
        status: 200,
        data: books,
        message: "Book details retrieved using service"
    });
};


