
document.addEventListener("DOMContentLoaded", function () {

  // FITUR 1: INPUT DAN HITUNG RATA-RATA NILAI
  const tempat = document.getElementById("inputNilai");

  for (let i = 1; i <= 5; i++) {
    tempat.innerHTML += `
      <label for="s${i}">Nilai Semester ${i}</label>
      <input id="s${i}" type="number" min="0" max="100"
      step="0.01" required placeholder="Masukkan nilai semester ${i}">
    `;
  }

  document.getElementById("formNilai").addEventListener("submit", function(e) {
    e.preventDefault();

    let nilai = [];

    for (let i = 1; i <= 5; i++) {
      const input = document.getElementById("s" + i);
      const n = Number(input.value);

      if (input.value === "" || n < 0 || n > 100) {
        alert("Masukkan nilai antara 0 sampai 100.");
        return;
      }

      nilai.push(n);
    }

    const rata = nilai.reduce((a, b) => a + b, 0) / 5;
    const hasil = document.getElementById("hasil");

    hasil.hidden = false;
    hasil.innerHTML =
      "<strong>Rata-rata nilai kamu: " + rata.toFixed(2) +
      "</strong><br>Gunakan hasil ini sebagai bahan evaluasi akademik. Nilai rata-rata saja tidak dapat menentukan kelulusan SNBP.";
  });


  // FITUR 2: MENAMPILKAN DATA ALUMNI
  const tabelAlumni = document.getElementById("dataAlumni");

  if (!window.dataAlumni || window.dataAlumni.length === 0) {
    tabelAlumni.innerHTML =
      '<tr><td colspan="4">Data alumni belum tersedia.</td></tr>';
    return;
  }

  tabelAlumni.innerHTML = "";

  window.dataAlumni.forEach(function(alumni) {
    const baris = document.createElement("tr");

    const data = [
      alumni.tahun,
      alumni.universitas,
      alumni.prodi,
      alumni.nilai === null
        ? "Belum tersedia"
        : Number(alumni.nilai).toFixed(2)
    ];

    data.forEach(function(isi) {
      const kolom = document.createElement("td");
      kolom.textContent = isi;
      baris.appendChild(kolom);
    });

    tabelAlumni.appendChild(baris);
  });

});
