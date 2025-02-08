import { CommunityNodes } from "@/components/communitynodes"
import Maintainer from "@/components/ui/maintainer";
import { NodeMapDynamic } from "./ui/nodemap";


export default async function NodePage({
id,
}: {
    id: string 
}) {
    const node = CommunityNodes.find((n) => n.id === id)!;

    return <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                {node.name} Node
            </h1>
            <p className="mt-6 text-xl/8">
                {node.description}
            </p>
            <table className="min-w-full divide-y divide-gray-300 mt-3 border rounded">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                            ID
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Name
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Short Name
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Hardware Model
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Role
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                        <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6">
                            {node.id}
                        </td>
                        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{node.name}</td>
                        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{node.short_name}</td>
                        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{node.hardware_model}</td>
                        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{node.device_role}</td>
                    </tr>
                </tbody>
            </table>
            <div className="relative w-full mt-3">
                <img
                    alt=""
                    src={`/img/nodes/${node.id}.png`}
                    className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
            </div>
            <div className="overflow-hidden ring-1 shadow-sm ring-black/5 sm:rounded-lg">

            </div>
            <div className="mt-10 max-w-2xl">

                <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                    Location
                </h2>
                <NodeMapDynamic latitude={node.gps_location.latitude} longitude={node.gps_location.longitude} />
                <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                    Access
                </h2>


                <p className="mt-6">
                    {node.approach_information}
                </p>


            </div>
            <div className="mt-10 max-w-2xl">

                <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                    Maintainers
                </h2>
                <ul role="list" className="divide-y divide-gray-100">
                    {node.maintainers.map((maintainer, i) => (
                        <Maintainer maintainer={maintainer} key={i}/>
                    ))}
                </ul>


            </div>
        </div>
    </div>
}