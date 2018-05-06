$(document).ready(function(){

  //CLICK EVENT THAT CALLS FUNCTION
  $('#search-button').on('click', function(){
    clearResults();
    displaySearch();
    searchFadeIn();
});

//KEYPRESS EVENT THAT CALLS FUNCTION
$('#search').keypress(function(event){
  if(event.keycode === 13 || event.which === 13){
    clearResults();
    displaySearch();
    searchFadeIn();
  }
});

//FUNCTION THAT GETS AND DISPLAYS DATA, USED TO CALL IN CLICK AND KEYPRESS EVENT ABOVE
 function displaySearch (){
   let url, searchEntry, link, linkString, text, textString, item;

 searchEntry = document.getElementById('search').value;

 url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchEntry + '&format=json&origin=*';
 console.log(url);

 //Display "Show search results for:..."
 document.getElementById('results').innerText = `search reults for: ${searchEntry}`;

 $.getJSON(url, function(json){

   //Text and link JSON data
   link = (json[3]);
   text = (json[2]);

   for (let i = 0; i < text.length; i++) {
//Get text string into proper format
   textString = JSON.stringify(text[i]);
   textString = textString.split('');
   textString.pop();
   textString.shift();
   textString = textString.toString();
   textString = textString.replace(/,/gi, '');
   textString = textString.substr(0, 90) + '...';

//Get link string into proper format
   linkString = JSON.stringify(link[i]);
   linkString = linkString.split('');
   linkString.pop();
   linkString.shift();
   linkString = linkString.toString();
   linkString = linkString.replace(/,/gi, '');

//Add <a> anchor tags to list, Styling done in CSS
   let list = document.getElementById('list');
   let newA = document.createElement('a');
   newA.setAttribute('href', linkString);
   newA.setAttribute('target', '_blank')
   newA.innerText = textString;

   //Makes sure if text string value is only ... that it wont get displayed
   if (textString !== '...') {
     list.appendChild(newA);
   }

}

 });
}

  //Function to clear old search results before displaying new
      function clearResults(){
        let list = document.getElementById('list');
        while (list.firstChild) {
          list.removeChild(list.firstChild);
        }
      }

      function searchFadeIn(){
        $('#list').addClass('animated fadeIn');
        var wait = setTimeout(function(){
            $('#list').removeClass('animated fadeIn');
          }, 2000);
      }
});


