function getData(data) {
    return new Promise((resolve, reject) => {
        console.log('Veriler alinmaya calisiliyor');
        if (data) {
            resolve('Veriler alndı');
        }
        else {
            reject('Veriler alınamadı');
        }
    })
}

function cleanData(receivedData) {
    return new Promise((resolve, reject) => {
        console.log('Veriler düzenleniyor...')
        if (receivedData) {
            resolve('Veriler düzenlendi')
        }
        else {
            reject('Veriler düzenlenemedi')
        }
    })
}

// getData(true)
//     .then(result => {
//         console.log(result);
//         return cleanData(true);
//     }).then(result=>{
//         console.log(result);
//     }).catch(err => {
//         console.log(err);
//     })

// async- await

async function processData() {
    try {
        const receivedData = await getData(true); //bu işlem bitmeden aşağıya geçmez
        console.log(receivedData);
        const cleanedData = await cleanData(true);
        console.log(cleanedData);
    }
    catch (err) {
        console.log(err);

    }


}
processData();