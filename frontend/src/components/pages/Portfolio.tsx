import Layout from "@/components/templates/Layout";
import LinkWithTwemoji from "@/components/atoms/LinkWithTwemoji";
import { ScrollArea } from "../ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FileText } from "lucide-react";

const Component = () => {
  return (
    <Layout>
      <ScrollArea className="w-full h-full bg-gray-100 dark:bg-gray-800">
        <div className="w-full xl:w-[40vw] container mx-auto py-24 space-y-8">
          <div className="space-y-2">
            <LinkWithTwemoji path="/portfolio" emoji="📁" text="Portfolio" />
            <p>ここでは、私のこれまでの制作物について紹介しています。</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Marplify</CardTitle>
                <CardDescription>Markdownからスライドを生成するツール</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="https://placekitten.com/500/300" alt="Marplify" />
                <div className="mt-4">
                  <a href="example.com"><FileText className="h-6 w-6" /></a>
                </div>
              </CardContent>
              <CardFooter>
                <p>制作期間: 2021年4月 - 2021年5月</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </ScrollArea>
    </Layout>
  );
};

export default Component;