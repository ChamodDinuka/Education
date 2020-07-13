const mongoose=require('mongoose');
const Schema =mongoose.Schema;

const NewCourses=new Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,'Email is required']
    }
});

const course=mongoose.model('courses',NewCourses)
module.exports=course;