$(document).ready(function() {
    
            $('#calendar').fullCalendar({
                editable: true,
                // add event name to title attribute on mouseover
				eventMouseover: function(event, jsEvent, view) {
					if (view.name !== 'agendaDay') {
						$(jsEvent.target).attr('title', event.title);
						
					}
				}, 			
				eventLimit: true, // allow "more" link when too many events
                events: [
                    {
                        title: 'Annual Fundraising Event',
                        start: '2014-09-01'
                    },
                    {
                        id: 999,
                        title: 'Step by Step Training Series: "Getting the Story Out"',
                        start: '2014-09-09'
                    },
                    {
                        id: 999,
                        title: 'Step by Step Training Series: "Getting the Story Out"',
                        start: '2014-09-16'
                    },

                    {
                        title: 'Fall Conference',
                        start: '2014-09-13'
                    },
                    {
                        title: 'Link to Event',
                        url: 'http://google.com/',
                        start: '2014-09-25'
                    }
                ]
            });
			function openModal(title, info, url, start, end) {
				if (start && start != 'null') {
					$("#startTime").html("Start: " + moment(start).format('MMMM Do YYYY, h:mm:ss a') + "<br />")
				} else {
					$("#startTime").html(""); //no start (huh?) clear out previous info.
				}
				if (end && end != 'null')
				{
					$("#endTime").html("End: " + moment(end).format('MMMM Do YYYY, h:mm:ss a') + "<br /><br />")
				} else {
					$("#endTime").html(""); //no end. clear out previous info.
				}
				$("#eventInfo").html(info);
				$("#eventLink").attr('href', url);
				$("#eventContent").dialog({ modal: true, title: title, width:350 });
}
            
   

})(jQuery);