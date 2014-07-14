(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-813937-3', 'michaelpnavarro.com');
  ga('send', 'pageview');

$(document).ready(
	function() {


	$(document).mousemove(function(e){
	    var $width = ($(document).width())/255;
	    var $height = ($(document).height())/255;
	    var $pageX = parseInt(e.pageX / $width,10);
	    var $pageY = parseInt(e.pageY / $height,10);
	    $("body").css("background-color", "rgba("+$pageY+","+$pageX+","+$pageX+",.7)");
	}); 	

	$("#contact").scroll(
	    {
	        previousTop: 0
	    }, 
	    function () {
	    var currentTop = $("#contact").scrollTop();
	    if (currentTop == 0) {
	        $("header").stop().fadeTo('slow', 1);
	    } else {
	        $("header").stop().fadeTo('slow', 0, function() {
	        $(this).css('display', 'none');
			});
	    }
	    this.previousTop = currentTop;
	});

	$("#ontheweb").scroll(
	    {
	        previousTop: 0
	    }, 
	    function () {
	    var currentTop = $("#ontheweb").scrollTop();
	    if (currentTop == 0) {
	        $("header").stop().fadeTo('slow', 1);
	    } else {
	        $("header").stop().fadeTo('slow', 0, function() {
	        $(this).css('display', 'none');
			});
	    }
	    this.previousTop = currentTop;
	});

	$("#projects").scroll(
	    {
	        previousTop: 0
	    }, 
	    function () {
	    var currentTop = $("#projects").scrollTop();
	    if (currentTop == 0) {
	        $("header").stop().fadeTo('slow', 1);
	    } else {
	        $("header").stop().fadeTo('slow', 0, function() {
	        $(this).css('display', 'none');
			});
	    }
	    this.previousTop = currentTop;
	});

	$(".nav_link").click(function () {
		$(".nav_link").hide("slide");
		$("footer").hide("fade", 'slow');
	});
	
	$("#contact_link").click(function () {
		$("#contact").show("slide");
	});

	$("#ontheweb_link").click(function () {
		$("#ontheweb").show("slide");
	});

	$("#projects_link").click(function () {
		$("#projects").show("slide");
	});
	
	$(".back_btn").click(function () {
		$(this).parent().hide("slide");
		$(".nav_link").show("fade");
		$("footer").show("fade", 'slow');
		$("header").stop().fadeTo('slow', 1);
	});

	$("header h1").click(function () {
		$(".section:visible").hide("slide");
		$(".nav_link").show("fade");
		$("footer").show("fade", 'slow');
		$("header").stop().fadeTo('slow', 1);

	});
	
	
});