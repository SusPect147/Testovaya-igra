const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let coinCount = 0; // Хранилище монет в памяти

// Получение количества монет
app.get("/api/coins", (req, res) => {
  res.json({ coins: coinCount });
});

// Обновление количества монет
app.post("/api/coins", (req, res) => {
  const { coins } = req.body;
  if (typeof coins === "number") {
    coinCount = coins;
    res.json({ success: true });
  } else {
    res.status(400).json({ error: "Invalid data" });
  }
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});