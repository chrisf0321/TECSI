var aArry = [];
        
var bArry = [];
        
var cArry = [];
        
var dArry = [];

var eArry = [];

$('#r1, #r2, #r3, #r4, #ing4').attr('src', eArry[0]);

var language = {};

function setInst() {
    $('#r1, #r2, #r3, #r4, #ing4').attr('src', eArry[0]);
}

function setImgs() {
    aArry = ["img/a1.jpg", "img/a2.jpg", "img/a3.jpg", "img/a4.jpg", "img/a5.jpg", "img/a6.jpg", "img/a7.jpg",
            "img/a8.jpg", "img/a9.jpg", "img/a10.jpg", "img/a11.jpg", "img/a12.jpg", "img/a13.jpg", "img/a14.jpg",
            "img/a15.jpg", "img/a16.jpg", "img/a17.jpg", "img/a18.jpg", "img/a19.jpg", "img/a20.jpg", "img/a21.jpg",
            "img/a22.jpg", "img/a23.jpg", "img/a24.jpg", "img/a25.jpg", "img/a26.jpg", "img/a27.jpg", "img/a28.jpg",
            "img/a29.jpg", "img/a30.jpg", "img/a31.jpg", "img/a32.jpg", "img/a33.jpg", "img/a34.jpg", "img/a35.jpg", 
            "img/a36.jpg", "img/a37.jpg", "img/a38.jpg", "img/a39.jpg", "img/a40.jpg", "img/a41.jpg", "img/a42.jpg", 
            "img/a43.jpg", "img/a44.jpg", "img/a45.jpg", "img/a46.jpg", "img/a47.jpg", "img/a48.jpg", "img/a49.jpg"];
        
    bArry = ["img/b1.jpg", "img/b2.jpg", "img/b3.jpg", "img/b4.jpg", "img/b5.jpg", "img/b6.jpg", "img/b7.jpg",
            "img/b8.jpg", "img/b9.jpg", "img/b10.jpg", "img/b11.jpg", "img/b12.jpg", "img/b13.jpg", "img/b14.jpg",
            "img/b15.jpg", "img/b16.jpg", "img/b17.jpg", "img/b18.jpg", "img/b19.jpg", "img/b20.jpg", "img/b21.jpg",
            "img/b22.jpg", "img/b23.jpg", "img/b24.jpg", "img/b25.jpg", "img/b26.jpg", "img/b27.jpg", "img/b28.jpg",
            "img/b29.jpg", "img/b30.jpg", "img/b31.jpg", "img/b32.jpg", "img/b33.jpg", "img/b34.jpg", "img/b35.jpg", 
            "img/b36.jpg", "img/b37.jpg", "img/b38.jpg", "img/b39.jpg", "img/b40.jpg", "img/b41.jpg", "img/b42.jpg", 
            "img/b43.jpg", "img/b44.jpg", "img/b45.jpg", "img/b46.jpg", "img/b47.jpg", "img/b48.jpg", "img/b49.jpg", 
            "img/b50.jpg", "img/b51.jpg", "img/b52.jpg", "img/b53.jpg", "img/b54.jpg", "img/b55.jpg", "img/b56.jpg", 
            "img/b57.jpg", "img/b58.jpg", "img/b59.jpg", "img/b60.jpg", "img/b61.jpg", "img/b62.jpg", "img/b63.jpg", 
            "img/b64.jpg", "img/b65.jpg", "img/b66.jpg", "img/b67.jpg", "img/b68.jpg", "img/b69.jpg", "img/b70.jpg"];
        
    cArry = ["img/c1.jpg", "img/c2.jpg", "img/c3.jpg", "img/c4.jpg", "img/c5.jpg", "img/c6.jpg", "img/c7.jpg",
            "img/c8.jpg", "img/c9.jpg", "img/c10.jpg", "img/c11.jpg", "img/c12.jpg", "img/c13.jpg", "img/c14.jpg",
            "img/c15.jpg", "img/c16.jpg", "img/c17.jpg", "img/c18.jpg", "img/c19.jpg", "img/c20.jpg", "img/c21.jpg",
            "img/c22.jpg", "img/c23.jpg", "img/c24.jpg", "img/c25.jpg", "img/c26.jpg", "img/c27.jpg", "img/c28.jpg",
            "img/c29.jpg", "img/c30.jpg", "img/c31.jpg", "img/c32.jpg", "img/c33.jpg", "img/c34.jpg", "img/c35.jpg", 
            "img/c36.jpg", "img/c37.jpg", "img/c38.jpg", "img/c39.jpg", "img/c40.jpg", "img/c41.jpg", "img/c42.jpg", 
            "img/c43.jpg", "img/c44.jpg", "img/c45.jpg", "img/c46.jpg", "img/c47.jpg", "img/c48.jpg", "img/c49.jpg", 
            "img/c50.jpg", "img/c51.jpg", "img/c52.jpg", "img/c53.jpg", "img/c54.jpg", "img/c55.jpg", "img/c56.jpg", 
            "img/c57.jpg", "img/c58.jpg", "img/c59.jpg", "img/c60.jpg", "img/c61.jpg", "img/c62.jpg"];
        
    dArry = ["img/d1.jpg", "img/d2.jpg", "img/d3.jpg", "img/d4.jpg", "img/d5.jpg", "img/d6.jpg", "img/d7.jpg",
            "img/d8.jpg", "img/d9.jpg", "img/d10.jpg", "img/d11.jpg", "img/d12.jpg", "img/d13.jpg", "img/d14.jpg",
            "img/d15.jpg", "img/d16.jpg", "img/d17.jpg", "img/d18.jpg", "img/d19.jpg", "img/d20.jpg", "img/d21.jpg",
            "img/d22.jpg", "img/d23.jpg", "img/d24.jpg", "img/d25.jpg", "img/d26.jpg", "img/d27.jpg", "img/d28.jpg",
            "img/d29.jpg", "img/d30.jpg", "img/d31.jpg", "img/d32.jpg", "img/d33.jpg", "img/d34.jpg", "img/d35.jpg", 
            "img/d36.jpg", "img/d37.jpg", "img/d38.jpg", "img/d39.jpg", "img/d40.jpg", "img/d41.jpg", "img/d42.jpg", 
            "img/d43.jpg", "img/d44.jpg", "img/d45.jpg", "img/d46.jpg", "img/d47.jpg", "img/d48.jpg", "img/d49.jpg", 
            "img/d50.jpg", "img/d51.jpg", "img/d52.jpg", "img/d53.jpg", "img/d54.jpg", "img/d55.jpg", "img/d56.jpg", 
            "img/d57.jpg"];

    eArry = ["img/e1.jpg", "img/e2.jpg", "img/e3.jpg", "img/e4.jpg"];
}

