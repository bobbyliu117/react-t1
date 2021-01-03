import logoImg from './assets/img/chives.png';
import './app.css';
import channelsData from './assets/data/channels.json';
import articlesData from './assets/data/articles.json';
import { ChannelItem } from './components/channel-item/channel-item.component';
import {ArticleListItem} from './components/article-list-item/article-list-item.component';

function App() {
  
  return <>
    <header id="header">
      <a href="#header">
        <img src={logoImg} alt="LOGO"/>
        <h2 style={{fontFamily: 'ZCOOL KuaiLe'}}>油TubeStock</h2>
      </a>
    </header>
    <main>
      <section id="sec-disclaimer">
        <h3>Disclaimer</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe nesciunt esse doloribus quod est tempore porro voluptas pariatur quas tenetur.</p>
      </section>
      <aside>
        <h3>Channels</h3>
        <div className="channels">
          {channelsData.map(channel => <ChannelItem key={channel._id} channel={channel} />)}
        </div>
      </aside>
      <section>
        <h3>Stock Reviews</h3>
        <div className="articles">
          {articlesData.map(article => <ArticleListItem key={article._id} article={article} />)}
        </div>
      </section>
    </main>
    <footer>
      <span className="b1">&copy; 2021 VG9 LAB</span>
      <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

    </footer>
  </>
}

export default App;
