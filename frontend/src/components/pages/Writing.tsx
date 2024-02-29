import Layout from "@/components/templates/Layout";
import { ScrollArea } from "../ui/scroll-area";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button"

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

const Component = () => {
  return (
    <Layout>
      <div className="flex">
        <ScrollArea className="hidden lg:flex h-screen lg:border-r lg:w-80 xl:w-96">
          <div>
            <div className="p-4 border-b border-border">
              <p>Writing</p>
            </div>
            <div className="p-1 space-y-4">
              <Link to="/writing" className="py-4 px-4 flex flex-col space-y-1 hover:bg-accent p-2 rounded-md">
                <p>title</p>
                <div className="text-xs text-gray-500 dark:text-gray-400 space-x-1">
                  <span>2021-10-01</span>
                  <span>·</span>
                  <span className="tabular-nums">100 views</span>
                </div>
              </Link>
              <Link to="/writing" className="py-4 px-4 flex flex-col space-y-1 hover:bg-accent p-2 rounded-md">
                <p>title</p>
                <div className="text-xs text-gray-500 dark:text-gray-400 space-x-1">
                  <span>2021-10-01</span>
                  <span>·</span>
                  <span className="tabular-nums">100 views</span>
                </div>
              </Link>
              <Link to="/writing" className="py-4 px-4 flex flex-col space-y-1 hover:bg-accent p-2 rounded-md">
                <p>title</p>
                <div className="text-xs text-gray-500 dark:text-gray-400 space-x-1">
                  <span>2021-10-01</span>
                  <span>·</span>
                  <span className="tabular-nums">100 views</span>
                </div>
              </Link>
            </div>
          </div>
        </ScrollArea>
        <ScrollArea className="w-full h-full bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto py-24 space-y-8">
            <p>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</p>
          </div>
        </ScrollArea>
      </div>
    </Layout>
  );
};

export default Component;