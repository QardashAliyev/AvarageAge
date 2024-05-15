const fs = require('fs');

fs.readFile('workers.json', 'utf8', (err, data) => {
    const workers = JSON.parse(data);
    let sum = 0;


    for (let i = 0; i < workers.length; i++) {
        sum += workers[i].age;
    }

    const ortaYas = sum / workers.length;
    const result = `Orta yaş: ${ortaYas.toFixed(0)}`;
    fs.writeFile('./result.txt', JSON.stringify(result), (err) => {
        if (err) {
            console.log(err);
        }
    }


    )



});



