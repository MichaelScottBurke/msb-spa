export function render() {
  const pageElement = document.createElement('div');
  pageElement.innerHTML = `
    <h1>Welcome to Page 2</h1><p>This is the content of Page 2.</p>
    <button id='btn-test-listeners' class='btnTestListeners'>Test 1</button>
    <button id='btn-test-listeners2' class='btnTestListeners2'>Test 2</button>
   `;
  return pageElement;
}

export function init() {
  // Initialize page-specific JavaScript logic for Page 1
  const btnTestListeners = document.querySelector("#btn-test-listeners");
  const btnTestListeners2 = document.querySelector("#btn-test-listeners2");
  btnTestListeners.addEventListener("click", testListeners);
  btnTestListeners2.addEventListener("click", testListeners2);

  function testListeners() {
    console.log("Testing listener");
    alert("Listener tested");
  }

  function testListeners2() {
    console.log("Testing listener 2");
    alert("Listener 2 tested");
  }
}


//old
// console.log("DOM loaded");
// testListeners();
// testListeners2();
// const btnTestListeners = document.querySelector("#btn-test-listeners");
// const btnTestListeners2 = document.querySelector("#btn-test-listeners2");
// btnTestListeners.addEventListener("click", testListeners);
// btnTestListeners2.addEventListener("click", testListeners2);

// function testListeners() {
//   console.log("Testing listener");
//   alert("Listener tested");
// }

// function testListeners2() {
//   console.log("Testing listener 2");
//   alert("Listener 2 tested");
// }
