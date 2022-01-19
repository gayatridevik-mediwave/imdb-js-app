// rough work

fetch("http://localhost:1337/api/movies")
  .then(function (result) {
    return result.json();
  })
  .then(function (data) {
    console.log(data);
  });

setTimeout(function () {
  console.log("After 3 seconds");
}, 3000);

setTimeout(() => {
  console.log("After 2 seconds");
}, 2000);

setTimeout(() => {
  console.log("After 5 seconds");
}, 5000);
