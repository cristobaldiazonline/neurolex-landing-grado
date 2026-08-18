document.addEventListener("DOMContentLoaded", () => {
  // Elementos del DOM
  const btnEvaluar = document.getElementById("btnEvaluar");
  const feedbackContainer = document.getElementById("feedbackContainer");
  const respuestaSimulada = document.getElementById("respuestaSimulada");
  const formModal = document.getElementById("formModal");

  // ==========================================
  // EVENTO 1: Simulación de Evaluación Oral
  // ==========================================
  if (btnEvaluar && feedbackContainer && respuestaSimulada) {
    btnEvaluar.addEventListener("click", () => {
      const texto = respuestaSimulada.value.trim();

      if (texto === "") {
        alert("Por favor, ingresa una respuesta antes de solicitar la evaluación diagnóstica.");
        return;
      }

      // Modificación visible del DOM: mostrar contenedor de feedback
      feedbackContainer.classList.remove("d-none");
      feedbackContainer.innerHTML = `
        <h5 class="alert-heading fw-bold">✓ Análisis de Vacíos Completado (Módulo: Acto Jurídico)</h5>
        <hr>
        <p class="mb-1"><strong>Precisión Conceptual:</strong> 85%</p>
        <p class="mb-2"><strong>Vacío Crítico Detectado:</strong> Omitiste señalar la sanción civil correspondiente (nulidad relativa conforme al Art. 1682 del Código Civil) y el plazo de prescripción de 4 años.</p>
        <div class="p-2 bg-light rounded text-dark border">
          <small class="fw-semibold text-primary">💡 Recomendación Neurolex:</small>
          <small class="d-block text-muted">Refuerza la distinción entre error sustancial y accidental antes de avanzar a contratos.</small>
        </div>
      `;
    });
  }

  // ==========================================
  // EVENTO 2: Procesamiento del Formulario Modal
  // ==========================================
  if (formModal) {
    formModal.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = document.getElementById("emailModal");
      const email = emailInput ? emailInput.value : "";

      alert(`¡Solicitud recibida! Redirigiendo a pasarela segura para activar el Plan Grado Full para: ${email}`);
    });
  }
});