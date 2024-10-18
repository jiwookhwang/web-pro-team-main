const ctx = document.getElementById('myChart');
    
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['js', 'python' ],
    datasets: [{
      label: '# of Votes',
      data: [70, 30],
      borderWidth: 1,
      backgroundColor: [
       'rgba(255,255,80)',
       'rgba(36,87,189)'
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