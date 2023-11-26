const changestatus = document.querySelector("h5");
const addFriend = document.querySelector("#add"); 
var check = 0 ;

addFriend.addEventListener("click",function(){
    if(check==0){
    changestatus.innerHTML = "Friends";
    changestatus.style.color = "green";
    addFriend.innerHTML = "Remove"
    check = 1;
    }
    else{
    changestatus.innerHTML = "Stranger";
    changestatus.style.color = "red";
    addFriend.innerHTML = "Add Friend";
    check = 0;
    }
    
});

