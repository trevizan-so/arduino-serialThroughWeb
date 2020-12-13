# arduino-serialThroughWeb
Simple program to send arduino's collected data from a computer to another using a restfull api and Ngrok.

The system uses a simple node.js code to send the data readed from serial port to an external api using a http post request. There is also a simple express rest api to recive the data sent. Among the files there is a step-by-step well humored manual on how to setup and use the system. 

This program was original created to help out the Physics Engeenering students of EEL/USP on Microprocessors lecture. Because of that the program doesn't implement a permanent data storing system. I had to make it simple so even people not used to coding could use it. 



