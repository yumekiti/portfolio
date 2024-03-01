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

const Component = () => {
  return (
    <Layout>
      <ScrollArea className="w-full h-full bg-gray-100 dark:bg-gray-800">
        <div className="w-full xl:w-[40vw] container mx-auto py-24 space-y-8">
          <div className="space-y-2">
            <LinkWithTwemoji path="/timeline" emoji="📅" text="Timeline" />
            <p>ここでは、私のこれまでの経歴について紹介しています。</p>
          </div>
          <div className="space-y-2">
            <div
              className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
            >
              <div className="flex flex-row-reverse md:contents">
                <Card className="col-start-1 col-end-5 rounded-xl my-4 ml-auto shadow-md">
                  <CardHeader>
                    <CardTitle>Lorem ipsum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi, quaerat?
                    </CardDescription>
                  </CardContent>
                </Card>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-slate-700 pointer-events-none"></div>
                  </div>
                  <div
                    className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-slate-400 shadow"
                  ></div>
                </div>
              </div>

              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-slate-700 pointer-events-none"></div>
                  </div>
                  <div
                    className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-slate-400 shadow"
                  ></div>
                </div>
                <Card className="col-start-6 col-end-10 rounded-xl my-4 mr-auto shadow-md">
                  <CardHeader>
                    <CardTitle>Lorem ipsum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae, facilis.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-row-reverse md:contents">
                <Card className="col-start-1 col-end-5 rounded-xl my-4 ml-auto shadow-md">
                  <CardHeader>
                    <CardTitle>Lorem ipsum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi, quaerat?
                    </CardDescription>
                  </CardContent>
                </Card>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-slate-700 pointer-events-none"></div>
                  </div>
                  <div
                    className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-slate-400 shadow"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </Layout>
  );
};

export default Component;