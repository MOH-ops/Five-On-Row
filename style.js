//  //
const leftMene = document.querySelector(".five-on-row .left-mene");
const rightMene = document.querySelector(".five-on-row .right-mene");

const leftMeneCloseBtn = document.querySelector(
    ".five-on-row .left-mene .close-btn"
);
const rightMeneCloseBtn = document.querySelector(
    ".five-on-row .right-mene .close-btn"
);

leftMeneCloseBtn.addEventListener("click", () => {
    leftMene.classList.toggle("opened");
});
rightMeneCloseBtn.addEventListener("click", () => {
    rightMene.classList.toggle("opened");
});

// ------------------Rest Buttons------------------ //
const vsPlayerBtn = document.querySelector(
    ".five-on-row .left-mene .vs-player"
);
const vsBootBtn = document.querySelector(".five-on-row .left-mene .vs-boot");

vsPlayerBtn.addEventListener("click", () => {
    bootTeam = "none";
    reset_board(boardWidth, "reset");

    leftMene.classList.remove("opened");
});

vsBootBtn.addEventListener("click", () => {
    bootTeam = "black";
    reset_board(boardWidth, "reset");

    leftMene.classList.remove("opened");
});

// ------------------Colors------------------ //
let colors = {
    background: ["#008b8b", "#718093", "#353b48", "#f8c291"],
    board: [
        ["#a32c00", "#000"],
        ["#00a8ff", "#000"],
        ["#0c2461", "#f8c291"],
        ["#ff7979", "#0c2461"],
    ],
    stone: [
        ["#fff", "#000"],
        ["#0984e3", "#d63031"],
        ["#6c5ce7", "#e84393"],
        ["#44bd32", "#fbc531"],
    ],
};

const backgroundColors = document.querySelectorAll(
    ".five-on-row .right-mene .background .color"
);
const boardColors = document.querySelectorAll(
    ".five-on-row .right-mene .board .color"
);
const stoneColors = document.querySelectorAll(
    ".five-on-row .right-mene .stone .color"
);

backgroundColors.forEach((obj, index) => {
    obj.addEventListener("click", () => {
        backgroundColors.forEach((e) => {
            e.classList.remove("active");
        });

        obj.classList.add("active");

        document.documentElement.style.setProperty(
            "--background-color",
            colors.background[index]
        );
    });
});

boardColors.forEach((obj, index) => {
    obj.addEventListener("click", () => {
        boardColors.forEach((e) => {
            e.classList.remove("active");
        });

        obj.classList.add("active");

        document.documentElement.style.setProperty(
            "--board-color-1",
            colors.board[index][0]
        );
        document.documentElement.style.setProperty(
            "--board-color-2",
            colors.board[index][1]
        );
    });
});

stoneColors.forEach((obj, index) => {
    obj.addEventListener("click", () => {
        stoneColors.forEach((e) => {
            e.classList.remove("active");
        });

        obj.classList.add("active");

        document.documentElement.style.setProperty(
            "--stone-color-1",
            colors.stone[index][0]
        );
        document.documentElement.style.setProperty(
            "--stone-color-2",
            colors.stone[index][1]
        );
    });
});