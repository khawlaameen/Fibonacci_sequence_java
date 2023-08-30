function fibonacci(n){
var a =[]
if (n > 0){
if (n == 1){
    alert(0)
}
else if (n == 2){
    a.push(0 , 1)
    alert(a)
}
else {
    a.push(0 , 1)
    while (n > a.length ) {
        num=0
         num=  + a[(a.length)-2]+a[(a.length)-1]
         a.push(num)
    }
    alert(a)
}    
}  
else{
    alert("you most enter positve number")
}}

n=prompt("enter the num")
fibonacci(n)

