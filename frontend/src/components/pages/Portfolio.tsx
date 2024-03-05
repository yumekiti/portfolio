import Layout from "@/components/templates/Layout";
import LinkWithTwemoji from "@/components/atoms/LinkWithTwemoji";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw';
import mermaid from 'mermaid';
import { useEffect, useState } from "react";

const exampleText = `
`

const Component = () => {
  const [open, setOpen] = useState(false);

  const handleCardClick = (uuid: string) => () => {
  }

  useEffect(() => {
    const runMermaid = async () => {
      try {
        await mermaid.run({
          querySelector: 'code.language-mermaid',
        });
      } catch (error) {
        console.error('Error running mermaid:', error);
      }
    };

    setTimeout(() => {
      runMermaid();
    }, 1000);
  }, [exampleText, open]);

  return (
    <Layout>
      <ScrollArea className="w-full h-full bg-secondary">
        <div className="w-full xl:w-[40vw] container mx-auto py-24 space-y-8">
          <div className="space-y-2">
            <LinkWithTwemoji path="/portfolio" emoji="📁" text="Portfolio" />
            <p>ここでは、私のこれまでの制作物について紹介しています。</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger>
                <Card
                  className="hover:shadow-lg duration-300 hover:-translate-y-1 transform"
                  onClick={handleCardClick("00000000-0000-0000-0000-000000000000")}
                >
                  <CardContent className="p-4 space-y-4">
                    <img src="https://placekitten.com/500/300" alt="Marplify" />
                    <div className="space-y-2 flex flex-col items-start">
                      <CardTitle>Marplify</CardTitle>
                      <CardDescription>Markdownからスライドを生成するツール</CardDescription>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <div className="flex gap-2">
                      <p>2021/4</p>
                      <span>-</span>
                      <p>2021/10</p>
                    </div>
                    <span className="tabular-nums">
                      100 views
                    </span>
                  </CardFooter>
                </Card>
              </SheetTrigger>
              <SheetContent className="min-w-[60vw] bg-secondary">
                <div className="flex flex-col h-full space-y-2">
                  <SheetHeader>
                    <SheetTitle>Marplify</SheetTitle>
                    <SheetDescription>
                      This action cannot be undone. This will permanently delete your account
                      and remove your data from our servers.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="overflow-y-auto p-4" style={{ scrollbarWidth: "none" }}>
                    <img src="https://placekitten.com/500/300" alt="Marplify" />
                    <ReactMarkdown
                      className='markdown text-foreground'
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                      children={exampleText}
                    />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </ScrollArea>
    </Layout>
  );
};

export default Component;