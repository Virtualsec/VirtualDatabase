var si_user,si_pass;
var su_user,su_eid,su_pass,su_cfpass;

si_user =   document.forms["si_form"]["si-user"].value;
si_pass =   document.forms["si_form"]["si-pass"].value;

su_user = document.forms["su_form"]["su_user"].value;
su_pass = document.forms["su_form"]["su_pass"].value;
su_eid = document.forms["su_form"]["su_eid"].value;
su_cfpass = document.forms["su_form"]["su_cfpass"].value;




function sign_in(){

    if(si_user == null && si_pass== null){
        alert("Please Enter Valid Info!!!")
    }else
    {
        if(si_user == 'kp' && si_pass == '123'){
            alert("Login Success")
            
        }else
        {
            alert("Login Failed")   
        }
    }

    
}

function signup(){


}