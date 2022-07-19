import { useEffect } from "react";
import axios from "axios";
import { stringify } from "querystring";

export default function index(){

    useEffect( () => {
         Name1()

    }, [] )

    async function Name1() {

        


        /*******************************************/
        
        const axiosPost = await axios.post('https://bitwine-server.herokuapp.com/api/users/signup', JSON.stringify({
                email: 'kevinpruebaApi@gmail.com',
                password: '3214',
                name: 'Fred'
            }) 
        )
            console.log( axiosPost)


        /********************************************** */


      /*
      
      const formData = new FormData();

        formData.append("email","kevinprueba@gmail.com");
        formData.append("password", "1143");
        formData.append("name","Kevin");
        try {
            const res = await fetch('https://bitwine-server.herokuapp.com/api/users/signup',{method:'POST', body:formData , } )
            console.log(res)
            return {
                props:{
                    
                }
            }
        } catch (error) {
            console.log(error)
        }*/

    }

    
    return(
        <div>
           <h1> Hola</h1>
        </div>
    );
}




