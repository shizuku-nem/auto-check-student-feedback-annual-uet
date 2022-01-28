var finds = document.querySelectorAll("tr.raterow");
const STAR = 5 // from 1 to 5
const ELEMENT = STAR + 1
finds.forEach((tr) => {
  document.getElementById(
    tr.children[ELEMENT].children[1].getAttribute("id")
  ).checked = true;
});
