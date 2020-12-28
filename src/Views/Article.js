import ArticleTexts from '../Components/ArticleTexts';
import LightBox from '../Components/LightBox';

function Article() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <LightBox />
                </div>

                <div className="col">
                    <ArticleTexts />
                </div>
                
            </div>
        </div>
    );
}

export default Article;

