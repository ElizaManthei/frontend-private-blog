import { useNavigate, useParams} from "react-router-dom";
import React from "react";
import posts from '../data/posts.json'
import Button from "../components/Button";
import "../App.css"

export default function BlogPost({isAuthenticatedAtr}) {

    let { id } = useParams();
    const navigate = useNavigate();
    let postFound = posts.find( (post) => {
        return post.id === id});

    function disabled(nextOrPrev){
        if(nextOrPrev === "+" ) {
            return parseInt(postFound.id) === posts.length;
        }
        if(nextOrPrev === "-") {
            return parseInt(postFound.id) === 1;
        }
    }

    function nextOPrPrevClick(nextOrPrev) {
        let idNumber = parseInt(id);
        if(nextOrPrev === "+" ) {
                idNumber++;
            }
        if(nextOrPrev === "-") {
            idNumber--;
        }
        postFound = posts.find((post) => {
            return post.id === idNumber.toString()
        })
        navigate(`/BlogPost/${postFound.id}`, {replace: true});
    }

    if(isAuthenticatedAtr) {
            return (
                <>
                    <div className = "post">
                        <Button
                            buttonText = "Vorige"
                            buttonDisabled = {disabled("-")}
                            buttonAction = {() => nextOPrPrevClick("-")}/>
                        <Button
                            buttonText = "Volgende"
                            buttonDisabled = {disabled("+")}
                            buttonAction = {() => nextOPrPrevClick("+")}/>
                    </div>
                    <h1>{postFound.id}. {postFound.title}</h1>
                    <p className = "post">{postFound.content}</p>
                </>
            )
        } else return (
        <h1>Inloggen!!!</h1>
    )    }

