/**
 * Valida el formulario de registro según las reglas especificadas.
 *
 * @returns {boolean} true si todos los campos son válidos, false en caso contrario.
 */
function validateForm() {
    let isValid = true;

    // 1. Obtener los elementos y valores
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value; // No se hace trim al password por seguridad y por las reglas de longitud

    // 2. Definir expresiones regulares para la validación
    // RegEx para Email (similar a HTML5)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // RegEx para al menos una mayúscula
    const uppercaseRegex = /[A-Z]/;
    // RegEx para al menos un dígito
    const digitRegex = /[0-9]/;

    // 3. Validación del Nombre de Usuario
    usernameError.textContent = ''; // Limpiar errores anteriores
    if (username.length === 0) {
        usernameError.textContent = 'El nombre de usuario es obligatorio.';
        isValid = false;
    } else if (username.length < 5) {
        usernameError.textContent = 'El nombre de usuario debe tener al menos 5 caracteres.';
        isValid = false;
    }

    // 4. Validación del Email
    emailError.textContent = ''; // Limpiar errores anteriores
    if (email.length === 0) {
        emailError.textContent = 'El email es obligatorio.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'El formato del email no es válido.';
        isValid = false;
    }

    // 5. Validación de la Contraseña
    passwordError.textContent = ''; // Limpiar errores anteriores
    if (password.length === 0) {
        passwordError.textContent = 'La contraseña es obligatoria.';
        isValid = false;
    } else if (password.length < 8) {
        passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres.';
        isValid = false;
    } else if (!uppercaseRegex.test(password)) {
        passwordError.textContent = 'La contraseña debe contener al menos una letra mayúscula.';
        isValid = false;
    } else if (!digitRegex.test(password)) {
        passwordError.textContent = 'La contraseña debe contener al menos un dígito (0-9).';
        isValid = false;
    }

    return isValid;
}

// Lógica de manejo de eventos (inclusión del código base del usuario, adaptado)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const formStatusMessage = document.getElementById('formStatusMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene el envío por defecto del formulario

        // Ejecutar la lógica de validación
        const isFormValid = validateForm();

        // Manejar el resultado de la validación
        if (isFormValid) {
            formStatusMessage.textContent = '¡Registro exitoso! (Datos no enviados, solo validación cliente)';
            formStatusMessage.style.color = 'green';
            // Opcional: form.reset();
        } else {
            formStatusMessage.textContent = 'Por favor, corrige los errores en el formulario.';
            formStatusMessage.style.color = 'red';
        }
    });
});