import Layout from "@/components/templates/Layout";
import Introduction from "@/components/organisms/Introduction";
import WritingTable from "@/components/organisms/WritingTable";

const writing = [
  {
    id: 1,
    date: "2021-10-01",
    title: "First Post",
    views: 100,
    uuid: "00000000-0000-0000-0000-000000000000",
  },
  {
    id: 2,
    date: "2021-10-02",
    title: "Second Post",
    views: 200,
    uuid: "00000000-0000-0000-0000-000000000001",
  },
  {
    id: 3,
    date: "2021-10-03",
    title: "Third Post",
    views: 300,
    uuid: "00000000-0000-0000-0000-000000000002",
  },
  {
    id: 4,
    date: "2022-10-04",
    title: "Fourth Post",
    views: 400,
    uuid: "00000000-0000-0000-0000-000000000003",
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
const info = "はじめまして、ゆめきちです。このサイトでは、日々の学びや経験を共有しています。";
const introduction = "現在はウェブ開発者として活動しています。フロントエンドからバックエンド、そしてインフラまで幅広く学びながら実践しています。私の目標は、ウェブ技術の力を通じて人々の生活をより便利で豊かにすることです。一人でも多くの人が、私の開発したアプリやサービスを通じて、より便利で快適な生活を送ることができるよう努めています。この目標を達成するために、日々の学びや経験を共有することで、誰かの役に立てることを願っています。";

const Component = () => {
  return (
    <Layout>
      <div className="w-full xl:w-[40vw] container mx-auto py-24 space-y-8">
        <Introduction info={info} introduction={introduction} />
        <WritingTable writing={writing} />
      </div>
    </Layout>
  );
};

export default Component;