import {CommunityNodes, CommunityNodesType} from "../src/components/communitynodes";
import {test, expect, it} from '@jest/globals'
import { existsSync } from "node:fs";


test("ID's are 8 characters", ()=> {

    for(const node of CommunityNodes) {
        try{
            expect(node.id.length).toBe(8)
        } catch(e) {
            throw new Error(`id: ${node.id} is not 8 characters`)
        }
    }

})

test("ID's have valid characters", ()=> {

    for(const node of CommunityNodes) {
        try{
            expect(/^[A-Z0-9]+$/.test(node.id)).toBe(true)
        } catch(e) {
            throw new Error(`id: ${node.id} has a non valid character, only A-Z and 0-9 is allowed`)
        }
    }

})


test("Short names are 4 characters", ()=> {

    for(const node of CommunityNodes) {
        try{
            expect(node.short_name.length).toBe(4)
        } catch(e) {
            throw new Error(`short_name: ${node.short_name} is not 4 characters`)
        }
    }

})

test("Short names have valid characters", ()=> {

    for(const node of CommunityNodes) {
        try{
            expect(/^[A-Z0-9]+$/i.test(node.short_name)).toBe(true)
        } catch(e) {
            throw new Error(`short_name: ${node.short_name} has a non valid character, only a-z, A-Z and 0-9 is allowed`)
        }
    }

})

test("Nodes have atleast 1 maintainer", ()=> {

    for(const node of CommunityNodes) {
        try{
            expect(node.maintainers.length >= 1).toBe(true)
        } catch(e) {
            throw new Error(`Node ${node.id} Needs at least 1 maintainer`)
        }
    }

})

test("Maintaners have atleast 1 contact", ()=> {

    for(const node of CommunityNodes) {
        for(const maintainer of node.maintainers) {
            try{
                expect(maintainer.contact.length >= 1).toBe(true)
            } catch(e) {
                throw new Error(`Maintainer "${maintainer.name}" in node ${node.id} needs atleast 1 contact`)
            }
        }
    }
})

test("Nodes have images", ()=> {

    for(const node of CommunityNodes) {
        try{
            expect(existsSync(`public/img/nodes/${node.id}.png`)).toBe(true)
        } catch(e) {
            throw new Error(`File "public/img/nodes/${node.id}.png" does not exist`)
        }
    }

})