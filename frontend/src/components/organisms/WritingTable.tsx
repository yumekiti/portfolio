import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FC, Fragment } from "react";
import { WritingTableProps } from "@/types/writing";
import LinkWithTwemoji from "@/components/atoms/LinkWithTwemoji";
import { useNavigate } from "react-router-dom";

const formatYear = (date: string) => {
  return new Date(date).getFullYear();
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString( "ja-JP", { month: "numeric", day: "numeric" });
}

type Props = {
  writing: WritingTableProps;
};

const Component: FC<Props> = ({ writing }) => {
  const navigate = useNavigate();
  const uniqueYears = Array.from(new Set(writing.map(row => formatYear(row.date))));

  const handleRowClick = (uuid: string) => () => {
    navigate(`/writing/${uuid}`);
  }

  return (
    <div>
      <LinkWithTwemoji path="/writing" emoji="📝" text="Writing" />
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
              <TableRow className="border-slate-400 dark:border-slate-600 bg-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 dark:bg-slate-600">
                <TableCell colSpan={4} className="p-2">{year}</TableCell>
              </TableRow>
              {writing
                .filter(row => formatYear(row.date) === year)
                .map(row => (
                  <TableRow key={row.id} className="dark:hover:bg-slate-700 hover:bg-slate-400 border-slate-400 dark:border-slate-600 cursor-pointer" onClick={handleRowClick(row.uuid)}>
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
  );
}

export default Component;
