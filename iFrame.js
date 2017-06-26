    //1. The <iframe> (and video player) will replace this <div> tag. -->
    //<div id="player"></div>

    
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '320',
          width: '510',
          videoId: 'M7lc1UVf-VE',
          playerVars: { 
                 'autoplay': 0,
                 'controls': 0, 
                 'rel' : 0
                },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      /* 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }*/
      function onPlayerReady(event) {
        
        // bind events
        var playButton = document.getElementById("play-button");
        playButton.addEventListener("click", function() {
          player.playVideo();
        });
        
        var pauseButton = document.getElementById("pause-button");
        pauseButton.addEventListener("click", function() {
          player.pauseVideo();
        });
        
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }

    