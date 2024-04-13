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

  // Triggers when user clicks to pause video
  $('#player-overlay').on('click', function () {
    console.log('Error: Username not full. Must be "admin_123"')
    player.pauseVideo();
  });


  // Initialize the global puzzleCount variable
  window.puzzleCount = 0;
  if (window.puzzleCount === 0) {
    // Start dev tools with no issues and start message to point user in the right direction
    window.updateMessage('The site is being really weird. Give it a good look through please.\
    Use our in house dev tool to inspect the page and see if you can find anything weird.');
    $('.chat_container').css('background-color', 'red');
  }


  // Function to increment the puzzle count
  window.incrementPuzzleCount = function () {
    window.puzzleCount++;
    // Update the message from "boss" and console when needed
    if (window.puzzleCount === 1) {
      // Finished 1 puzzle
      window.updateMessage('The website is still broken. Please fix it.');
      $('.chat_container').css('background-color', 'red'); // alert to new message
    } else if (window.puzzleCount === 2) {
      // finished 2 puzzles
      window.updateMessage('The website is still broken. Please fix it.');
      $('.chat_container').css('background-color', 'red'); // alert to new message
    } else if (window.puzzleCount === 3) {
      // finished 3 puzzles
      window.updateMessage('The website is still broken. Please fix it.');
      $('.chat_container').css('background-color', 'red'); // alert to new message
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
    // This all just handles sign in check marks to tell user if they got the right answer
    if (username === correctUsername && password !== correctPassword) {
      if (window.puzzleCount === 0) {
        player.playVideo();
      }
      $('.username_container').find('.blank').removeClass('fa-solid fa-circle-xmark').addClass('fa-solid fa-check');
      $('.password_container').find('.blank').removeClass('fa-solid fa-check').addClass('fa-solid fa-circle-xmark');
      window.incrementPuzzleCount();
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
