import { useRouter } from "next/router"

 
export default function rout() {
    const router=useRouter();
    return(
        <div  onClick={() => router.push('/')} className="h-screen w-screen bg-orange-600"></div>
    )
}