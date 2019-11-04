//function for name
function Name(){
    var username=document.getElementById("uname");

    if(username.value.length<=5)
    {
        document.getElementById("feedback").style.visibility="visible";
    }
    else{
        document.getElementById("feedback").style.visibility="hidden";
    }
}
//function for email
function Email(){
  var emailid=document.getElementById("email");
  var id=/^([a-z A-Z 0-9 \.]+)@([a-z A-Z 0-9]+)\.([a-z A-z]{2,20})$/;
  if(id.test(emailid.value))
  {
      document.getElementById("E1").style.visibility="hidden";
  }
  else{
      document.getElementById("E1").style.visibility="visible";
  }
}
//function for Password
function Password(){
      var password=document.getElementById("password");
      if(password.value.length>=8){
          document.getElementById("P1").style.visibility="hidden";
      }
      else{
        document.getElementById("P1").style.visibility="visible";
      }
}
//function for confirm Password
function Confirm(){
    var p=document.getElementById("password");
    var pw=document.getElementById("confirmpassword");
    if(p.value==pw.value){
        document.getElementById("tick").style.visibility="visible";
        document.getElementById("CP1").style.visibility="hidden";
    }
    else
    {
      document.getElementById("CP1").style.visibility="visible";
      document.getElementById("crossmark").style.visibility="visible";
    }
}
//function for date of Birth
function Age()
{
   var d1=new Date();
   var currentyear=d1.getFullYear();
    var d2=document.getElementById("dates").value;
    var d3=new Date(d2);
    var year=d3.getFullYear();
    var old=currentyear-year;
   if(old<18){
       document.getElementById("age").style.visibility="visible";
   }
   else
   {
     document.getElementById("age").style.visibility="hidden";
   }
}
//function for textarea
function Texts()
{
   var text=document.getElementById("textarea").value.length;
   if(140-text>=0)
   {
      document.getElementById("count").textContent=140-text;
   }
}
