var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var locationBlogSchema = new Schema({
  info: {type: String, required: true},
  img: String,
  pos : {
    longitude : {type:Number,required: true},
    latitude : {type:Number,required: true}
  },
  author: Schema.Types.ObjectId,
  likedBy: [Schema.Types.ObjectId],
  created:  {type: Date, default: Date.now},
  lastUpdated: Date
});

locationBlogSchema
.virtual("slug")
.get(function(){
  return "/locationblog/"+this._id;
})

locationBlogSchema.pre("save",function(next){
  this.lastUpdated = new Date();
  next();
})


module.exports = mongoose.model('locationBlog', locationBlogSchema);