const search = (q, f) => {
  let api = "AIzaSyAIKpVgXIrhmWyThxs3ZIcf4Q9NjLY-0Jg";

  const getData = async () => {
    let val = q + " course";
    localStorage.setItem("cat", JSON.stringify(val));
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${val}&type=video&key=${api}&maxResults=20&part=snippet`
    );
    let data = await res.json();
    let array = data.items;
    console.log(array);
    for (let i = 0; i < array.length; i++) {
      array[i].snippet.time = Math.floor(Math.random() * (90 - 10) + 10);
      array[i].snippet.lec = Math.floor(Math.random() * (900 - 100) + 100);
      let l = ["All Levels", "Beginner", "Intermediate", "Expert"];
      array[i].snippet.level = l[Math.floor(Math.random() * 2)];
      if (f == "true") {
        array[i].snippet.price = "free";
      }
    }

    localStorage.setItem("pData", JSON.stringify(array));
    location.href = "product.html";
  };
  getData();
};
export default search;
