import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Experience from './components/pages/Experience'
import './App.css';
import Contact from "./components/pages/Contact";
import React, {useState}from 'react';
function App() {
    const data = [{year:2022, title:"Sozin",Info:"This project was a full stack application developed by me and a team of other engineering interns. We used Twitter4J in the java programming language and Angular to reduce time to find twitter trending topics in a country by 30% by leveraging the Twitter v2 API to present country topic selection. The Angular front end utilized Observables, Dependency injection, and Angular Directives to create a user friendly interface, while the backend used Hibernate to store current Twitter trending data from API calls in a dockerized MySQL container. Finally the whole project was served to users through AWS using S3, ECS, and RDS", stack:"Java Spring, Angular, MySql"},
    {year:2022, title:"Online Betting Service",Info:"*No actual betting* This was a full stack web app written with MongoDB, Express, Angular, and NodeJS. It allowed users to sign up for the website and deposit (fake) money into their accounts, they were then able to bet on the outcome of  a previously selected slate of games, they could bet on anything from moneyline to the spread of these games. After the games have been deemed to be over their accounts would correctly show the amount they won or lost and they could see how they stacked up to all the others who were a part of the site as well.", stack:"Mongodb, Angular, Express, Node"},
    {year:2021, title:"Binary Search Tree",Info:"This was a Binary Search Tree written in C. In doing this I learned about wrapping data using structs and recursion in C. There were also other things including memory allocation and pointers, but they were not the main focus.", stack:"C"},
    {year:2021, title:"MIPS Assembler", Info:"The assembler was a project that turned MIPS assembly code into binary machine code. Some of the intricacies were creating a symbol table that then invoked from the command line print out the symbols that were included in the MIPS file. The main two parts involved the data and text segments of the input. The text segment was the binary for the actual commands, these commands included registers and values for the operations they were to perform. The data section was the strings and integer values that were going to be used. Multiple different functions were written in order to get the correct padding for the data section as the way you handle a string is much different than an integer value.", stack:"C"},
    {year:2021, title:"PR QuadTree",Info:"The PR QuadTree is a specialized version of a Binary Search Tree. It is specifically designed to be used with a coordinate system. Each Internal node of the quad tree has branches that are NE, NW, SW, SE. Then the leaves have those designations as well. Inside the leaves is where the data is stored and each section of a leaf (NE for example) will have a certain amount of data that can be changed based on what the user wants. A leaf will split into an internal node when  that amount of data is exceeded.", stack:"Java"},
    {year:2021, title:"GIS", Info:"GIS was a project that brought together a whole semester of work in my data structures class. It combined a PR QuadTree, Hash Table, and BufferPool all written in Java. The main idea is that you would read in a large data set and store that in your own data table, you would then store the offsets of each record in a hash table and a PR QuadTree. Once everything was stored a script was run that issues commands to find certain land features. If they were searched for by name that would come from the hashTable, but by location came from the QuadTree, finally everything that was retrieved was stored in the BufferPool for a limited time in case it was needed again.", stack:"Java"},
    {year:2021,title:"Threadpool", Info:" A computer systems project in C. Built a work stealing threadpool system that allowed for parallel computation of a given task using semaphores, locks, and multithreading technologies. The program starts up a number of threads at execution that polls a global queue to find work. If found, then the work is completed, if not then work is obtained from other threads.", stack:"C"},
    {year:2021,title:"Malloc", Info:"This Project had the basis of recreating Malloc, Realloc, and free. The program was passed a test of how much memory that it had to allocate and we were forbidden from using the pre written methods, we had to design our own. The final criteria was to design a system that had the best performance by losing the least amount of memory when the test script was finished running.", stack:"C"},
    {year:2021,title:"Social Sanitization", Info:"This was a project for my Comparative Languages class. This project used Scala, C++, and Prolog. Scala created a prolog knowledge base from given csv files containing social media posts. C++ then called queries from a statically created Prolog file to determine the social posts to be removed. The static Prolog file analyzed the dynamically created one and relayed the queried info back to C++ which passed the results back to Scala to be output to a csv file.", stack:"Scala, Java, Prolog, C++"},
    {year:2020,title:"Space Colonies", Info:"This project was written in Java and  was a project that relied heavily on objects and ability to leverage them in different classes. The main idea was that there was a set of colonies that could accept or reject a person based on their skills. We created a circle arrayQueue to house people that we read in from an input to the project and then had an algorithm to determine whether a person was fit to be accepted into that colony that they were trying to join.", stack: "Java"},
    {year:2020,title:"HashTable", Info:"This project was written in C and had the main focus on the ideas of a hashTable, pointers, and memory allocation. We had to create a table that we would hash the entries, assign a pointer to it and a pointer from it, and then if that value was ever removed from the table, we had to clean up those pointers and deallocate the memory that was used to store that object.", stack:"C"}]
    let stateArray = []
    for(let i =0; i < data.length; i++){
        stateArray.push(false)
    }
    const [expanded, setExpanded] = useState(stateArray);
    const handleExpanded =(index) =>{
        let temp = [...expanded];
        temp[index] = !expanded[index];
        setExpanded(temp)
        
    }
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home data = {[data[0]]} expanded = {expanded} handleExpanded = {handleExpanded} />}/>
                    <Route path='/my-app' exact element={<Home />} />
                    <Route path='/projects' element={<Projects data = {data} expanded = {expanded} handleExpanded = {handleExpanded} />} />
                    <Route path='/experience' element={<Experience />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
