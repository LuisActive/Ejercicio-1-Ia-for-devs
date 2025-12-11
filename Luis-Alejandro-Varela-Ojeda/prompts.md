You are a Senior Software Engineer specializing in front-end development, specifically in robust client-side form validation using native JavaScript (ES6+). Your goal is to provide a complete, production-ready solution based on the following detailed requirements.

### Context and Deliverables:

You must provide the full content for two separate files: `index.html` and `script.js`.

1.  **File 1: `index.html` (Complete HTML Structure):**
    * Must contain a simple registration form with three input fields: **Username, Email, and Password**.
    * Each input must have a corresponding **empty `<span>` element immediately below it** (or a `<div>` with a similar purpose) to display validation error messages.
    * The form must have an `id` (e.g., `registrationForm`).
    * The form must be configured to call the JavaScript validation function on the **`submit` event** and **prevent the default submission** if validation fails.
    * It must correctly link the external `script.js` file at the end of the `<body>`.

2.  **File 2: `script.js` (Complete JavaScript Logic):**
    * Must contain a single, comprehensive function (e.g., `validateForm`) that runs the validation logic.
    * The function must retrieve the values and error display elements for all three fields.
    * The function must return `true` if **all fields are valid**, and `false` otherwise.
    * If validation fails for any field, the corresponding error element must display a **clear, user-friendly message** in Spanish (as the user interface language is Spanish).
    * If validation passes, the error element should be cleared.

### Validation Rules (Strictly Implement All):

1.  **Username (`nombre de usuario`):**
    * **Required (Obligatorio).**
    * Must be **at least 5 characters** long.
2.  **Email (`Email`):**
    * **Required (Obligatorio).**
    * Must match a **valid email format** (use a standard, yet robust, regular expression like the one for HTML5 email inputs, e.g., `/^\S+@\S+\.\S+$/`).
3.  **Password (`Contraseña`):**
    * **Required (Obligatorio).**
    * Must be **at least 8 characters** long.
    * Must contain **at least one uppercase letter** (e.g., `[A-Z]`).
    * Must contain **at least one digit** (e.g., `[0-9]`).

### Output Format:

Present the content for each file using a distinct, labeled code block, beginning with `index.html` and followed by `script.js`. Do not include any surrounding explanation or prose, only the two requested code blocks.