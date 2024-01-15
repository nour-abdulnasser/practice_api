/* **************** STEPS FOR API REQUESTS **************** */
/* **************** XMLHttpsRequest // Fetch Catch (ES6) **************** */



/* using xml object */

let allPosts = [];

let req = new XMLHttpRequest();

req.open('get', 'https://jsonplaceholder.typicode.com/posts' );

req.send();

req.addEventListener('readystatechange', function(){
    if (req.readyState == 4 && req.status >= 200 && req.status <300) {
        // console.log(JSON.parse(req.response));
        allPosts = JSON.parse(req.response);
        displayAllPosts();
    }

})


function displayAllPosts(){
    let box = '';

    for (let i = 0; i < allPosts.length; i++) {
        box += `
        <div class="post bg-white p-3 rounded-2 mb-3">
            <h3 class="text-center">${allPosts[i].title}</h3>
            <p>${allPosts[i].body }</p>
        </div>
        ` ;
    }

    document.querySelector('.allPosts'). innerHTML = box;
}



/* using fetch */

// // fetch is a built in function that returns a promise: either use .then or await
// ( async function ( ){     
//     let response = await fetch( 'https://jsonplaceholder.typicode.com/posts');
//     let desiredData = await response.json();
//     console.log(desiredData);

//     allPosts = desiredData;
//     displayAllPosts();

// })();
































