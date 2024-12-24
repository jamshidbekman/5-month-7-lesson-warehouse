import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Mahsulot nomi kiritilishi shart"],
  },
  category: {
    type: String,
    required: [true, "Kategoriya kiritilishi shart"],
    enum: ["telefon", "noutbuk", "aksessuar"],
  },
  price: {
    type: Number,
    required: [true, "Narx kiritilishi shart"],
    min: [0, "Narx 0 dan katta bo'lishi kerak"],
  },
  quantity: {
    type: Number,
    required: [true, "Soni kiritilishi shart"],
    min: [0, "Soni 0 dan katta bo'lishi kerak"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ProductModel = mongoose.model("products", productSchema);

export default ProductModel;
