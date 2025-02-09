import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-[calc(100vh-65px)] overflow-hidden overflow-hidden">
      <img
        src="/img/background.avif"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className=" relative z-10 flex h-full justify-center items-center">
        <div className="grid justify-center">
          <h1 className="text-4xl font-bold text-white text-center px-4 font-sans">Canberra Meshtastic Community</h1>
          <p className="text-xl font-bold text-gray-300 text-center px-4">A Community brought together by Meshtastic</p>
          <Link href="/about" className="flex justify-center justify-self-center p-3">
            <Button variant="default" size="sm" className="rounded">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      <p className="absolute right-0 bottom-0 text-white text-sm px-2 pb-1">Photo by Lachlan Nugent - © BY-NC-SA 4.0</p>
    </div>
  );
}
