
function getData() {

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=qzFa3LBDXVowiyUS0FVqpxffjOJODCpa&limit=10");
xhr.done(function(response) {
  console.log("success got data", response);

  var gifs = response.data

  for (i in gifs){
    $('.container').append("<img src='"+gifs[i].images.original.url"'>")
  }
});
}
