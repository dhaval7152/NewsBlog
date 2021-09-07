let apiKey = '############'
// Please Genrate Your Own Api key at "https://newsapi.org/"
//I am Hiding My ApiKey


const xhr = new XMLHttpRequest();


xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true)
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles)
        let newsHtml = '';
        articles.forEach(function (element) {
            
          let news= `<div class="jumbotron" >
          <h6>Author:<span class="badge bg-warning">${element.author}</span></h6>
                <h2>${element["title"]}</h2>

                <h6><span>source:${element.source["name"]}</span> . publish:${element["publishedAt"]}</h6>
                
                <img src="${element['urlToImage']}" class="rounded float-end" alt="...">
                <p class="lead">${element["content"]}</p>
                <a class="btn btn-sm btn-primary" href="${element['url']}" target="_blank" role="button">Read More</a>
            </div>`


            newsHtml += news;
        });
        let container = document.getElementById('container');
        container.innerHTML = newsHtml
    }
    else {
        console.log('error')
    }
}

xhr.send()