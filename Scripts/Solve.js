//Wires event listener to call a function when the "sunBtn" button is clicked.
document.getElementById('sunBtn').addEventListener('click', function () {
    //Creates 5 variables and sets each one equal to the corresponding user input.
    let height1 = parseInt(document.getElementById('sunInput1').value);
    let height2 = parseInt(document.getElementById('sunInput2').value);
    let height3 = parseInt(document.getElementById('sunInput3').value);
    let height4 = parseInt(document.getElementById('sunInput4').value);
    let height5 = parseInt(document.getElementById('sunInput5').value);
    //Creates a new array "heightArray" and puts the 5 inputs into it.
    let heightArray = new Array();
    heightArray.push(height1);
    heightArray.push(height2);
    heightArray.push(height3);
    heightArray.push(height4);
    heightArray.push(height5);
    //Creates 2 new arrays. One to track if each building is taller than
    //all previous buildings, and one to track the heights of all buildings
    //that are taller than all previous bulidings.
    let viewArray = ['true'];
    let viewBldg = height1;
    let trackerArray = [height1];
    //Declaring a variable to track the number of buildings that can "see the sun".
    let tracker = 1;
    //Sets up a for loop to run 4 times, once for buildings 2-5.
    for (let i = 1; i <= 4; i++) {
        //If the current building is tall than all previous buildings this will
        //update the "viewBldg" variable to compare future values to, push true
        //to the "viewArray", push the current value to the "trackerArray", and
        //increment the tracker variable.
        if (heightArray[i] > viewBldg) {
            viewBldg = heightArray[i];
            viewArray.push('true');
            tracker++;
            trackerArray.push(heightArray[i])
        }
        //If the current building is not taller than all previous buildings it will
        //just push false to the "viewArray".
        else {
            viewArray.push('false')
        }
    }
    //A series of "if else" functions that use the "viewArray" to return outputs that tell the user
    //whether or the building can see the sun, the height of that building, and a check or x icon. 
    if (viewArray[0] == 'true') {
        document.getElementById('viewCheck1').innerHTML = `<span>Building 1 has a height of ${height1} and can see the sun. </span><img src="Images/Checkmark.png" />`;
    } else {
        document.getElementById('viewCheck1').innerHTML = `Building 1 has a height of ${height1} and can not see the sun`;
    }

    if (viewArray[1] == 'true') {
        document.getElementById('viewCheck2').innerHTML = `<span>Building 2 has a height of ${height2} and can see the sun. </span><img src="Images/Checkmark.png" />`;
    } else {
        document.getElementById('viewCheck2').innerHTML = `<span>Building 2 has a height of ${height2} and can not see the sun. </span><img src="Images/RedX.png" />`;
    }

    if (viewArray[2] == 'true') {
        document.getElementById('viewCheck3').innerHTML = `<span>Building 3 has a height of ${height3} and can see the sun. </span><img src="Images/Checkmark.png" />`;
    } else {
        document.getElementById('viewCheck3').innerHTML = `<span>Building 3 has a height of ${height3} and can not see the sun. </span><img src="Images/RedX.png" />`;
    }

    if (viewArray[3] == 'true') {
        document.getElementById('viewCheck4').innerHTML = `<span>Building 4 has a height of ${height4} and can see the sun. </span><img src="Images/Checkmark.png" />`;
    } else {
        document.getElementById('viewCheck4').innerHTML = `<span>Building 2 has a height of ${height4} and can not see the sun. </span><img src="Images/RedX.png" />`;
    }

    if (viewArray[4] == 'true') {
        document.getElementById('viewCheck5').innerHTML = `<span>Building 5 has a height of ${height5} and can see the sun. </span><img src="Images/Checkmark.png" />`;
    } else {
        document.getElementById('viewCheck5').innerHTML = `<span>Building 5 has a height of ${height5} and can not see the sun. </span><img src="Images/RedX.png" />`;
    }

    if (tracker == 1) {
        document.getElementById('viewCount').innerHTML = `Only 1 building can see the sun and its height is ${height1}`
    } else {
        document.getElementById('viewCount').innerHTML = `A total of ${tracker} buildings can see the sun and their heights are ${trackerArray.join(', ')}`
    }
})

//Function to listen for keypresses in "sunInput1" and ignore all non-number characters
document.getElementById('sunInput1').addEventListener('keypress', function (evt) {
    //Creates the "char" variable and sets it equal to the character code of the 
    //pressed input
    let char = evt.which;
    //Uses the value of "char" to determine the given character using its Ascii
    // code and returning true if it's a character we want and false if it's any
    //other character.
    if (char >= 48 && char <= 57) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
});
//Same as above function but for "sunInput2"
document.getElementById('sunInput2').addEventListener('keypress', function (evt) {
    let char = evt.which;
    if (char >= 48 && char <= 57) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
});
//Same as above functions but for "sunInput3"
document.getElementById('sunInput3').addEventListener('keypress', function (evt) {   
    let char = evt.which;    
    if (char >= 48 && char <= 57) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
});
//Same as above functions but for "sunInput4"
document.getElementById('sunInput4').addEventListener('keypress', function (evt) {
    let char = evt.which;
    if (char >= 48 && char <= 57) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
});
//Same as above functions but for "sunInput5"
document.getElementById('sunInput5').addEventListener('keypress', function (evt) {
    let char = evt.which;
    if (char >= 48 && char <= 57) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
});