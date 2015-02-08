var hasTouch = ('ontouchstart' in window);
var TOUCH_START = hasTouch ? "touchstart" : "mousedown";
var gamCnt = 0;
var imgCnt = 0;
var aCnt = 0;
var bCnt = 0;
var cCnt = 0;
var hide = false;
var choice1;
var choice2;
var prevSel;
var sound;
var audio = false;
var active = false;
var stTime;
var stopTime;
var points = 0;
var fnLoop = false;
var fnLand = false;
var inst = false;
var inst2 = false;

var aArry = ["img/a1.jpg", "img/a2.jpg", "img/a3.jpg", "img/a4.jpg", "img/a5.jpg", "img/a6.jpg", "img/a7.jpg",
            "img/a8.jpg", "img/a9.jpg", "img/a10.jpg", "img/a11.jpg", "img/a12.jpg", "img/a13.jpg", "img/a14.jpg",
            "img/a15.jpg", "img/a16.jpg", "img/a17.jpg", "img/a18.jpg", "img/a19.jpg", "img/a20.jpg", "img/a21.jpg",
            "img/a22.jpg", "img/a23.jpg", "img/a24.jpg", "img/a25.jpg", "img/a26.jpg", "img/a27.jpg", "img/a28.jpg",
            "img/a29.jpg", "img/a30.jpg", "img/a31.jpg", "img/a32.jpg"];
        
var bArry = ["img/b1.jpg", "img/b2.jpg", "img/b3.jpg", "img/b4.jpg", "img/b5.jpg", "img/b6.jpg", "img/b7.jpg",
            "img/b8.jpg", "img/b9.jpg", "img/b10.jpg", "img/b11.jpg", "img/b12.jpg", "img/b13.jpg", "img/b14.jpg",
            "img/b15.jpg", "img/b16.jpg", "img/b17.jpg", "img/b18.jpg", "img/b19.jpg", "img/b20.jpg", "img/b21.jpg",
            "img/b22.jpg", "img/b23.jpg", "img/b24.jpg", "img/b25.jpg", "img/b26.jpg", "img/b27.jpg", "img/b28.jpg",
            "img/b29.jpg", "img/b30.jpg", "img/b31.jpg", "img/b32.jpg", "img/b33.jpg", "img/b34.jpg", "img/b35.jpg", 
            "img/b36.jpg", "img/b37.jpg", "img/b38.jpg", "img/b39.jpg", "img/b40.jpg"];
        
var cArry = ["img/c1.jpg", "img/c2.jpg", "img/c3.jpg", "img/c4.jpg", "img/c5.jpg", "img/c6.jpg", "img/c7.jpg",
            "img/c8.jpg", "img/c9.jpg", "img/c10.jpg", "img/c11.jpg", "img/c12.jpg", "img/c13.jpg", "img/c14.jpg",
            "img/c15.jpg", "img/c16.jpg", "img/c17.jpg", "img/c18.jpg", "img/c19.jpg", "img/c20.jpg", "img/c21.jpg",
            "img/c22.jpg", "img/c23.jpg", "img/c24.jpg", "img/c25.jpg", "img/c26.jpg", "img/c27.jpg", "img/c28.jpg",
            "img/c29.jpg", "img/c30.jpg", "img/c31.jpg", "img/c32.jpg", "img/c33.jpg", "img/c34.jpg", "img/c35.jpg", 
            "img/c36.jpg", "img/c37.jpg", "img/c38.jpg", "img/c39.jpg", "img/c40.jpg", "img/c41.jpg", "img/c42.jpg", 
            "img/c43.jpg", "img/c44.jpg", "img/c45.jpg", "img/c46.jpg", "img/c47.jpg", "img/c48.jpg"];
        
