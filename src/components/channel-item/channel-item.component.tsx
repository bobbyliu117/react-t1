
import {FC} from 'react';
import { Channel } from '../../models/model-channel';
import defaultImg from '../../assets/img/youtube.png';
import './channel-item.style.css';

interface IProps {
  channel: Channel;
}

export const ChannelItem: FC<IProps> = ({channel:{url,name,logo,comments}}) => {
  return (
    <a className="channel-item" href={url}>
      <img src={logo ?? defaultImg} alt={name} />
      <div>
        <p className="b1 my1">{name}</p>
        <p>{comments}</p>
      </div>
    </a>
  );
}

