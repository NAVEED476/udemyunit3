const navMobile = () => {
  return `
<div class="sale-nav">
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
    <div class="ham-menu">
        <img width="20px" src="assets/menu.png" alt="">
    </div>
    <div class="logo">
        <a href="#"><img width="80px" id="logo-img" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt=""
                srcset=""></a>
    </div>
    <div class="search-cart">
        <div class="search-icon">
            <a href="#"> <img width="20px" src="assets/search.png" alt=""></a>
        </div>
        <div class="cart mods">
            <a href="#"> <img width="25px" src="assets/shopping-cart.png" alt=""> </a>
        </div>
    </div>
</div>
</div>
`;
};

export default navMobile;
