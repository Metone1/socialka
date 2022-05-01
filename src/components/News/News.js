import styles from './News.module.css';

const News = (props) => {

    let newsArray = [
        {
            news: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure neque consectetur doloremque nihil aliquam. Rerum quos molestiae ea facilis vitae, sit numquam saepe, assumenda, cum illo fuga dolor neque optio?',
        },
        {
            news: 'rem ipsum dolor sit amet, consectetur adipisicing elit. Iure neque consectetur doloremque nihil aliquam. Rerum quos molestiae ea facilis vitae, sit numquam saepe, assumenda, cum illo fuga dolor neque optio?',
        },
        {
            news: 'orem ipsum dolor sit amet, consectetur adipisicing elit. Iure neque consectetur doloremque nihil aliquam. Rerum quos molestiae ea facilis vitae, sit numquam saepe, assumenda, cum illo fuga dolor neque optio?',
        }
    ];

    const News = (props) => {
        const newsBlock = props.news.map((news, index) => {
            return <div key={index} className={styles.news}>{news.news}</div>
        });
        return (<div>{newsBlock}</div>);
    };

    return (
        <div className={styles.news_block}>
            <h3>NEWS</h3>
            <News news={newsArray} />
        </div >
    );
}

export default News;