function showTime() {
    a_p = "";
    today = new Date();
    curr_hour = today.getHours();
    curr_minute = today.getMinutes();
    curr_second = today.getSeconds();

    if (curr_hour < 12) {
        a_p = "AM";
    } else {
        a_p = "PM";
    }
    if (curr_hour == 0) {
        curr_hour = 12;
    }
    if (curr_hour > 12) {
        curr_hour = curr_hour - 12;
    }

    curr_hour = checkTime(curr_hour);
    curr_minute = checkTime(curr_minute);
    curr_second = checkTime(curr_second);
    let c = document.getElementById('clock')
    c.innerHTML = curr_hour + ":" + curr_minute + ":" + curr_second + " " + a_p;
}


function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

setInterval(showTime, 1)

function tulis() {
    let text;

    today = new Date();
    hour = today.getHours();
    if (hour >= 6 && hour <= 11) {
        text = `Morning, Teman-temankuh`
    } else if (hour >= 12 && hour <= 17) {
        text = `Afternoon, Teman-temankuh`
    } else {
        text = `Evening, Teman-temankuh`
        $(".nama").css('color', 'blue')
    }

    if (hour >= 6 && hour < 18) {
        $("#myAudio").attr("src", `pagi.m4a`)
        $('body').css('background', '#f1ede3')
        $("#fullpage").removeClass("night")
    } else {
        if (hour >= 18 && hour <= 21) {
            $("#myAudio").attr("src", `oneonly.mp3`)
        } else {
            $("#myAudio").attr("src", `lagu.mp3`)
        }
        $('body').css('background', '#080d17')
        $("#fullpage").addClass("night")
    }

    new Typed('#typed', {
        strings: [text],
        typeSpeed: 100,
        delaySpeed: 100,
        loop: false
    });

}

tulis()

$(function () {
    $('[data-toggle="popover"]').popover()
})

var x = document.getElementById("myAudio");

$("#switch").on("click", function () {
    if ($("#switch").hasClass("play")) {
        $("#switch").removeClass("play");
        x.pause()
    } else {
        $("#switch").addClass("play");
        x.play()
    }
})

