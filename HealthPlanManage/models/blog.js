const mongoose = require('mongoose');
const blogSchema = {
    title: String,
    content: String,
    like: [
        {
            id : String,
            name: String
        }

    ],
    author: {
        id : String,
        name: String
	},
	comments: [
      { 
        type : mongoose.Schema.Types.ObjectId,
        ref: "Comment"
      }
   ],
   ifModify : {
       type: Boolean,
       default: false
   }

};


module.exports = mongoose.model('Blog', blogSchema);
