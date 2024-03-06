import { FC } from 'react';
import { Link } from 'react-router-dom';
import Twemoji from 'react-twemoji';

type Props = {
  path: string;
  emoji: string;
  text: string;
};

const Component: FC<Props> = ({ path, emoji, text }) => {
  return (
    <Link to={path} className="text-2xl font-bold hover:underline gap-2 flex items-center">
      <div className="w-6 h-6">
        <Twemoji options={{ className: 'twemoji' }} children={emoji} />
      </div>
      {text}
    </Link>
  );
}

export default Component;
