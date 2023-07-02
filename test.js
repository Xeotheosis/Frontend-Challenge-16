const checkbox = document.querySelector("input");
checkbox.addEventListener("change", checkboxChange);

function checkboxChange(event) {
    const heading1 = document.querySelector("#first");
    const heading2 = document.querySelector("#second");
    const heading3 = document.querySelector("#third");
  
    if (event.target.checked) {
      fadeOutAndChangeContent(heading1, "&dollar;19.99");
      fadeOutAndChangeContent(heading2, "&dollar;24.99");
      fadeOutAndChangeContent(heading3, "&dollar;39.99");
    } else {
      fadeOutAndChangeContent(heading1, "&dollar;199.99");
      fadeOutAndChangeContent(heading2, "&dollar;249.99");
      fadeOutAndChangeContent(heading3, "&dollar;399.99");
    }
  }
  
  function fadeOutAndChangeContent(heading, newContent) {
    heading.style.opacity = 0;
    setTimeout(function () {
      heading.innerHTML = newContent;
      heading.style.opacity = 1;
    }, 300); // Adjust the transition duration (in milliseconds) as needed
  }
  