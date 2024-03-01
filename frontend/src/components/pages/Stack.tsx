import Layout from "@/components/templates/Layout";
import Introduction from "@/components/organisms/Introduction";
import WritingTable from "@/components/organisms/WritingTable";
import { ScrollArea } from "../ui/scroll-area";
import LinkWithTwemoji from "../atoms/LinkWithTwemoji";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react"

const stack = [
  {
    id: 1,
    name: "HTML",
    description: "基本的なタグの使い方を理解し、実装時に必要なタグを調べながら実装できる。",
    tag: "Frontend",
    url: "https://developer.mozilla.org/ja/docs/Web/HTML",
  },
  {
    id: 2,
    name: "CSS",
    description: "基本的なプロパティを理解し、実装時に必要なプロパティを調べながら実装できる。",
    tag: "Frontend",
    url: "https://developer.mozilla.org/ja/docs/Web/CSS",
  },
  {
    id: 3,
    name: "JavaScript",
    description: "基本的な文法を理解し、実装時に必要な文法を調べながら実装できる。",
    tag: "Frontend",
    url: "https://developer.mozilla.org/ja/docs/Web/JavaScript",
  },
  {
    id: 4,
    name: "PHP",
    description: "基本的な文法を理解し、実装時に必要な文法を調べながら実装できる。",
    tag: "Backend",
    url: "https://www.php.net/manual/ja/",
  },
  {
    id: 5,
    name: "Linux",
    description: "基本的なコマンドを理解し、サーバーの構築や運用ができる。",
    tag: "Server",
    url: "https://ja.wikipedia.org/wiki/Linux",
  }
];

const Component = () => {
  const tags = Array.from(new Set(stack.map(row => row.tag)));

  return (
    <Layout>
      <ScrollArea className="w-full h-full bg-gray-100 dark:bg-gray-800">
        <div className="w-full xl:w-[40vw] container mx-auto py-24 space-y-8">
          <div className="space-y-2">
            <LinkWithTwemoji path="/stack" emoji="📚" text="Stack" />
            <p>ここでは、私のスキルや経験について紹介しています。</p>
          </div>
          <div className="space-y-2">
            {tags.map(tag => (
              <div key={tag} className="py-2">
                <p>{tag}</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  {stack
                    .filter(row => row.tag === tag)
                    .map(row => (
                      <li key={row.id} className="space-x-1">
                        <Link to={row.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400 dark:text-blue-300">
                          {row.name}<ExternalLink className="inline ml-1" size={16} />
                        </Link>
                        <span> - </span>
                        <span>{row.description}</span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </Layout>
  );
};

export default Component;