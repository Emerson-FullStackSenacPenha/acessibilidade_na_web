const tds = document.querySelectorAll("td");

tds.forEach((td) => {
    if(td.textContent == "A" || td.textContent == "B" || td.textContent == "C" || td.textContent == "D"){
        td.classList.add("perfil-tabela")
    }
})