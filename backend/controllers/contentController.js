const Content = require("../models/Content");

// Get Content
exports.getContent = async (req, res) => {
  const content = await Content.findOne();
  res.json(content);
};

// Update Content
exports.updateContent = async (req, res) => {
  const { title, description } = req.body;

  let content = await Content.findOne();

  if (!content) {
    content = await Content.create({
      title,
      description,
    });
  } else {
    content.title = title;
    content.description = description;

    await content.save();
  }

  res.json(content);
};