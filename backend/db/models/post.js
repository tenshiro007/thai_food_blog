module.exports=class Post{
    constructor(title,content,published,authorId,parentId){
        this.title=title
        this.content=content 
        this.published=published 
        this.authorId=authorId 
        this.parentId=parentId
    }
}