function tabuada(numero) {
    let texto = "";
    for (let i = 1; i <= 10; i++) {
        texto += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert(texto);
}

tabuada(3);