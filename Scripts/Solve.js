﻿document.getElementById('sunBtn').addEventListener('click', function () {

    let height1 = parseInt(document.getElementById('sunInput1').value);
    let height2 = parseInt(document.getElementById('sunInput2').value);
    let height3 = parseInt(document.getElementById('sunInput3').value);
    let height4 = parseInt(document.getElementById('sunInput4').value);
    let height5 = parseInt(document.getElementById('sunInput5').value);

    let heightArray = new Array();
    heightArray.push(height1);
    heightArray.push(height2);
    heightArray.push(height3);
    heightArray.push(height4);
    heightArray.push(height5);

    let viewArray = ['true'];
    let viewBldg = height1;
    let tracker = 1;
    let trackerArray = [height1];

    for (let i = 1; i <= 4; i++) {
        if (heightArray[i] > viewBldg) {
            viewBldg = heightArray[i];
            viewArray.push('true');
            tracker++;
            trackerArray.push(heightArray[i])
        }
        else {
            viewArray.push('false')
        }
    }

    if (viewArray[0] == 'true') {
        document.getElementById('viewCheck1').innerHTML = `Building 1 has a height of ${height1} and can see the sun`;
    } else {
        document.getElementById('viewCheck1').innerHTML = `Building 1 has a height of ${height1} and can not see the sun`;
    }

    if (viewArray[1] == 'true') {
        document.getElementById('viewCheck2').innerHTML = `Building 2 has a height of ${height2} and can see the sun`;
    } else {
        document.getElementById('viewCheck2').innerHTML = `Building 2 has a height of ${height2} and can not see the sun`;
    }

    if (viewArray[2] == 'true') {
        document.getElementById('viewCheck3').innerHTML = `Building 3 has a height of ${height3} and can see the sun`;
    } else {
        document.getElementById('viewCheck3').innerHTML = `Building 3 has a height of ${height3} and can not see the sun`;
    }

    if (viewArray[3] == 'true') {
        document.getElementById('viewCheck4').innerHTML = `Building 4 has a height of ${height4} and can see the sun`;
    } else {
        document.getElementById('viewCheck4').innerHTML = `Building 4 has a height of ${height4} and can not see the sun`;
    }

    if (viewArray[4] == 'true') {
        document.getElementById('viewCheck5').innerHTML = `Building 5 has a height of ${height5} and can see the sun`;
    } else {
        document.getElementById('viewCheck5').innerHTML = `Building 5 has a height of ${height5} and can not see the sun`;
    }

    if (tracker == 1) {
        document.getElementById('viewCount').innerHTML = `Only 1 building can see the sun and its height is ${height1}`
    } else {
        document.getElementById('viewCount').innerHTML = `A total of ${tracker} buildings can see the sun and their heights are ${trackerArray.join(', ')}`
    }
})

//Function to listen for keypresses in "input1" and ignore all non-number characters
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
//Same as above function but for "input2"
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
//Function to listen for keypresses in "input1" and ignore all non-number characters
document.getElementById('sunInput3').addEventListener('keypress', function (evt) {
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
//Same as above function but for "input2"
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