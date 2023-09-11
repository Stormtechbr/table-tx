let receber = document.getElementById('receber');
const sendBtn = document.getElementById('sendBtn');



const n0 = document.getElementById('n0');
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2')
const n3 = document.getElementById('n3')
const n4 = document.getElementById('n4')
const n5 = document.getElementById('n5')
const n6 = document.getElementById('n6')
const n7 = document.getElementById('n7')
const n8 = document.getElementById('n8')
const n9 = document.getElementById('n9')
const n10 = document.getElementById('n10')
const n11 = document.getElementById('n11')
const n12 = document.getElementById('n12')
const n13 = document.getElementById('n13')
const n14 = document.getElementById('n14')
const n15 = document.getElementById('n15')
const n16 = document.getElementById('n16')
const n17 = document.getElementById('n17')
const n18 = document.getElementById('n18')


function calcular () {
    let receberValor = parseFloat(receber.value);

    let value0 = receberValor / (100 - 1.21) * 100
    let value1 = receberValor / (100 - 3.66) * 100
    let value2 = receberValor / (100 - 3.60) * 100
    let value3 = receberValor / (100 - 4.53) * 100
    let value4 = receberValor / (100 - 5.45) * 100
    let value5 = receberValor / (100 - 6.38) * 100
    let value6 = receberValor / (100 - 7.29) * 100
    let value7 = receberValor / (100 - 8.18) * 100
    let value8 = receberValor / (100 - 9.07) * 100
    let value9 = receberValor / (100 - 9.94) * 100
    let value10 = receberValor / (100 - 10.82) * 100
    let value11 = receberValor / (100 - 11.68) * 100
    let value12 = receberValor / (100 - 12.53) * 100
    let value13 = receberValor / (100 - 15.14) * 100
    let value14 = receberValor / (100 - 15.97) * 100
    let value15 = receberValor / (100 - 16.81) * 100
    let value16 = receberValor / (100 - 17.61) * 100
    let value17 = receberValor / (100 - 18.43) * 100
    let value18 = receberValor / (100 - 19.23) * 100

    n0.innerHTML = value0.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n1.innerHTML = value1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n2.innerHTML = value2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n3.innerHTML = value3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n4.innerHTML = value4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n5.innerHTML = value5.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n6.innerHTML = value6.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n7.innerHTML = value7.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n8.innerHTML = value8.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n9.innerHTML = value9.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n10.innerHTML = value10.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n11.innerHTML = value11.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n12.innerHTML = value12.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n13.innerHTML = value13.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n14.innerHTML = value14.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n15.innerHTML = value15.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n16.innerHTML = value16.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n17.innerHTML = value17.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n18.innerHTML = value18.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

sendBtn.addEventListener('click', calcular)