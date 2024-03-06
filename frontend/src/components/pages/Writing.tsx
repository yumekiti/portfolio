import Layout from "@/components/templates/Layout";
import { ScrollArea } from "../ui/scroll-area";
import { Link, useParams } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button"
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import "@/markdown.css"
import rehypeRaw from 'rehype-raw'

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

const exampleText = `
# Markdownの例

これはMarkdownの例です。Markdownはプレーンテキスト形式で記述された文書を簡単に装飾するための軽量マークアップ言語です。

## リスト

リストは次のように書けます：

- アイテム1
- アイテム2
- アイテム3

順序付きリストも書けます：

1. アイテムA
2. アイテムB
3. アイテムC

## 強調

文章の一部を *斜体* または **太字** にすることができます。

## リンク

[Google](https://www.google.com/)のようにリンクを挿入することができます。

## 画像

![代替テキスト](https://placekitten.com/1024/576)

## コード

コードブロックを挿入することもできます：

\`\`\`python
def greet():
    print("Hello, world!")
\`\`\`
## 引用

> 引用文を挿入することができます。

## テーブル

| 名前   | 年齢 |
| ------ | ---- |
| Alice  | 25   |
| Bob    | 30   |
| Charlie| 35   |

- [ ] 未完了のタスク
- [x] 完了したタスク
`

const Component = () => {
  const { uuid } = useParams();

  console.log(uuid);

  return (
    <>
      <div className="flex h-full w-full">
        <ScrollArea className="hidden flex border-r border-border h-full w-[30rem]">
          <div className="p-4 border-b border-border">
            <p>Writing</p>
          </div>
          <div className="p-1 space-y-4">
            {writing.map((post) => (
              <Link
                to={`/writing/${post.uuid}`}
                key={post.id}
                className="py-4 px-4 flex flex-col space-y-1 hover:bg-accent p-2 rounded-md"
              >
                <p>{post.title}</p>
                <div className="text-xs text-gray-500 dark:text-gray-400 space-x-1">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="tabular-nums">{post.views} views</span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollArea>
        <ScrollArea className="w-full h-full">
          {uuid ?
            <div className="w-full xl:w-[48vw] mx-auto py-24 space-y-8 px-2 md:px-20">
              <ReactMarkdown
                className='markdown text-foreground'
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                children={exampleText}
              />
            </div>
            :
            <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          }
        </ScrollArea>
      </div>
    </>
  );
};

export default Component;