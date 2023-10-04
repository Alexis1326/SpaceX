import { useParams } from "react-router-dom"

export function LaunchDetails(){
    
    const {launchId} = useParams();

    return (
        <div>Holaas {launchId} </div>
    )
}