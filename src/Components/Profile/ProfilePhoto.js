import React from 'react';
import '../../App.css';

function ProfileImg (props)  {

    return (
    <><img src={props.imgLink} alt={props.userName} className ="circle" />
    </>
    );
}
export default ProfileImg;