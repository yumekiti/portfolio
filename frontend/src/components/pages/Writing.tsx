import Layout from "@/components/templates/Layout";
import { ScrollArea } from "../ui/scroll-area";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button"
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import "@/markdown.css"

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

![代替テキスト](https://example.com/image.jpg)

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
  return (
    <Layout>
      <div className="flex h-full w-full">
        <ScrollArea className="hidden lg:flex h-full lg:border-r lg:w-80 xl:w-96">
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
          <div className="w-full xl:w-[40vw] container mx-auto py-24 space-y-8">
            <ReactMarkdown
              className='markdown text-foreground'
              remarkPlugins={[remarkGfm]}
              children={exampleText}
            />
          </div>
        </ScrollArea>
      </div>
    </Layout>
  );
};

export default Component;