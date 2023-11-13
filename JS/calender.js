// FullCalendar initialization
$(document).ready(function () {
    $('#calendar').fullCalendar({
      defaultView: 'month',
      events: [], // Initialize the events array
    });
  
    // Handle adding events when the "Add Event" button is clicked
    $('#add-event').click(function () {
      const title = $('#event-title').val();
      const date = $('#event-date').val();
  
      if (title && date) {
        $('#calendar').fullCalendar('renderEvent', {
          title: title,
          start: date,
          allDay: true,
        }, true); // Add the event to the calendar
  
        // Clear the input fields
        $('#event-title').val('');
        $('#event-date').val('');
      }
    });
  });
  