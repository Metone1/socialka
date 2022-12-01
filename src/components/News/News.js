import '../../css/App.css'

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
            return <div key={index} className="news__block">{news.news}</div>
        });
        return (<div>{newsBlock}</div>);
    };

    return (
        <div className="news">
            <h3>NEWS</h3>
            <News news={newsArray} />
        </div >
    );
}

export default News;