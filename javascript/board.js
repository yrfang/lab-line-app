const boardForm = document.getElementById('formContainer');
const submitState = document.getElementById("submitState");

boardForm.addEventListener('submit', function(e) {
  e.preventDefault();
  submitState.innerHTML = '';
  sendBroad();
  boardForm.reset();
});

function sendBroad() {
  const communitySelect = document.getElementById('community_select').selectedIndex;
  const communityId = document.getElementsByTagName("option")[communitySelect].value;
  const text = document.getElementById('text').value;

  const payload = {
    community_id: Number(communityId),
    text: text,
  };
  console.log(payload);

  const myHeaders = {
    'Authorization': 'Token bb8b103dd3035b8e2cbc0ff342ea14e669046cf8',
    'Content-Type': 'application/json',  // send json
    'Content-Security-Policy': 'upgrade-insecure-requests',
  };

  const request = new Request(
    'https://backgang.herokuapp.com/bot/line/community_broadcast/',
    {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(payload),
      mode: 'cors',
    }
  );
  console.log(request);

  fetch(request).then(response => {
    submitState.innerHTML = "Submit successfully.";
    setTimeout(function(){ submitState.innerHTML=""; }, 2000);

    //ok 200~299
    if (!response.ok) {
      throw new Error(response.statusText);
    } else console.log(response);
    return response;
  }).catch(function (err) {
    console.log(err);
    submitState.innerHTML = "Submit error.";
    setTimeout(function(){ submitState.innerHTML=""; }, 2000);
  });
}
