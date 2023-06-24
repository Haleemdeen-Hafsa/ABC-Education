let users=localStorage.getItem("users");
users=JSON.parse(users);
if(users==null){
    users=[];
}

let users_data="<table>"
for (user in users){
    let registrant=JSON.parse(users[user]);
    users_data+="<tr id=row;>"
    users_data+="<td>"+registrant["Fname"]+"</td>"+
    "<td>"+registrant["Iname"]+"</td>"+
    "<td>"+registrant["DOB"]+"</td>"+
    "<td>"+registrant["phone"]+"</td>"+
    "<td>"+registrant["mail"]+"</td>"+
    "<td>"+registrant["address"]+"</td>"+
    "<td>"+registrant["qualification"]+"</td>"+
    "<td>"+registrant["course"]+"</td>"+
    "<td>"+registrant["month"]+"</td>"+
    "<td><button onclick=edit();> Edit </button></td><td><button onclick=delete();> Delete </button>"
    "</tr>"
}

users_data+="</table>"
document.getElementById("data").innerHTML=users_data;



function ondelete(user){
    localStorage.removeItem(user[row]);

    resetform();

}