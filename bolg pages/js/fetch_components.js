function fetchNavbar() {
  fetch("/bolg pages/components/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data; 
    })
    .catch((error) => console.error("Error fetching navbar:", error));
}

fetchNavbar();
