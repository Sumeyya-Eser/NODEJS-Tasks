const fs = require('fs');

fs.readFile('./pssword.txt', 'utf-8', (err, data)=>{
    if(err) console.log(err);
    console.log(data);
    console.log('DOSYA OKUNDU')
});

fs.writeFile('example.json', '{"name": "X", "age":8}', 'utf-8', (err)=>{
    if(err) console.log(err);
    console.log('DOSYA OLUŞTURULDU')
})

fs.appendFile('example.json','\n{"name": "Y", "age":10}','utf-8',(err)=>{
    if(err) console.log(err);
    console.log('VERİ EKLENDİ')
})

fs.unlink('example.json', (err)=>{
    if(err) console.log(err);
    console.log('DOSYA SİLİNDİ');
})