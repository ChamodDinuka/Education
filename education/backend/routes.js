const mongoose=require('mongoose');
const Schema =mongoose.Schema;

const NewCourses=new Schema({
    university:{
        type:String,
        required:[true,'university is required']
    },
    course:{
        type:String,
        required:[true,'course is required']
    },
    description:{
        type:String,
        required:[true,'description is required']
    },
    duration:{
        type:String,
        required:[true,'duration is required']
    },
    charge:{
        type:String,
        required:[true,'duration is required']
    }

   
});

const course=mongoose.model('courses',NewCourses)
module.exports=course;