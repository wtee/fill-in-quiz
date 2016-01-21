/*
 countdown.js v2.5.3 http://countdownjs.org
 Copyright (c)2006-2014 Stephen M. McKamey.
 Licensed under The MIT License.
*/
var module,countdown=function(y){function C(a,b){var c=a.getTime();a.setMonth(a.getMonth()+b);return Math.round((a.getTime()-c)/864E5)}function z(a){var b=a.getTime(),c=new Date(b);c.setMonth(a.getMonth()+1);return Math.round((c.getTime()-b)/864E5)}function A(a,b){b=b instanceof Date||null!==b&&isFinite(b)?new Date(+b):new Date;if(!a)return b;var c=+a.value||0;if(c)return b.setTime(b.getTime()+c),b;(c=+a.milliseconds||0)&&b.setMilliseconds(b.getMilliseconds()+c);(c=+a.seconds||0)&&b.setSeconds(b.getSeconds()+
c);(c=+a.minutes||0)&&b.setMinutes(b.getMinutes()+c);(c=+a.hours||0)&&b.setHours(b.getHours()+c);(c=+a.weeks||0)&&(c*=7);(c+=+a.days||0)&&b.setDate(b.getDate()+c);(c=+a.months||0)&&b.setMonth(b.getMonth()+c);(c=+a.millennia||0)&&(c*=10);(c+=+a.centuries||0)&&(c*=10);(c+=+a.decades||0)&&(c*=10);(c+=+a.years||0)&&b.setFullYear(b.getFullYear()+c);return b}function l(a,b){return v(a)+(1===a?w[b]:x[b])}function q(){}function n(a,b,c,d,f,m){0<=a[c]&&(b+=a[c],delete a[c]);b/=f;if(1>=b+1)return 0;if(0<=a[d]){a[d]=
+(a[d]+b).toFixed(m);switch(d){case "seconds":if(60!==a.seconds||isNaN(a.minutes))break;a.minutes++;a.seconds=0;case "minutes":if(60!==a.minutes||isNaN(a.hours))break;a.hours++;a.minutes=0;case "hours":if(24!==a.hours||isNaN(a.days))break;a.days++;a.hours=0;case "days":if(7!==a.days||isNaN(a.weeks))break;a.weeks++;a.days=0;case "weeks":if(a.weeks!==z(a.refMonth)/7||isNaN(a.months))break;a.months++;a.weeks=0;case "months":if(12!==a.months||isNaN(a.years))break;a.years++;a.months=0;case "years":if(10!==
a.years||isNaN(a.decades))break;a.decades++;a.years=0;case "decades":if(10!==a.decades||isNaN(a.centuries))break;a.centuries++;a.decades=0;case "centuries":if(10!==a.centuries||isNaN(a.millennia))break;a.millennia++;a.centuries=0}return 0}return b}function D(a,b,c,d,f,m){var k=new Date;a.start=b=b||k;a.end=c=c||k;a.units=d;a.value=c.getTime()-b.getTime();0>a.value&&(k=c,c=b,b=k);a.refMonth=new Date(b.getFullYear(),b.getMonth(),15,12,0,0);try{a.millennia=0;a.centuries=0;a.decades=0;a.years=c.getFullYear()-
b.getFullYear();a.months=c.getMonth()-b.getMonth();a.weeks=0;a.days=c.getDate()-b.getDate();a.hours=c.getHours()-b.getHours();a.minutes=c.getMinutes()-b.getMinutes();a.seconds=c.getSeconds()-b.getSeconds();a.milliseconds=c.getMilliseconds()-b.getMilliseconds();var g;0>a.milliseconds?(g=s(-a.milliseconds/1E3),a.seconds-=g,a.milliseconds+=1E3*g):1E3<=a.milliseconds&&(a.seconds+=p(a.milliseconds/1E3),a.milliseconds%=1E3);0>a.seconds?(g=s(-a.seconds/60),a.minutes-=g,a.seconds+=60*g):60<=a.seconds&&(a.minutes+=
p(a.seconds/60),a.seconds%=60);0>a.minutes?(g=s(-a.minutes/60),a.hours-=g,a.minutes+=60*g):60<=a.minutes&&(a.hours+=p(a.minutes/60),a.minutes%=60);0>a.hours?(g=s(-a.hours/24),a.days-=g,a.hours+=24*g):24<=a.hours&&(a.days+=p(a.hours/24),a.hours%=24);for(;0>a.days;)a.months--,a.days+=C(a.refMonth,1);7<=a.days&&(a.weeks+=p(a.days/7),a.days%=7);0>a.months?(g=s(-a.months/12),a.years-=g,a.months+=12*g):12<=a.months&&(a.years+=p(a.months/12),a.months%=12);10<=a.years&&(a.decades+=p(a.years/10),a.years%=
10,10<=a.decades&&(a.centuries+=p(a.decades/10),a.decades%=10,10<=a.centuries&&(a.millennia+=p(a.centuries/10),a.centuries%=10)));b=0;!(d&1024)||b>=f?(a.centuries+=10*a.millennia,delete a.millennia):a.millennia&&b++;!(d&512)||b>=f?(a.decades+=10*a.centuries,delete a.centuries):a.centuries&&b++;!(d&256)||b>=f?(a.years+=10*a.decades,delete a.decades):a.decades&&b++;!(d&128)||b>=f?(a.months+=12*a.years,delete a.years):a.years&&b++;!(d&64)||b>=f?(a.months&&(a.days+=C(a.refMonth,a.months)),delete a.months,
7<=a.days&&(a.weeks+=p(a.days/7),a.days%=7)):a.months&&b++;!(d&32)||b>=f?(a.days+=7*a.weeks,delete a.weeks):a.weeks&&b++;!(d&16)||b>=f?(a.hours+=24*a.days,delete a.days):a.days&&b++;!(d&8)||b>=f?(a.minutes+=60*a.hours,delete a.hours):a.hours&&b++;!(d&4)||b>=f?(a.seconds+=60*a.minutes,delete a.minutes):a.minutes&&b++;!(d&2)||b>=f?(a.milliseconds+=1E3*a.seconds,delete a.seconds):a.seconds&&b++;if(!(d&1)||b>=f){var h=n(a,0,"milliseconds","seconds",1E3,m);if(h&&(h=n(a,h,"seconds","minutes",60,m))&&(h=
n(a,h,"minutes","hours",60,m))&&(h=n(a,h,"hours","days",24,m))&&(h=n(a,h,"days","weeks",7,m))&&(h=n(a,h,"weeks","months",z(a.refMonth)/7,m))){d=h;var e,l=a.refMonth,q=l.getTime(),r=new Date(q);r.setFullYear(l.getFullYear()+1);e=Math.round((r.getTime()-q)/864E5);if(h=n(a,d,"months","years",e/z(a.refMonth),m))if(h=n(a,h,"years","decades",10,m))if(h=n(a,h,"decades","centuries",10,m))if(h=n(a,h,"centuries","millennia",10,m))throw Error("Fractional unit overflow");}}}finally{delete a.refMonth}return a}
function e(a,b,c,d,f){var e;c=+c||222;d=0<d?d:NaN;f=0<f?20>f?Math.round(f):20:0;var k=null;"function"===typeof a?(e=a,a=null):a instanceof Date||(null!==a&&isFinite(a)?a=new Date(+a):("object"===typeof k&&(k=a),a=null));var g=null;"function"===typeof b?(e=b,b=null):b instanceof Date||(null!==b&&isFinite(b)?b=new Date(+b):("object"===typeof b&&(g=b),b=null));k&&(a=A(k,b));g&&(b=A(g,a));if(!a&&!b)return new q;if(!e)return D(new q,a,b,c,d,f);var k=c&1?1E3/30:c&2?1E3:c&4?6E4:c&8?36E5:c&16?864E5:6048E5,
h,g=function(){e(D(new q,a,b,c,d,f),h)};g();return h=setInterval(g,k)}var s=Math.ceil,p=Math.floor,w,x,r,t,u,v,B;q.prototype.toString=function(a){var b=B(this),c=b.length;if(!c)return a?""+a:u;if(1===c)return b[0];a=r+b.pop();return b.join(t)+a};q.prototype.toHTML=function(a,b){a=a||"span";var c=B(this),d=c.length;if(!d)return(b=b||u)?"\x3c"+a+"\x3e"+b+"\x3c/"+a+"\x3e":b;for(var f=0;f<d;f++)c[f]="\x3c"+a+"\x3e"+c[f]+"\x3c/"+a+"\x3e";if(1===d)return c[0];d=r+c.pop();return c.join(t)+d};q.prototype.addTo=
function(a){return A(this,a)};B=function(a){var b=[],c=a.millennia;c&&b.push(l(c,10));(c=a.centuries)&&b.push(l(c,9));(c=a.decades)&&b.push(l(c,8));(c=a.years)&&b.push(l(c,7));(c=a.months)&&b.push(l(c,6));(c=a.weeks)&&b.push(l(c,5));(c=a.days)&&b.push(l(c,4));(c=a.hours)&&b.push(l(c,3));(c=a.minutes)&&b.push(l(c,2));(c=a.seconds)&&b.push(l(c,1));(c=a.milliseconds)&&b.push(l(c,0));return b};e.MILLISECONDS=1;e.SECONDS=2;e.MINUTES=4;e.HOURS=8;e.DAYS=16;e.WEEKS=32;e.MONTHS=64;e.YEARS=128;e.DECADES=256;
e.CENTURIES=512;e.MILLENNIA=1024;e.DEFAULTS=222;e.ALL=2047;e.setLabels=function(a,b,c,d,f,e){a=a||[];a.split&&(a=a.split("|"));b=b||[];b.split&&(b=b.split("|"));for(var k=0;10>=k;k++)w[k]=a[k]||w[k],x[k]=b[k]||x[k];r="string"===typeof c?c:r;t="string"===typeof d?d:t;u="string"===typeof f?f:u;v="function"===typeof e?e:v};(e.resetLabels=function(){w=" millisecond; second; minute; hour; day; week; month; year; decade; century; millennium".split(";");x=" milliseconds; seconds; minutes; hours; days; weeks; months; years; decades; centuries; millennia".split(";");
r=" and ";t=", ";u="";v=function(a){return a}})();y&&y.exports?y.exports=e:"function"===typeof window.define&&"undefined"!==typeof window.define.amd&&window.define("countdown",[],function(){return e});return e}(module);


