var fbClicked = false;
var twClicked = false;
var vidClicked = false;

var clicks = 0;

var container = document.getElementById('container');
var successMsg = document.createElement('h1');
successMsg.innerHTML = "Download URL goes here!";

var fbBtn = document.querySelector('.facebook');
var twBtn = document.querySelector('.twitter');
var vidBtn = document.querySelector('.play');

var progressBar = document.querySelector('.percent');
var progressNum = document.querySelector('.number');

console.log(fbBtn);
fbBtn.addEventListener('click', function(event) {
	console.log("clicked facebook!");
    var w = 580, h = 300,
            left = (screen.width/2)-(w/2),
            top = (screen.height/2)-(h/2);

        if ((screen.width < 480) || (screen.height < 480)) {
            window.open ('http://bit.ly/kssfb', '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
        } else {
            window.open ('http://bit.ly/kssfb', '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);   
        }
	if (!fbClicked) {
		fbClicked = true;
		updateProgress();
	}
});

twBtn.addEventListener('click', function(event) {
	var loc = encodeURIComponent('http://bit.ly/ksstweet'),
	        // title = "Who said Soap doesn't Grow on Trees? — Soapberry",
	        w = 580, h = 300,
	        left = (screen.width/2)-(w/2),
	        top = (screen.height/2)-(h/2);

	    window.open('http://bit.ly/ksstweet', '', 'height=' + h + ', width=' + w + ', top='+top +', left='+ left +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
	console.log("clicked twitter!");
	if (!twClicked) {
		twClicked = true;
		updateProgress();
	}
});

vidBtn.addEventListener('click', function(event) {
    
    var win = window.open("http://bit.ly/kssinsta", '_blank');
    win.focus();
	console.log("clicked vid!");
	if (!vidClicked) {
		vidClicked = true;
		updateProgress();
	}
});

updateProgress = function() {
	clicks++;
	var percent = Math.min(Math.round(clicks / 3 * 100), 100);
	progressBar.style.width =percent + '%';
	progressNum.innerHTML = percent + '%';

	if (percent === 100) {
		console.log("yay!");
		container.appendChild(successMsg);
	}
};


// $(function() {
//     var clicks = 0;

//     $('button').on('click', function() {
//         clicks++;
//         var percent = Math.min(Math.round(clicks / 3 * 100), 100);
//         $('.percent').width(percent + '%');
//         $('.number').text(percent + '%');
//     });
    
    
//     $('.facebook').on('click', function() {
//         var w = 580, h = 300,
//                 left = (screen.width/2)-(w/2),
//                 top = (screen.height/2)-(h/2);
            
            
//             if ((screen.width < 480) || (screen.height < 480)) {
//                 window.open ('http://www.facebook.com/share.php?u=http://bit.ly/sharesoapberri2', '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
//             } else {
//                 window.open ('http://www.facebook.com/share.php?u=http://bit.ly/sharesoapberri2', '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);   
//             }
//     });
    
//     $('.twitter').on('click', function() {
//         var loc = encodeURIComponent('bit.ly/soapberritweet2'),
//                 title = "Who said Soap doesn't Grow on Trees? — ",
//                 w = 580, h = 300,
//                 left = (screen.width/2)-(w/2),
//                 top = (screen.height/2)-(h/2);
                
//             window.open('http://twitter.com/share?text=' + title + '&url=' + loc, '', 'height=' + h + ', width=' + w + ', top='+top +', left='+ left +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
//     });
    
//     $('.play').on('click', function() {
//         window.location.href = "http://kck.st/TH0NAN";
//     });
    
// });
