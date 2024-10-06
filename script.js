const ctx = document.getElementById('performanceChart').getContext('2d');
const performanceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['27 Jul', '28 Jul', '29 Jul', '30 Jul', '31 Jul', '1 Aug'],
        datasets: [{
            label: 'Sent',
            data: [20000, 24000, 22000, 26000, 28000, 25000],
            borderColor: '#755fe2',
            fill: false,
        }, {
            label: 'Delivered',
            data: [12000, 15000, 18000, 24000, 32000, 30000],
            borderColor: '#f7b924',
            fill: false,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
