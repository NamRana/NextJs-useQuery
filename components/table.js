import {BiEdit,BiTrashAlt} from "react-icons/bi";
import { getUsers,getUser } from "../lib/helper";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

export default function Table(){
   const state= useSelector((state)=>state)
   console.log(state);
    const {isLoading,isError,data,error}=useQuery('users',getUsers)
    if(isLoading) return <div>Employee is Loading..</div>
    if(isError) return <div>Got Error{error}</div>
    getUsers().then( res => console.log(res))
    
    return(
        <table className="min-w-full table-auto">
        <thead>
        <tr className="bg-gray-800">
            <th className="px-16 py-2">
                <span>Name</span>
            </th>
            <th className="px-16 py-2">
                <span>Email</span>
            </th>
            <th className="px-16 py-2">
                <span>Salary</span>
            </th>
            <th className="px-16 py-2">
                <span>Birthday</span>
            </th>
            <th className="px-16 py-2">
                <span>Status</span>
            </th>
            <th className="px-16 py-2">
                <span>Actions</span>
            </th>
        </tr>
        </thead>

        <tbody className="bg-gray-200">
        {
                        data.map((obj, i) => <Tr {...obj} key={i} />)
                    }
        </tbody>
        </table>
    )
}

function Tr({id,name,email,salary,date,status}){
    return (
        <tr className="bg-gray-50 text-center">
                <td className="px-16 py-2 flex flex-row items-center">
               
                    <span className="text-center ml-2 font-semibold">{name || "Unknown"}</span>
                </td>
                <td className="px-16 py-2">
                    <span>{email || "Unknown"}</span>
                </td>
                <td className="px-16 py-2">
                    <span>{salary || "Unknown"}</span>
                </td>
                <td className="px-16 py-2">
                    <span>{date || "Unknown"}</span>
                </td>

                <td className="px-16 py-2">
                    <button  className="cursor">
                    <span className="bg-green-500 text-white px-5 py-1 rounded-full">{status || "Unknown"}</span>
                    </button>
                </td>

                <td className="px-16 py-2 flex justify-around gap-5">
                    <button className="cursor">
                        <BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit>
                    </button>
                    <button className="cursor">
                        <BiTrashAlt size={25} color={"rgb(34,197,94)"}></BiTrashAlt>
                    </button>
                </td>
            </tr>
    )
}