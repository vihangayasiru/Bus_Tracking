document.addEventListener('DOMContentLoaded', function () {
    const timetableData = {
        'colombo-kandy': {
            timetable: [
                ['6:00 AM', '8:00 AM'],
                ['9:00 AM', '11:00 AM'],
                ['3:00 PM', '5:00 PM']
            ],
            price: 'Rs. 500'
        },
        'colombo-galle': {
            timetable: [
                ['7:00 AM', '9:00 AM'],
                ['1:00 PM', '3:00 PM'],
                ['5:00 PM', '7:00 PM']
            ],
            price: 'Rs. 450'
        }
    };

    document.getElementById('showTimetableBtn').addEventListener('click', function () {
        const route = document.getElementById('timetableSelect').value;
        if (!route || !timetableData[route]) return;

        const data = timetableData[route];
        let html = '<h3>Time Table</h3><table><tr><th>Departure</th><th>Arrival</th></tr>';
        data.timetable.forEach(time => {
            html += `<tr><td>${time[0]}</td><td>${time[1]}</td></tr>`;
        });
        html += '</table>';
        document.getElementById('timetableContainer').innerHTML = html;
    });

    document.getElementById('showPriceBtn').addEventListener('click', function () {
        const route = document.getElementById('priceSelect').value;
        if (!route || !timetableData[route]) return;

        const price = timetableData[route].price;
        document.getElementById('priceContainer').innerHTML = `<h3>Ticket Price</h3><p>${price}</p>`;
    });
});
