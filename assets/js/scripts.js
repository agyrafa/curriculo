/* request */
var myRequest = new XMLHttpRequest();

myRequest.open('GET', 'http://demo5900510.mockable.io/agyrafa', true);

myRequest.onload = function () {
  if (myRequest.readyState === myRequest.DONE) {
      if (myRequest.status === 200) {
          var response = JSON.parse(myRequest.responseText);
          response['exp'].forEach(element => {
            var expItem = '<li class="section__exp--item">';
            expItem += '<span class="section__info">'+element['company']+'</span>';
            expItem += '<span class="section__exp--function p-l-20">'+element['function']+'</span>';
            expItem += '<span class="section__exp--info p-l-20">'+element['info']+'</span>';
            expItem += '</li>'
            document.getElementById("infoExp").innerHTML += expItem;
          });

          response['skills'].forEach(element => {
            var skillsItem = '<li class="section__skills--item">'+element+'</li>';
            document.getElementById("infoSkills").innerHTML += skillsItem;
          });
      }
  }
};

myRequest.send();

/* modo escuro */
var btn = document.getElementById('modeBtn');

btn.onclick = function(e){
  var body = document.getElementById("body");
  if(body.className == 'dark'){
    body.className = '';
    btn.className = 'mode';
  } else {
    body.className = 'dark';
    btn.className = 'mode dark';
  }
}