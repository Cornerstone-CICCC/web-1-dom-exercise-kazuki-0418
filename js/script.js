// YOUR CODE HERE
document.getElementById("btn1").addEventListener("click", function () {
  document.getElementById("output1").style.color = "red";
});

document.getElementById("btn2").addEventListener("click", function () {
  document.getElementById("output2").innerHTML += "<span>Hello word</span>";
});

document.getElementById("btn3").addEventListener("click", function () {
  document
    .getElementsByClassName("small-text")[0]
    .classList.remove("small-text");
});

document.getElementById("btn4").addEventListener("click", function () {
  document.querySelectorAll("#output4 > p").forEach((p) => {
    p.style.color = "red";
  });
});

document.getElementById("btn5").addEventListener("click", function () {
  // Clicking this button should get the value of the input field on the box on the right and console.log it
  console.log(document.getElementById("message").value);
});
