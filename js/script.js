function luas() {
    const sisi_luas = document.getElementById("sisi-luas").value;
    const luas = sisi_luas * sisi_luas;
    document.getElementById("output_luas").innerHTML = "L = S x S<br>L = " + sisi_luas + " x " + sisi_luas + "<br>L = " + luas;
}
function keliling() {
    const sisi_keliling = document.getElementById("sisi-keliling").value;
    const keliling = 4 * sisi_keliling;
    document.getElementById("output_keliling").innerHTML = "K = 4 x S<br>K = 4 x " + sisi_keliling + "<br>K = " + keliling;    
}
// function reset() {
//     var resetLuas = document.getElementById("reset-luas");
//     var resetKeliling = document.getElementById("reset-keliling");
//     if (resetLuas) {
//         var outputLuas = document.getElementById("output_luas");
//         outputLuas.remove()
//     }
//     if(resetKeliling) {
//         var outputKeliling = document.getElementById("output_keliling");
//         outputKeliling.remove();
//     }
// }
document.getElementById("hitung-luas").addEventListener("click", luas);
document.getElementById("hitung-keliling").addEventListener("click", keliling);
// document.getElementById("reset-luas").addEventListener("click", reset);
// document.getElementById("reset-keliling").addEventListener("click", reset);
