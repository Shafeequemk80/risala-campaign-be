const RislaList = require("./RislaListModel");

const addHopeList = async (req, res) => {
  try {
    const { type, name } = req.body;
    const { unit } = req.params;

    const saveData = new RislaList({
      unit, // Include the unit field
      type,
      name,
    });

    const addedData = await saveData.save();

    if (addedData) {
      res.status(200).json({ message: "successful", data: addedData }); // Use status 200 for success and include added data
    } else {
      res.status(400).json({ message: "facing error 400" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getHopeList = async (req, res) => {
  try {
    const { unit } = req.params;

    const getData = await RislaList.find({ unit, status: "hope" });

    if (getData) {
      res.status(200).json({ message: "successful", data: getData }); // Use status 200 for success and include added data
    } else {
      res.status(400).json({ message: "facing error 400" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const addTodayList = async (req, res) => {
  try {
    const { id } = req.params;

    // Update the document with the given ID
    const saveData = await RislaList.findByIdAndUpdate(
      id,
      { $set: { status: "today" } }, // Update query
      { new: true } // Return the updated document
    );

    // Check if the document was found and updated
    if (saveData) {
      res.status(200).json({ message: "Update successful", success: true });
    } else {
      res.status(404).json({ message: "Document not found", success: false });
    }
  } catch (error) {
    console.error("Error updating document:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getTodayList = async (req, res) => {
  try {
    const { unit } = req.params;

    const getData = await RislaList.find({ unit, status: "today" });

    if (getData) {
      res.status(200).json({ message: "successful", data: getData }); // Use status 200 for success and include added data
    } else {
      res.status(400).json({ message: "facing error 400" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const addTosubscribe = async (req, res) => {
  try {
    const { id } = req.params;

    // Update the document with the given ID
    const saveData = await RislaList.findByIdAndUpdate(
      id,
      { $set: { status: "suscribed" } }, // Update query
      { new: true } // Return the updated document
    );

    // Check if the document was found and updated
    if (saveData) {
      res.status(200).json({ message: "Update successful", success: true });
    } else {
      res.status(404).json({ message: "Document not found", success: false });
    }
  } catch (error) {
    console.error("Error updating document:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const addToRejected = async (req, res) => {
  try {
    const { id } = req.params;

    // Update the document with the given ID
    const saveData = await RislaList.findByIdAndUpdate(
      id,
      { $set: { status: "rejected" } }, // Update query
      { new: true } // Return the updated document
    );

    // Check if the document was found and updated
    if (saveData) {
      res.status(200).json({ message: "Update successful", success: true });
    } else {
      res.status(404).json({ message: "Document not found", success: false });
    }
  } catch (error) {
    console.error("Error updating document:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getsubscribeList =async (req, res) => {
  try {
    const { unit } = req.params;

    const getData = await RislaList.find({ unit, status: "suscribed" });

    if (getData) {
      res.status(200).json({ message: "successful", data: getData }); // Use status 200 for success and include added data
    } else {
      res.status(400).json({ message: "facing error 400" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getrejectedList =async (req, res) => {
  try {
    const { unit } = req.params;

    const getData = await RislaList.find({ unit, status: "rejected" });

    if (getData) {
      res.status(200).json({ message: "successful", data: getData }); // Use status 200 for success and include added data
    } else {
      res.status(400).json({ message: "facing error 400" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  addHopeList,
  getHopeList,
  addTodayList,
  getTodayList,
  addTosubscribe,
  addToRejected,
  getsubscribeList,
  getrejectedList
  
};
