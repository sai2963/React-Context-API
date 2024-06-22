import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile=()=>{
    const {user} =useContext(UserContext)
    return (
        <div>
            <h1>Profile :{user.userName}</h1>
        </div>
    )
}

export default Profile;