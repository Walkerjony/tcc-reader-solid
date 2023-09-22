const { PrismaClient } = require('@prisma/client');
const axios = require('axios');
const { comment } = require('postcss');
const prisma = new PrismaClient();

exports.likePost =  async (req, res) => {
  const { bookId, user } = req.body;
  console.log(req.body)
  console.log("teste", user)

  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
    const bookData = response.data;


    const book = await prisma.book.create({
      data: {
        likeCount: 0,
        userId: user,
        BookId: bookId
       },
    });
    res.status(201).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create book', error });
  }


};

exports.dislikeBook = async (req, res) => {
  const { bookId, user } = req.body;

  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
    const bookData = response.data;

  const dislike = prisma.book.delete({
    where: {
      BookId: bookId
    },
  })
    res.status(201).json(dislike);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to dislike book', error });
  }
}
