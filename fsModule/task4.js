const fs = require('fs');
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf-8', (err)=>{
    if(err) console.log(err);
    console.log('DOSYA OLUŞTURULDU')
})

fs.readFile('./employees.json', 'utf-8', (err, data)=>{
    if(err) console.log(err);
    console.log(data);
    console.log('DOSYA OKUNDU');
});

fs.appendFile('employees.json',',\n{"name": "Employee 1 Name", "salary": 2000}','utf-8',(err)=>{
    if(err) console.log(err);
    console.log('VERİ EKLENDİ')
})

fs.unlink('employees.json', (err)=>{
    if(err) console.log(err);
    console.log('DOSYA SİLİNDİ');
})
