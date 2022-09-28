import mongoose from "mongoose";

const QASchema = new mongoose.Schema(
  {
    question: String,
    answer: mongoose.Schema.Types.Mixed,
  },
  {
    timestamps: true,
  }
);

const QA = mongoose.model("QA", QASchema);

export default QA;
