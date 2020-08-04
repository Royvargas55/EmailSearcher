//Data from page 1
var btn = document.getElementById('btn');
btn.addEventListener('click', function () {
  var input = document.getElementById('search').value.toLowerCase().trim();
  input.value = "";
  input.placeholder="EMAIL";
  var queryString = "?email=" + input;
  window.location.href = "result.html" + queryString;
});