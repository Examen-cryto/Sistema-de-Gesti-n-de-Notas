// script.js
document.getElementById("gradesForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const studentName = document.getElementById("studentName").value;
  const grade1 = parseFloat(document.getElementById("grade1").value);
  const grade2 = parseFloat(document.getElementById("grade2").value);
  const grade3 = parseFloat(document.getElementById("grade3").value);

  // Validar entradas
  if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3)) {
    alert("Por favor, ingrese todas las notas correctamente.");
    return;
  }

  // Calcular promedio
  const average = ((grade1 + grade2 + grade3) / 3).toFixed(2);

  // Determinar observación
  let observation;
  if (average >= 14) {
    observation = "¡Excelente trabajo!";
  } else if (average >= 10) {
    observation = "Puedes mejorar.";
  } else {
    observation = "Necesitas más esfuerzo.";
  }

  // Mostrar resultados
  const resultElement = document.getElementById("studentResult");
  resultElement.innerHTML = `
    <strong>Estudiante:</strong> ${studentName} <br>
    <strong>Promedio:</strong> ${average} <br>
    <strong>Observación:</strong> ${observation}
  `;

  // Agregar al historial
  addToHistory(studentName, average, observation);

  // Limpiar formulario
  document.getElementById("gradesForm").reset();
});

function addToHistory(name, average, observation) {
  const historyTable = document.getElementById("historyTable").querySelector("tbody");

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${average}</td>
    <td>${observation}</td>
  `;

  historyTable.appendChild(newRow);
}

// Borrar historial
document.getElementById("clearHistory").addEventListener("click", function () {
  if (confirm("¿Estás seguro de que deseas borrar todo el historial?")) {
    document.getElementById("historyTable").querySelector("tbody").innerHTML = "";
  }
});
