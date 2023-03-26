import React from "react";
import posts from '../data/posts.json';
import {NavLink} from "react-router-dom";
import "../App.css"

export default function Overview({isAuthenticatedAtr}) {

    if(isAuthenticatedAtr) {
    return(
        <>
        <h1>Overzicht</h1>
            <h3 className = "post">Gevonden {posts.length} posts: </h3>
        <ul>
            {posts.map((post) => {
                return <li key = {post.id}>
                    <NavLink to = {`/BlogPost/${post.id}`}>
                        {post.id}. {post.title}
                    </NavLink>
                </li>
            })}
        </ul>
        </>
    )}
    return (
        <h1>Inloggen!!</h1>
    )
}