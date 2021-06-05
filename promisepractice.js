document.getElementById('getText').addEventListener('click',getText);
document.getElementById('getUser').addEventListener('click',getUser);
document.getElementById('getPost').addEventListener('click',getPost);
document.getElementById('addpost').addEventListener('submit',addpost);


function getText(){
    // fetch('samp.txt')
    // .then(function(res){
    //     //console.log(res.text());
    //     return res.text();
    // })
    // .then(function(data){
    //     console.log(data);
    // });

    fetch('samp.txt')
    .then((res)=>{
        return res.text();
    })
    .then((data)=>{
       document.getElementById("output").innerHTML=data;  
     }).catch((err)=>console.log(err))

}