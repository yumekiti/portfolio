import { FC } from 'react';
import LinkWithTwemoji from "@/components/atoms/LinkWithTwemoji";

type Props = {
  info: string
  introduction: string
}

const Component: FC<Props> = ({ info, introduction }) => {
  return (
    <div className="space-y-2">
      <LinkWithTwemoji path="/" emoji="👨‍💻" text="About" />
      <p className="text-lg">{info}</p>
      <p>{introduction}</p>
    </div>
  );
}

export default Component;
