const header = document.getElementById("header");
const outputLuas = document.getElementById("output_luas");
const outputKeliling = document.getElementById("output_keliling");
const persegi = document.getElementById("persegi");
const persegiPanjang = document.getElementById("persegi-panjang");
const main = document.getElementById("square");
const msg = document.getElementById("msg");
msg.style.display = "none"
main.style.display = "none"

// untuk merumuskan Luas dan memanggil output
function luas() {
    const sisi_luas = document.getElementById("sisi-luas").value;
    const luas = sisi_luas * sisi_luas;
    outputLuas.style.display = "block";
    outputLuas.innerHTML = "L = S x S<br>L = " + sisi_luas + " x " + sisi_luas + "<br>L = " + luas;
}

// untuk merumusan Keliling dan memanggil output
function keliling() {
    const sisi_keliling = document.getElementById("sisi-keliling").value;
    const keliling = 4 * sisi_keliling;
    outputKeliling.style.display = "block";
    outputKeliling.innerHTML = "K = 4 x S<br>K = 4 x " + sisi_keliling + "<br>K = " + keliling;
}

// untuk mereset dan menghapsu output
function reset() {
    const resetLuas = document.getElementById("reset-luas");
    const resetKeliling = document.getElementById("reset-keliling");
    if (resetLuas) {
        outputLuas.style.display = "none";
    }
    if(resetKeliling) {
        outputKeliling.style.display = "none";
    }
    
}

// tombol untuk mengganti pilihan
function square() {
    if (persegi){
        persegi.style.backgroundColor = "rgb(39, 187, 245)";
        persegi.style.color = "#fefefe";
        persegiPanjang.style.backgroundColor = "#fefefe";
        persegiPanjang.style.color = "rgb(39, 187, 245)";
        main.style.display = "block";
        msg.style.display = "none";
    }
}
function rectangle() {
    if (persegiPanjang) {
        persegiPanjang.style.backgroundColor = "rgb(39, 187, 245)";
        persegiPanjang.style.color = "#fefefe";
        persegi.style.backgroundColor = "#fefefe";
        persegi.style.color = "rgb(39, 187, 245)";
        main.style.display = "none";
        msg.style.display = "block";
    }
}

// mengadakan event untuk memanggil fungsi
document.getElementById("hitung-luas").addEventListener("click", luas);
document.getElementById("hitung-keliling").addEventListener("click", keliling);
document.getElementById("reset-luas").addEventListener("click", reset);
document.getElementById("reset-keliling").addEventListener("click", reset);
persegi.addEventListener("click", square);
persegiPanjang.addEventListener("click", rectangle);

// fungsi untuk reload
header.addEventListener("click", function() {
    window.location.reload();
});
