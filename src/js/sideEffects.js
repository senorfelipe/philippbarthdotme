function highlightCurrrentNavLink() {
  const currentUrl = window.location.href;
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    const navLink = item.getElementsByTagName("a")[0];
    if (currentUrl === navLink.href) {
      item
        .getElementsByClassName("hover-item")[0]
        .classList.add("hover-item-active");
    } else {
      item.classList.remove("hover-item-active");
    }
  });
}

function openMenu() {
  const menu = document.getElementById("mobileMenu");

  console.log(menu);
  if (!menu.classList.contains("open")) {
    menu.classList.add("open");
    return;
  }
}

function closeMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  }
}

highlightCurrrentNavLink();

let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  let currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // Scrolling down → Hide navbar
    document.getElementById("navbar").style.top = "-60px";
  } else {
    // Scrolling up → Show navbar
    document.getElementById("navbar").style.top = "0px";
  }

  lastScrollY = currentScrollY;
});
