'use strict';
var fs = require('fs');

var signupFields = document.getElementById("signup-form");
var submitBtn = document.getElementById("submit-login");
submitBtn.addEventListener("click", checkAllFields);



function addNewUser(){
  var newUser = {};
  newUser["firstName"] = signupFields[0].value;
  newUser["lastName"] = signupFields[1].value;
  newUser["email"] = signupFields[2].value;
  newUser["password"] = signupFields[4].value;
  newUser["university"] = signupFields[6].value;
  newUser["mode"] = signupFields[7].value;
  fs.writeFileSync('accounts.json', newUser);
  console.log(newUser);
}

function checkEmailPass(){
  if(signupFields[2].value !== signupFields[3].value){
    window.alert("YOUR EMAIL DOESN'T MATCH");
    return;
  }
  else if(signupFields[4].value !== signupFields[5].value){
    window.alert("YOUR PASSWORD DOESN'T MATCH");
    return;
  }
  addNewUser();
}

function checkAllFields(){
  for(var i = 0; i < signupFields.length; i++){
    if(!signupFields[i].value){
      window.alert("YOU HAVE LEFT A FIELD EMPTY");
      signupFields[4] = " ";
      signupFields[5] = " ";
      return;
    }
  }
  checkEmailPass();
}
