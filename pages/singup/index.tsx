import { useEffect } from "react";
import axios from "axios";

const Signup = () => {

    const signup = async () => {

        
        const api = axios.create({
            baseURL: `https://bitwine-server.herokuapp.com/api`,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': 'true'
            },
            withCredentials: true,
        })

        /*******************************************/
        try {
            
            const axiosPost = await api.post('/users/signup', JSON.stringify({
                email: 'kevinpruebaApi@gmail.com',
                password: '3214',
                name: 'Fred'
            }))
            console.log("🚀 ~ file: index.tsx ~ line 31 ~ Name1 ~ axiosPost", axiosPost.data)
        } catch (error) {
            console.log("🚀 ~ file: index.tsx ~ line 26 ~ Name1 ~ error", error)
            
        }
    }

    useEffect( () => {
        signup()
    }, [])


    
    return(
        <div>
           <h1> Hola</h1>
        </div>
    );
}

export default Signup



