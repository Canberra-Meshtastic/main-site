export interface CommunityNodesType {
	// id should be the full id of the node e.g. DA56A740
	id: string;
	// short_name should be the 4 character short name of device e.g.  CM06
	short_name: string;
	name: string;
	description: string;
	approach_information: string;
	gps_location: CommunityNodeGps;
	hardware_model: string;
	device_role: NodeRole;
	maintainers: NodeMaintainer[];
}

export type NodeRole = "Client" | "Client Mute" | "Client Hidden" | "Tracker" | "Lost And Found" | "Sensor" | "TAK" | "Router" | "Router Late" | "Repeater"

export interface CommunityNodeGps {
	longitude: number;
	latitude: number
}

export interface  NodeMaintainer {
	name: string; 
	note: string | null;
	role: NodeMaintainerRole;
	contact: NodeMaintainerContact[]
}

export type NodeMaintainerRole = "Owner" | "Maintaner" | "Community";

export interface NodeMaintainerContact {
	type: NodeMaintainerContactType;
	data: string;
}
export type NodeMaintainerContactType = "Phone" | "Email" | "Discord"

export const CommunityNodes: CommunityNodesType[]= [
	{
		id: "E1455C5F",
		short_name: "CM06",
		name: "Googon’ish", 
		description: "Communication node for Googong",
		approach_information: "Take some trail to the site. it's a long walk",
		gps_location: {
			latitude: -35.4123776,
			longitude: 149.2746240,
		},
		hardware_model: "RAK4631",
		device_role: "Client",
		maintainers: [
			{
				name: "Someone",
				note: "Only contact if there are issues",
				role: "Owner",
				contact: [
					{
						type: "Email",
						data: "someone@example.com"
					}
				]
			},
			{
				name: "Canberra Meshtastic Community",
				note: null,
				role: "Community",
				contact: [
					{
						type: "Discord",
						data: "https://discord.gg/7H7dmc5tzb"
					}
				]
			}

		]
	}

]
