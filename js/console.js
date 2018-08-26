 
// Copyright (c) 2011 Sam Phippen <samphippen@googlemail.com>
 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
 

var Typer={	
	text: null,
	accessCountimer: null,
	index: 0, // current cursor position
	speed: 8, // speed of the Typer
	navFile: "navigation.txt",
	promptFile: "prompt.txt",
	pageFile: "", //file, must be set
	accessCount:0, //times alt is pressed for Access Granted
	deniedCount:0, //times caps is pressed for Access Denied

	init: function(){// inizialize Hacker Typer
		accessCountimer=setInterval(function(){Typer.updLstChr();},500); // inizialize timer for blinking cursor
		$.get(Typer.promptFile, function(data){
			Typer.promptContent = data;
			Typer.listContent = '<span class="input">$ </span><span class="text">ls -ah</span>';
		});
		$.get(Typer.navFile, function(data){
			Typer.navContent = data;
		});
		$.get(Typer.pageFile,function(data){// get the text file
			Typer.text = data;// save the textfile in Typer.text
			Typer.text = Typer.text.slice(0, Typer.text.length-1);
		});
	},
 
	content:function(){
		//return $("#console").html('<span class="pwd">sam</span><span class="pwd">@</span><span class="pwd">heyman</span><span class="text">:</span><span class="root">~</span><span class="input">$ </span>');
		return $("#console").html();// get console content
	},
 
	write:function(str){// append to console content
		$("#console").append(str);
		return false;
	},
 
	makeAccess:function(){//create Access Granted popUp      FIXME: popup is on top of the page and doesn't show is the page is scrolled
		Typer.hidepop(); // hide all popups
		Typer.accessCount=0; //reset count
		var ddiv=$("<div id='gran'>").html(""); // create new blank div and id "gran"
		ddiv.addClass("accessGranted"); // add class to the div
		ddiv.html("<div id=\"denied\"><h1>ACCESS GRANTED</h1></div>"); // set content of div
		$(document.body).prepend(ddiv); // prepend div to body
		return false;
	},

	makeDenied:function(){//create Access Denied popUp      FIXME: popup is on top of the page and doesn't show is the page is scrolled
		Typer.hidepop(); // hide all popups
		Typer.deniedCount=0; //reset count
		var ddiv=$("<div id='deni'>").html(""); // create new blank div and id "deni"
		ddiv.addClass("accessDenied");// add class to the div
		ddiv.html("<h1>ACCESS DENIED</h1>");// set content of div
		$(document.body).prepend(ddiv);// prepend div to body
		return false;
	},
 
	hidepop:function(){// remove all existing popups
		$("#deni").remove();
		$("#gran").remove();
	},
 
	addText:function(key){//Main function to add the code
		if(key.keyCode==18){// key 18 = alt key
			Typer.accessCount++; //increase counter 
			if(Typer.accessCount>=3){// if it's presed 3 times
				Typer.makeAccess(); // make access popup
			}
		}else if(key.keyCode==20){// key 20 = caps lock
			Typer.deniedCount++; // increase counter

			if(Typer.deniedCount>=3){ // if it's pressed 3 times
				Typer.makeDenied(); // make denied popup
			}
		}else if(key.keyCode==27){ // key 27 = esc key
			Typer.hidepop(); // hide all popups
		}else if(key.keyCode==13 && Typer.text){ // otherway if text is loaded

			var cont=Typer.content(); // get the console content
			//$("#console").html('<span class="pwd">sam</span><span class="pwd">@</span><span class="pwd">heyman</span><span class="text">:</span><span class="root">~</span><span class="input">$ </span>');
			
			if(cont.substring(cont.length-1,cont.length)=="|") {// if the last char is the blinking cursor
				//$("#console").html($("#console").html().substring(0,cont.length-1)); // remove it before adding the text
			}
			if(key.keyCode!=8){ // if key is not backspace
				Typer.index+=Typer.speed;	// add to the index the speed
			}else{
				if(Typer.index>0) // else if index is not less than 0 
					Typer.index-=Typer.speed;//	remove speed for deleting text
			}
			var text=Typer.text.substring(0,Typer.index)// parse the text for stripping html enities
			var prompt = Typer.promptContent;
			var location = Typer.pageFile;
			var listCommand = Typer.listContent;
			var navigation = Typer.navContent;
			text = addFooter(text, location);

			// text = replacePrompt(text);
			//var rtn = new RegExp("\n", "g"); // newline regex
			//text = text.replace(rtn, "<br/>");

			$("#console").html(
				prompt + listCommand + 
				'<br>' + 
				navigation + 
				'<br><br>'  + 
				prompt + 
				text
			);// replace newline chars with br, tabs with 4 space and blanks with an html blank
			
			window.scrollBy(0,50); // scroll to make sure bottom is always visible
		}
		if ( key.preventDefault && key.keyCode != 122 ) { // prevent F11(fullscreen) from being blocked
			key.preventDefault()
		};  
		if(key.keyCode != 122){ // otherway prevent keys default behavior
			key.returnValue = false;
		}
	},
 
	updLstChr:function(){ // blinking cursor
		var cont=this.content(); // get console 
		if(cont.substring(cont.length-1,cont.length)=="|") // if last char is the cursor
			$("#console").html($("#console").html().substring(0,cont.length-1)); // remove it
		else
			this.write("|"); // else write it
	}
}
 
function replaceUrls(text) {
	var http = text.indexOf("http://");
	var space = text.indexOf(".me ", http);
	if (space != -1) { 
		var url = text.slice(http, space-1);
		return text.replace(url, "<a href=\""  + url + "\">" + url + "</a>");
	} else {
	return text
	}
}

function replacePrompt(text) {
	return text.replace("prompt", prompt);
}

function addFooter(text, path) {
	if (path === 'aboutme.txt' || path === 'info.txt') {
		return text.replace("footer", '<br>' + Typer.promptContent + 
			'<span class="input">$ </span>');
	} else if (path=='work.txt') {
		return text.replace("footer", '<br>' + Typer.promptContent + 
			'<a href="./index.html"><span class="root">/work</span><span class="input">$ </span></a>');
	} else {
		return text.replace("footer", '<br>' + Typer.promptContent + 
			'<a href="./index.html"><span class="root">/personal_projects</span><span class="input">$ </span></a>');
	}
}

var timer = setInterval("t(13);", 5);

function start(keyCode) {
	if (keyCode == 13) {
		var timer = setInterval("t(13);", 5);
	} else {
		t(keyCode);
	}
}

function t(keyCode) {
	Typer.addText({"keyCode": keyCode});
	if ((typeof timer !== 'undefined') && Typer.index > Typer.text.length) {
		clearInterval(timer);
	}
}
 
