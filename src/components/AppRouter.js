import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPosts from "./AllPosts";
import LandingPage from "./LandingPage";
import NewPost from "./NewPost";
import Postview from "./Postview";


export default function AppRouter() {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="posts" element={<Postview/>} >
                <Route path="all" element={<AllPosts />} />
                <Route path="new" element={<NewPost/>} />
            </Route>
        </Routes>
    </BrowserRouter>
}