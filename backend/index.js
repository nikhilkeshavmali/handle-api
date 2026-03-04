import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const products = [
  {
    id: 1,
    name: "table wooden",
    price: 200,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    id: 2,
    name: "chair wooden",
    price: 100,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    id: 3,
    name: "sofa wooden",
    price: 500,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    id: 4,
    name: "bed wooden",
    price: 300,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    id: 5,
    name: "cupboard wooden",
    price: 400,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
];

app.get("/api/products", (req, res) => {
  const search = req.query.search || "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  setTimeout(() => {
    res.send(filteredProducts);
  }, 1000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
