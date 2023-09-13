import {NOTFOUND} from "dns";
import NotFound from "@/app/users/[userIdPage]/not-found";

export default async function getUser(userID: string) {
    const getData = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    
    if(!getData.ok) return NotFound()
    
    return getData.json()
}