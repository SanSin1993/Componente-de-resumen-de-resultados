document.addEventListener('DOMContentLoaded', function() {
    // Función para cargar y mostrar los datos
    function loadAndShowData() {
      fetch("./data.json")
        .then(response => response.json())
        .then(data => {
          // Calcular el promedio de los valores de "score"
          const scores = data.map(item => item.score);
          const averageScore = calculateAverage(scores);
  
          // Actualizar el contenido del elemento <h2>
          document.querySelector('#circle h2').textContent = averageScore;
  
          // Actualizar los valores de las miniBoxes
          data.forEach(item => {
            const category = item.category;
            const iconSrc = item.icon;
            const score = item.score;
  
            const miniBox = document.querySelector(`#${category}`);
            miniBox.querySelector('.svg').src = iconSrc;
            miniBox.querySelector('h3').textContent = category;
            miniBox.querySelector('.scoreValue').textContent = score;
          });
        })
        .catch(error => console.error('Error cargando los datos:', error));
    }
  
    // Función para calcular el promedio de un arreglo de números
    function calculateAverage(numbers) {
      const total = numbers.reduce((sum, num) => sum + num, 0);
      return Math.round(total / numbers.length);
    }
  
    // Cargar y mostrar los datos al cargar la página
    loadAndShowData();
  
    // Agregar evento de clic al botón "Continue"
    document.querySelector('#loadData').addEventListener('click', loadAndShowData);
  });