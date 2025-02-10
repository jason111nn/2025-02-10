let ans = [];
let userans = [];

$(document).ready(function () {
    veri();

    $(".drag-box").on("mouseenter", ".drag-item", function () {
        $(this).draggable({
            revert: "invalid",
            cursor: "move",
        });
    });

    $("#ans").droppable({
        accept: ".drag-item",
        drop: function (event, ui) {
            let number = $(ui.draggable).text();
            $(ui.draggable).remove();
            userans.push(parseInt(number));
            $("#ans").text(userans.join(" "));
        }
    });
});
function veri() {
    ans = [];
    userans = [];
    $(".drag-box").empty();
    $("#ans").text("Verification(數字驗證)");

    for (let i = 0; i < 4; i++) {
        const num = Math.floor(Math.random() * 9) + 1;
        ans.push(num);
        $(".drag-box").append(`<div class="drag-item">${num}</div>`);
    }
    ans.sort((a, b) => a - b);
}


function res() {
    $("input:text").val('');
    $("input:password").val('');
    $("#ans").text("Verification(數字驗證)");
    veri();
}

function Tickets(event) {
    event.preventDefault();

    if (userans.join("") === ans.join("")) {
        const form = $("form")[0];
        const formData = new FormData(form);

        $.ajax({
            url: "post.php",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {
                alert("資料已送出");
                location.href = "home.html";
            },
            error: function () {
                alert("資料送出失敗");
            }
        });
    } else {
        alert("驗證碼排列錯誤");
    }
}