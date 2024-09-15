function fetchComponent(component, container)
{
    // console.log(container)
  fetch(component)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(container).innerHTML = data; 
    })
    .catch((error) => console.error("Error fetching navbar:", error));
}

fetchComponent("/bolg pages/components/navbar.html","navbar-container"); //fetch navbar


fetchComponent("/bolg pages/components/footer.html", "footer-container"); //fetch footer
