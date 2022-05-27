var i= 0;
var path = new Array();
// LIST OF IMAGES
path[0] = "images/poster/pic11.jpg";
path[1] = "images/poster/pic12.jpg";
path[2] = "images/poster/pic13.jpg";
path[3] = "images/poster/pic14.jpg";
path[4] = "images/poster/pic15.jpg";
path[5] = "images/poster/pic16.jpg";

function slideImages()
{
   document.slide.src = path[i];
   if(i < path.length - 1) i++; else i = 0;
   setTimeout("slideImages()",3000);
}


var j= 0;
var upcomming = new Array();
// LIST OF UPCOMMINg
upcoming[0] = "images/poster/upcoming/pic1.jpg";
upcoming[1] = "images/poster/upcoming/pic2.jpg";
upcoming[2] = "images/poster/upcoming/pic3.jpg";
upcoming[3] = "images/poster/upcoming/pic4.jpg";
upcoming[4] = "images/poster/upcoming/pic5.jpg";

function slideUpcoming()
{
   document.upcoming.src = upcoming[j];
   if(j < upcoming.length - 1) j++; else j = 0;
   setTimeout("slideUpcoming()",3000);
}
//Releasing next
var k= 0;
var releasing= new Array();
// LIST OF releasing
releasing[0] = "images/poster/releasing/pic6.jpg";
releasing[1] = "images/poster/releasing/pic7.jpg";
releasing[2] = "images/poster/releasing/pic8.jpg";
releasing[3] = "images/poster/releasing/pic9.jpg";
releasing[4] = "images/poster/releasing/pic10.jpg";

function slideReleasing()
{
   document.releasing.src = releasing[k];
   if(k < releasing.length - 1) k++; else k = 0;
   setTimeout("slideReleasing()",3000);
}

