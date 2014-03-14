var links = new Array();
links[0] = 'CsGYh8AacgY';
links[1] = 'QFCSXr6qnv4';
links[2] = 'eaCCkfjPm0o';

// My stuff
function playOurVideos(clip)
{
	var n, p;
	for(var i = 0; i < links.length; ++i)
	{
		if(clip == links[i])
		{
			if(i > 0 && i < links.length - 1)
			{
				n = links[i+1];
				p = links[i-1];
			} else if(i == 0)
			{
				n = links[i+1];
				p = links[links.length - 1];	
			} else
			{
				n = links[0];
				p = links[i-1];
			}
		}
	}
    var mv = "http://www.youtube.com/v/" + clip + "&autoplay=0&rel=0";
    swfobject.embedSWF(mv, "myContent", "720", "480", "8");
	
	var previous = document.querySelector("#previous");
	var next = document.querySelector("#next");
	
	previous.title = p;
	next.title = n; 
}

window.onload = playOurVideos('CsGYh8AacgY');