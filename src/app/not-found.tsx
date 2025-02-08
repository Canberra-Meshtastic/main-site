import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return <div>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="font-bold text-2xl place-self-center">This is not the page you are looking for</h1>
        <p className="place-self-center">You have ventured off the beaten path and got lost</p>
        <Link href="/" className="self.center flex place-self-center">
        <Button className="rounded">Return Home</Button>
        </Link>
        

      </main>

    </div>
  </div>
}