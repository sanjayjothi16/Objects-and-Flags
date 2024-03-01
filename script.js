let a= {name:"persion 1",age:5};
let b= {age:5,name:"person 1"};
 
a= Object.keys(a).sort()
b= Object.keys(b).sort()

let str1 =JSON.stringify(a)
let str2 = JSON.stringify(b)
console.log(str1===str2)

// API

let xhr =new XMLHttpRequest();
//console.log(xhr);
xhr.open("get","https://restcountries.com/v3.1/all")
xhr.send();
xhr.onload = function () {
    
let st =JSON.parse(xhr.response);


for (let i=0;i <=st.length; i++){
    console.log(st[i].flags.png)
    console.log(st[i].name.common)
    console.log(st[i].region)
    console.log(st[i].subregion)
    console.log(st[i].population)
}};