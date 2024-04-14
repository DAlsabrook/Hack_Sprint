// window.puzzleCount === 0 when page loads and player is doing inspect puzzle
// window.puzzleCount === 1 when player is doing media player puzzle
// window.puzzleCount === 2 when player is doing crooked logo puzzle

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
    if (window.puzzleCount === 1) { // If player finished inspect puzzle
      console.log('Error: Username not full. Must be "admin_123"')
    }
    player.pauseVideo();
  });

  function taskManager() {
    $('.sidebar h3').text('Task Manager');
    $('.signin').empty();
    $('.signin').html('<div class="clippy_container">\
    <img src="static/images/clippy.jpg" alt="Image Description">\
    <div class="task_container">\
    <div class="bubble">You wont destroy me.</div>\
    <button id="tM">Task Manager</button></div></div>');
  }

  // Load progress from users localStorage
  window.puzzleCount = parseInt(localStorage.getItem('puzzleCount')) || 0;
  if (window.puzzleCount === 0) {
    // Start message to point user in the right direction
    window.updateMessage('The site is being really weird. Give it a good look through please.\
    Inspect the page and see if you can find anything weird in the source code.');
  }


  // Function to increment the puzzle count
  window.incrementPuzzleCount = function () {
    window.puzzleCount++;
    // Save progress to users localStorage
    localStorage.setItem('puzzleCount', window.puzzleCount.toString());
    // Update the message from "boss"
    if (window.puzzleCount === 1) {
      // Finished inspect puzzle
      window.updateMessage('We have no idea what is going on with the media player. Pause that disgusting video and possibly check the console for an error?');
    } else if (window.puzzleCount === 2) {
      // finished media puzzle
      window.updateMessage('I am trying to find the password for you, but im having a hard time. Be sure to check everywhere on the page. It has to be somewhere.');
    } else if (window.puzzleCount === 3) {
      // finished all 3 puzzles
      window.updateMessage('THANK THE LORD! You are in. Now please go remove that AI from our system.');
    }
    $('.title_container').append('<h6 class="notification">1 new</h6>');
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
    var halfUsername = 'admin_'; // The first half of the username 'admin_'
    var halfPassword = 'password_'; // The first half of the password 'password_'
    var correctUsername = 'admin_123'; // The correct username
    var correctPassword = 'password_abc'; // The correct password


    if (username === halfUsername && password === halfPassword) { // finished inspect puzzle
      if (window.puzzleCount === 0) {
        player.playVideo();
        window.incrementPuzzleCount();
      }
      $('.username_container').find('.blank').removeClass('fa-solid fa-check').addClass('fa-solid fa-circle-xmark');
      $('.password_container').find('.blank').removeClass('fa-solid fa-check').addClass('fa-solid fa-circle-xmark');
    } else if (username === correctUsername && password !== correctPassword) { // finished inspect and media puzzles
      $('.username_container').find('.blank').removeClass('fa-solid fa-circle-xmark').addClass('fa-solid fa-check');
      $('.password_container').find('.blank').removeClass('fa-solid fa-check').addClass('fa-solid fa-circle-xmark');
      if (window.puzzleCount === 1) {
        window.incrementPuzzleCount();
      }
    } else if (username === correctUsername && password === correctPassword) { // Finished all puzzles
      $('.username_container').find('.blank').removeClass('fa-solid fa-circle-xmark').addClass('fa-solid fa-check');
      $('.password_container').find('.blank').removeClass('fa-solid fa-circle-xmark').addClass('fa-solid fa-check');
      if (window.puzzleCount === 2) {
        window.incrementPuzzleCount();
      }
      taskManager();
    } else if (username !== correctUsername && password === correctPassword) {
      $('.username_container').find('.blank').removeClass('fa-solid fa-check').addClass('fa-solid fa-circle-xmark');
      $('.password_container').find('.blank').removeClass('fa-solid fa-circle-xmark').addClass('fa-solid fa-check');
    } else {
      $('.username_container').find('.blank').removeClass('fa-solid fa-check').addClass('fa-solid fa-circle-xmark');
      $('.password_container').find('.blank').removeClass('fa-solid fa-check').addClass('fa-solid fa-circle-xmark');
    }
  });

  // Footer logo falling
  $('.footer_logo').hover(function () {
    if (window.puzzleCount === 2) {
      $('.password_').text('Password: password_abc')
      $(this).addClass('fallen');
    }
  });
  $('.footer_logo').on('click', function () {
    if (window.puzzleCount === 2) {
      $(this).addClass('flip');
    }
  });

  // Task Manager button click event
  $(document).on('click', '#tM', function () {
    console.log('clicked');
    $('#overlay, #popup').fadeIn();
  });

  $('#overlay').on('click', function () {
    $('#overlay, #popup').fadeOut();
  });
  $('.task_item').on('click', function () {
    $(this).toggleClass('selected');
  });
});


// possible resources for ai news articles
// https://www.washingtonpost.com/technology/2023/12/17/ai-fake-news-misinformation/
// https://www.wilsoncenter.org/blog-post/ai-poses-risks-both-authoritarian-and-democratic-politics

// how to spot ai content
// https://originality.ai/blog/how-to-detect-ai-generated-articles
