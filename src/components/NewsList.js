import { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const NewsList = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=de&apiKey=d6c7c83fc92f4f1b98c770c87057a063')
            .then(res => res.json())
            .then(json => {
                setNews(json.articles);
            })
    }, [])

    console.log(news);

    return (
        <section>
            {news.map((elt, i) =>
                <NewsItem
                    key={i}
                    image={elt.urlToImage}
                    title={elt.title}
                    description={elt.description}
                    date={elt.publishedAt.slice(0, 10)}
                    link={elt.url}
                />
            )}
        </section>);
}

export default NewsList;