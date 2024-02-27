import { FC } from 'react';

type Props = {
  info: string
  introduction: string
}

const Component: FC<Props> = ({ info, introduction }) => {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold">Welcome👋</h1>
      <p className="text-lg">{info}</p>
      <p>
        現在はウェブ開発者として活動しています。フロントエンドからバックエンド、そしてインフラまで幅広く学びながら実践しています。
        私の目標は、ウェブ技術の力を通じて人々の生活をより便利で豊かにすることです。
        一人でも多くの人が、私の開発したアプリやサービスを通じて、より便利で快適な生活を送ることができるよう努めています。
        この目標を達成するために、日々の学びや経験を共有することで、誰かの役に立てることを願っています。
      </p>
    </div>
  );
}

export default Component;
