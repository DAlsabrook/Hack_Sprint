$(document).ready(function () {
  // chat logic
  $('.chat_container').on('click', function () {
    // When the container is clicked, toggle the chat_open class
    $(this).toggleClass('chat_open');

    // Check if the container is open
    if ($(this).hasClass('chat_open')) {
      // Append new elements to the container
      $(this).append('<button class="chat">Messages</button>');
    } else {
      // When closing remove buttons and put original content back
      $(this).empty();
      // add original content back
      $(this).html('<div class="title_container"></div>')
      $('.title_container').append('<i class="fa-brands fa-rocketchat"></i>');
      $('.title_container').append('<h3 class="chat_title">Chat</h3>');
    }
  });

  $(document).on('click', '.chat', function () {
    // Open the dialog box
    messageDialog.dialog('open');
    $('.notification').remove();
  });


});
// Set up the message dialog box
// Create the dialog box and store it in a variable
var messageDialog = $('<div title="Messages" class="chat"></div>').dialog({
  autoOpen: false,
  position: { my: "center", at: "center", of: window },
  draggable: false,
  width: 500,
  height: 400,
  buttons: {
    Close: function () {
      $(this).dialog("close");
    }
  }
});
// Function to update the content of the dialog box
window.updateMessage = function (content) {
  messageDialog.html('From: Senior Dev<br><span>' + content + '</span>');
}
