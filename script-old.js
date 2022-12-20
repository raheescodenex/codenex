// let item = document.querySelector("li");
// let allItem = document.querySelectorAll("li");

// allItem[0].innerText = curryPowder[0];
// let curryPowder = ["Salt","Pepper","Chilli","Turmeric","Chicken","Sambar","Fish"];

// let kitchenItemList = document.getElementById("kitchen-items-list");



// Method 1
// for(let powder of curryPowder){
//     let li = document.createElement("li");
//     li.innerText = powder;
//     kitchenItemList.appendChild(li);
// }


// * Method 2
// curryPowder.forEach((item,index)=>{
//     let li = document.createElement("li");
//     li.innerText = `(${index+1}) ${item}`;
//     kitchenItemList.appendChild(li);
// });

// let listTwo = document.querySelectorAll(".item");
// let resArray = [];
// listTwo.forEach(item=>{
//     let itemText = item.innerText;
//     resArray.push(itemText);
// });
// console.log(resArray);
// resArray.pop();
// console.log(resArray);
// resArray.unshift();
// console.log(resArray);
// resArray.shift();
// console.log(resArray);