const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    form.querySelectorAll("input, textarea").forEach((field) => {
        field.classList.remove("error");

        const wrapper = field.closest("div") || field;
        const oldError = wrapper.nextElementSibling;
        if (oldError && oldError.classList.contains("field-error")) {
            oldError.remove();
        }

        const value = field.value.trim();

        if (!value) {
            field.classList.add("error");

            const errorMsg = document.createElement("span");
            errorMsg.className = "my-1.5 text-error text-xs field-error";
            errorMsg.textContent = "این فیلد الزامی است";

            wrapper.insertAdjacentElement("afterend", errorMsg);
            return;
        }


        if (field.name === "phone") {
            const value = field.value.trim();
            const isValidPhone = /^\d{10}$/.test(value);

            if (!isValidPhone) {
                field.classList.add("error");

                const errorMsg = document.createElement("span");
                errorMsg.className = "my-1.5 text-error text-xs field-error";
                errorMsg.textContent = "شماره باید دقیقاً 10 رقم عددی باشد";

                wrapper.insertAdjacentElement("afterend", errorMsg);
            }
        }

    });
});
