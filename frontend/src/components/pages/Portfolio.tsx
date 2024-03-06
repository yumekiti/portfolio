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

const Component = () => {
  const [open, setOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const handleCardClick = (uuid: string) => () => {
  }

  useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <>
      <ScrollArea className="w-full h-full">
        <div className="w-full xl:w-[48vw] mx-auto py-24 space-y-8 px-2 md:px-20">
          <div className="space-y-2">
            <LinkWithTwemoji path="/portfolio" emoji="📁" text="Portfolio" />
            <p>ここでは、私のこれまでの制作物について紹介しています。</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger>
                <Card
                  className="hover:shadow-lg duration-300 hover:-rotate-2"
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
              <DialogContent className="md:max-w-4xl py-8">
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
                <div className="relative w-full px-0 md:px-12">
                  <Carousel setApi={setApi} className="w-full mx-auto"
                    plugins={[
                      Autoplay({
                        delay: 3000,
                        waitForUser: true,
                      }),
                    ]}            
                  >
                    <CarouselContent>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                          <img src="https://placekitten.com/1024/576" alt="Marplify" />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                  </Carousel>
                </div>
                <div className="py-2 text-center text-sm text-muted-foreground">
                  Slide {current} of {count}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </ScrollArea>
    </>
  );
};

export default Component;