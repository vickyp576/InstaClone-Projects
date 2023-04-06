import React, { useContext } from "react";
import { UserList } from "../contexts/PostviewContext";
import Post from "./Post";

export default function AllPosts() {

    const {posts} = useContext(UserList);

    return <>      
        { posts.length == 0 ? <h3>No post available...</h3> : 
        posts.map(post => {                 
            return  <Post key={post._id} post={post} />
        })}
    </>
}