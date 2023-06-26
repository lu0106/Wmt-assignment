import { Inter } from "next/font/google";
import CardList from "./CardList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <CardList />
    </>
  );
}
