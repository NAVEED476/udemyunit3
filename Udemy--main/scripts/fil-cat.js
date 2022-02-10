import search from "./searchProd.js";
let catData = JSON.parse(localStorage.getItem("catData"));
let subCat = document.querySelector(".sub-cat-fil");
let topicCat = document.querySelector(".topic-cat-fil");
catData.map((sub) => {
  let p = document.createElement("p");
  p.innerHTML = `<input type="checkbox"> ${sub.cat1}`;
  subCat.append(p);
  p.addEventListener("click", () => {
    search(sub.cat1);
  });
  if (sub.sub1) {
    sub.sub1.map((cat) => {
      let p = document.createElement("p");
      p.innerHTML = `<input type="checkbox"> ${cat}`;
      if (p.innerHTML !== "") {
        topicCat.append(p);
      }
      p.addEventListener("click", () => {
        search(cat);
      });
    });
  }
});
let fils = document.getElementsByClassName("fil-p");

for (let i = 0; i < fils.length; i++) {
  fils[i].addEventListener("click", () => {
    let [v, c] = fils[i].childNodes[1].value.split(",");
    if (c == "level") {
      let cat = JSON.parse(localStorage.getItem("cat")) + " for " + v;
      search(cat);
    } else if (v == "free") {
      let cat = JSON.parse(localStorage.getItem("cat")) + " for " + v;
      search(cat, "true");
    }
  });
}
