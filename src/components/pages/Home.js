import React from 'react';
import '../../App.css'
import profile_pic from '../../assets/MacMaster_Colin.jpeg'
import "./Home.css"
import { Box} from '@mui/material';

const gridContainer = {
    display: "grid",
    gridTemplateColumns: "45% 55%",
    height: "400px"
    
};
const gridItem = {
    marginBottom: "20px",
    margin: "8px",
    height: "200px"
    
  };

export default function Home() {
    return (
        <>
            <Box sx={gridContainer}>
                <Box sx = {gridItem}>
                    
                <h2 className = "words">My name is Colin MacMaster and I am currently a rising senior at Virginia Tech and
            Software Engineering Intern at BTI360. Clicking on the tabs at the top will take you to my projects,
            experience, and how to contact me.</h2>

                </Box>
                <Box sx = {gridItem}>
                    <img class = "face" src = {profile_pic}></img>

                </Box>
            </Box>
        </>
    );
}
