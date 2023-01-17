import React from 'react';
import '../../App.css'
import profile_pic from '../../assets/MacMaster_Colin.jpeg'
import "./Home.css"
import { Box} from '@mui/material'
import Projects from './Projects';

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

export default function Home(props) {
    return (
        <>
            <Box sx={gridContainer}>
                <Box sx = {gridItem}>
                    
                <h2 className = "words">My name is Colin MacMaster and I am currently a Software Engineer for BTI360. Clicking on the tabs at the top will take you to my projects,
            experience, and how to contact me.</h2>
            <Box className="latestProject">
                <Projects data = {props.data}  expanded = {props.expanded} handleExpanded = {props.handleExpanded}/>
            </Box>
            

                </Box>
                <Box sx = {gridItem}>
                    <img className = "face" src = {profile_pic} alt="my face"></img>

                </Box>
            </Box>
        </>
    );
}
