$(document).ready(function () {
  let getDataBtn = $("#getDataBtn");
  getDataBtn.click(function () {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users", // Corrected to lowercase 'url'
      success: function (result) {
        for (let user of result) {
          console.log(user.name);
        }
        console.log(result);
      },
      error: function (error) {
        console.log(error);
      },
    });
  });
});
