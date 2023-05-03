// console.log(this);
//
// function myFunc() {
//   console.log(this);
// }
// myFunc();
//
// // document.querySelector('.btn').onclick = function (){
// //     // console.log(this);
// // this.style.background=  'red'
// //     // console.log(event.target);
// // }
// // document.querySelectorAll(".btn").forEach(function (item) {
// //   item.addEventListener("click", function () {
// //     this.style.background = "red";
// //   });
// // });
// document.querySelectorAll(".btn").forEach(function (item) {
//   item.addEventListener("click", () => {
//     this.style.background = "red";
//   });
// });

// let obj = {
//   name: "test",
//   sayName: function () {
//     console.log(this.name);
//   },
// };
// obj.sayName();
