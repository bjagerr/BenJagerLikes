console.log("check123");

var likes=[9, 12, 9];
var add=[
    document.querySelector(".post1"),
    document.querySelector(".post2"),
    document.querySelector(".post3"),
]

function like(id){
    likes[id]++;
    add[id].innerHTML= likes[id] + "like(s)"
} 

