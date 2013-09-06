	function handler(e){
	
		
		console.log(e.target);
		
		/*
		console.log('Click event ---'
	              + ' id: '        + e.target.id	              
	              + ' title: '     + e.target.title	             
	              + ' nodeName: '  + e.target.nodeName
	              + ' nodeType: '  + e.target.nodeType
	              + ' localName: ' + e.target.localName    		  
	              + ' href: '      + e.target.href);
	              */
		
		
		if (e.target.className == "right"){
			var t = document.getElementsByClassName('copy-wrap')[0];		
			t.click();	
		}
		
		
	}
	
	document.addEventListener( "click", handler, false);
	
	
	