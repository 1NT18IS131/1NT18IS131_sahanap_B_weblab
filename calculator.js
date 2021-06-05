function dis(val){
document.getElementById("ipt").value+=val;
   // document.write(p);
}
function solve(){
    let x= document.getElementById("ipt").value;
    let y=eval(x);
    document.getElementById("ipt").value=y

}
function clr()
{
document.getElementById("ipt").value = " "
}
