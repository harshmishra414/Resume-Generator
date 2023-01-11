//Data storing into localstorage
function validateForm(){

    let data=localStorage.getItem('details') ? JSON.parse(localStorage.getItem('details')) : [];;
    let formData ={
            "name":document.getElementById("uName").value,
            "email":document.getElementById("uEmail").value,
            "contactno":document.getElementById("uContactno").value,
            "password":document.getElementById("uPassword").value,
            "confirmpassword":document.getElementById("confirmPassword").value
        }
        data.push(formData);
        if(localStorage){
            localStorage.setItem("details", JSON.stringify(data));
        } 
}
//Check if password is matching
function verifyPassword(input){
    if(input.value != document.getElementById("uPassword").value){
        input.setCustomValidity("Password Must be Matching");
    }else{
        input.setCustomValidity("");
    }
}
//check already registered users
function emailExist(value){
    let existemail = JSON.parse(localStorage.getItem("details"));
    
    let emailid = existemail.map((email,i,existemail) =>{
        return existemail[i].email;
    });

     let getexistemail = emailid.filter((email)=>{
        if(email == value.value){
            value.setCustomValidity('email exist. try something else');
            
        }else{
            value.setCustomValidity("");
        }
    });
}
//Handling bubbling
    const form = document.getElementById("registerForm");
    form.addEventListener("submit", function(e){
        e.preventDefault();
        form.reset();
        document.getElementById("thankYou").style.display="block";
        form.style.display="none";
    });

    function showHide(show, hide){
        let showEle = document.getElementById(show);
        let hideEle = document.getElementById(hide);
        showEle.style.display="block";
        hideEle.style.display="none";
    }

    //login here
    function loginUser(){
        
        let loginEmail = document.getElementById("uemailId").value;
        let loginPass =  document.getElementById("ePassword").value;
        let matchEmail = JSON.parse(localStorage.getItem("details"));
        let emailArray =[];
        let passArray=[];
         let result = matchEmail.map((email, i, matchEmail) =>{
        
           emailArray.push(matchEmail[i].email);
           passArray.push(matchEmail[i].password);
        });
       // console.log(emailArray);
        if(emailArray.indexOf(loginEmail) > -1 && passArray.indexOf(loginPass) > -1){
            console.log("You have sucsessfuly loged in");
        }else{
            console.log("You have no registered with us");
        }
      
    }
    const loginForm = document.getElementById("logIn");
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();
    });