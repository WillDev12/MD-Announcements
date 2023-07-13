$(function() {
    $('#announcementbox').on("keyup", function() {
        refresh();
    });
})

function refresh() {
    $(function(){
        let textv = $('#announcementbox').val(),
            color = $('#colorbox').val(),
            bg = $('#bgbox').val(),
            type = $('#typebox').val();
            var output = `http://localhost:8080/api?type=${type}&theme=${color}&text=${textv}`;
            if (bg == "true") {
                output += `&background`;
            }
            $("#outputimg").attr("src", output);
    });
}