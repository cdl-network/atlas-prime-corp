// ======================================================
// Contact Form
// ======================================================

export function initContactForm(endpoint, submitForm) {
    const form = document.querySelector("#send-message-form");

    if (!form) return;

    const thankYou = document.querySelector("#send-message-thank-you");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const button = form.querySelector(
            'button[type="submit"]'
        );

        if (!button) return;

        const originalText = button.innerHTML;

        button.disabled = true;
        button.innerHTML = "Sending...";

        try {
            await submitForm(form, endpoint);

            form.reset();

            form.classList.add("hidden");

            if (thankYou) {
                thankYou.classList.remove("hidden");
            }

        } catch (error) {
            button.innerHTML = "Try Again";
            button.disabled = false;

            alert("Something went wrong. Please try again.");
        }
    });
}