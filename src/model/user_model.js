const mongoose = require("mongoose");


const StudentSchema = new mongoose.Schema(
    {
      First_name : {type : String ,require: true},
      Last_name : {type : String ,require: true},
      Email : {type : String ,require: true},
      Address : {type : String ,require: true},

    },
    {
      versionKey: false, 
      timestamps: true, 
    }
  );
  
  const Student = mongoose.model("student", StudentSchema); 

  module.exports = Student