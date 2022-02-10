const mapProducts = () => {
  let prod = document.querySelector(".right-products");
  let data = JSON.parse(localStorage.getItem("pData"));
  data.map(({ id, snippet }, i) => {
    if (i > 9) {
      let div = document.createElement("div");
      let leftDiv = document.createElement("div");
      leftDiv.classList.add("left-prod");
      let imgDiv = document.createElement("div");
      imgDiv.classList.add("prod-img-div");
      let img = document.createElement("img");
      img.src = snippet.thumbnails.high.url;
      imgDiv.append(img);
      let txtDiv = document.createElement("div");
      txtDiv.classList.add("prod-txt-div");
      let h3 = document.createElement("h3");
      h3.textContent = snippet.title.split("|")[0];
      let p = document.createElement("p");
      p.textContent = snippet.description;
      let span = document.createElement("span");
      span.classList.add("prod-ch-name");
      span.textContent = snippet.channelTitle;
      let span2 = document.createElement("span");
      span2.classList.add("vid-detail");
      span2.innerHTML = `${snippet.time} total hours <div></div> ${snippet.lec} lectures <div></div> ${snippet.level}`;
      txtDiv.append(h3, p, span, span2);
      ////////////////
      let hoverDiv = document.createElement("div");
      hoverDiv.classList.add("hover-div");
      hoverDiv.style.display = "none";
      let h4 = document.createElement("h4");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      h4.innerHTML = `What you’ll learn`;
      p1.innerHTML = `<img class="icon tick" src="assets/tick.png"> Top quelity Course for all levels`;
      p2.innerHTML = `<img class="icon tick" src="assets/tick.png"> Learn how your listening dictates your reality and`;
      p3.innerHTML = `<img class="icon tick" src="assets/tick.png"> Use de-facto standard routing solution for React`;
      let cartDiv = document.createElement("div");
      cartDiv.classList.add("cart-div");
      let cart = document.createElement("button");
      cart.textContent = "Add To Cart";
      cartDiv.append(cart);
      hoverDiv.append(h4, p1, p2, p3, cartDiv);
      //////////
      leftDiv.append(imgDiv, txtDiv, hoverDiv);
      let rightDiv = document.createElement("div");
      let price = document.createElement("p");
      if (snippet.price) {
        price.textContent = "Free";
        price.style.fontSize = "17px";
        price.style.weight = "900 !important";
        rightDiv.append(price);
      } else {
        price.textContent = "₹525";
        let cutPrice = document.createElement("span");
        cutPrice.textContent = "₹3,499";
        rightDiv.append(price, cutPrice);
      }

      rightDiv.classList.add("price-sec");

      div.append(leftDiv, rightDiv);
      prod.append(div);
      div.addEventListener("mouseenter", () => {
        hoverDiv.style.display = "block";
      });

      div.addEventListener("mouseleave", () => {
        hoverDiv.style.display = "none";
      });
      cart.addEventListener("click", () => {
        let arr = JSON.parse(localStorage.getItem("courseCart")) || [];
        if (cart.textContent == "Add To Cart") {
          let obj = { id: id, snippet: snippet };
          arr.push(obj);
          localStorage.setItem("courseCart", JSON.stringify(arr));
          cart.textContent = "Remove From Cart";
        } else if (cart.textContent == "Remove From Cart") {
          arr.pop();
          localStorage.setItem("courseCart", JSON.stringify(arr));
          cart.textContent = "Add To Cart";
        }
      });
    }
  });
};
mapProducts();
