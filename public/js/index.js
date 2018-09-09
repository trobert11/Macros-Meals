$(document).ready(function() {

  // Modal helper function
  function showModal(modalTitle, modalBody) {
    $("#modal-title").html(modalTitle);
    $("#modal-body").html(modalBody);
    $("#error-modal").modal("toggle");
  };

  // On click submit
  $("#submit-button").on("click", function(event) {
    event.preventDefault();

    var username = $("#username").val().trim();
    var password = $("#password").val().trim();
    var rememberMe = $("#remember-me").is(":checked");

    // LOGIN FUNCTION GOES HERE...
    // Temporary code below
    $.ajax({
      url: "/api/login",
      method: "POST",
      data: {username: username, password: password, rememberMe: rememberMe}
    }).then(function(data) {
      console.log(data);
      location.replace(`/profile/${data.username}`);
    });

  });

});