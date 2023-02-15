import React from 'react'
import PropTypes from "prop-types";

function Profile(props){
   
    const styleObj = {
        fontSize: 14,
        color: "#4a54f1",
        textAlign: "center",
        paddingTop: "100px",
    };
    return(
        
        <>  
            <div>{props.fullName}</div>
            <div style = {styleObj}>{props.bio}</div>
            <div>{props.profession}</div>
            <img src= {props.children} alt={props.fullName } className ="circle"/>
            <div>
            <button onClick = {props.onClickHandler} >click me</button>
            </div>
        </>

    )
}
export default Profile;


Profile.defaultProps = {
    fullName : "Someone",
    profession : "Student",
    bio : "Student at GMC"
};

Profile.propTypes = {
    fullName: PropTypes.number,
    bio: PropTypes.string,
    profession: PropTypes.string,
    onClickHandler: PropTypes.func
   };