function setLang() {
    language = {
    "Tec-Tec" : "Tec-Tec",
    "rld" : "Reloads Left: ",
    "gmScr" : "Game Score: ",
    "Play Game!" : "Play Game!",
    "How to Play" : "How to Play",
    "Crisis Support" : "Crisis Support",
    "Disclaimer" : "Disclaimer",
    "Current Score: " : "Current Score: ",
    "High Score: " : "High Score: ",
    "Games Played: " : "Games Played: ",
    "Overall Points: " : "Overall Points: ",
    "Average Points: " : "Average Points: ",
    "gmStats" : "Game Stats",
    "back" : "Back",
    "Resources" : "Resources",
    "res1" : "If you are feeling suicidal, please contact:",
    "res2" : "American Users",
    "res3" : "Suicide Prevention Hotline: ",
    "res4" : "HopeLine Suicide Hotline: ",
    "res5" : "Call ",
    "res6" : "American and Non-American Users",
    "res7" : "Your local psychiatric hospital's walk-in clinic",
    "res8" : "Your local hospital's emergency room",
    "res9" : "Your local urgent care center or clinic",
    "res10" : "International suicide hotlines",
    "res11" : "International suicide crisis center information",
    "res12" : "International suicide crisis lines",
    "inst" : "Instructions",
    "inst1" : "Tec-Tec is a matching game",
    "inst2" : "The goal is to match one image/word with another image/word within a grid like this:",
    "inst4" : "How do you know what to match?",
    "inst5" : "At the start of each game, you're given three pairs of images/words, like this:",
    "inst7" : "How do you match pairs?",
    "inst8" : "One of those pairs will appear on each game screen.  There are ",
    "inst9" : " total game screens.",
    "inst10" : "Tap on the members of the pair as quickly as possible.  The ",
    "inst11" : "faster",
    "inst12" : " and more ",
    "inst13" : "accurate",
    "inst14" : " you are, the more points you get.",
    "inst16" : "Tec-Tec gets more challenging",
    "inst17" : "Image/word options start to black out after you select the first image/word:",
    "inst18" : "Then Tec-Tec gets even more challenging",
    "inst19" : "The grid doubles in size:",
    "finish" : "Finished!",
    "main" : "Main Menu",
    "matches" : "Matches",
    "start" : "Start Game!",
    "pair" : "Pair "
};
}

