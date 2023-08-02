const { Column } = require("../../models/board/column");
const {internalServerErrorMessage, columnDeletedSuccessMessage } = require('../../helpers/message')
const { errorHandler } = require("../../helpers");

const deleteColumn = async (req, res) => {
  const { columnId } = req.params;

  const userId = req.user.id;

  try {
    const column = await Column.findById(columnId);

    if (!column) {
      return res.status(404).json({ error: errorHandler(404) });
    }

    if (column.user.toString() !== userId) {
      return res.status(403).json({ error: errorHandler(403) });
    }

    await column.remove();

    res.status(200).json({ message: columnDeletedSuccessMessage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: internalServerErrorMessage});
  }
};

module.exports = deleteColumn;