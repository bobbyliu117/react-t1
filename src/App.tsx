import './App.css';
import logoIcon from './asset/img/chives.png';
import channelsData from './asset/data/channels.json';
import articlesData from './asset/data/articles.json';
import { ChannelListItem } from './components/channel-list-item.component';
import {ArticleListItem} from './components/article-list-item/article-list-item.component';

function App() {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={logoIcon} alt="Logo" />
          <h2 style={{margin: '0 4px'}}>油TubeStock</h2>
        </div>
      </header>
      <main>
        <section id="sec1">
          <h3>Disclaimer</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, sapiente velit? Veniam eaque laborum quisquam non neque nulla explicabo provident!</p>
        </section>
        <section>
          <h3>Channels</h3>
          <div className="channels">
            {channelsData.map(channel => <ChannelListItem key={channel._id} channel={channel} />)}
          </div>
        </section>
        <section>
          <h3>Stock Reviews</h3>
          <div className="articles">
            {articlesData.map(article => <ArticleListItem key={article._id} article={article} />)}
          </div>
        </section>
      </main>
      <footer>
        &copy; 2021 VG9 LAB
      </footer>
    </div>
  );
}

export default App;
