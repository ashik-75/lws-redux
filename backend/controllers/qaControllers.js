import expressAsyncHandler from "express-async-handler";
import QA from "../model/QA.js";

export const addQA = expressAsyncHandler(async (req, res) => {
  const response = await QA.create(req.body);
  setTimeout(() => {
    res.json(response);
  }, 2000);
});

export const getAllQA = expressAsyncHandler(async (req, res) => {
  const response = await QA.find();
  res.json(response);
});

export const getSingleQA = expressAsyncHandler(async (req, res) => {
  const response = await QA.findOne({
    _id: req.query?.questionId,
  });

  res.json(response);
});
