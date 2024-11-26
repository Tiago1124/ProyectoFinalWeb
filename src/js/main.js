
document.getElementById("login-button").addEventListener("click", function() {
    window.location.href = "../pages/landing.html";
});

 

    const ctx = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Ejercicio', 'Alimentación', 'Descanso'],
            datasets: [{
                label: 'Progreso',
                data: [50, 70, 90],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
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












// Función para mostrar el formulario correspondiente
    function showForm(formId) {
        document.querySelectorAll('.card').forEach(card => {
          if (card.id) {
            card.style.display = card.id === formId ? 'block' : 'none';
          }
        });
      }

// Funciones de Overlay
    function openOverlay(overlayId) {
        document.getElementById(overlayId).style.display = 'flex';
      }
      function closeOverlay(overlayId) {
        document.getElementById(overlayId).style.display = 'none';
      }
  

