import './Main.css';
import articles from '../data/articles.json'; // json-файл с данными

function Main() {
    return (
        <div className="Main">
            {articles.map(item =>
            <section>
                <h2>{item.title}</h2> {/*перебираем json-файл и выводим заголовки в теге h2*/}
                <div>{item.body}</div>
            </section>)}
        </div>
    );
}

export default Main;