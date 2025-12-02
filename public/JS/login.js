// js/login.js

const form = document.getElementById("formLogin");

form.addEventListener("submit", async (event) => {
    event.preventDefault(); // no recargues la página

    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;

    try {
        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: usuario,
                password: clave,
            }),
        });

        const data = await res.json();

        if (!data.ok) {
            alert(data.error || "Error en el login");
            return;
        }

        // Opcional: guardar usuario en localStorage
        localStorage.setItem("ecoUser", data.username);

        // Redirigir al panel EcoPoints
        window.location.href = "/index.html";
    } catch (error) {
        console.error(error);
        alert("No se pudo conectar con el servidor.");
    }
});
