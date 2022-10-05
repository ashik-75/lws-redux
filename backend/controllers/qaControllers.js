import expressAsyncHandler from "express-async-handler";
import QA from "../model/QA.js";

export const addQA = expressAsyncHandler(async (req, res) => {
  const response = await QA.create(req.body);
  setTimeout(() => {
    res.json(response);
  }, 2000);
});

export const getAllQA = expressAsyncHandler(async (req, res) => {
  console.log("Get Reuqest for all QA");
  const itemPerPage = 2;
  const page = parseInt(req.query.page || 1);
  const search = req.query.search || "";
  const totalDocument = await QA.find({
    answer: new RegExp(search, "i"),
  }).count();
  const totalPage = Math.ceil(totalDocument / itemPerPage);
  const response = await QA.find({
    $or: [
      { answer: new RegExp(search, "i") },
      { question: new RegExp(search, "i") },
    ],
  })
    .skip((page - 1) * itemPerPage)
    .limit(itemPerPage)
    .sort("-createdAt");

  res.json({
    page,
    totalPage,
    totalDocument,
    data: response,
  });
});

export const getSingleQA = expressAsyncHandler(async (req, res) => {
  console.log("get request for single QA");
  const qaId = req.params.id;
  const response = await QA.findOne({
    _id: qaId,
  });

  res.json(response);
});
export const updateQa = expressAsyncHandler(async (req, res) => {
  console.log("update QA");
  const qaId = req.params.id;
  const payload = req.body || {};

  const response = await QA.findOneAndUpdate(
    { _id: qaId },
    { $set: payload },
    { new: true }
  );

  res.json(response);
});
export const deleteQa = expressAsyncHandler(async (req, res) => {
  console.log("Delete QA");
  const qaId = req.params.id;

  const response = await QA.findOneAndDelete({
    _id: qaId,
  });

  res.json(response);
});