var dArry = ["img/d1.jpg", "img/d2.jpg", "img/d3.jpg", "img/d4.jpg", "img/d5.jpg", "img/d6.jpg", "img/d7.jpg",
            "img/d8.jpg", "img/d9.jpg", "img/d10.jpg", "img/d11.jpg", "img/d12.jpg", "img/d13.jpg", "img/d14.jpg",
            "img/d15.jpg", "img/d16.jpg", "img/d17.jpg", "img/d18.jpg", "img/d19.jpg", "img/d20.jpg", "img/d21.jpg",
            "img/d22.jpg", "img/d23.jpg", "img/d24.jpg", "img/d25.jpg", "img/d26.jpg", "img/d27.jpg", "img/d28.jpg",
            "img/d29.jpg", "img/d30.jpg", "img/d31.jpg", "img/d32.jpg", "img/d33.jpg", "img/d34.jpg", "img/d35.jpg", 
            "img/d36.jpg", "img/d37.jpg", "img/d38.jpg", "img/d39.jpg", "img/d40.jpg", "img/d41.jpg"];

var eArry = ["img/e1.jpg", "img/e2.jpg", "img/e3.jpg", "img/e4.jpg"];

var matchArry = [];
var trialMtch = [];

$("a").on(TOUCH_START, function() {
    var linkID = $(this).attr('id');
    var parID = '#' + $(this).parent().attr('id');

    
    if (linkID) {
        var num = parseInt(linkID);
        countClick(num, parID);
    }
});

$(document).on('pagebeforeshow', '#home', function() {
    if (window.localStorage.getItem("score") === null) {
        window.localStorage.setItem("score", 0);
    }
    var bestScore = window.localStorage.getItem("score");
    $("#tot").html("<h2>Best Score: " + bestScore + "</h2>");
});

$(document).on('pagebeforeshow', '#matches', function() {
    $('.ui-block-a, .ui-block-b').removeClass('inst_mod');
    $('img').css({'opacity': '0'});
    if ($(window).height() > $(window).width()) {
        $('.ui-block-a, .ui-block-b').addClass('full_width');
        
        if ($(window).width() == 320 && $(window).height() == 480) {
            $('.ui-grid-a').css({'padding-left': '17px', 'padding-right': '17px', 'padding-top': '0px'});
        }
        else if ($(window).width() == 768 && $(window).height() == 1024) {
            $('.ui-grid-a').css({'padding-left': '60px', 'padding-right': '60px', 'padding-top': '0px'});
        }
    }
    
    if (!audio) {
        setAudio();
    }

    matchGen();
    imgDelay();
    
});

$(document).on('pagebeforeshow', '#game', function () {
    $('.ui-block-a, .ui-block-b').removeClass('inst_mod');
    timer = 0;
    points = 0;
    gameCnt = 0;
    imgCnt = 0;
    aCnt = 0;
    bCnt = 0;
    cCnt = 0;
    hide = false;
    $('#blk5, #blk6, #blk7, #blk8').hide();
    $('img').css({'opacity': '0'});
    if ($(window).height() > $(window).width()) {
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').addClass('full_width');
        
        if ($(window).width() == 320 && $(window).height() == 480) {
            $('.ui-grid-c').css({'padding-left': '17px', 'padding-right': '17px', 'padding-top': '0px'});
        }
        else if ($(window).width() == 768 && $(window).height() == 1024) {
            $('.ui-grid-c').css({'padding-left': '60px', 'padding-right': '60px', 'padding-top': '0px'});
        }
    }
    else {
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').removeClass('full_width');
    }
    
    imgSel();
    imgDelay();
});

$(document).on('pagebeforeshow', '#finish', function() {
    fnLoop = true;
    
    if ($(window).height() > $(window).width()) {
        $('#fn1, #fn2').hide();
        $('#fn3, #fn4, #hideBar').show();
        fnLand = false;
        $('.ui-block-a, .ui-block-b').addClass('full_width');
        
        if ($(window).width() == 320 && $(window).height() == 480) {
            $('.ui-grid-c').css({'padding-left': '17px', 'padding-right': '17px', 'padding-top': '0px'});
        }
        else if ($(window).width() == 768 && $(window).height() == 1024) {
            $('.ui-grid-c').css({'padding-left': '60px', 'padding-right': '60px', 'padding-top': '0px'});
        }
    }
    else {
        $('#fn1, #fn2').show();
        $('#fn3, #fn4, #hideBar').hide();
        fnLand = true;
    }
    setFnImg();
    fnSwitcher() ;
});

