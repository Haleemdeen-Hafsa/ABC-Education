function save(){
    console.log("save called");
    let users= localStorage.getItem("users");
    users = JSON.parse(users);
    if ( users==null){
        users=[]
    }

//save in local storage//
var user=JSON.stringify({
    Fname:document.getElementById('Fname').value,
    Iname:document.getElementById('Iname').value,
    DOB:document.getElementById('DOB').value,
    phone:document.getElementById('phone').value,
    mail:document.getElementById('mail').value,
    address:document.getElementById('address').value,
    qualification:document.getElementById('qualification').value,
    course:document.getElementById('course').value,
    month:document.getElementById('month').value   
})
users.push(user);
localStorage.setItem("users",JSON.stringify(users))

}
