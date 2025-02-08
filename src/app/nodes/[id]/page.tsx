import NodePage from "@/components/nodepage"
import { CommunityNodes } from "@/components/communitynodes"

export const dynamicParams = false

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;

        return <NodePage id={id}/>
}


export function generateStaticParams() {
    return CommunityNodes.map((e) => ({ id: e.id }))
}