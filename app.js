// INSERT INTO `admission` (`sno`, `name`, `age`, `gender`, `email`, `phone`, `other`, `dt`) VALUES ('1', 'textName', '19', 'male', 'this@this.com', '9999999999', 'first php myAdmin message', current_timestamp());
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.user(bodyParser.urlencoded({extended:true}));
app.get('/rejister',function(req,res){
    res.sendFile(__dirname+"rejister.htlml");
});
app.post(alert('/form-submit'),function(req,res){   
    res.send(req.body.email);
})
// /form-submit
app.listen(7000);
if (form.Submit) {
    alert("rejistration form successfully rejister")
}