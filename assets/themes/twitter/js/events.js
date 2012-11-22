function showEvents()
    {
   // alert("firing!");	
    $.getJSON('data/events/san-francisco.json', function(data) {
	//alert('in');
        $.each(data['events'], function(key, val) {
        	startDate = val['start_date'];     	
        	startDate = new Date(startDate);
        	endDate = new Date();
        	alert(startDate);
        	if(startDate > endDate)
        		{
        		alert("in!");	
        		}
          }); 
        });
    }   
    
function showCities()
    {
   // alert("firing!");	
    $.getJSON('data/events/cities.json', function(data) {
	//alert('in');
        $.each(data['cities'], function(key, val) {
        	city = val['city'];     	
        	if(val['eventcount']>0)
	        	{
	        	alert(city);
	        	filename = city.replace(" ","");	
	        	filename = filename.toLowerCase();
	        	filename = 'data/events/'+ filename + ".json";
	        	//alert(filename);
	        	
			   // alert("firing!");	
			    $.getJSON(filename, function(eventdata) {
				//alert('in');
			        $.each(eventdata['events'], function(key2, val2) {
			        	startDate = val2['start_date'];     
			        	startDate = new Date(startDate);
			        	endDate = new Date();
			        	//alert(startDate);
			        	if(startDate > endDate)
			        		{
			        		//alert(val2['name']);
					    	//alert(dodump(data,5));
					        var template = $('#eventListingItemTemplate').html();
					        var html = Mustache.to_html(template, data);
					        alert(html);
					        $('#eventList').append(html);			        			
			        		}
			          }); 
			        });	        	
	        	
	        	}
          }); 
        });
    }       
     
     
function getEvent(id)
    {
    $.getJSON('data/events/san-francisco.json', function(data) {
        $.each(data['events'], function(key, val) {
            if(id==val['id']){
                var template = $('#directoryDetailTemplate').html();
                var html = Mustache.to_html(template, val);
                $('#DirectoryDetail').html(html);                            
            }
          });                            
        });
    }  

    
function showCountries()
    {
    alert("firing!");	
    $.getJSON('data/events/san-francisco.json', function(data) {
    	//alert(dodump(data,5));
        var template = $('#eventListingTemplate').html();
        var html = Mustache.to_html(template, data);
        //alert(html);
        $('#eventList').html(html);
        });
    }   