$(window).on('orientationchange', function (e) {
    if (e.orientation == 'landscape') {
        $('#fn1, #fn2').show();
        $('#fn3, #fn4, #hideBar').hide();
        fnLand = true;
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').removeClass('full_width');
        $('.ui-grid-c').css({'padding-left': '1px', 'padding-right': '1px', 'padding-top': '0px'});
    }
    if (e.orientation == 'portrait') {
        $('#fn1, #fn2').hide();
        $('#fn3, #fn4, #hideBar').show();
        fnLand = false;
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').addClass('full_width');
        
        if ($(window).width() == 320 && $(window).height() == 480) {
             $('.ui-grid-c').css({'padding-left': '17px', 'padding-right': '17px', 'padding-top': '0px'});
        }
        else if ($(window).width() == 768 && $(window).height() == 1024) {
            $('.ui-grid-c').css({'padding-left': '60px', 'padding-right': '60px', 'padding-top': '0px'});
        }
    }
});

$(document).on('pagebeforeshow', '#inst', function(){
    if ($(window).height() > $(window).width()) {
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').addClass('full_width');
        
        if ($(window).width() == 320 && $(window).height() == 480) {
            $('.ui-grid-c').css({'padding-left': '17px', 'padding-right': '17px', 'padding-top': '0px'});
        }
        else if ($(window).width() == 768 && $(window).height() == 1024) {
            $('.ui-grid-c').css({'padding-left': '60px', 'padding-right': '60px', 'padding-top': '0px'});
        }
    }
    else {
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').removeClass('full_width');
    }
});

$(document).on('pagebeforeshow', '#inst2', function(){
    if ($(window).height() > $(window).width()) {
        $('.ui-block-a, .ui-block-b').addClass('full_width');
        
        if ($(window).width() == 320 && $(window).height() == 480) {
            $('.ui-grid-a').css({'padding-left': '17px', 'padding-right': '17px', 'padding-top': '0px'});
        }
        else if ($(window).width() == 768 && $(window).height() == 1024) {
            $('.ui-grid-a').css({'padding-left': '60px', 'padding-right': '60px', 'padding-top': '0px'});
        }
    }
});

$(document).on('pagebeforeshow', '#inst3', function(){
    inst = true;
    $('img').css({'opacity': '100'});
    
    if ($(window).height() > $(window).width()) {
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').addClass('full_width');
        
        if ($(window).width() == 320 && $(window).height() == 480) {
            $('.ui-grid-c').css({'padding-left': '17px', 'padding-right': '17px', 'padding-top': '0px'});
        }
        else if ($(window).width() == 768 && $(window).height() == 1024) {
            $('.ui-grid-c').css({'padding-left': '60px', 'padding-right': '60px', 'padding-top': '0px'});
        }
    }
    else {
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').removeClass('full_width');
    }
    inAni();
});

$(document).on('pagebeforeshow', '#inst4', function(){
    inst2 = true;
    $('img').css({'opacity': '100'});
    
    if ($(window).height() > $(window).width()) {
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').addClass('full_width');
        
        if ($(window).width() == 320 && $(window).height() == 480) {
            $('.ui-grid-c').css({'padding-left': '17px', 'padding-right': '17px', 'padding-top': '0px'});
        }
        else if ($(window).width() == 768 && $(window).height() == 1024) {
            $('.ui-grid-c').css({'padding-left': '60px', 'padding-right': '60px', 'padding-top': '0px'});
        }
    }
    else {
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').removeClass('full_width');
    }
    inAni2();
});

