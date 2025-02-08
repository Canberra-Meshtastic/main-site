import { NodeMaintainer } from "../communitynodes";
import Link from "next/link";

export default function Maintainer({maintainer}: {maintainer: NodeMaintainer}) {
    return  <li key={maintainer.name} className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold text-gray-900">{maintainer.name}</p>
        {maintainer.contact.map((c, i)=> (
            <div key={i}>
                {(c.type === "Email") && <Link className="mt-1 underline truncate text-xs/5 text-gray-500" href={`mailto:${c.data}`} >{c.data}</Link>}
                {(c.type === "Discord") && <Link className="mt-1 underline truncate text-xs/5 text-gray-500" href={`mailto:${c.data}`} >Discord</Link>}
                {(c.type === "Phone") && <Link className="mt-1 underline truncate text-xs/5 text-gray-500" href={`tel:${c.data}`} >{c.data}</Link>}
            </div>
        ))}
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm/6 text-gray-900">{maintainer.role}</p>
      {maintainer.role && (<p className="mt-1 text-xs/5 text-gray-500">
                {maintainer.note}
              </p>)}
      
    </div>
  </li>
}