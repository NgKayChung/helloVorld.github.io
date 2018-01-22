//var fullname = "";
//var icnumber = "";
//var emailAddress = "";
//var phoneNumber = "";

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
    alert("Please enter your email Id.");
 //document.getElementById("email").innerHTML='Please enter your email Id.';
 //document.getElementById("mail").focus();
 return false;
 }
 else
 {
  document.getElementById("mail").innerHTML="";
 }
 if((mailid.charCodeAt(mailid.length-4)!=46)&&(mailid.charCodeAt(mailid.length-3)!=46))
 {
     alert("Please enter valid email ID");
 //document.getElementById("email").innerHTML='Please enter valid email ID';
 //document.getElementById("mail").focus();
 return false;
 }
 else
 {
  document.getElementById("mail").innerHTML="";
 }
 if((mailid.charCodeAt(mailid.length-9)!=64)&&(mailid.charCodeAt(mailid.length-10)!=64)&&(mailid.charCodeAt(mailid.length-11)!=64))
 {
     alert("Please enter your email ID.");
 //document.getElementById("email").innerHTML='Please enter valid email ID';
 //document.getElementById("mail").focus();
 return false;
 }
 else
 {
  alert("You have successfully submited an email: "+mailid);   
 }

//mobile
 if(mob=="")
 {
     alert("Please enter your mobile number.");
 //document.getElementById("number").innerHTML='Please enter your mobile number';
 //document.getElementById("numb").focus();
 return false;
 }
 else
 {
 document.getElementById("numb").innerHTML="";
 }
 if(mob.length<10 || mob.length<11)
 {
     alert("Mobile number should be of 10 or 11 digits");
 //document.getElementById("number").innerHTML='Mobile number should be of 10 digits';
 //document.getElementById("numb").focus();
 return false; 
 }
 else
 {
  document.getElementById("numb").innerHTML="";
 }
 if(mob.charCodeAt(0)!=57&&mob.charCodeAt(0)!=56&&mob.charCodeAt(0)!=55)
 {
     alert("Mobile number should start with 9, 8, or 7");
  //document.getElementById("number").innerHTML='Mobile Number should start with 9, 8 or 7';
  //document.getElementById("numb").focus();
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
     alert("Please enter only numeric values in Mobile Number.");
  //document.getElementById("number").innerHTML='Please enter only numeric values in Mobile Number.';
  //document.getElementById("numb").focus();
  return false;
 }
 else
 {
     alert("You have successfully submited your Mobile Number: "+mob); 
  //document.getElementById("numb").innerHTML="";
 }
//ic number
/*function getState(bp) {
   switch(bp) {
       case '14': case '54': case '55': case '56': case '57':
           return 'Federal Territory of Kuala Lumpur';
       case '15': case '58':
           return 'Federal Territory of Labuan';
       case '16':
           return 'Federal Territory of Putrajaya &amp; Cyberjaya';
       case '01': case '21': case '22': case '23': case '24':
           return 'Johor';
       case '02': case '25': case '26': case '27':
           return 'Kedah';
       case '04': case '30':
           return 'Melaka';
       case '05': case '31': case '59':
           return 'Negeri Sembilan';
       case '06': case '32':
           return 'Pahang';
       case '07': case '34': case '35':
           return 'Penang';
       case '08': case '36': case '37': case '38': case '39':
           return 'Perak'
       case '09': case '40':
           return 'Perlis';
       case '10': case '41': case '42': case '43': case '44':
           return 'Selangor';
       case '11': case '45': case '46':
           return 'Terengganu';
       case '12': case '47': case '48': case '49':
           return 'Sabah';
       case '13': case '50': case '51': case '52': case '53':
           return 'Sarawak';
       default:
           return 'Alien State';
   }
}
function checkMe() {
   var ele = document.getElementById('ic'),
   errorContainer = document.getElementById('error');
   errorContainer.style.display = 'none';
   errorContainer.innerHTML = '';
   ic = ele.value.replace(/[^\d.]/g, ""); //remove everything except numbers
   ele.value = ic; //use filtered value

   if(ic.length >= 12) {
       var st = document.getElementById('state');
       document.getElementById('state_container').style.display = 'block';
       //you might want to check for other format e.g army etc etc
       var bp = ic.substr(6,2); //get the state code
       st.innerHTML = getState(bp);
       return false; //change this to true to submit form
   }
   errorContainer.style.display = 'block';
   errorContainer.innerHTML = 'Invalid IC';
   return false;
}*/
