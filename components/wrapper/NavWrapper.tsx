import Navbar from "../Navbar"

export default function NavWrapper({children}:{children:React.ReactNode}){
    return <div className="w-full ">
        <Navbar/>
        <div>
        {
            children
        }
        </div>
    </div>
}