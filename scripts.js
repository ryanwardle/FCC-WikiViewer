$(document).ready(function(){

  //CLICK EVENT THAT CALLS FUNCTION
  $('#search-button').on('click', function(){
    clearResults();
    displaySearch();
});

//KEYPRESS EVENT THAT CALLS FUNCTION
$('#search').keypress(function(event){
  if(event.keycode === 13 || event.which === 13){
    clearResults();
    displaySearch();
  }
});

//FUNCTION THAT GETS AND DISPLAYS DATA, USED TO CALL IN CLICK AND KEYPRESS EVENT ABOVE
 function displaySearch (){
   let url, searchEntry, link, linkString, text, textString, item;

 searchEntry = document.getElementById('search').value;

 url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchEntry + '&format=json&origin=*';

 //Display "Show search results for:..."
 document.getElementById('results').innerText = `search reults for: ${searchEntry}`;

 $.getJSON(url, function(json){
   //NEED TO INSERT link and text INTO HTML SO TEXT IS CLICKABLE

   //Display text and link within text
   link = (json[3]);
   text = (json[2]);

   //TEXT******

   for (let i = 0; i < text.length; i++) {
     textString = JSON.stringify(text[i]);
     textString = textString.substr(0, 98) + '...';

     let newLi = document.createElement('li');
     let newLiContent = document.createTextNode(textString);
     newLi.appendChild(newLiContent);

     let list = document.getElementById('list');
     if (textString !== '""...') {
       list.insertBefore(newLi, list.childNodes[text.length])
   }

//WORKING ON THIS PART, CANT FIGURE OUT HOW TO GET HREF INTO <A> WITH JAVASCRIPT
   //Put link into text***************
   linkString = JSON.stringify(link[i]);
   let newA = document.createElement('a');
   let newAContent = document.createTextNode(linkString);
   newA.appendChild(newAContent);
   list.insertBefore(newA, list.childNodes[text.length])
  }


 });
}

      function clearResults(){
        let list = document.getElementById('list');
        while (list.firstChild) {
          list.removeChild(list.firstChild);
        }
      }

});

