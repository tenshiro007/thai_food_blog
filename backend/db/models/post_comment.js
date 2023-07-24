module.exports = class PostComment {
    constructor(title, content, parentId,authorId,postId) {
      this.title = title;
      this.content = content;
      this.parentId = parentId;
      this.authorId = authorId;
      this.postId = postId;
    }
};
  