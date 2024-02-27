import Layout from "@/components/templates/Layout";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Fragment } from "react";
import { Link } from "react-router-dom";

const data = [
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
]

const formatYear = (date: string) => {
  return new Date(date).getFullYear();
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString( "ja-JP", { month: "numeric", day: "numeric" });
}

const Component = () => {
  const uniqueYears = Array.from(new Set(data.map(row => formatYear(row.date))));

  return (
    <Layout>
      <div className="w-full xl:w-[40vw] container mx-auto py-8 space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Welcome👋</h1>
          <p className="text-lg">
            はじめまして、ゆめきちです。このサイトでは、日々の学びや経験を共有しています。
          </p>
          <p>
            現在はウェブ開発者として活動しています。フロントエンドからバックエンド、そしてインフラまで幅広く学びながら実践しています。
            私の目標は、ウェブ技術の力を通じて人々の生活をより便利で豊かにすることです。
            一人でも多くの人が、私の開発したアプリやサービスを通じて、より便利で快適な生活を送ることができるよう努めています。
            この目標を達成するために、日々の学びや経験を共有することで、誰かの役に立てることを願っています。
          </p>
        </div>
        <div>
          <Link to={"/"} className="text-2xl font-bold hover:underline">
            Writing
          </Link>
          <Table>
            <TableCaption>Writing History</TableCaption>
            <TableHeader>
              <TableRow className="border-slate-600 dark:border-slate-300">
                <TableHead className="p-2 w-[60px]">Date</TableHead>
                <TableHead className="p-2">Title</TableHead>
                <TableHead className="p-2 text-right">Views</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {uniqueYears.map(year => (
                <Fragment key={year}>
                  <TableRow className="border-slate-600 dark:border-slate-300">
                    <TableCell colSpan={4} className="p-2">{year}</TableCell>
                  </TableRow>
                  {data
                    .filter(row => formatYear(row.date) === year)
                    .map(row => (
                      <TableRow key={row.id} className="dark:hover:bg-slate-600 hover:bg-gray-400 border-slate-400 dark:border-slate-600 cursor-pointer" onClick={() => console.log(row.uuid)}>
                        <TableCell className="p-2">{formatDate(row.date)}</TableCell>
                        <TableCell className="p-2">{row.title}</TableCell>
                        <TableCell className="p-2 text-right">{row.views}</TableCell>
                      </TableRow>
                    ))}
                </Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default Component;