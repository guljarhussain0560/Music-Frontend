import React,{createContext,useContext,useState ,useEffect} from "react";
import api from "../services/api"
import toast from "react-hot-toast"
import { Connect } from "vite";

const ContextApi = createContext();

export const ContextProvider = ({children}) => {
    const getToken = localStorage.getItem("JWT_TOKEN")?JSON.stringify(localStorage.getItem("JWT_TOKEN")):null

    const[token,setToken] = useState(getToken)

    const[currentUser,setCurrentUser] = useState(null)

    const fetchUser = async () => {
        const user = JSON.parse(localStorage.getItem("currentUser"))
        if(user?.username){
            try{
                const {data} = await api.get(`/auth/user`)
            }catch(error){
                console.log("Error fetching user data:", error)
                toast.error("Error fetching user data")
            }
        }
    }   

    useEffect(() => {
        if(token){
            fetchUser()
        }
    },[token])

    return(
        <ContextApi.Provider
            value={{
                token,
                setToken,
                currentUser,
                setCurrentUser,
                fetchUser
            }}
        >
            {children}
        </ContextApi.Provider>
    )

}

export const useMyContext = () => {
    const context = useContext(ContextApi)
    return context;
};
