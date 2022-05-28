const delay = (n) => new Promise( r => setTimeout(r, n*1000));
const div = document.getElementById("username");
const members = ["BlueSkye", "Xan", "Nodex", "Qux", "You", "Anyone"]
let i = 0

async function setmember() {
  div.classList.toggle('fade');
  await delay(1)
  div.innerHTML = members[i];
  div.classList.toggle('fade');
  await delay(1)
  if (i < members.length-1) {
    i++
  }
  else {
    i = 0
  }
  return true
}

var getmembers = window.setInterval(setmember, 3000);
