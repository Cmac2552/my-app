import React from 'react';
import { CardContent, Card, CardHeader, Box } from '@mui/material';


const gridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)"
};
const gridItem = {
    marginBottom: "20px",
    margin: "8px"
  };
const cardItem={
    height: "100%",
    marginBottom: "8px"

}
const cardHeader ={
    textAlign: "left",
}
export default function Projects(props) {
    return (
        <>
            <Box sx={gridContainer}>
                {props.data.map((item, index)=>(
                    <Box sx = {gridItem} key = {index}>
                         <Card sx = {cardItem}>
                            <CardHeader sx={cardHeader} title = {item.title} subheader ={item.year}/>
                            <CardContent>
                                {item.Info}
                            </CardContent>
                        </Card>
                    </Box>

                ))}
            </Box>

        </>
    );
}
