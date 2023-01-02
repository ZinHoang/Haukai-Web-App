document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('roster')

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2022-12-28',
    // contentHeight: 600,
    // height: 650,
    aspectRatio: 3,
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
        backgroundColor: '#5cb85c',
        borderColor: '#5cb85c',
      },
      {
        title: 'Jack: 6pm-9pm',
        daysOfWeek: [1, 3],
        start: '2022-12-28',
      },
      {
        title: 'Hayden: 5pm-10pm',
        daysOfWeek: [0, 2],
        start: '2022-12-28',
        backgroundColor: '#f0ad4e',
        borderColor: '#f0ad4e',
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
