
window.allowMe = (function(root) {
    
	var _container,
		_shown;

	function allowMe() {}

	allowMe.prototype = {

		show: function(containerId, opts) {

			if (_shown) 
				this.hide();

			_shown = true;

			_container = document.getElementById(containerId);

			var _containerStyle = "";
			if (opts.backdropColor) 
				_containerStyle = "background:"+opts.backdropColor+";"
			if (opts.backdropOpacity) 
				_containerStyle += "opacity:"+opts.backdropOpacity+";"

			var _headerStyle = "";
			if (opts.headerFontSize)
				_headerStyle = "font-size:"+opts.headerFontSize+";";
			if (opts.headerFont)
				_headerStyle += "font-family:"+opts.headerFont+";";

			var _captionStyle = "";
			if (opts.captionFontSize)
				_captionStyle = "font-size:"+opts.captionFontSize+";";
			if (opts.captionFont)
				_captionStyle += "font-family:"+opts.captionFont+";";

			var _newURI = "";
			if (opts.arrowColor) {
				_newURI = changeColInUri(
					'data:image/png;base64,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',
					'#FFFCFF',
					opts.arrowColor
				);

				_newURI = "background-image: url(" + _newURI + ");"
			}
			if (opts.arrowSize) {
				var _height = 100 * opts.arrowSize;
				var _width = 30 * opts.arrowSize;
				_newURI +="height:"+_height+"px; width:"+_width+"px;";
			}

			_container.innerHTML = 
				'<div class="container" style=\"'  + _containerStyle  + '\" > ' + 
				'</div>' + 

				'<div class="content"> ' +

					'<div class="left arrow bounce" style=\"'  + _newURI  + '\" >  </div> ' +
					'<div class="right arrow bounce" style=\"'  + _newURI  + '\" >  </div> ' +

					'<div class="text-content"> '+ 
						'<div class="header-text" style=\"'  + _headerStyle  + '\" > ' + 
							opts.headerText + 
						'</div>' + 

						'<div id="allowMe-caption" class="caption-text" style=\"'  + _captionStyle  + '\" > '; 
			
						'</div>'+  

					'</div>' + 
				'</div>'


			if (opts.captionText) 
				document.getElementById("allowMe-caption").innerHTML = opts.captionText;
	

			console.log(_container.innerHTML);

		},

		hide: function() {
			_container.innerHTML = "";
			_shown = false;
		}

	}

	// Credits for function: http://stackoverflow.com/questions/13419101/is-it-possible-to-replace-a-color-in-a-base-64-encoded-image
	function changeColInUri(data,colfrom,colto) {
	    
	    // create fake image to calculate height / width
	    var img = document.createElement("img");
	    img.src = data;
	    img.style.visibility = "hidden";
	    document.body.appendChild(img);

	    var canvas = document.createElement("canvas");
	    canvas.width = img.offsetWidth;
	    canvas.height = img.offsetHeight;

	    var ctx = canvas.getContext("2d");
	    ctx.drawImage(img,0,0);

	    // remove image
	    img.parentNode.removeChild(img);

	    // do actual color replacement
	    var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
	    var data = imageData.data;

	    var rgbfrom = hexToRGB(colfrom);
	    var rgbto = hexToRGB(colto);

	    var r,g,b;
	    for(var x = 0, len = data.length; x < len; x+=4) {
	        r = data[x];
	        g = data[x+1];
	        b = data[x+2];

	        if((r == rgbfrom.r) &&
	           (g == rgbfrom.g) &&
	           (b == rgbfrom.b)) {

	            data[x] = rgbto.r;
	            data[x+1] = rgbto.g;
	            data[x+2] = rgbto.b;

	        } 
	    }
	    ctx.putImageData(imageData,0,0);

    	return canvas.toDataURL();
	}

	function hexToRGB(hexStr) {
	    var col = {};
	    col.r = parseInt(hexStr.substr(1,2),16);
	    col.g = parseInt(hexStr.substr(3,2),16);
	    col.b = parseInt(hexStr.substr(5,2),16);
	    return col;
	}

	return allowMe;

})(window);

