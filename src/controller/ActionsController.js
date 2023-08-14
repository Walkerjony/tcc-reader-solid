const { PrismaClient } = require('@prisma/client');
const axios = require('axios')
const prisma = new PrismaClient();

exports.likePost =  async (req, res) => {
  const { bookId } = req.body;
  
  console.log(req.body)
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
    const bookData = response.data;

    const book = await prisma.book.create({
      data: {
        id: bookData.volumeInfo.id,
        likeCount: 0,
      },
    });

    res.status(201).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create book', error });
  }
};