$(document).on('pagebeforeshow', '#inst5', function(){
    if ($(window).height() > $(window).width()) {
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').addClass('full_width');
        
        if ($(window).width() == 320 && $(window).height() == 480) {
            $('.ui-grid-c').css({'padding-left': '17px', 'padding-right': '17px', 'padding-top': '0px'});
        }
        else if ($(window).width() == 768 && $(window).height() == 1024) {
            $('.ui-grid-c').css({'padding-left': '60px', 'padding-right': '60px', 'padding-top': '0px'});
        }
    }
    else {
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').removeClass('full_width');
    }
});

function inAni() {
    $('#inBlk1, #inBlk2').css({'border': '1px solid gray'});
    $('img').css({'opacity': '100'});
        
    setTimeout(function() {
        setTimeout(function() {
            setTimeout(function() {
                if (inst) {
                    inAni();
                }
                }, 4000);
            $('#inBlk2').css({'border': '1px solid blue'});
            }, 1000);
        $('#inBlk1').css({'border': '1px solid blue'});
    }, 3000);
}

function inAni2() {
    $('#inBlk3, #inBlk4').css({'border': '1px solid gray'});
    $('img').css({'opacity': '100'});
        
    setTimeout(function() {
        setTimeout(function() {
            setTimeout(function() {
                if (inst2) {
                    inAni2();
                }
                }, 4000);
            $('#inBlk4').css({'border': '1px solid blue'});
            }, 1000);
        $('#inBlk3').css({'border': '1px solid blue'});       
        $('#ing2, #ing3, #ing4').css({'opacity': '0'});
    }, 3000);
}

function setFnImg() {
    $("#a1").attr('src', bArry[Math.floor(Math.random() * bArry.length)]);
    $("#a2").attr('src', bArry[Math.floor(Math.random() * bArry.length)]);
    $("#a3").attr('src', bArry[Math.floor(Math.random() * bArry.length)]);
    $("#a4").attr('src', bArry[Math.floor(Math.random() * bArry.length)]);
    $("#a5").attr('src', bArry[Math.floor(Math.random() * bArry.length)]);
    $("#a6").attr('src', bArry[Math.floor(Math.random() * bArry.length)]);
    $('img').css({'opacity': '100'});
}

function fnSwitcher() {
    var num = 0;
    var imgNum;
 
    if(fnLoop) {
        num = Math.floor(Math.random() * 4);
        
        setTimeout(function () {
        if (num === 0) {
            $("#a1").animate({ opacity: 0}, 600).promise().done(function() {
                $("#a1").attr('src', bArry[Math.floor(Math.random() * bArry.length)]).animate({
                    opacity: 100}, 600).promise().done(function() { 
                    fnSwitcher();
                });
            });
        }
        else if (num === 1) {
            $("#a2").animate({ opacity: 0}, 600).promise().done(function() {
                $("#a2").attr('src', bArry[Math.floor(Math.random() * bArry.length)]).animate({
                    opacity: 100}, 600).promise().done(function() { 
                    fnSwitcher();
                });
            });
        }
        else if (num === 2) {
            if (fnLand) {
                $("#a5").animate({ opacity: 0}, 600).promise().done(function() {
                    $("#a5").attr('src', bArry[Math.floor(Math.random() * bArry.length)]).animate({
                        opacity: 100}, 600).promise().done(function() { 
                        fnSwitcher();
                    });
                });
            }
            else {
                $("#a3").animate({ opacity: 0}, 600).promise().done(function() {
                    $("#a3").attr('src', bArry[Math.floor(Math.random() * bArry.length)]).animate({
                        opacity: 100}, 600).promise().done(function() { 
                        fnSwitcher();
                    });
                });
            }
        }
        else if (num === 3) {
            if (fnLand) {
                $("#a6").animate({ opacity: 0}, 600).promise().done(function() {
                    $("#a6").attr('src', bArry[Math.floor(Math.random() * bArry.length)]).animate({
                        opacity: 100}, 600).promise().done(function() { 
                        fnSwitcher();
                    });
                });
            }
            else {
                $("#a4").animate({ opacity: 0}, 600).promise().done(function() {
                    $("#a4").attr('src', bArry[Math.floor(Math.random() * bArry.length)]).animate({
                        opacity: 100}, 600).promise().done(function() { 
                        fnSwitcher();
                    });
                });
            }
        }
    }, 1000);
    }
}

