"use client";
import React from "react";
import { Newspaper, Zap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Define the type for card data
interface CardData {
  image: React.ReactNode; // Type for JSX elements
  heading: string;
  description: string;
  backgroundImage: string;
}

const CARD_DATA: CardData[] = [
  {
    image: <Newspaper size={48} />,
    heading: "URL to Video",
    description: "Creates a video from website",
    backgroundImage:
      "linear-gradient(200deg, rgba(61, 139, 253, 0.8), rgb(61, 139, 253))",
  },
  {
    image: <Zap size={48} />,
    heading: "AI Prompt",
    description: "Enter a topic and let AI write your script",
    backgroundImage:
      "linear-gradient(200deg, rgba(133, 64, 245, 0.8), rgb(133, 64, 245))",
  },
];

// Props type for CardComponent
interface CardComponentProps {
  image: React.ReactNode;
  heading: string;
  backgroundImage: string;
  description: string;
}

export const CardComponent: React.FC<CardComponentProps> = ({
  image,
  heading,
  backgroundImage,
  description,
}) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <div
          className="flex w-full rounded-3xl text-center px-4"
          style={{
            height: "16rem",
            backgroundImage: backgroundImage,
            color: "white",
          }}
        >
          <div className="flex items-center justify-center w-full">
            <div>
              <div className="flex justify-center mb-4">{image}</div>
              <h1
                style={{ fontWeight: "700", fontSize: "1.8em" }}
                className="pb-5"
              >
                {heading}
              </h1>
              <h1 className="text-center">{description}</h1>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{heading}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <Input
                  id="width"
                  defaultValue="100%"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Max.width</Label>
                <Input
                  id="maxWidth"
                  defaultValue="300px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  defaultValue="25px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxHeight">Max.height</Label>
                <Input
                  id="maxHeight"
                  defaultValue="none"
                  className="col-span-2 h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const MainPage: React.FC = () => {
  return (
    <div className="flex gap-4">
      {CARD_DATA.map((props, index) => (
        <CardComponent key={index} {...props} />
      ))}
    </div>
  );
};

export default MainPage;