/**/


var fb_logo = '<img height="29px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNTgwMTE3NDA3MjA2ODExODA4M0NDMTM4MEMyQTVFQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCN0YwMzNGQUE2MTYxMUUyOEJFQUJDRTMzOERDQjM5MCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCN0YwMzNGOUE2MTYxMUUyOEJFQUJDRTMzOERDQjM5MCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUM3QUJGQTkzODIwNjgxMThDMTQ5OEFGOTgxQUJBQ0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDU4MDExNzQwNzIwNjgxMTgwODNDQzEzODBDMkE1RUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5VkWTUAAABF0lEQVR42mK0Dp/LyMDAUATEDUDMw0A78AVqRy8L1MIeBtoDHpg9TEDcyEBf0AiylJvOlnIzMQwAYKGK0znZGALdNBgcLRQYFKQFGNjZWBi+//jN8OHzT4bQ3FXUt1RFQZihvdiZQVIUNeFzcrCCMdV9ysPFxtBb4cYgLMBJkj6K4jTSR5dkCyn2qb25PAp//e6bDDOXn2b48u0X7XwqK8GHwp+/9jxBCym2lJkZVfv7j99oH6fo4P9/BvpbSpOEdGRFEknyv//8Y3CJX8Tw9+8/+vn00fOPGBbS3NIHjz/QP04fPP1AeZzaRMzDG4fo8oMq9Y5aOmrp0Lb0K53t/AqytJ3OlraDLG0D4hI6+Pgr1J5WgAADACLKR4SeAF87AAAAAElFTkSuQmCC"/>';

