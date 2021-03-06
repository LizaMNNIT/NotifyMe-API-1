var connection=require('./config');
var fs = require('fs');
var uuid = require('uuid/v1');
var notify = require('./notification');
var cloudinary = require('cloudinary').v2;
var uploadAttachment;
var uploadBanner;
cloudinary.config({
    cloud_name: 'dvm10luy6',
    api_key: '443543684462785',
    api_secret: '9IDfZ2MryJz8FbpjLQUlIU8MQWM'
  });
class createNotice{

  static FetchIDAndSendNotificationForStudent(req,res){
    var title="";
    var body="Click here to view notices";
    if(req.body.scope==1){
      connection.query('select name from student_registration where Reg_id= ?',req.body.studentID,(error,results,fields)=>{
        if(error){
          res.json({
            status:false,
            code: 415,
            message:error.sqlMessage
          });

        }else{
          title = results[0].name + " posted a notice";
          connection.query('call insertStudentNotificationPublic(?,?);',[title,req.body.studentID],function(error,fields,results){
            if(error){

              res.json({
                status:false,
                code: 415,
                message:error.sqlMessage
              });

            }else{
                var array = new Array();
                for(var i=0;i<fields[0].length;i++){
                  array[i] = fields[0][i].token;
                }

                  notify.sendNotification(res,array,title,body);

                  }

            });
          }
        });


    }
    else if(req.body.scope==2){
      connection.query('select name from student_registration where Reg_id= ?',req.body.studentID,(error,results,fields)=>{
        if(error){
          res.json({
            status:false,
            code: 415,
            message:error.sqlMessage
          });

        }else{
          title = results[0].name + " posted a notice";
          connection.query('call insertStudentNotificationDepartment(?,?,?);',[title,req.body.studentID, req.body.depID],function(error,fields,results){
            if(error){

              res.json({
                status:false,
                code: 415,
                message:error.sqlMessage
              });

            }else{
                var array = new Array();
                for(var i=0;i<fields[0].length;i++){
                  array[i] = fields[0][i].token;
                }

                  notify.sendNotification(res,array,title,body);

                  }

            });
          }
        });
    }
    else if(req.body.scope==3){
      connection.query('select name from student_registration where Reg_id= ?',req.body.studentID,(error,results,fields)=>{
        if(error){
          res.json({
            status:false,
            code: 415,
            message:error.sqlMessage
          });

        }else{
          title = results[0].name + " posted a notice";
          connection.query('call insertStudentNotificationCourse(?,?,?,?);',[title,req.body.studentID, req.body.depID,req.body.CourseID],function(error,fields,results){
            if(error){

              res.json({
                status:false,
                code: 415,
                message:error.sqlMessage
              });

            }else{
                var array = new Array();
                for(var i=0;i<fields[0].length;i++){
                  array[i] = fields[0][i].token;
                }

                  notify.sendNotification(res,array,title,body);

                  }

            });
          }
        });
    }
    else{
      connection.query('select name from student_registration where Reg_id= ?',req.body.studentID,(error,results,fields)=>{
        if(error){
          res.json({
            status:false,
            code: 415,
            message:error.sqlMessage
          });

        }else{
          title = results[0].name + " posted a notice";
          connection.query('call insertStudentNotificationYear(?,?,?,?,?);',[title,req.body.studentID, req.body.depID,req.body.CourseID,req.body,year],function(error,fields,results){
            if(error){

              res.json({
                status:false,
                code: 415,
                message:error.sqlMessage
              });

            }else{
                var array = new Array();
                for(var i=0;i<fields[0].length;i++){
                  array[i] = fields[0][i].token;
                }

                  notify.sendNotification(res,array,title,body);

                  }

            });
          }
        });
    }
  }

