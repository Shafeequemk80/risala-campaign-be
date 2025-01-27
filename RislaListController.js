const RisalaList = require("./RisalaListModel");
const RisalaTarget = require("./risalaCounteModel");


const addPossibilityList = async (req, res) => {
  try {
    const { type, name } = req.body;
    const { unit } = req.params;

    const saveData = new RisalaList({
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

const getPossibilityList = async (req, res) => {
  try {
    const { unit } = req.params;

    const getData = await RisalaList.find({ unit, status: "possibility" });

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
    const saveData = await RisalaList.findByIdAndUpdate(
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

    const getData = await RisalaList.find({ unit, status: "today" });

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
    const saveData = await RisalaList.findByIdAndUpdate(
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
    const saveData = await RisalaList.findByIdAndUpdate(
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

    const getData = await RisalaList.find({ unit, status: "subscribed" });

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

    const getData = await RisalaList.find({ unit, status: "rejected" });

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


const getCount = async (req, res) => {
  try {
    const { unit } = req.params;

    // Find the target by unit name
    const getTarget = await RisalaTarget.findOne({ unitName: unit });

    // Find the subscribed list for the given unit
    const subscribeCount = await RisalaList.countDocuments({  unit, status: 'subscribed' });
    


    // Send the response back with the retrieved data
    res.status(200).json({
      target: getTarget.target,
      subscribedCount: subscribeCount,
    
    });
  } catch (error) {
    console.error('Error in getCount:', error);
    res.status(500).json({ error: 'An error occurred while retrieving data.' });
  }
};

const addUnitCount = async (req, res) => {
  try {
    const { unitName, target } = req.body; // Use req.body for input

    // Create a new document
    const saveCount = new RisalaTarget({
      unitName,
      target,
    });

    // Save the document to the database
    const result = await saveCount.save();

    // Send a success response
    res.status(201).json({
      message: 'Unit count added successfully',
      data: result,
    });
  } catch (error) {
    console.error('Error in addUnitCount:', error);
    res.status(500).json({ error: 'An error occurred while adding unit count' });
  }
};

module.exports = {
  addPossibilityList,
  getPossibilityList,
  addTodayList,
  getTodayList,
  addTosubscribe,
  addToRejected,
  getsubscribeList,
  getrejectedList,
  getCount,
  addUnitCount
};
