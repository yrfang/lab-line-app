const btnLogin = document.querySelector('#btnLogin');
btnLogin.addEventListener('click', function() {
  // console.log('login');
  lineAuth();
});

function lineAuth() {
  var URL = 'https://access.line.me/dialog/oauth/weblogin?';
  URL += 'response_type=code';
  URL += '&client_id=1534276186';
  URL += '&redirect_uri=http://localhost:8080/index.html/#/';
  URL += '&state=abcde';
  window.location.href = URL;
}