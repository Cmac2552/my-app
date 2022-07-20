import React from 'react';
import '../../App.css';
import './Services.css'

export default function Services() {
    return (
        <>
            <h1 className='home'>Projects</h1>

            <p align='left' className='words'>
                <h2 align='left'>2022</h2>
                <br></br>

                <h4>Online Betting Service</h4>

                *No actual betting, it was all fake*
                This was a full stack web app written with MongoDB, Express, Angular, and NodeJS. It allowed users to sign up for the website and deposit (fake) money into their accounts, they were then able to bet on the outcome of  a previously selected slate of games, they could bet on anything from moneyline to the spread of these games. After the games have been deemed to be over their accounts would correctly show the amount they won or lost and they could see how they stacked up to all the others who were a part of the site as well.
                <br></br>
                <br></br>
                <h4>Sozin (In progress)</h4>
            <br></br>

                <h2 align ='left'>2021</h2>
                <br></br>
                <h4>Binary Search Tree</h4>
                This was a Binary Search Tree written in C. In doing this I learned about wrapping data using structs and recursion in C. There were also other things including memory allocation and pointers, but they were not the main focus.
                <br></br>
                <br></br>
                <h4>MIPS Assembler</h4>
                The assembler was a project that turned MIPS assembly code into binary machine code. Some of the intricacies were creating a symbol table that then invoked from the command line print out the symbols that were included in the MIPS file. The main two parts involved the data and text segments of the input. The text segment was the binary for the actual commands, these commands included registers and values for the operations they were to perform. The data section was the strings and integer values that were going to be used. Multiple different functions were written in order to get the correct padding for the data section as the way you handle a string is much different than an integer value.

                <br></br> <br></br>

                <h4>PR QuadTree</h4>
                The PR QuadTree is a specialized version of a Binary Search Tree. It is specifically designed to be used with a coordinate system. Each Internal node of the quad tree has branches that are NE, NW, SW, SE. Then the leaves have those designations as well. Inside the leaves is where the data is stored and each section of a leaf (NE for example) will have a certain amount of data that can be changed based on what the user wants. A leaf will split into an internal node when  that amount of data is exceeded.
                <br></br> <br></br>
                <h4>GIS</h4>
                GIS was a project that brought together a whole semester of work in my data structures class. It combined a PR QuadTree, Hash Table, and BufferPool all written in Java. The main idea is that you would read in a large data set and store that in your own data table, you would then store the offsets of each record in a hash table and a PR QuadTree. Once everything was stored a script was run that issues commands to find certain land features. If they were searched for by name that would come from the hashTable, but by location came from the QuadTree, finally everything that was retrieved was stored in the BufferPool for a limited time in case it was needed again.
                <br></br> <br></br>
                <h4>Threadpool</h4>
                A computer systems project in C. Built a work stealing threadpool system that allowed for parallel computation of a given task using semaphores, locks, and multithreading technologies. The program starts up a number of threads at execution that polls a global queue to find work. If found, then the work is completed, if not then work is obtained from other threads
                <br></br> <br></br>
                <h4>Malloc</h4>
                This Project had the basis of recreating Malloc, Realloc, and free. The program was passed a test of home much memory that it had to allocate and we were forbidden from using the pre written methods, we had to design our own. The final criteria was to design a system that had the best performance by losing the least amount of memory when the test script was finished running
                <br></br> <br></br>
                <h4>Social Sanitization</h4>
                This was a project for my Comparative Languages class. This project used Scala, C++, and Prolog. Scala created a prolog knowledge base from given csv files containing social media posts. C++ then called queries from a statically created Prolog file to determine the social posts to be removed. The static Prolog file analyzed the dynamically created one and relayed the queried info back to C++ which passed the results back to Scala to be output to a csv file.
                <br></br> <br></br>

                <h2 className = 'home2' align='left'>2020</h2>
                <br></br>
                <h4>Space Colonies.</h4>
                This project was written in Java and  was a project that relied heavily on objects and ability to leverage them in different classes. The main idea was that there was a set of colonies that could accept or reject a person based on their skills. We created a circle arrayQueue to house people that we read in from an input to the project and then had an algorithm to determine whether a person was fit to be accepted into that colony that they were trying to join.
                <br></br> <br></br>
                <h4>HashTable</h4>
                This project was written in C and had the main focus on the ideas of a hashTable, pointers, and memory allocation. We had to create a table that we would hash the entries, assign a pointer to it and a pointer from it, and then if that value was ever removed from the table, we had to clean up those pointers and deallocate the memory that was used to store that object.

            </p>
        </>
    );
}
