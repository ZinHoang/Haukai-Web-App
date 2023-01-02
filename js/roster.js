document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('roster-calendar')

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2022-12-28',
    height: 400,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    events: [
      {
        title: 'Hannah: 5pm-10pm',
        daysOfWeek: [1, 3],
        start: '2022-12-28',
        backgroundColor: '#198754',
        borderColor: '#198754',
      },
      {
        title: 'Jack: 6pm-9pm',
        daysOfWeek: [1, 3],
        start: '2022-12-28',
        backgroundColor: '#0d6efd',
        borderColor: '#0d6efd',
      },
      {
        title: 'Hayden: 5pm-10pm',
        daysOfWeek: [0, 2],
        start: '2022-12-28',
        backgroundColor: '#ffc107',
        borderColor: '#ffc107',
        textColor: '#212529',
      },
      {
        title: 'Francesca: 6pm-9pm',
        daysOfWeek: [0, 2],
        start: '2022-12-28',
        backgroundColor: '#59287a',
        borderColor: '#59287a',
      },
      {
        title: 'Closed',
        daysOfWeek: [4, 5, 6],
        start: '2022-12-28',
        backgroundColor: '#d9534f',
        borderColor: '#d9534f',
      },
    ],
  })

  calendar.render()
})
