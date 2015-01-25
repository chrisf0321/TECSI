$(document).on('pagebeforeshow', '#matches', function() {
    $('img').css({'opacity': '0'});
    if ($(this).height() > $(this).width()) {
        $('.ui-block-a, .ui-block-b').addClass('full_width');
        
        if ($(window).width() == 320 && $(window).height() == 480) {
            $('.ui-grid-a').css({'padding-left': '17px', 'padding-right': '17px', 'padding-top': '0px'});
        }
        else if ($(window).width() == 768 && $(window).height() == 1024) {
            $('.ui-grid-a').css({'padding-left': '60px', 'padding-right': '60px', 'padding-top': '0px'});
        }
    }
    matchGen();  
    imgDelay();
});


$(document).on('pagebeforeshow', '#game', function () {
    $('.ui-block-a, .ui-block-b').removeClass('inst_mod');
    $('#blk5, #blk6, #blk7, #blk8').hide();
    $('img').css({'opacity': '0'});
    if ($(this).height() > $(this).width()) {
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').addClass('full_width');
        
        if ($(window).width() == 320 && $(window).height() == 480) {
            $('.ui-grid-c').css({'padding-left': '17px', 'padding-right': '17px', 'padding-top': '0px'});
        }
        else if ($(window).width() == 768 && $(window).height() == 1024) {
            $('.ui-grid-c').css({'padding-left': '60px', 'padding-right': '60px', 'padding-top': '0px'});
        }
    }
    
    imgSel();
    imgDelay();
});

$(window).on('orientationchange', function (e) {
    if (e.orientation == 'landscape') {
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').removeClass('full_width');
        $('.ui-grid-c').css({'padding-left': '1px', 'padding-right': '1px', 'padding-top': '0px'});
    }
    if (e.orientation == 'portrait') {
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
    $('.ui-block-a, .ui-block-b').addClass('inst_mod');
});

$(document).on('pagebeforeshow', '#inst2', function(){
    $('.ui-block-a, .ui-block-b').addClass('inst_mod');
});

var gamCnt = 0;

var timer;

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
    }, 750);
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

function checkMatchArry(ndx) {
    if(ndx == 'undefined') {
        matchGen();
    }
}

function matchGen() {
    var mCnt = 0;
    
    matchArry[0] = aArry[(Math.floor((Math.random() * aArry.length) + 1))];
    matchArry[1] = dArry[(Math.floor((Math.random() * dArry.length) + 1))];
    matchArry[2] = bArry[(Math.floor((Math.random() * bArry.length) + 1))];
    matchArry[3] = eArry[(Math.floor((Math.random() * eArry.length) + 1))];
    matchArry[4] = cArry[(Math.floor((Math.random() * cArry.length) + 1))];
    
    while(mCnt < 1) {
        var cImg = cArry[(Math.floor((Math.random() * cArry.length) + 1))];

        if (cImg !== matchArry[4]) {
            matchArry[5] = cImg;
            mCnt++;
        }
    }
    
    showMatch();
}

function imgSel() {
    
    var i = 0;
    
    while (i < 4) {
        $("#img1").attr('src', bArry[(Math.floor((Math.random() * 40) + 1))]);
        $("#img2").attr('src', bArry[(Math.floor((Math.random() * 40) + 1))]);
        $("#img3").attr('src', bArry[(Math.floor((Math.random() * 40) + 1))]);
        $("#img4").attr('src', bArry[(Math.floor((Math.random() * 40) + 1))]);
        
        i++;
    }
}