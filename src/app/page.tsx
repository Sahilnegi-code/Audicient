import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import MainPage from "@/Screen/MainPage";
import { Divide } from "lucide-react";

export default function Home() {
  return (
    <>
    <div className ="flex justify-center items-center	" style ={{ height:'90vh' , width:'90vw'}} >
    <MainPage/>
    </div>
    </>
  );
}
