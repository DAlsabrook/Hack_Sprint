$(document).ready(function () {
  // YOUTUBE video
  // Set up the youtube player, give size and video id
  var player;
  YT.ready(function () {
    player = new YT.Player('player', {
      height: '350',
      width: '630',
      videoId: 'ubFq-wV3Eic',
      origin: window.location.origin,
      playerVars: {
        autoplay: 0 // 0 = false, 1 = true
      }
    });
  });

  $('#player').on('click', function () {
    if (player.getPlayerState() === YT.PlayerState.PLAYING) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  });

  // Initialize the global puzzleCount variable
  window.puzzleCount = 0;
  if (window.puzzleCount === 0) {
    // Start dev tools with no issues
    window.updateMessage('We are having issues with the website. Please try to sign in and find the issues');
    window.updateConsole('No issues');
  }
  // Function to increment the puzzle count
  window.incrementPuzzleCount = function () {
    window.puzzleCount++;
    // Update the message from "boss" and console when needed
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

  // SIGNIN button click event
  $('.signin button').on('click', function () {
    var username = $('#username').val();
    var password = $('#password').val();
    var correctUsername = 'admin_'; // The correct username
    var correctPassword = 'admin'; // The correct password
    console.log("Button clicked")
    // This all just handles sign in check marks to tell user if they got the right answer
    if (username === correctUsername && password !== correctPassword) {
      player.playVideo();
      $('.username_container').find('.blank').removeClass('fa-solid fa-circle-xmark').addClass('fa-solid fa-check');
      $('.password_container').find('.blank').removeClass('fa-solid fa-check').addClass('fa-solid fa-circle-xmark');
    } else if (username === correctUsername && password === correctPassword) {
      $('.username_container').find('.blank').removeClass('fa-solid fa-circle-xmark').addClass('fa-solid fa-check');
      $('.password_container').find('.blank').removeClass('fa-solid fa-circle-xmark').addClass('fa-solid fa-check');
    } else if (username !== correctUsername && password === correctPassword) {
      $('.username_container').find('.blank').removeClass('fa-solid fa-check').addClass('fa-solid fa-circle-xmark');
      $('.password_container').find('.blank').removeClass('fa-solid fa-circle-xmark').addClass('fa-solid fa-check');
    } else if (username !== correctUsername && password !== correctPassword) {
      $('.username_container').find('.blank').removeClass('fa-solid fa-check').addClass('fa-solid fa-circle-xmark');
      $('.password_container').find('.blank').removeClass('fa-solid fa-check').addClass('fa-solid fa-circle-xmark');
    }
  });
});


// possible resources for ai news articles
// https://www.washingtonpost.com/technology/2023/12/17/ai-fake-news-misinformation/
// https://www.wilsoncenter.org/blog-post/ai-poses-risks-both-authoritarian-and-democratic-politics

// how to spot ai content
// https://originality.ai/blog/how-to-detect-ai-generated-articles
