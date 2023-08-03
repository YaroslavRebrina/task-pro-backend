const { User } = require("./path/to/userModel"); // Замените './path/to/userModel' на путь к модели пользователя

async function chengeBoard(req, res) {
  try {
    const { boardsData } = req.body; // Получаем данные доски из тела запроса
    const user = req.user; // Получаем пользователя из мидвары

    // Проверяем, есть ли в массиве boards объект с переданным id доски
    const existingBoardIndex = user.boards.findIndex(
      (board) => board.id === boardsData.id
    );

    if (existingBoardIndex !== -1) {
      // Если доска с таким id существует, меняем её на данные, переданные с фронтенда
      user.boards[existingBoardIndex] = boardsData;
    } else {
      // Если доски с таким id нет, добавляем новую доску в массив
      user.boards.push(boardsData);
    }

    // Сохраняем обновленного пользователя в базе данных
    await user.save();

    // Возвращаем обновленный массив boards в ответе
    return res.json({
      message: "Board updated successfully",
      boards: user.boards,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  chengeBoard,
};
