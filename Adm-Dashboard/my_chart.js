var ctx = document.getElementById('myChart').getContext('2d');
var earning = document.getElementById('earning').getContext('2d');


var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Amazon', 'YouTube', 'Amazon'],
        datasets: [{

            label: 'Traffic Source',
            data: [1200, 1900, 3000,],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(55, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            
        }]
    },
    options: {
        responsive: true,
    }
});


var myChart = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'December', 'November'],
        datasets: [{
            label: 'Earning',
            data: [1200, 1900, 3000, 5400, 1220, 3600, 4800, 4578, 1320, 6000, 8100, 7000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(55, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(55, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        
        }]
    },
    options: {
       responsive: true,
    }
});

