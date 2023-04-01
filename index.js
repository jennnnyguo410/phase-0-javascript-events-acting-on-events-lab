const dodger = document.getElementById("dodger");
//=> 抓住躲闪器

function moveDodgerLeft() {
    const leftNumber = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumber, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}
//=> 构建我们的moveDodgerLeft()函数，添加对躲避者当前位置的检查
//=> 确保 dodger 的左边缘没有到达其容器的左边缘。

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});
//=> 连接到我们的事件监听器：

function moveDodgerRight() {
    const leftNumber = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumber, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});