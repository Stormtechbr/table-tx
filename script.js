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

    let value0 = (0.0325*receberValor) + receberValor;
    let value1 = (0.0366*receberValor) + receberValor;
    let value2 = (0.0360*receberValor) + receberValor;
    let value3 = (0.0453*receberValor) + receberValor;
    let value4 = (0.0545*receberValor) + receberValor;
    let value5 = (0.0638*receberValor) + receberValor;
    let value6 = (0.0729*receberValor) + receberValor;
    let value7 = (0.0818*receberValor) + receberValor;
    let value8 = (0.0907*receberValor) + receberValor;
    let value9 = (0.0994*receberValor) + receberValor;
    let value10 = (0.1082*receberValor) + receberValor;
    let value11 = (0.1168*receberValor) + receberValor;
    let value12 = (0.1253*receberValor) + receberValor;
    let value13 = (0.1514*receberValor) + receberValor;
    let value14 = (0.1597*receberValor) + receberValor;
    let value15 = (0.1681*receberValor) + receberValor;
    let value16 = (0.1761*receberValor) + receberValor;
    let value17 = (0.1843*receberValor) + receberValor;
    let value18 = (0.1923*receberValor) + receberValor;

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