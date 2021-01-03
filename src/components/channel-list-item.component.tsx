import React, {FC} from 'react';
import {Channel} from '../models/model-channel';
import './channel-list-item.style.css';
import defaultIcon from '../asset/img/youtube.png';

interface IProps {
  channel: Channel;
}

export const ChannelListItem: FC<IProps> = ({channel}) => {
  return (
    <a className="channel-item" href={channel.url}>
      <img src={defaultIcon} />
      <span>{channel.name}</span>
    </a>
  );
}
