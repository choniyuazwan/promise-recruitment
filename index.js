function pelamarSubmitData() {
    return new Promise ((resolve, reject) => {
        resolve('pelamar submit data ke HR')
    })
}

function notifPelamarPsikotest() {
    return new Promise((resolve, reject) => {
        resolve('HR notif pelamar untuk psikotest')
    })
}

function pelamarDatangPsikotest() {
    return new Promise((resolve, reject) => {
        resolve('pelamar datang psikotest')
    })
}

function menyerahkanHasilTest() {
    return new Promise((resolve, reject) => {
        resolve('Pelamar menyerahkan hasil test ke HR')
    })
}

function followupHasilPsikotest() {
    return new Promise((resolve, reject) => {
        resolve('HR followup hasil Psikotest ke user')
    })
}

function pelamarKonfirmasiOk() {
    return new Promise((resolve, reject) => {
        resolve('User konfirmasi ok ke HR soal Pelamar')
    })
}

function notifPelamarInterview() {
    return new Promise((resolve, reject) => {
        resolve('HR notif ke Pelamar untuk interview dengan User')
    })
}

function pelamarDatangInterview() {
    return new Promise((resolve, reject) => {
        resolve('Pelamar datang ke User untuk interview')
    })
}

function konfirmasiPelamarLulus() {
    return new Promise((resolve, reject) => {
        resolve('User konfirmasi ok ke HR soal Pelamar lulus interview')
    })
}

function notifMulaiKerja() {
    return new Promise((resolve, reject) => {
        resolve('HR Notif ke Pelamar untuk mulai bekerja')
    })
}

function mulaiMasukKerja() {
    return new Promise((resolve, reject) => {
        resolve('Pelamar mulai masuk bekerja')
    })
}


pelamarSubmitData()
    .then(() => {
        return notifPelamarPsikotest();
    })
    .then(() => {
        return pelamarDatangPsikotest();
    })
    .then(() => {
        console.log('finished')
    })


console.log('try it')