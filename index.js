function display() {
    console.log("display");
    //入力情報の取得
    var input = document.getElementById("packet_form").value;

    //各グリッドの要素とその内容を表示させる
    var BElement = document.getElementById("B");
    BElement.innerHTML = input.substr(0, 1);
    var CElement = document.getElementById("C");
    CElement.innerHTML = input.substr(1, 1);
    var DElement = document.getElementById("D");
    DElement.innerHTML = input.substr(2, 2);
    var EElement = document.getElementById("E");
    EElement.innerHTML = input.substr(4, 4);
    var FElement = document.getElementById("F");
    FElement.innerHTML = input.substr(8, 4);
    var GElement = document.getElementById("G");
    GElement.innerHTML = input.substr(12, 4);
    var HElement = document.getElementById("H");
    HElement.innerHTML = input.substr(16, 2);
    var IElement = document.getElementById("I");
    IElement.innerHTML = input.substr(18, 2);
    var JElement = document.getElementById("J");
    JElement.innerHTML = input.substr(20, 4);
    var KElement = document.getElementById("K");
    //送信元10進数化
    var source = parseInt(input.substr(24, 2), 16) + "." + parseInt(input.substr(26, 2), 16) + "." + parseInt(input.substr(28, 2), 16) + "." + parseInt(input.substr(30, 2), 16);
    KElement.innerHTML = source;
    var LElement = document.getElementById("L");
    //送信先10進数化
    var destination = parseInt(input.substr(32, 2), 16) + "." + parseInt(input.substr(34, 2), 16) + "." + parseInt(input.substr(36, 2), 16) + "." + parseInt(input.substr(38, 2), 16);
    LElement.innerHTML = destination;
    var MElement = document.getElementById("M");
    MElement.innerHTML = input.substr(0, 0);
    var NElement = document.getElementById("N");
    NElement.innerHTML = input.substr(40, 58);
    var OElement = document.getElementById("O");
    OElement.innerHTML = input.substr(98, 58);
    var PElement = document.getElementById("P");
    PElement.innerHTML = input.substr(156, 58);
}


window.addEventListener("load", function () {
    console.log("load");
    var displayButtonElement = document.getElementById("display_button");
    displayButtonElement.addEventListener("click", display, false);
}, false);