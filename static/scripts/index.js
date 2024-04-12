$(document).ready(function () {
  // Add click event listener to the hamburger button
  $(".header_hamburger").on('click', function () {
    // Toggle the sidebar-open and sidebar-closed classes
    $(".sidebar").toggleClass('sidebar-closed');
  });

  // SIGNING button click event
  $('.signin button').on('click', function () {
    var username = $('#username').val();
    var password = $('#password').val();
    var correctUsername = 'admin';
    var correctPassword = 'admin';
    console.log("Button clicked")
    if (username === correctUsername && password === correctPassword) {
      alert('Correct!');
    } else {
      alert('Incorrect. Please try again.');
    }
  });

  // YOUTUBE video
  $('#player').on('click', function () {
    if (player.getPlayerState() === YT.PlayerState.PLAYING) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  });

  // Set up the youtube player, give size and video id
  var player;
  YT.ready(function () {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'tgbNymZ7vqY',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  });
});

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  secondsToPlay = 20;
  if (event.data == YT.PlayerState.PLAYING) {
    setTimeout(stopVideo, (secondsToPlay * 1000));
  }
}

function stopVideo() {
  player.stopVideo();
}
