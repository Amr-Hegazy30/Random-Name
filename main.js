let names = [];
function SelectRandom(){
    if(names.length == 0){
        document.getElementById("selctedName").textContent = 
        "You didn't add any names yet! !";
    }else SelectRandom();
}
function AddName(){
    const newName = document.getElementById("CSS").value.trim();
    if(newName != "")names.push(newName);
    document.getElementById("CSS").value = "";
}
function SelectRandom(){
    const randomIndex = Math.floor(Math.random() * names.length);
    const selctedName = names [randomIndex];
    document.getElementById("selctedName").innerHTML = selctedName;
}