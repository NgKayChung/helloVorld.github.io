var fullname = "";
var icnumber = "";
var emailAddress = "";
var phoneNumber = "";

function validateInputs()
{
   var a = document.getElementById('fullname').value;
   var icnumber = document.getElementById('icnumber').value;
   var mailid = document.getElementById('mail').value;
   var mob = document.getElementById('numb').value;
    
   /* if(fullname === "") {
        alert('Name is required');
    }
    
    if(!fullname.match(/^[A-Za-z]+$/)) {
        alert('Name should consists of only alphabetic characters(A - Z)');
        return false;
    }*/
    
    //full name
    if(a == "")
                {
                    alert("fullname must be filled");
                    return false;
                }else
                {
                   
                }
                /*this will give alert if special characters are entered*/
                var i=0;
                for(j=0;j<=a.length;j++)
                {
                    /*ascii character table on http://ascii.cl/htmlcodes.htm*/
                   if(a.charCodeAt(j)>=33 && a.charCodeAt(j)<=47 || a.charCodeAt(j)>=58 && a.charCodeAt(j)<=64 || a.charCodeAt(j)>=91 && a.charCodeAt(j)<=96 || a.charCodeAt(j)>=123 && a.charCodeAt(j)<=126)
                   {
                       i++;
                   }
                }
                /*if special character found after i++ increament of i*/
                if(i!=0)
                {
                    alert("Special characters not allowed");
                   return false;
                }else
                {
                   
                }
                
                
                /*this will give alert if you =entered any number*/
                var i=0;
                for(j=0;j<=a.length;j++)
                {
                    
                   if(a.charCodeAt(j)>=48 && a.charCodeAt(j)<=57)
                   {
                       i++;
                   }
                }
                /*give alert if number not found after i++ increament of i*/
                if(i!=0)
                {
                    alert("numbers not allowed");
                   return false;
                }else
                {
                   
                }
                if ((a.length < 5) || (a.length > 15))
                {
                    alert("Your Character must be between 5 to 15 Character");
                    return false;
                }else
                {
                  alert("You have successfully submited a fullname: "+a);   
                }
            }
//email
if(mailid=="")
 {
 document.getElementById("email").innerHTML='Please enter your email Id.';
 document.getElementById("mail").focus();
 return false;
 }
 else
 {
  document.getElementById("email").innerHTML="";
 }
 if((mailid.charCodeAt(mailid.length-4)!=46)&&(mailid.charCodeAt(mailid.length-3)!=46))
 {
 document.getElementById("email").innerHTML='Please enter valid email ID';
 document.getElementById("mail").focus();
 return false;
 }
 else
 {
  document.getElementById("email").innerHTML="";
 }
 if((mailid.charCodeAt(mailid.length-9)!=64)&&(mailid.charCodeAt(mailid.length-10)!=64)&&(mailid.charCodeAt(mailid.length-11)!=64))
 {
 document.getElementById("email").innerHTML='Please enter valid email ID';
 document.getElementById("mail").focus();
 return false;
 }
 else
 {
  document.getElementById("email").innerHTML="";
 }

//mobile
 if(mob=="")
 {
 document.getElementById("number").innerHTML='Please enter your mobile number';
 document.getElementById("numb").focus();
 return false;
 }
 else
 {
 document.getElementById("number").innerHTML="";
 }
 if(mob.length<10)
 {
 document.getElementById("number").innerHTML='Mobile number should be of 10 digits';
 document.getElementById("numb").focus();
 return false; 
 }
 else
 {
  document.getElementById("number").innerHTML="";
 }
 if(mob.charCodeAt(0)!=57&&mob.charCodeAt(0)!=56&&mob.charCodeAt(0)!=55)
 {
  document.getElementById("number").innerHTML='Mobile Number should start with 9, 8 or 7';
  document.getElementById("numb").focus();
  return false;
 }
 var r=0;
 for(y=0;y<mob.length;y++)
 {
 if((mob.charCodeAt(y)>=32&&mob.charCodeAt(y)<=47)||(mob.charCodeAt(y)>=58&&mob.charCodeAt(y)<=255)||(mob.charCodeAt(y)>=338&&mob.charCodeAt(y)<=402)||(mob.charCodeAt(y)>=8211&&mob.charCodeAt(y)<=8482))
 {
  r++;
 }
 }
 if(r!=0)
 {
  document.getElementById("number").innerHTML='Please enter only numeric values in Mobile Number.';
  document.getElementById("numb").focus();
  return false;
 }
 else
 {
  document.getElementById("number").innerHTML="";
 }
}
