const jokescontainer = $("#jokescontainer");
const jokebutton = $("#jokebutton");

jokebutton.click(function () {
  $.ajax({
    url: "https://api.chucknorris.io/jokes/random",
    method: "GET",
    dataType: "json",
    success: function (response) {
      console.log(response);
      const jokeHtml = `
        <p>${response.value}</p>
        <hr>
        <img src="${response.icon_url}" alt="Chuck Norris">
      `;
      jokescontainer.html(jokeHtml);
    },
    error: function (error) {
      console.error("Error fetching joke:", error);
    },
  });
});
