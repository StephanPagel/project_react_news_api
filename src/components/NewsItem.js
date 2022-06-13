const NewsItem = (props) => {
    return (<div className='news_card'>
        <img src={props.image} alt="" />
        <div className="text">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.date}</p>
            <a href={props.link}>READ MORE</a>
        </div>
    </div>);
}

export default NewsItem;