function setAudio() {
    if (device.platform === "Android") {
        sound = new Media("/android_asset/www/assets/click2.wav");
    }
    else {
        sound = new Media("assets/click2.wav");
    }
    audio = true;
}

function showMatch() {

    $("#mImg1").attr('src', matchArry[0]);
    $("#mImg2").attr('src', matchArry[1]);
    $("#mImg3").attr('src', matchArry[2]);
    $("#mImg4").attr('src', matchArry[3]);
    $("#mImg5").attr('src', matchArry[4]);
    $("#mImg6").attr('src', matchArry[5]);
    
}

function imgDelay() {
    setTimeout(function() {
        $('img').css({'opacity': '100'});
        sound.stop();
        stTime = new Date().getTime();
        active = true;
    }, 300);
}

Array.prototype.shuffle = function() {
    var i = this.length, j, temp;
    if ( i === 0 ) return;
    while ( --i ) {
        j = Math.floor( Math.random() * ( i + 1 ) );
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
};

function matchGen() {
    var mCnt = 0;
    
    matchArry[0] = aArry[Math.floor(Math.random() * aArry.length)];
    matchArry[1] = dArry[Math.floor(Math.random() * dArry.length)];
    matchArry[2] = bArry[Math.floor(Math.random() * bArry.length)];
    matchArry[3] = eArry[Math.floor(Math.random() * eArry.length)];
    matchArry[4] = cArry[Math.floor(Math.random() * cArry.length)];
    
    while(mCnt < 1) {
        var cImg = cArry[Math.floor(Math.random() * cArry.length)];

        if (cImg !== matchArry[4]) {
            matchArry[5] = cImg;
            mCnt++;
        }
    }
    
    showMatch();
}

function imgSel() {
    var imgArry = [];
    trialMtch = [];
    var success = 0;
    
    $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').css({'border': '1px solid gray'});
    
    if (gamCnt === 15) {
        hide = true;
    }
    else if (gamCnt === 30) {
        hide = false;
        $('#blk5, #blk6, #blk7, #blk8').show();
    }
    else if (gamCnt === 45) {
        hide = true;
    }
    
    if (gamCnt < 60) {
        while (success === 0) {
            var num = Math.floor(Math.random() * 3);
        
            if (num === 0 && aCnt < 20) {
                aList(imgArry);
                success = 1;
            }
            else if (num === 1 && bCnt < 20) {
                bList(imgArry);
                success = 1;
            }
            else if (num === 2 && cCnt < 20) {
                cList(imgArry);
                success = 1;
            }
        }
        imgDelay();
    }
    else {
        var oldScore = window.localStorage.getItem("score");
        
        $("#gamScr").html("<h2>Game Score: " + points + "</h2>");
        $.mobile.changePage("#finish", {transition: "slide"});
        
        if (oldScore < points) {
            window.localStorage.setItem("score", points);
        }
    }
}

function resetGame() {
    gamCnt = 0;
    points = 0;
    imgCnt = 0;
    aCnt = 0;
    bCnt = 0;
    cCnt = 0;
    timer = 0;
    active = false;
    hide = false;
    fnLoop = false;
    sound.stop();
}

function aList(arry) {
    aCnt++;
    var tempArry = [];
    var aNdx;
    var img;
    
    if (gamCnt < 30) {
        aNdx = 2;
    }
    else {
        aNdx = 6;
    }
 
    tempArry = aArry.concat(dArry, cArry);
    
    arry.push(matchArry[0]);
    arry.push(matchArry[1]);
    
    for (i = 0; i < aNdx; i++) {
        var loopCntrl = 0;
        while (loopCntrl === 0) {
            img = tempArry[Math.floor(Math.random() * tempArry.length)];
            if ($.inArray(img, arry) === -1 && $.inArray(img, matchArry) === -1) {
                arry.push(img);
                loopCntrl = 1;
            }
        }       
    }

    arry.shuffle();
    trialMtch[0] = $.inArray(matchArry[0], arry);
    trialMtch[1] = $.inArray(matchArry[1], arry);
    
    if (gamCnt < 30) {
        $("#img1").attr('src', arry[0]);
        $("#img2").attr('src', arry[1]);
        $("#img3").attr('src', arry[2]);
        $("#img4").attr('src', arry[3]);
    }
    else {
        $("#img1").attr('src', arry[0]);
        $("#img2").attr('src', arry[1]);
        $("#img3").attr('src', arry[2]);
        $("#img4").attr('src', arry[3]);
        $("#img5").attr('src', arry[4]);
        $("#img6").attr('src', arry[5]);
        $("#img7").attr('src', arry[6]);
        $("#img8").attr('src', arry[7]);
    }    
}

function bList(arry) {
    bCnt++;
    var tempArry = [];
    var bNdx;
    var img;
    
    if (gamCnt < 30) {
        bNdx = 2;
    }
    else {
        bNdx = 6;
    }

    tempArry = bArry.concat(eArry, cArry);
    
    arry.push(matchArry[2]);
    arry.push(matchArry[3]);
    
    for (i = 0; i < bNdx; i++) {
        var loopCntrl = 0;
        while (loopCntrl === 0) {
            img = tempArry[Math.floor(Math.random() * tempArry.length)];
            if ($.inArray(img, arry) === -1 && $.inArray(img, matchArry) === -1) {
                arry.push(img);
                loopCntrl = 1;
            }
        }       
    }

    arry.shuffle();
    trialMtch[0] = $.inArray(matchArry[2], arry);
    trialMtch[1] = $.inArray(matchArry[3], arry);
    
    if (gamCnt < 30) {
        $("#img1").attr('src', arry[0]);
        $("#img2").attr('src', arry[1]);
        $("#img3").attr('src', arry[2]);
        $("#img4").attr('src', arry[3]);
    }
    else {
        $("#img1").attr('src', arry[0]);
        $("#img2").attr('src', arry[1]);
        $("#img3").attr('src', arry[2]);
        $("#img4").attr('src', arry[3]);
        $("#img5").attr('src', arry[4]);
        $("#img6").attr('src', arry[5]);
        $("#img7").attr('src', arry[6]);
        $("#img8").attr('src', arry[7]);
    }    
}

function cList(arry) {
    cCnt++;
    var tempArry = [];
    var cNdx;
    var img;
    
    if (gamCnt < 30) {
        cNdx = 2;
    }
    else {
        cNdx = 6;
    }

    tempArry = cArry;
    
    arry.push(matchArry[4]);
    arry.push(matchArry[5]);
    
    for (i = 0; i < cNdx; i++) {
        var loopCntrl = 0;
        while (loopCntrl === 0) {
            img = tempArry[Math.floor(Math.random() * tempArry.length)];
            if ($.inArray(img, arry) === -1 && $.inArray(img, matchArry) === -1) {
                arry.push(img);
                loopCntrl = 1;
            }
        }       
    }

    arry.shuffle();
    trialMtch[0] = $.inArray(matchArry[4], arry);
    trialMtch[1] = $.inArray(matchArry[5], arry);
    
    if (gamCnt < 30) {
        $("#img1").attr('src', arry[0]);
        $("#img2").attr('src', arry[1]);
        $("#img3").attr('src', arry[2]);
        $("#img4").attr('src', arry[3]);
    }
    else {
        $("#img1").attr('src', arry[0]);
        $("#img2").attr('src', arry[1]);
        $("#img3").attr('src', arry[2]);
        $("#img4").attr('src', arry[3]);
        $("#img5").attr('src', arry[4]);
        $("#img6").attr('src', arry[5]);
        $("#img7").attr('src', arry[6]);
        $("#img8").attr('src', arry[7]);
    }    
}

function countClick(sel, parID) {
    if (active) {
        imgCnt++;
        $(parID).css({'border': '1px solid blue'});
        if (imgCnt === 1) {
            prevSel = sel;
            choice1 = sel;
        
            if (hide) {
                if (sel !== 0) {
                    $('#img1').css({'opacity': '0'});
                }
                if (sel !== 1) {
                    $('#img2').css({'opacity': '0'});
                }
                if (sel !== 2) {
                    $('#img3').css({'opacity': '0'});
                }
                if (sel !== 3) {
                    $('#img4').css({'opacity': '0'});
                }
                if (sel !== 4) {
                    $('#img5').css({'opacity': '0'});
                }
                if (sel !== 5) {
                    $('#img6').css({'opacity': '0'});
                }
                if (sel !== 6) {
                    $('#img7').css({'opacity': '0'});
                }
                if (sel !== 7) {
                    $('#img8').css({'opacity': '0'});
                }
            }
            return false;
        }
        else if (imgCnt === 2) {
            if (sel !== prevSel) {
                stopTime = new Date().getTime();
                choice2 = sel;
                gamCnt++;
                imgCnt = 0;
                active = false;
                if ($.inArray(prevSel, trialMtch) !== -1 && $.inArray(sel, trialMtch) !== -1) {
                    sound.play();
                    calcScore();
                }
                imgAnimate();
            }
            else {
                imgCnt--;
            }
        }
    }
}

function calcScore() {
    var tmp = 0;
    var timer = stopTime - stTime;
    timer = (timer / 1000);
    timer = Math.round(timer * 10) / 10;
    tmp = 4.0 - timer;
    
    if (tmp > 0) {
        tmp = tmp / 2;
        points += tmp;
        points = Math.round(points * 10) / 10;
    }
    
}

function imgAnimate() {
    var match1 = trialMtch[0];
    var match2 = trialMtch[1];
        
    if (match1 === 0 || match2 === 0) {
        $('#img1').css({'opacity': '100'});
    }
    else {
        $('#img1').css({'opacity': '0'});
    }
    if (match1 === 1 || match2 === 1) {
        $('#img2').css({'opacity': '100'});
    }
    else {
        $('#img2').css({'opacity': '0'});
    }
    if (match1 === 2 || match2 === 2) {
        $('#img3').css({'opacity': '100'});
    }
    else {
        $('#img3').css({'opacity': '0'});
    }
    if (match1 === 3 || match2 === 3) {
        $('#img4').css({'opacity': '100'});
    }
    else {
        $('#img4').css({'opacity': '0'});
    }
    if (match1 === 4 || match2 === 4) {
        $('#img5').css({'opacity': '100'});
    }
    else {
        $('#img5').css({'opacity': '0'});
    }
    if (match1 === 5 || match2 === 5) {
        $('#img6').css({'opacity': '100'});
    }
    else {
        $('#img6').css({'opacity': '0'});
    }
    if (match1 === 6 || match2 === 6) {
        $('#img7').css({'opacity': '100'});
    }
    else {
        $('#img7').css({'opacity': '0'});
    }
    if (match1 === 7 || match2 === 7) {
        $('#img8').css({'opacity': '100'});
    }
    else {
        $('#img8').css({'opacity': '0'});
    }
    
    $('img').animate({
        opacity: 0
    }, 400).promise().done(function() {
        imgSel();
    });
}