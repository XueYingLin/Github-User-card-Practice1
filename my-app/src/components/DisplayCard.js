import React from "react";

const DisplayCard = (props) => {
    return (
        <div>
            <img src={props.avatar_url} alt="follower's image" />
            <p>{props.login}</p>
            <p>{props.html_url}</p>
            <p>{props.email}</p>

        </div>
    )
}

export default DisplayCard;