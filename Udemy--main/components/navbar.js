const navbar = () => {
  let cart = JSON.parse(localStorage.getItem("courseCart")) || [];
  return `<div class="sale-nav">
    <div class="sale-contant">
        <div class="sale-info">
            <h2> <span class="bold-info"> Sale ends today |</span> Expand your potential through learning.
                Courses start at just
                ₹525.</h2>
            <h1 class="timer bold-info"></h1>
        </div>
        <div class="remove-sale">
            <img width="17px" src="assets/cross.png" alt="" srcset="">
        </div>
    </div>
</div>
<div class="main-nav">
    <div class="logo">
        <a href="index.html"> <img id="logo-img" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                alt="" srcset=""></a>
    </div>
    <div class="categories">
        <a href="#" id="categories">Categories</a>
        <div class="cat-menu ">
            <div class="first-cat"></div>
            <div class="second-cat"></div>
            <div class="third-cat"></div>
        </div>
    </div>
    <div class="search">
        <div> <img class="icon" src="assets/search.png" alt="">
            <input id="search" type="search" placeholder="search">

        </div>
        <div class="search-res">
            <div class="autocomplete"></div>
        </div>
    </div>
    <div class="udemy-bus">
        <a href="#">Udemy Business</a>
    </div>
    <div class="teach-on">
        <a href="#">Teach on Udemy</a>
    </div>
    <div class="cart">
        <a href="cart.html"> <img class="icon" src="assets/shopping-cart.png" alt=""> </a>
        <span id="cart-count">${cart.length || 0}</span>
    </div>
    <div class="sign-log">
        <a href="login.html"> <button> Log in </button></a>
        <a href="signup.html"> <button> Sign up </button></a>
        <div class="user"></div>
    </div>
    <div class="dark-mode">
        <div class="mods">
            <img src="assets/night.png" alt="" srcset="">
            <img src="assets/light.png" alt="" srcset="">
        </div>
    </div>
</div>`;
};

export default navbar;
