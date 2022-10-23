document.querySelector("#range-inp").addEventListener("change", function (e) {
  document.querySelector("#range-percent").innerHTML = e.target.value + "%";
});

function uploadFile(target) {
  document.getElementById("file-name").innerHTML = target.files[0].name;
}

const linkVal = document.querySelectorAll(".dropdown-content-value");
var link = new Array(linkVal.length);
for (var i = linkVal.length; i--; ) {
  link[i] = linkVal[i].addEventListener("click", function (e) {
    document.querySelector("#input-select-selected-value").innerHTML =
      e.target.innerHTML;
    document.querySelector(".input-select").blur();
  });
}