  static FetchIDAndSendNotificationForFaculty(req,res){
    var title="";
    var body="Click here to view notices";
    if(req.body.scope==1){
      connection.query('select name from faculty_registration where faculty_id= ?',req.body.facultyID,(error,results,fields)=>{
        if(error){
          res.json({
            status:false,
            code: 424,
            message:error.sqlMessage
          });

        }else{
          title = results[0].name + " posted a notice";
          connection.query('call insertFacultyNotificationPublic(?,?);',[title,req.body.facultyID],function(error,fields,results){
            if(error){

              res.json({
                status:false,
                code: 415,
                message:error.sqlMessage
              });

            }else{
                var array = new Array();
                for(var i=0;i<fields[0].length;i++){
                  array[i] = fields[0][i].token;
                }

                  notify.sendNotification(res,array,title,body);

                  }

            });
          }
        });


    }
    else if(req.body.scope==2){
      connection.query('select name from faculty_registration where faculty_id= ?',req.body.facultyID,(error,results,fields)=>{
        if(error){
          res.json({
            status:false,
            code: 424,
            message:error.sqlMessage
          });

        }else{
          title = results[0].name + " posted a notice";
          connection.query('call insertFacultyNotificationDepartment(?,?,?);',[title,req.body.facultyID,req.body.depID],function(error,fields,results){
            if(error){

              res.json({
                status:false,
                code: 415,
                message:error.sqlMessage
              });

            }else{
                var array = new Array();
                for(var i=0;i<fields[0].length;i++){
                  array[i] = fields[0][i].token;
                }

                  notify.sendNotification(res,array,title,body);

                  }

            });
          }
        });
    }
    else if(req.body.scope==3){
      connection.query('select name from faculty_registration where faculty_id= ?',req.body.facultyID,(error,results,fields)=>{
        if(error){
          res.json({
            status:false,
            code: 424,
            message:error.sqlMessage
          });

        }else{
          title = results[0].name + " posted a notice";
          connection.query('call insertFacultyNotificationCourse(?,?,?,?);',[title,req.body.facultyID,req.body.depID, req.body.CourseID],function(error,fields,results){
            if(error){

              res.json({
                status:false,
                code: 415,
                message:error.sqlMessage
              });

            }else{
                var array = new Array();
                for(var i=0;i<fields[0].length;i++){
                  array[i] = fields[0][i].token;
                }

                  notify.sendNotification(res,array,title,body);

                  }

            });
          }
        });
    }
    else{
      connection.query('select name from faculty_registration where faculty_id= ?',req.body.facultyID,(error,results,fields)=>{
        if(error){
          res.json({
            status:false,
            code: 424,
            message:error.sqlMessage
          });

        }else{
          title = results[0].name + " posted a notice";
          connection.query('call insertFacultyNotificationYear(?,?,?,?,?);',[title,req.body.facultyID,req.body.depID, req.body.CourseID,req.body.year],function(error,fields,results){
            if(error){

              res.json({
                status:false,
                code: 415,
                message:error.sqlMessage
              });

            }else{
                var array = new Array();
                for(var i=0;i<fields[0].length;i++){
                  array[i] = fields[0][i].token;
                }

                  notify.sendNotification(res,array,title,body);

                  }

            });
          }
        });
    }
  }

static InsertScope(req,res, ID){


    var scope={
        "NoticeID":ID,
        "scope":req.body.scope,
        "Dept_id":req.body.depID==undefined?1:req.body.depID,
        "Course_id":req.body.CourseID==undefined?1:req.body.CourseID,
        "Year":req.body.year==undefined?0:req.body.year
    }
    var title=req.body.title;
    var date1=req.body.timestamp;

    connection.query('insert into scope set ?',scope,(error,results,fields)=>{
        if(error)
        {
          res.json({
            status:false,
            message:error.sqlMessage
          })
          return;
        }
        else{
            if(req.body.facultyID==undefined){
              this.FetchIDAndSendNotificationForStudent(req,res);
            }
            else{
              this.FetchIDAndSendNotificationForFaculty(req,res);
            }

        }
    });
}
static createNotice(req,res)
{
    const ID = uuid();


    var notice = {
        "Notice_id":ID,
        "S_sender_id":req.body.studentID==undefined?null:req.body.studentID,
        "F_sender_id":req.body.facultyID==undefined?null:req.body.facultyID,
        "validity":req.body.validPeriod,
        "priority":req.body.priority,
        "title":req.body.title,
        "description":req.body.desc,
        "date_time":req.body.timestamp
    };


    connection.query('insert into notices set ?',notice,function(error,results,fields){
        if(error)
        {
          console.log(error);
          res.json({
            status:false,
            message:error.sqlMessage
          })
          return;
        }
        else{
                try{
                    console.log(req);

                    if(!req.files)
                    {
                        createNotice.InsertScope(req,res,ID);
                    }

                    else if(!req.files.attachment && !req.files.banner)
                    {
                        createNotice.InsertScope(req,res,ID);

                    }

                    else if(req.files.attachment){
                        //console.log(req.files);
                       // console.log(req);
                        //console.log(req.files);
                    var AttachmentOBJ = null;
                    var BannerOBJ = null;
                    var i=0;
                    if(req.files.attachment.length>1){

                    req.files.attachment.forEach(element => {

                        var ImageID = uuid();
                        var name = ImageID+'-'+element.name;
                        fs.writeFile('./uploads/Attachments/'+name,element.data,(error)=>{
                            if(error)
                            console.log(error);
                        });
                        if(element.mimitype=="image/jpeg"||element.mimitype=="image/png"||element.mimitype=="image/jpg"){
                          cloudinary.uploader.upload('./uploads/Attachments/'+name, {resource_type: "auto", tags: name, public_id: 'uploads/Attachments/'+name })
                          .then(function (image) {
                            console.log();
                            console.log("** File Upload (Promise)");
                            console.log("* public_id for the uploaded image is generated by Cloudinary's service.");
                            console.log("* " + image.public_id);
                            console.log("* " + image.secure_url);

                            AttachmentOBJ = {
                              "NoticeID":ID,
                              "Att_name": name,
                              "File_path": image.secure_url
                          };
                          connection.query('insert into attachments set ?',AttachmentOBJ,
                          (error,results,fields)=>{
                              if(error)
                              {
                                console.log(error);
                                res.json({
                                  status:false,
                                  message: 'SQL error'
                                })

                              }

                          });
                          })
                          .catch(function (err) {
                            console.log(err);
                            console.log();
                            console.log("** File Upload (Promise)");
                            if (err) { console.warn(err); }
                            res.json({

                              status:false,
                              code: 500,
                              message: 'Server-side error'
                            })
                          });
                        }
                        else{
                          cloudinary.uploader.upload('./uploads/Attachments/'+name, {resource_type: "raw", tags: name, public_id: 'uploads/Attachments/'+name })
                        .then(function (image) {
                          console.log();
                          console.log("** File Upload (Promise)");
                          console.log("* public_id for the uploaded image is generated by Cloudinary's service.");
                          console.log("* " + image.public_id);
                          console.log("* " + image.secure_url);

                          AttachmentOBJ = {
                            "NoticeID":ID,
                            "Att_name": name,
                            "File_path": image.secure_url
                        };
                        connection.query('insert into attachments set ?',AttachmentOBJ,
                        (error,results,fields)=>{
                            if(error)
                            {
                              console.log(error);
                              res.json({
                                status:false,
                                message: 'SQL error'
                              })

                            }

                        });
                        })
                        .catch(function (err) {
                          console.log(err);
                          console.log();
                          console.log("** File Upload (Promise)");
                          if (err) { console.warn(err); }
                          res.json({

                            status:false,
                            code: 500,
                            message: 'Server-side error'
                          })
                        });
                        }



                    });
                }
                else{

                    var ImageID = uuid();
                    var name = ImageID+'-'+req.files.attachment.name;
                    fs.writeFile('./uploads/Attachments/'+name,req.files.attachment.data,(error)=>{
                        if(error)
                        console.log(error);
                    });
                    cloudinary.uploader.upload('./uploads/Attachments/'+name, { tags: name, public_id: 'uploads/Attachments/'+name })
                        .then(function (image) {
                          console.log();
                          console.log("** File Upload (Promise)");
                          console.log("* public_id for the uploaded image is generated by Cloudinary's service.");
                          console.log("* " + image.public_id);
                          console.log("* " + image.secure_url);

                          AttachmentOBJ = {
                            "NoticeID":ID,
                            "Att_name": name,
                            "File_path": image.secure_url
                        };
                        connection.query('insert into attachments set ?',AttachmentOBJ,
                        (error,results,fields)=>{
                            if(error)
                            {
                              console.log(error);
                              res.json({
                                status:false,
                                code:500,
                                message: 'error in SQL'
                              })

                            }

                        });
                        })
                        .catch(function (err) {
                          console.log();
                          console.log(err);
                          console.log("** File Upload (Promise)");
                          if (err) { console.warn(err); }
                          res.json({
                            status:false,
                            code: 500,
                            message: 'Server-side error'
                          })
                        });

                }
            }
                    if(req.files){
                    if(req.files.banner){
                    var ImageID = uuid();
                    var name = ImageID+'-'+req.files.banner.name;
                    fs.writeFile('./uploads/Banner/'+name,req.files.banner.data,(error)=>{
                        if(error)
                        console.log(error);
                    });
                    cloudinary.uploader.upload('./uploads/Banner/'+name, { tags: 'Banner', public_id:'uploads/Banner/'+name })
                        .then(function (image) {
                          console.log();
                          console.log("** File Upload (Promise)");
                          console.log("* public_id for the uploaded image is generated by Cloudinary's service.");
                          console.log("* " + image.public_id);
                          console.log("* " + image.secure_url);

                          BannerOBJ = {
                            "NoticeID":ID,
                            "Img_name": name,
                            "Image_path": image.secure_url
                        };
                        connection.query('insert into images set ?',BannerOBJ,
                        (error,results,fields)=>{
                            if(error)
                            {
                              console.log(error);
                                res.json({
                                    status:false,
                                    code: 500,
                                    message: 'SQL error'
                                  })
                            }
                            else{
                                createNotice.InsertScope(req,res,ID);
                            }
                        });
                        })
                        .catch(function (err) {
                          console.log(err);
                          console.log();
                          console.log("** File Upload (Promise)");
                          if (err) { console.warn(err); }
                          res.json({
                            status:false,
                            code: 500,
                            message: 'Server-side error'
                          })
                        });
                    }
                    else{
                        createNotice.InsertScope(req,res,ID);

                    }
                  }
                }catch(error){
                    console.log(error);
                }
      }

    });
}

}
module.exports=createNotice;
