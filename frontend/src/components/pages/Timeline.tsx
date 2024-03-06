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
import { School } from "lucide-react";

const Component = () => {
  return (
    <>
      <ScrollArea className="w-full h-full">
        <div className="w-full xl:w-[48vw] mx-auto py-24 space-y-8 px-2 md:px-20">
          <div className="space-y-2">
            <LinkWithTwemoji path="/timeline" emoji="🕒" text="Timeline" />
            <p>ここでは、私のこれまでの経歴について紹介しています。</p>
          </div>
          <div className="space-y-2">
            <div className="grid grid-cols-6 w-full">

              <div className="contents">
                <div className="col-start-1 col-end-2 mx-auto relative">
                  <div className="h-full w-12 flex items-center justify-center flex-col space-y-2">
                    <p className="text-xl">2021</p>
                    <div className="h-full w-1 bg-secondary pointer-events-none" />
                  </div>
                  <div className="w-12 h-12 absolute top-1/2 -mt-3 rounded-full bg-secondary shadow flex items-center justify-center">
                    <School className="w-6 h-6 text-ring" />
                  </div>
                </div>
                <Card className="col-start-2 col-end-6 my-4">
                  <CardHeader>
                    <CardTitle>
                      ECCコンピュータ専門学校
                    </CardTitle>
                    <CardDescription>
                      ここでは、基礎的なプログラミングを学びました。ここでは、基礎的なプログラミングを学びました。ここでは、基礎的なプログラミングを学びました。ここでは、基礎的なプログラミングを学びました。ここでは、基礎的なプログラミングを学びました。ここでは、基礎的なプログラミングを学びました。
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img src="https://placekitten.com/500/300" alt="Marplify" className="w-full" />
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </div>
      </ScrollArea>
    </>
  );
};

export default Component;