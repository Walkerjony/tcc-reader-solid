const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.likePost =  async (req, res) => {
  const { userId, postId } = req.body;
  try {
    const existingLike = await prisma.like.findUnique({
      where: { userId_postId: { userId, postId } },
    });

    if (existingLike) {
      res.status(400).json({ message: 'You have already liked this post.' });
      return;
    }

    const newLike = await prisma.like.create({
      data: { userId, postId },
    });

    res.status(201).json(newLike);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while liking the post.' });
  }
};
