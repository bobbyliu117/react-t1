
import {FC} from 'react';
import { Channel } from '../../models/model-channel';
import defaultImg from '../../assets/img/youtube.png';
import './channel-item.style.css';

interface IProps {
  channel: Channel;
}

export const ChannelItem: FC<IProps> = ({channel:{url,name,logo}}) => {
  return (
    <a className="channel-item" href={url}>
      <img src={logo ?? defaultImg} alt={name} />
      <span className="b1">{name}</span>
    </a>
  );
}

