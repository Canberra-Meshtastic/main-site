import { CommunityNodes } from "@/components/communitynodes"
import Link from "next/link"

export default function Nodes() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Community Nodes
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">All of these nodes have been created and maintained by Canberra Meshtastic Comunity.</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {CommunityNodes.map((node) => (
            <Link href={`/nodes/${node.id}`} key={node.id}>
              <div className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    alt=""
                    src={`/img/nodes/${node.id}.png`}
                    className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
                <div className="max-w-xl">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">

                      <span className="absolute inset-0" />
                      {node.name}

                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{node.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}