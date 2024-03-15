import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea"
import LinkWithTwemoji from "@/components/atoms/LinkWithTwemoji"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Component = () => {
  return (
    <ScrollArea className="w-full h-full">
      <div className="w-full xl:w-[48vw] mx-auto py-24 space-y-8 px-2 md:px-20">
        <div className="space-y-2">
          <LinkWithTwemoji
            path="/"
            emoji="📝"
            text="Writing"
          />
          <p>ここでは、私が書いたものを公開しています。</p>
        </div>
        <div className="space-y-2">
          <p className="text-lg font-bold">タイトル</p>
          <Input />
        </div>
        <div className="space-y-2">
          <p className="text-lg font-bold">内容</p>
          <Textarea className="min-h-[48vh]" />
        </div>
        <div className="flex justify-end">
          <Button>投稿</Button>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Component;