const { PrismaClient } = require('@prisma/client');
const axios = require('axios');
const { comment } = require('postcss');
const prisma = new PrismaClient();

exports.likeBook =  async (req, res) => {
  const { bookId, user } = req.body;
  console.log(req.body)
  console.log("teste", user)
  try {
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
  console.log(req.body)
  console.log("teste", user)
  try {
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
}