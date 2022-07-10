const count = document.querySelector("#count");
const reset = document.querySelector("#reset");

count.addEventListener("click", () => {
  let para = document.querySelector("#para").value;
  if (para == 0) {
    alert('please enter a paragraph');
  } else {
    let paraSize = para.length;
    let output = document.querySelector("#output");
  
    if (paraSize < 10) {
      output.value = "0" + paraSize;
    } else {
      output.value = paraSize;
    }
  }
});

reset.addEventListener("click", () => {
  let emptyStr = "";
  let para = document.querySelector("#para");
  let output = document.querySelector("#output");

  para.value = emptyStr;
  output.value = "00";
});
