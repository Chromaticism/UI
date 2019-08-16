let mongoose = require("mongoose");

let commentSchema = mongoose.Schema(

	{
		content: String,
		author: String,
        
	}
);



module.exports = mongoose.model("Comment", commentSchema);