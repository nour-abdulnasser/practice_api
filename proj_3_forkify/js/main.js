/* **************** CALLBACKS // PROMISES // ASYNC AWAIT **************** */

let allFoods = [];

/* **************** APPLYING CALLBACK CONCEPT **************** */

// function getPizza(x) {
//   // first process the request
//   let foodsReq = new XMLHttpRequest();
//   foodsReq.open("GET", `https://forkify-api.herokuapp.com/api/search?q=pizza`);
//   foodsReq.send();
//   // 1-2  2-3  3-4
//   foodsReq.addEventListener("loadend", function (e) {
//     if (foodsReq.status == 200) {
//       // console.log('all foods', JSON.parse(foodsReq.response));
//       allFoods = JSON.parse(foodsReq.response).recipes;
//       console.log("all pizza", allFoods);
//       // displayAllFoods();
//       // console.log('this is synchronous'); // called in if condition after making sure data is received correctly and function is executed
//       x();
//     } else {
//       console.log("Error");
//     }
//   });

//   // console.log('this is synchronous'); // wont wait for pizza response, will appear before pizza is displayed
// }
// function getBeef(x) {
//   // first process the request
//   let foodsReq = new XMLHttpRequest();
//   foodsReq.open("GET", `https://forkify-api.herokuapp.com/api/search?q=beef`);
//   foodsReq.send();
//   // 1-2  2-3  3-4
//   foodsReq.addEventListener("loadend", function (e) {
//     if (foodsReq.status == 200) {
//       // console.log('all foods', JSON.parse(foodsReq.response));
//       allFoods = JSON.parse(foodsReq.response).recipes;
//       console.log("all beef", allFoods);
//       // displayAllFoods();
//       x();
//     } else {
//       console.log("Error");
//     }
//   });
// }
// function getSalad(callback) {
//   // first process the request
//   let foodsReq = new XMLHttpRequest();
//   foodsReq.open("GET", `https://forkify-api.herokuapp.com/api/search?q=salad`);
//   foodsReq.send();
//   // 1-2  2-3  3-4
//   foodsReq.addEventListener("loadend", function (e) {
//     if (foodsReq.status == 200) {
//       // console.log('all foods', JSON.parse(foodsReq.response));
//       allFoods = JSON.parse(foodsReq.response).recipes;
//       console.log("all Salad", allFoods);
//       // displayAllFoods();
//       callback();
//     } else {
//       console.log("Error");
//     }
//   });
// }
// function end() {
//   console.log("end of menu");
// }

function displayAllFoods() {
  let box = ``;

  for (let i = 0; i < allFoods.length; i++) {
    box += `
    <div class="col-md-4">
    <a href="${allFoods[i].source_url}">
    <img src="${allFoods[i].image_url}" class='w-100'  alt="">
    </a>
    <h3 class='text-center' >${allFoods[i].title}</h3>
    </div>
    `;
  }
  document.querySelector(".foodsSection").innerHTML = box;
}

// document.querySelector('#searchInput').addEventListener('keyup', function(e){
//   getFoods(e.target.value);
// })

// // getPizza( getBeef (getSalad(end))); // WRONG
// // CORRECT
// getPizza(function () {
//   getBeef(function () {
//     getSalad(end);
//   });
// }); // note how this is easier to edit

/* **************** APPLYING PROMISES CONCEPT **************** */

function getPizza() {
  // create promise instance

  let newPromise = new Promise(function (callback) { // Note how the callback argument is passed using .then()9
    // first process the request
    let foodsReq = new XMLHttpRequest();
    foodsReq.open(
      "GET",
      `https://forkify-api.herokuapp.com/api/search?q=pizza`
    );
    foodsReq.send();
    // 1-2  2-3  3-4
    foodsReq.addEventListener("loadend", function (e) {
      if (foodsReq.status == 200) {
        // console.log('all foods', JSON.parse(foodsReq.response));
        allFoods = JSON.parse(foodsReq.response).recipes;
        console.log("all pizza", allFoods);
        // displayAllFoods();
        // console.log('this is synchronous'); // called in if condition after making sure data is received correctly and function is executed
        callback();
      } else {
        console.log("Error");
      }
    });
  });
  return newPromise;
  // console.log('this is synchronous'); // wont wait for pizza response, will appear before pizza is displayed
}
function getBeef() {
  let newPromise = new Promise(function (callback) {
    // first process the request
    let foodsReq = new XMLHttpRequest();
    foodsReq.open("GET", `https://forkify-api.herokuapp.com/api/search?q=beef`);
    foodsReq.send();
    // 1-2  2-3  3-4
    foodsReq.addEventListener("loadend", function (e) {
      if (foodsReq.status == 200) {
        // console.log('all foods', JSON.parse(foodsReq.response));
        allFoods = JSON.parse(foodsReq.response).recipes;
        console.log("all beef", allFoods);
        // displayAllFoods();
        callback();
      } else {
        console.log("Error");
      }
    });
  });
  return newPromise;
}

function getSalad(callback) {
  let newPromise = new Promise(function (callback) {
    // first process the request
    let foodsReq = new XMLHttpRequest();
    foodsReq.open(
      "GET",
      `https://forkify-api.herokuapp.com/api/search?q=salad`
    );
    foodsReq.send();
    // 1-2  2-3  3-4
    foodsReq.addEventListener("loadend", function (e) {
      if (foodsReq.status == 200) {
        // console.log('all foods', JSON.parse(foodsReq.response));
        allFoods = JSON.parse(foodsReq.response).recipes;
        console.log("all Salad", allFoods);
        // displayAllFoods();
        callback();
      } else {
        console.log("Error");
      }
    });
  });
  return newPromise;
}
function end() {
  console.log("end of menu");
}

// Using .then()
// getPizza().then(getBeef).then(getSalad).then(end);


/* **************** APPLYING ASYNC AWAIT CONCEPT **************** */

// // await: 1. used with functions returning a promise 2. must be used within an async function

// async function test (){
//   await getPizza();
//   await getBeef();
//   await getSalad();
//   end();
// }
// test();


// we can make it a self invoked function

(async function(){
  // await getPizza().then(getBeef).then(getSalad).then(end);

  await getPizza();
  await getBeef();
  await getSalad();
  end();
})();





























