function highlightCurrrentNavLink() {
  const currentUrl = window.location.href;
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    const navLink = item.getElementsByTagName("a")[0];
    if (currentUrl.includes(navLink.href)) {
      item
        .getElementsByClassName("hover-item")[0]
        .classList.add("hover-item-active");
    } else {
      item.classList.remove("hover-item-active");
    }
  });
}

highlightCurrrentNavLink();
