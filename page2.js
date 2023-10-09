document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");
  testListeners();
  testListeners2();
  const btnTestListeners = document.querySelector("#btn-test-listeners");
  const btnTestListeners2 = document.querySelector("#btn-test-listeners2");
  btnTestListeners.addEventListener("click", testListeners);
  btnTestListeners2.addEventListener("click", testListeners2);


});
function testListeners() {
  console.log("Testing listener");
  alert("Listener tested");
}

function testListeners2() {
  console.log("Testing listener 2");
  alert("Listener 2 tested");
}
