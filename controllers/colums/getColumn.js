const { Column } = require("../../models/board/column");
const {internalServerErrorMessage } = require('../../helpers/message')
const { errorHandler } = require("../../helpers");


const getColumn = async (req, res) => {
  const { columnId } = req.params;

  try {
    const column = await Column.findById(columnId);

    if (!column) {
      return res.status(404).json({ error: errorHandler(404) });
    }

    res.status(200).json(column);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: internalServerErrorMessage });
  }
};

module.exports = getColumn;