function testClickEventOld() {
  alert("click event with button onclick working in Forge");
  console.log("click event with button onclick working in Forge");
}
document.getElementById("btn-test-3").addEventListener("click", function () {
  console.log("test 3");
  alert("Test 3");
});
document.addEventListener("DOMContentLoaded", () => {
  testClickEvent();
  console.log("DOM fully loaded and parsed");
  document.getElementById("btn-test-3").addEventListener("click", function () {
    console.log("event listener test 3 added after dom loaded");
    alert("Test 3");
  });
});
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});