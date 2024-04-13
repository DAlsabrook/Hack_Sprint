$(document).ready(function () {

  // Initialize the global puzzleCount variable
  window.puzzleCount = 0;
  if (window.puzzleCount === 0) {
    // Start dev tools with no issues
    window.updateMessage('We are having issues with the website. Please try to fix it');
    window.updateConsole('No issues');
  }
  // Function to increment the puzzle count
  window.incrementPuzzleCount = function () {
    window.puzzleCount++;
    if (window.puzzleCount === 1) {
      // Finished 1 puzzle
      window.updateMessage('The website is still broken. Please fix it.');
      window.updateConsole('Issue found: Broken website');
    } else if (window.puzzleCount === 2) {
      // finished 2 puzzles
      window.updateMessage('The website is still broken. Please fix it.');
      window.updateConsole('Issue found: Broken website');
    } else if (window.puzzleCount === 3) {
      // finished 3 puzzles
      window.updateMessage('The website is still broken. Please fix it.');
      window.updateConsole('Issue found: Broken website');
    }
  }

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
  // Set up the youtube player, give size and video id
  var player;
  YT.ready(function () {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'tgbNymZ7vqY',
      origin: window.location.origin,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  });

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    secondsToPlay = 5;
    if (event.data == YT.PlayerState.PLAYING) {
      setTimeout(stopVideo, (secondsToPlay * 1000));
    }
  }

  function stopVideo() {
    if (player && typeof player.stopVideo === 'function') {
      player.stopVideo();
    }
  }
  $('#player').on('click', function () {
    if (player.getPlayerState() === YT.PlayerState.PLAYING) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  });
});
