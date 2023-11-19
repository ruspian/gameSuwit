var tanya = true;

while( tanya ) {
    // menangkap pilihan player
    var player = prompt('Silahkan Pilih : \nGunting, Kertas, Batu');

    // menagkap pilihan komputer
    // membangkitkan bilangan random
    var komputer = Math.random();

    if( komputer < 0.34 ) {
        komputer = 'Gunting';
    } else if( komputer >= 0.34 && komputer < 0.67 ) {
        komputer = 'Kertas';
    } else {
        komputer = 'Batu';
    }
    console.log(komputer);
    // menentukan rules
    var hasil = '';

    if( player == komputer ) {
        hasil = 'Pilihan Sama!';
    } else if( player == 'Gunting' ) {
        // if( komputer == 'Keras' ) {
        //     hasil = 'Kamu Menang';
        // } else {
        //     hasil = 'Kamu Kalah';
        // }

        // Memakai operator ternary
        hasil = ( komputer == 'Kertas' ) ? 'Kamu Menang!' : 'Kamu Kalah!'; // (?) --> jika true menang dan jika false kalah 
    } else if( player == 'Kertas' ) {
        hasil = ( komputer == 'Batu' ) ? 'Kamu Menang!' : 'Kamu Kalah!';
    } else if( player == 'Batu' ) {
        hasil = ( komputer == 'Kertas' ) ? 'Kamu Menang!' : 'Kamu Kalah!';
    } else {
        hasil = 'Yang Kamu Masukkan Salah!'
    }
    // tampilkan hasil
    alert('Player : ' + player + ' \nKomputer : ' + komputer + ' \nMaka Hasilnya : ' + hasil);

    tanya = confirm('Mau Bermain Lagi?');
}

confirm('Terima Kasih Sudah Bermain');
