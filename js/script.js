function tabuada() {
    let mult = document.getElementById("multiplicador");
    let tab = document.getElementById("seltab");

    if(mult.value.length == 0) {
        alert("Informe o multiplicador");
        aviso.innerHTML = "Não foi possível multiplicar!"
    } else {
        let m = Number(mult.value);
        tab.innerHTML= '';
        for (let n = 1 ; n <= 10; n++) {
            let res = document.createElement('option');
            res.text =`${m} x ${n} = ${m*n}`;
            tab.appendChild(res);
    }

    }
}