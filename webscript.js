$(document).ready(function () {
  refresh();
});

$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
});

$(function () {
  $("#announcementbox").on("keyup", function () {
    refresh();
  });
  $("#generator").on("click", function () {
    $("#dataurl").val(
      `<img src="${$("#outputimg").attr("src")}" style="width: 100%;"></img>`
    );
  });
  $("#copybtn").on("click", function () {
    navigator.clipboard.writeText($("#dataurl").val());
    document.getElementById("dataurl").select();
    $("#textappend").append(
      `<p style="color: #41D274;" id="text">Copied to clipboard</p>`
    );
  });
  $("#close").on("click", function () {
    $("#text").remove();
  });
});

$(function () {
  $(
    "#color1, #color2, #color3, #color4, #color5, #color6, #color7, #color8"
  ).on("click", function () {
    $("#colorbox").val($(this).text().toLowerCase());
    refresh();
  });
  $("#type1, #type2").on("click", function () {
    if ($(this).text() == "Vertical") {
      $("#outputimg").height("16rem").width("16rem");
    } else {
      $("#outputimg").width("100%");
    }
    $("#typebox").val($(this).text().toLowerCase());
    refresh();
  });
  $("#bg1, #bg2").on("click", function () {
    $("#bgbox").val($(this).text().toLowerCase());
    refresh();
  });
});

function refresh() {
  $(function () {
    let textv = $("#announcementbox").val(),
      color = $("#colorbox").val(),
      bg = $("#bgbox").val(),
      type = $("#typebox").val();

    textv = textv.replaceAll(" ", "%20");
    var output = `http://md-announcements.vercel.app/api?type=${type}&theme=${color}&text=${textv}&background=${bg}`;
    $("#outputimg").attr("src", output);
  });
}
