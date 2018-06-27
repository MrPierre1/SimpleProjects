var quoteNumber = Math.floor(Math.random() * 40) + 1;
var getJson = function() {
  return $.getJSON(
    "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=" +
      quoteNumber +
      "&callback="
  );
};

getJson().then(function(a) {
  $(document).ready(function() {
    var index;
    for (var i = 0, len = a.length; i < len; i++) {
      index = i;
    }
    var quoteN = Math.floor(Math.random() * index) + 1;
    $("p").remove();
    $("div p").remove();
    $(".qContainer").append(
      "<p>" +
        a[quoteN].content +
        "</p>" +
        "<div><p>— " +
        a[quoteN].title +
        "</p></div>"
    );

    $("#driver").click(function(event) {
      var quoteN = Math.floor(Math.random() * index) + 1;
      $("p").remove();
      $("div p").remove();
      $(".qContainer").append(
        "<p>" +
          a[quoteN].content +
          "</p>" +
          "<div><p>— " +
          a[quoteN].title +
          "</p></div>"
      );
    });
  });
});
