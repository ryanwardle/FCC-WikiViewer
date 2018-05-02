//WHEN DOING EVENT LISTENER NEED TO ADD CLICK EVENT ON BUTTON FOR SEARCH AND KEYPRESS ON INPUT

//EXAMPLE I SAW THAT I CAN USE AS OUTLINE BUT MAKE BETTER https://codepen.io/nivrel/full/odYeOM/


$(document).ready(function(){
  //GET JSON DATA ON CLICK

  $('#search-button').on('click', function(){

      let url, searchEntry, link, text, textString, item;

    searchEntry = document.getElementById('search').value;

    //WILL HAVE TO FIGURE OUT HOW TO DEAL WITH SPACES, USE REPLACE???
    url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchEntry + '&format=json&origin=*';
    console.log(url);

    //Display "Show search results for:..."
    document.getElementById('results').innerText = `search reults for: ${searchEntry}`;

    //Display text

    //item = document.getElementsByTagName('li');


    //Put link into text

    //document.getElementById('first').innerText = text;
    //document.getElementById('firsta')

    $.getJSON(url, function(json){
      //item = document.getElementsByTagName('li');
      //DO SOMETHING WITH DATA
      //NEED TO INSERT link and text INTO HTML SO TEXT IS CLICKABLE
      link = (json[3]);
      text = (json[2]);
      textString = JSON.stringify(text[0]);

      console.log(textString);

      //WOULD LIKE TO GET SEARCH RETURN TO STOP AFTER X WORDS, EASIER TO STYLE, LOOKS BETTER/MORE CONSISTENT
      document.getElementById('first').innerText = textString;

      //TRYING TO USE FOREACH TO PUT SEARCH INTO UL TO DISPLAY ON SCREEN
      text.forEach(function(val, index){
        //console.log(val);
        console.log(index);

      });

      //item.innerText
    });
  });

  //AJAX REQUEST


  //should also try with backticks, once it is working



  //NEED TO ADD EVENT LISTENER, FOR KEYPRESS AND CLICK, THEN USE THAT DATA TO PUT INTO URL.
  //TEST EVENT LISTENER WITH CONSOLE.LOG

});
