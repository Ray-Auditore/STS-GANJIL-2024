// Tugas STS

function kelompokkanBilanganV2(bilangan) {
    if (bilangan % 4 === 0) {
        return 'bilangan genap dan bisa dibagi 4';
    } else if (bilangan % 2 === 0) {
        return 'bilangan genap tetapi tidak bisa dibagi 4';
    } else if (bilangan % 2 !== 0) {
        return 'bilangan ganjil';
    } else if (bilangan === 0) {
        return 'nol';
    }
}


