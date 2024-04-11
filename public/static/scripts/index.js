$(document).ready(function () {
  // Add click event listener to the hamburger button
  $(".header_hamburger").on('click', function () {
    // Toggle the sidebar-open and sidebar-closed classes
    $(".sidebar").toggleClass('sidebar-closed');
  });
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
});
