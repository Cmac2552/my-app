import React from 'react';
import '../../App.css'
import profile_pic from '../../assets/profile_pic.jpg'
import "./Home.css"

export default function Home() {
    return (
        <>
            <br></br>
            <p className = "words">My name is Colin MacMaster and I am currently a rising senior at Virginia Tech and
            Software Engineering Intern at BTI360. Clicking on the tabs at the top will take you to my projects,
            experience, and how to contact me.</p>
            <br></br>
            <img class = "face" src ={profile_pic} alt = "My Face"/>
        </>
    );
}
