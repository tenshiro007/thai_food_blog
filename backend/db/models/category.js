module.exports = class Category {
  constructor(title, content, parentId) {
    this.title = title;
    this.content = content;
    this.parentId = parentId;
  }
};
