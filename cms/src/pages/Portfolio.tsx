import { ScrollArea } from "@/components/ui/scroll-area";
import LinkWithTwemoji from "@/components/atoms/LinkWithTwemoji"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { useMutation } from '@apollo/client';
import { CreatePortfolioMutation } from "@/gql/graphql";
import { CREATE_PORTFOLIO } from "@/graphql/mutation/CreatePortfolio";

const Component = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [createPortfolio] = useMutation(CREATE_PORTFOLIO);
  const [thumbnail, setThumbnail] = useState<File>();
  const [images, setImages] = useState<File[]>([]);

  const handleSubmit = async () => {
    const portfolio = {
      title,
      description,
      date,
    }

    const { data } = await createPortfolio({
      variables: {
        createPortfolioInput: portfolio,
        thumbnail,
        images
      }
    });

    console.log(data);
  }

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
          <Input onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="space-y-2">
          <p className="text-lg font-bold">説明</p>
          <Input onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="space-y-2">
          <p className="text-lg font-bold">サムネイル</p>
          <Input
            className="file:text-primary"
            type="file"
            onChange={(e) => setThumbnail(e.target.files?.[0])}
          />
        </div>
        <div className="space-y-2">
          <p className="text-lg font-bold">画像</p>
          <Input className="file:text-primary" type="file" multiple onChange={(e) => setImages(Array.from(e.target.files || []))} />
        </div>
        
        <div className="space-y-2">
          <p className="text-lg font-bold">期間</p>
          <Input onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="flex justify-end">
          <Button onClick={handleSubmit}>
            投稿
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Component;