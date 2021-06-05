const out=document.getElementById("outerbox");
const inn=document.getElementById("innerbox");
const mid=document.getElementById("middlebox");
var divs=document.querySelectorAll("div");
// out.addEventListener('click',e =>{
//     console.log(e);
// })

document.addEventListener('click',e=>{
    if(e.target.matches('div'))
    {
        console.log('clicked a div');
    }
})

divs.forEach(div=>{
    div.addEventListener('click',()=>{console.log("U clicked a div")}
)
})
out.addEventListener("click",()=>{
    colorChange("green",out);
});

inn.addEventListener("click",()=>{
    colorChange("blue",inn);

});

mid.addEventListener("click",()=>{
    colorChange("white",mid);
})


function colorChange(color,x){
    x.style.backgroundColor=color;
}