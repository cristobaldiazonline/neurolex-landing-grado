# Neurolex - Simulador de Examen de Grado con IA

Landing page interactiva desarrollada para la plataforma Neurolex, orientada a la preparación estratégica del examen de grado en Derecho mediante simulación de interrogaciones orales y detección de vacíos dogmáticos.

---

## 📌 Decisiones de Diseño y Arquitectura

* **Semántica HTML5:** Estructuración mediante landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) garantizando accesibilidad y jerarquía lógica de contenidos.
* **Sistema de Diseño Mobile-First:** Maquetación responsive basada en Bootstrap 5 (Grid System y componentes) complementada con una hoja de estilos propia (`css/custom.css`) con variables centralizadas en `:root`.
* **Interactividad Vanilla JS:** Manipulación dinámica del DOM sin dependencias externas, gestionando validación de entradas, renderizado de feedback pedagógico y captura de leads.

---

## 🚀 Flujo de Trabajo Git y Versionamiento

El desarrollo siguió estrictamente la metodología de ramas por feature con política de protección de rama principal (0 commits directos a `main`):

1. `feature/estructura-html` (PR #1): Maquetación base, navegación, componentes Bootstrap y accesibilidad en formularios.
2. `feature/estilos-custom` (PR #2): Definición de paleta corporativa, variables CSS y ajustes visuales responsive.
3. `feature/interaccion-js` (PR #3): Lógica de evaluación diagnóstica en tiempo real y control de eventos del modal.

Todos los commits fueron documentados bajo el estándar **Conventional Commits** (`feat:`, `style:`).

---

## 🛠️ Tecnologías Utilizadas

* HTML5 (Semántico y Accesible)
* CSS3 (Variables, Flexbox, Media Queries)
* Bootstrap 5.3.0 (CDN)
* JavaScript Vanilla (ES6+)
* Git & GitHub (Branching, Pull Requests, Code Reviews)