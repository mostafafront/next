import {param} from "ts-interface-checker";

interface Params{
    params: {userIdPage: string}
}
export default function userIdPage() {
    console.log(params)
    return(
        <div>sub page user</div>
    )
}