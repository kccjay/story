function makeStory() {
    // get form values (2 points)
    var ma_name = document.getElementById('ma_name').value;
    var street = document.getElementById('street').value;
    var animal = document.getElementById('animal').value;
    var two_number = document.getElementById('two_number').value;
    var difftwo_number = document.getElementById('difftwo_number').value;
    var color = document.getElementById('color').value;
    var cream = document.getElementById('cream').value;
    var day = document.getElementById('day').value;
    var one_number = document.getElementById('one_number').value;
    var sport = document.getElementById('sport').value;
    var pet = document.getElementById('pet').value;
    var gender = document.getElementById('gender').value;
    var sec_gender = document.getElementById('sec_gender').value;
    var verb = document.getElementById('verb').value;



    // Set title of story. Use at least one form value in the title. (2 points)
    var title = "&#916; " + cream + day + " &#916;";


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = ma_name + " is " + two_number + " years old and still growing. " + "It was " + day + " for " + name + " and he was playing " + sport + " after an hour his friends had decided to stop playing." + "His day had brighten when the local ice cream shop had opened and he got his favorite thing" + cream + ".";
    var paragraph2 = "After " + difftwo_number + " " + name + " and his friends started to walk down " + street + ", " + name + " had seen " + pet + " on the steps of his house and he told his friends he would see them later while walking towards his house. " + pet + " was a " + animal;


    // Display story by putting title & paragraphs into appropriate divs. (3 points)
    document.getElementById('color').style.backgroundColor = color;
    document.getElementById('title').innerHTML = title;
    document.getElementById('paragraph1').innerHTML = paragraph1;
    document.getElementById('paragraph2').innerHTML = paragraph2;

}
