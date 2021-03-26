const { Model } = require('objection');

class Blog extends Model{
    static get tableName(){
        return 'blogs'
    }

    static get idColumn() {
        return 'id';
      }
}

module.exports=Blog;
