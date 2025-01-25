const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Простая база данных в памяти для хранения монет пользователей
const userCoins = {};

// Получение количества монет для конкретного пользователя
app.get("/api/coins", (req, res) => {
  const { user_id } = req.query;

  if (!user_id) {
    return res.status(400).json({ error: "User ID is required" });
  }

  const coins = userCoins[user_id] || 0;
  res.json({ coins });
});

// Обновление количества монет для конкретного пользователя
app.post("/api/coins", (req, res) => {
  const { user_id, coins } = req.body;

  if (!user_id || typeof coins !== "number") {
    return res.status(400).json({ error: "Invalid data" });
  }

  userCoins[user_id] = coins; // Сохраняем монеты для пользователя
  res.json({ success: true, coins });
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
