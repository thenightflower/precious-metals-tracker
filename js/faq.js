  document.querySelectorAll("details").forEach((el) => {
            const content = el.querySelector("div");

            el.addEventListener("toggle", () => {
                if (el.open) {
                    el.classList.add("open");
                    document.querySelectorAll("details").forEach((other) => {
                        if (other !== el) {
                            other.removeAttribute("open");
                            other.classList.remove("open");
                            const otherContent = other.querySelector("div");
                            if (otherContent) {
                                otherContent.style.height = "0px";
                            }
                        }
                    });

                    content.style.height = "0px";
                    content.style.transition = "height 0.35s ease";
                    requestAnimationFrame(() => {
                        content.style.height = content.scrollHeight + "px";
                    });
                } else {
                    el.classList.remove("open");
                    content.style.height = content.scrollHeight + "px";
                    requestAnimationFrame(() => {
                        content.style.height = "0px";
                    });
                }
            });

            content.addEventListener("transitionend", () => {
                if (el.open) {
                    content.style.height = "auto";
                }
            });
        });