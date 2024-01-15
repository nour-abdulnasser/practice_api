let allArticles = [];

function getNews(searchTerm) {
  let topHeadlines = new XMLHttpRequest();

  topHeadlines.open("GET",   `https://newsapi.org/v2/top-headlines?q=${searchTerm}&country=us&category=general&apiKey=###`
  );

  topHeadlines.send();

  topHeadlines.addEventListener("readystatechange", function () {
    if (topHeadlines.readyState == 4 && topHeadlines.status == 200) {
      allArticles = JSON.parse(topHeadlines.response).articles; // JSON.parse(topHeadlines.response) is an object // topHeadlines.response is a string
      console.log(allArticles);
      displayAllArticles();
    }
  });
}

function displayAllArticles() {
  let box = ``;

  for (let i = 0; i < allArticles.length; i++) {
    box += `
        <div class="col-md-3 bg-danger-subtle">
            <a href="${allArticles[i].url}">
                <img src="${allArticles[i].urlToImage}" class="w-100" alt=""/>
            </a>
            <div class="article bg-info-subtle">
                <h3>${allArticles[i].title}</h3>
                <p>${allArticles[i].description}</p>
            </div>
        </div>`;
  }
  document.querySelector(".row").innerHTML = box;
}

// search functionality
// document.querySelector('#searchInput').addEventListener('keyup', getNews());
document.querySelector('#searchInput').addEventListener('keyup', function(e){
        // console.log(e.target.value);
        getNews(e.target.value)
})
























