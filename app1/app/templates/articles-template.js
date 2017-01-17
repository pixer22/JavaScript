function getJSON(callback){ //функция подгрузки и распарсивания JSON файла
    var xnr = new XMLHttpRequest();
    xnr.open("GET", "./templates/articles.json", true);
    xnr.send();
    xnr.onreadystatechange = function(){
        if(xnr.readyState == 4 && xnr.status == 200){
            var articles = JSON.parse(xnr.responseText);
            callback(articles);
        }
    }
}

getJSON(function (articles) { //вставка статей в HTML шаблон
    let innerContent = '';
    for (let i = 0; i < articles.length; i++){
        const article = articles[i];
        innerContent +=  `<div class="article ui vertical segment"><div class="center aligned row ui article-title"> <h1> ${article.title} </h1> </div>
                            <div class="center aligned row ui article-content"> ${article.content}</div><br><span> <b>Дата публикации:</b>  ${article.date}</span></div>`;
    }
    document.getElementById('articles').innerHTML = innerContent;
});
