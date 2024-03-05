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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw';
import mermaid from 'mermaid';
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const exampleText = `
`

const Component = () => {
  const [open, setOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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

  useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      console.log("current")
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Layout>
      <ScrollArea className="w-full h-full bg-secondary">
        <div className="w-full xl:w-[40vw] container mx-auto py-24 space-y-8">
          <div className="space-y-2">
            <LinkWithTwemoji path="/portfolio" emoji="📁" text="Portfolio" />
            <p>ここでは、私のこれまでの制作物について紹介しています。</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger>
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
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
                <Carousel setApi={setApi} className="w-full max-w-xs mx-auto"
                  plugins={[
                    Autoplay({
                      delay: 3000,
                    }),
                  ]}            
                >
                  <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <span className="text-4xl font-semibold">{index + 1}</span>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="py-2 text-center text-sm text-muted-foreground">
                  Slide {current} of {count}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </ScrollArea>
    </Layout>
  );
};

export default Component;