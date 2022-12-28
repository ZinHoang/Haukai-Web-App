document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar')

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2022-12-28',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    events: [
      {
        title: 'Open: 5pm-10pm',
        daysOfWeek: [0, 1, 2, 3],
        start: '2022-12-28',
      },
      {
        title: 'Closed',
        daysOfWeek: [4, 5, 6],
        start: '2022-12-28',
      },
    ],
  })

  calendar.render()
})
