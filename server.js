const express = require("express");
const path = require("path");

const app = express();

// Сервируем статические файлы (ваш HTML, JS, CSS)
app.use(express.static(path.join(__dirname)));

// Главная страница (загрузка HTML)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
