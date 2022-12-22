import React from 'react';
import { CardContent, Card, CardHeader, Box, CardActions, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

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

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: '50%',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
export default function Projects(props) {

    const handleExpandClick= (index) => {
        props.handleExpanded(index);
    }
    return (
        <>
            <h1>Projects</h1>
            <Box sx={gridContainer}>
                {props.data.map((item, index)=>(
                    <Box sx = {gridItem} key = {index}>
                         <Card sx = {cardItem}>
                            <CardHeader sx={cardHeader} title = {item.title}/>
                            <CardContent>
                                <p align="left">Year: {item.year}</p>
                                <p align="left">Stack: {item.stack}</p>
                            </CardContent>
                            <Collapse in={props.expanded[index]} timeout="auto" unmountOnExit
                            >
                                <CardContent>
                                    {item.Info}
                                </CardContent>
                            </Collapse>
                            <CardActions>
                                <ExpandMore
                                expand = {props.expanded[index]}
                                onClick = {() => handleExpandClick(index)}
                                >
                                    <ExpandMoreIcon />

                                </ExpandMore>

                            </CardActions>
                        </Card>
                    </Box>

                ))}
            </Box>

        </>
    );
}
