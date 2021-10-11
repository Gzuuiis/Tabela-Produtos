var I_Header = 0
var cod_pro = 1

var table = document.createElement("table")
var thead = document.createElement("thead")
var tbody = document.createElement("tbody")

function criarHeader(){
    table.appendChild(thead)
    table.appendChild(tbody)

    document.getElementById('listaprodutos').appendChild(table);

    var linha = document.createElement("tr")
    var header = document.createElement("th")
    header.innerHTML = "#"
    var header_2 = document.createElement("th")
    header_2.innerHTML = "Nome do Produto"
    var header_3 = document.createElement("th")
    header_3.innerHTML = "Valor do Produto"
    var header_4 = document.createElement("th")
    header_4.innerHTML = "Quantidade em Estoque"

    linha.appendChild(header)
    linha.appendChild(header_2)
    linha.appendChild(header_3)
    linha.appendChild(header_4)
    thead.appendChild(linha)

    I_Header = 1
}

function addoncar(){
    var nameproduct = document.getElementById('name').value
    var valproduct = document.getElementById('valor').value
    var qtproduct = document.getElementById('quantidadestoque').value


    if(nameproduct ==  "" ||  valproduct == "" || qtproduct == ""){
        alert("Dê um nome e um valor ao produto")
    }
    else{
    var linhaproduto = document.createElement("tr")
    linhaproduto.id = cod_pro
    var thprod = document.createElement("th")
    thprod.innerHTML = cod_pro
    var td = document.createElement("td")
    td.innerHTML = `${nameproduct}`
    var td_2 = document.createElement("td")
    td_2.innerHTML = `${valproduct}R$`
    var td_3 = document.createElement("td")
    td_3.innerHTML = `${qtproduct}`

    linhaproduto.appendChild(thprod)
    linhaproduto.appendChild(td)
    linhaproduto.appendChild(td_2)
    linhaproduto.appendChild(td_3)
    tbody.appendChild(linhaproduto) 

    if(I_Header == 0){
    criarHeader()
    }
    cod_pro++
  }
}

function btremove(){
    var Id_para_remover = document.getElementById("remover").value
    if(Id_para_remover != 0){
    var removera = document.getElementById(`${Id_para_remover}`)
    tbody.removeChild(removera)
    }else{
        alert("Não encontramos este ID")
    }
}