
let customerDetails = [];

let btn =  document.getElementById("btn")
btn.addEventListener("click", () => {
    let obj = {}
    obj.fname =document.getElementById(fname).value;
    obj.femail = document.getElementById(femail).value;
    obj.gpa = document.getElementById(gpa).value;
    obj.age = document.getElementById(age).value;
    obj.degree = document.getElementById(degree).value;
    customerDetails.push(obj)
  });

let tbody = document.getElementById("tbody")
for(let i = 0; i < customerDetails.length; i++){
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.innerText = customerDetails[i].fname;

}
