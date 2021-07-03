// The below jQuery function makes navbar components underline when mouse enters  
$(document).ready(function() {
	$(".extra-space").mouseenter(function () {
		$(this).css({"text-decoration": "underline"});
	});
});

// The below jQuery function is used to change colour of elements of navigation bar when the mouse enters
$(document).ready(function() {
	$(".color-me").mouseenter(function () {
		$(this).css({"color": "#39FF14"});
	});
});

// The below jQuery function is used to fix the navbar on top while scrolling
$(document).ready(function(){
	$(".navbar").css({"position": "fixed", "top" : "0", "right" : "0", "z-index" : "1030", "left" : "0"});
})

// The below jQuery function removes underline which came on mouse entering the components   
$(document).ready(function() {
	$(".extra-space").mouseleave(function () {
		$(this).css({"text-decoration": "none"});
	});
});

// The below jQuesry function is used to change colour of elements of navigation bar when the mouse leaves
$(document).ready(function() {
	$(".color-me").mouseleave(function () {
		$(this).css({"color": "gray"});
	});
});


$(document).ready(function(){
	$(".mypic_size").click(function(){
		if($(this)[0].getAttribute('src') == '../img/me.jpeg'){
			$(this).attr('src', '../img/me8.jpeg');
		}
		else if($(this)[0].getAttribute('src') == '../img/me8.jpeg'){
			$(this).attr('src', '../img/me3.jpeg');
		}
		else if($(this)[0].getAttribute('src') == '../img/me3.jpeg'){
			$(this).attr('src', '../img/me2.jpeg');
		}
		else if($(this)[0].getAttribute('src') == '../img/me2.jpeg'){
			$(this).attr('src', '../img/me9.jpeg');
		}
		else if($(this)[0].getAttribute('src') == '../img/me9.jpeg'){
			$(this).attr('src', '../img/me.jpeg');
		}
	})
})

// function goback(){
// 	location.assign('./index.html');
// }

var i = 0;
var txt = 'I am a highly motivated fresher, encouraged to expand and develop my knowledge on the fundamentals of computer science. I wish to contribute to worthwile projects and learn from them.';
var speed = 100; /* The speed/duration of the effect in milliseconds */

window.onload = function typeWriter1() {
	if (i < txt.length) {
		document.getElementById("get-text-main-page").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter1, speed);
		if(speed > 50)
			speed = speed - 1;
	}
}

function button1(){
	document.getElementById("display1").style.display="block";
	document.getElementById("display2").style.display="none";
	document.getElementById("display3").style.display="none";
	document.getElementById("display4").style.display="none";
	document.getElementById("display5").style.display="none";
}

function button2(){
	document.getElementById("display2").style.display="block";
	document.getElementById("display1").style.display="none";
	document.getElementById("display3").style.display="none";
	document.getElementById("display4").style.display="none";
	document.getElementById("display5").style.display="none";
}

function button3(){
	document.getElementById("display3").style.display="block";
	document.getElementById("display2").style.display="none";
	document.getElementById("display1").style.display="none";
	document.getElementById("display4").style.display="none";
	document.getElementById("display5").style.display="none";
}

function button4(){
	document.getElementById("display4").style.display="block";
	document.getElementById("display2").style.display="none";
	document.getElementById("display3").style.display="none";
	document.getElementById("display1").style.display="none";
	document.getElementById("display5").style.display="none";
}

function button5(){
	document.getElementById("display5").style.display="block";
	document.getElementById("display2").style.display="none";
	document.getElementById("display3").style.display="none";
	document.getElementById("display4").style.display="none";
	document.getElementById("display1").style.display="none";
}

// Function to generate Skill Table
var count=0;
var data_array = {};
function insert()
{
	var entered_name=document.getElementById("name").value;
	var entered_skill=document.getElementById("skill_value").value;
	var entered_prof=document.getElementById("level").value;
	if(entered_skill!="" && entered_name!="")
	{
		data_array[count]= [entered_name,entered_skill,entered_prof];
		var insert_row=document.getElementsByTagName("table")[0];
		insert_row.innerHTML += "<tr><td>" + data_array[count][0] + "</td><td>" + data_array[count][1] + "</td><td>" + data_array[count][2] + "</td></tr>";
		count++;
	}
	else
	{
		if(entered_skill!="")
		{
			alert("You have not entered your name!")
		}
		else if(entered_skill=="" && entered_name=="")
		{
			alert("You have neither entered my skill nor your name!")
		}
		else
		{
			alert("You have not entered my skill!")
		}
	}
}
