const ctx = document.getElementById('myChart');
    
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Java', 'C++' ],
    datasets: [{
      label: '# of Votes',
      data: [90, 10],
      borderWidth: 1,
      backgroundColor: [
       'rgba(204,114,61)',
       'rgba(243,97,220)'
      ]
    }]
  },
  options: {
    responsive : false,
    scales: {
      y: {
        
      }
    }
  },
});