function encryptText() {
    const inputText = document.getElementById("inputText").value;
    
    // Validación: Solo permite minúsculas y espacio
    if (/[^a-z\s]/.test(inputText)) {
        alert("Solo se permiten letras minúsculas y espacios.");
        return;
    }

    const outputText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    document.getElementById("outputText").value = outputText;
}

function decryptText() {
    const inputText = document.getElementById("inputText").value;

    // Validación: Solo permite minúsculas y espacio
    if (/[^a-z\s]/.test(inputText)) {
        alert("Solo se permiten letras minúsculas y espacios.");
        return;
    }

    const outputText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    document.getElementById("outputText").value = outputText;
}
