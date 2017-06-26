// After the API loads, call a function to enable the search box.
function handleAPILoaded() 
{
  document.querySelector('#search-button').disabled = false;
}

// Search for a specified string.
function search() 
{
  var q = document.querySelector('#query').value;
  
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) 
  {
    var str = JSON.stringify(response.result);
    var obj = JSON.parse(str);

    for (var i = 0; i < obj.items.length; i++) 
    {
      var videoHash = obj.items[i].id.videoId;
      document.getElementById('results').innerHTML += "<span class='vClicker' hash='" + videoHash + "' >" + obj.items[i].snippet.title + "</span>" + "<br/>";
    }
        
    var ancArray = document.querySelectorAll(".vClicker");
    
    for (var i = 0; i < ancArray.length; i++)
    {
      ancArray[i].addEventListener("click", function(event) 
      {
        var loc = 'https://www.youtube.com/embed/' + this.getAttribute('hash') + '?enablejsapi=1&controls=0&autoplay=0&rel=0';
        document.getElementById('player').setAttribute('src',loc);
        document.getElementById('player').setAttribute('style','display: inline-block;');
        document.getElementById('pcontrols').setAttribute('style','display: inline-block;');
      });
    }
  });
}