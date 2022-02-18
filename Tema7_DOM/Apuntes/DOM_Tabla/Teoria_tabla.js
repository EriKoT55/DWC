/*
Table Object
The Table object represents an HTML <table> element.
 */

// Collection	Description

tBodies	//Returns a collection of all <tbody> elements in a table

rows	//Returns a collection of all <tr> elements in a table

    //Collection	Description
    cells	//Returns a collection of all <td> or <th> elements in a table row

    //Method	Description
    deleteCell()	//Deletes a cell from the current table row
    
    insertCell()	//Inserts a cell into the current table row


deleteRow()	//Removes a row (<tr>) from the table

insertRow()	//Creates an empty <tr> element and adds it to the table