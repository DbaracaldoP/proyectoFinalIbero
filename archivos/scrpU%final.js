function color1() {
    $(this).css("background", "rgb(84, 218, 162)")
}

function color2() {
    $(this).css("background", "rgb(109, 153, 189)")
}
$(".col2").hover(color1, color2);