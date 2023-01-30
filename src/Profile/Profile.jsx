import React from 'react'

const Profile = (props) => {
 console.log( props.cheldren );
    return( 
    <div>
        <h1> { props.fullName} </h1>
        <p> { props.bio} </p>
        <h3> { props.profession} </h3>
       

    </div> );
   
 
};

export default Profile