var twitter_logo = '<img height="29px" src="data:image/png;base64,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"/>';

/*
  fill-in-quiz.js -- version 0.2.0
  This is free and unencumbered software released into the public
  domain under the terms of the unlicense <http://unlicense.org>
*/
var Quiz = {
    data: [],

    lower_data: [],

    found_data: [],

    quiz_div: '',

    countTo: 0,

    outTo: '',

    init: function (div, data, time) {
        this.data = data;
        this.lower_data = data.map(String.toLowerCase);
        this.quiz_div = document.getElementById(div);
        this.createInputDiv(); 
        this.setTimer(time * 1000);
        this.createAnswerDiv();
        console.log(this.data);
        console.log(this.data.length);
        requestAnimationFrame(this.countdown);
    },

    createInputDiv: function () {
        // Create input div
        console.log(this.quiz_div);
        var input_div = document.createElement('div');
        input_div.innerHTML = '<input type="text" id="input-div" autofocus />';
        input_div.addEventListener('keyup', Quiz.handleAnswer, false);
        this.quiz_div.appendChild(input_div);

        // Create timer div
        var timer_div = document.createElement('div');
        timer_div.setAttribute('id', 'timer');
        Quiz.quiz_div.appendChild(timer_div);

        // Create surrender button
        var surrender_btn = document.createElement('input');
        surrender_btn.setAttribute('type', 'button');
        surrender_btn.setAttribute('value', 'Give up?');
        surrender_btn.setAttribute('id', 'surrender');
        surrender_btn.addEventListener('click', this.endQuiz, false);
        Quiz.quiz_div.appendChild(surrender_btn);

        // Create div for counting answers
        var counter_div = document.createElement('div');
        counter_div.setAttribute('id', 'counter');
        this.quiz_div.appendChild(counter_div);
        this.createCounterDiv();
    },

    createCounterDiv: function () {
        var total_items = this.data.length;
        var counter_div = document.getElementById('counter');
        var answer_span = document.createElement('span');
        var total_span = document.createElement('span');
        answer_span.setAttribute('id', 'answer-count');
        answer_span.innerHTML = this.found_data.length;
        total_span.innerHTML = '/' + this.data.length;
        counter_div.appendChild(answer_span);
        counter_div.appendChild(total_span);
        this.quiz_div.appendChild(counter_div);
    },

    setTimer: function (time) {
        this.countTo = new Date(Date.now() + time);
    },

    updateCounter: function () {
        document.getElementById('answer-count').innerHTML = this.found_data.length;
    },

    handleAnswer: function () {
        var text = document.getElementById('input-div').value.toLowerCase().trim();
        if (Quiz.lower_data.indexOf(text) > -1) {
            var index = Quiz.lower_data.indexOf(text);
            document.getElementById('input-div').value = '';
            var out_text = Quiz.data.splice(index, 1)[0];
            Quiz.found_data.push(Quiz.lower_data.splice(index, 1)[0]);
            Quiz.outputAnswer(out_text, document.getElementById('answers'));
            Quiz.updateCounter();
        }
    },

    createAnswerDiv: function () {
        var answer_div = document.createElement('div');
        answer_div.setAttribute('id', 'answer-div');
        var answer_list = document.createElement('ul');
        answer_list.setAttribute('id', 'answers');
        this.quiz_div.appendChild(answer_div);
        document.getElementById('answer-div').appendChild(answer_list);
    },

    outputAnswer: function (text, destination) {
        var new_item = document.createElement('li');
        new_item.innerHTML = text;
        destination.appendChild(new_item);
    },

    countdown: function () {
        Quiz.checkIfAllAnswered();
        if (Quiz.countTo >= Date.now() && Quiz.endCountdown === false && Quiz.allAnswered === false) {
            document.getElementById('timer').innerHTML = countdown(Quiz.countTo).toString();
            requestAnimationFrame(Quiz.countdown);
        } else if (Quiz.endCountdown === true || Quiz.allAnswered === true) {
            document.getElementById('timer').innerHTML = countdown(Quiz.countTo).toString();
        } else {
            document.getElementById('timer').innerHTML = 'Time\'s up!';
            Quiz.endQuiz();
        }
    },

    endCountdown: false,

    endQuiz: function () {
        document.getElementById('input-div').disabled = true;
        document.getElementById('surrender').disabled = true;
        Quiz.endCountdown = true;
        Quiz.showAnswers();
        Quiz.shareScore();
    },

    allAnswered: false,

    checkIfAllAnswered: function () {
		if (Quiz.data.length === 0) {
			Quiz.allAnswered = true;
			console.log(Quiz.allAnswered);
			console.log(Quiz.data);
		}
	},

    shareScore: function () {
        var share = document.createElement('div');
        var correct = this.found_data.length;
        var total = this.found_data.length + this.data.length;
        share.innerHTML = '<p><strong>Share your score!</strong> <a target="_blank" href="http://www.facebook.com/sharer/sharer.php?u='
                        + window.location.href + '"> '
                        + fb_logo
                        + '</a> <a target="_blank" href="https://twitter.com/intent/tweet?text='
                        + document.title
                        + ': I got ' + correct + ' out of ' + total + '! ' + window.location.href + '">' + twitter_logo + '</a>'
                        + 'I got '
                        + correct
                        + ' out of '
                        + total
                        + '!</p>';
        document.getElementById('input-div').appendChild(share);
    },

    showAnswers: function () {
    	var unanswers = document.createElement('ul');
    	unanswers.setAttribute('id', 'unanswers');
    	document.getElementById('answer-div').appendChild(unanswers);

		var i = 0;
  	var len = this.data.length;
	  for (i; i < len; i++) {
			this.outputAnswer(this.data[i], document.getElementById('unanswers'));
		}
	}

};
