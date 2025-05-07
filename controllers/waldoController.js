const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const { PrismaClient } = require("./generated/prisma/client");
const prisma = new PrismaClient();

exports.search = asyncHandler(async (req, res, next) => {
  const charPosition = await prisma.character.findUnique({
    where: {
      name: req.params.name,
    },
  });
  const charPos = charPosition.coordinates;
  if (
    Math.abs(req.params.xpos - charPos[0]) < 40 &&
    Math.abs(req.params.ypos - charPos[1]) < 40
  )
    return res.json(true);
  else return res.json(false);
});

exports.createScore = asyncHandler(async (req, res, next) => {
  await prisma.score.create({
    data: {
      name: req.body.name,
      time: req.body.time,
    },
  });
  return res.json({ message: "Score saved" });
});

exports.getScores = asyncHandler(async (req, res, next) => {
  console.log("iep");
  const scores = await prisma.score.findMany();
  return res.send(scores);
});
