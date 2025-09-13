let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newgame")
let msgg = document.querySelector("#msg")
let jeet = document.querySelector("#win")
let turn0 = true; // playerX, player0

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// const resetbtn = () =>
{

}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was Clicked");
    // box.innerText = "Shiva"
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = "true";
    checkWin();
  });
});

const disableboxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

const enableboxes = ()=>
{
    for(let box of boxes)
    {
        box.disabled = true;
        box.innerText = "";
    }
}

const showWinner = () =>
{
    jeet.innerText = 'Congratulations is winner is ${winnner}';
    win.classList.remove("hide");
}

const checkWin = () => {
  for (let pattern of winpattern) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("Winner",pos1);
        showWinner();
      }
    }
  }
};
