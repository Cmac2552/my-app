import React from 'react';
import '../../App.css';
import { CardContent, Card, CardHeader, Box, CardActions, Collapse } from '@mui/material';
import './Experience.css';
const gridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)"
};
const gridItem = {
    marginBottom: "20px",
    margin: "12px"
  };
const box ={
    marginBottom: "16px"
}

export default function Experience() {
    return (
        <>
            <h1 className='home'>Experience</h1>
            <br></br>
            <Box sx={gridContainer}>
                <Box sx = {gridItem}>
                    <h2>Work</h2>
                </Box>
                <Box sx = {gridItem}>
                    <h2>Education</h2>
                </Box>
                <Card sx={gridItem}>
                    <Box sx={box} >
                        <h3 align = "left">BTI360 Internship</h3>
                        <h4 align ="left">Summer 2022</h4>
                        <p align = "left" >During this internship I worked with 4 other interns to design and deploy a full stack web application.
                    We worked with technologies like Java Spring, Angular, AWS, Gitlab, and Jira. We learned things relating to all of the
                    technologies mentioned before as well as the Agile software process and REST architecture.  It was an incredible learning
                    experience as I was able to really get the feel of what it is like to work with a team of other software engineers while
                    also learning best practices from the more experienced engineers who were kind enough to help us.</p>
                    </Box>
                </Card>
                <Card sx = {gridItem}>
                    <CardContent>
                        <Box sx ={box}>
                            <h3 align = "left">Virginia Tech Bachelor of Computer Science</h3>
                            <p align = "left">Graduated December 2022</p>
                            <p align =  "left">GPA: 3.78</p>
                        </Box>
                        <Box sx = {box}>
                            <h3 align = "left">AWS Certified Cloud Practioner</h3>
                            <p align = "left">Awarded July 2022</p>
                        </Box>
                    </CardContent>
                </Card>
    

            </Box>
        </>
    )
}
