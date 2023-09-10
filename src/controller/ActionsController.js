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
  
// exports.commentBook = async (req, res) => {
//   const { bookId, text, user } = req.body;

//   try {
//     const comment = await prisma.comment.create({
//       data: {
//         content: text,
//         bookId: bookId,
//         username: user
//       }
//     });

//     console.log(comment);

//     res.status(201).json(comment);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to create comment' });
//   }
// };


