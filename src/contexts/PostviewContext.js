import React, { createContext, useEffect, useState } from "react";
import { getAllPost } from "../utils/api-util";

export const UserList = createContext()

export default function PostviewContext({children}) {

    const [posts, setPosts] = useState([]);
    const [preview, setPreview] = useState("");

    useEffect(() => {
        getAllPost().then(res => {
            setPosts(res.data.reverse());
        });
        setPreview("")
        
    }, [])

    return <UserList.Provider value={{
        posts : posts,
        addPost : (post) => {
            const updated = [post, ...posts];
            setPosts(updated);
        },
        preview,
        addPreview : (url) => setPreview(url)
    }}>
        {children}
    </UserList.Provider>
}

/*
 [
            {name:"Siva",
            location:"Bengaluru",
            likes:64,
            description: "Kick start your career",
            PostImage: "https://www.the10xacademy.com/assets/images/favicon-2.jpeg",
            date: new Date().toDateString()
            },

            {name:"Neeraj",
            location:"Pune",
            likes:30,
            description: "Sample Description",
            PostImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcwhtnvP_fxTcj0KMxNe_F5tc2l3xlMUuV_g&usqp=CAU",
            date: new Date().toDateString()
            },

            {name:"Rahul",
            location:"Hyderabad",
            likes:30,
            description: "Sample Description for Post",
            PostImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTEcM8bIyMFmgCF8cxoKPUmyiwNw3eUtGSPg&usqp=CAU",
            date: new Date().toDateString()
            }
            
            ]
*/