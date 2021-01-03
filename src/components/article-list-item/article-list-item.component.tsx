
import {FC} from 'react';
import { Article, IRemark } from '../../models/model-article';
import defaultImg from '../../asset/img/chives.png';
import './article-list-item.style.css';

interface IProps {
  article: Article;
}

export const ArticleListItem: FC<IProps> = ({article:{url,uploaded_at,note,remarks}}) => {
  return (
    <a className="article-list-item" href={url}>
      <img src={defaultImg} alt={"article thumbnail"} />
      <div className="remarks">
        {remarks.map(remark => <RemarkListItem key={remark.ticker} remark={remark} />)}
      </div>
    </a>
  );
}

const RemarkListItem: FC<{remark: IRemark}> = ({remark}) => {

  return <span className='tag b1' style={{background: remark.prediction>0?'lightgreen':'red'}}>
    {remark.ticker}
  </span>
}
