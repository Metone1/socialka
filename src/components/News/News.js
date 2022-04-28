import styles from './News.module.css';

const News = (props) => {

    let newsArray = [
        {
            key: 0,
            news: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure neque consectetur doloremque nihil aliquam. Rerum quos molestiae ea facilis vitae, sit numquam saepe, assumenda, cum illo fuga dolor neque optio?',
        },
        {
            key: 1,
            news: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure neque consectetur doloremque nihil aliquam. Rerum quos molestiae ea facilis vitae, sit numquam saepe, assumenda, cum illo fuga dolor neque optio?',
        },
        {
            key: 2,
            news: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure neque consectetur doloremque nihil aliquam. Rerum quos molestiae ea facilis vitae, sit numquam saepe, assumenda, cum illo fuga dolor neque optio?',
        }
    ];

    let mapNews = newsArray.map(news => <div className={styles.news} key={news.key}> {news.news}</div>);

    return (
        <div className={styles.news_block}>
            <h3>NEWS</h3>
            {mapNews}
        </div >
    );
}

export default News;