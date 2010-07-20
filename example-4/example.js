function copyToDiv() {
  var source = document.getElementById('source');
  var content = document.getElementById('content');
  content.innerHTML = source.innerHTML;
}