const dataAlumni = [
  // TAHUN 2024
  { tahun: 2024, universitas: "INSTITUT PERTANIAN BOGOR", prodi: "ANALISIS KIMIA", peringkatEligible: 28, nilai: 88.41, nilaiAsli: "88.41" },
  { tahun: 2024, universitas: "INSTITUT PERTANIAN BOGOR", prodi: "TEKNOLOGI PRODUKSI TERNAK", peringkatEligible: 99, nilai: 86.9, nilaiAsli: "86.9" },
  { tahun: 2024, universitas: "INSTITUT TEKNOLOGI BANDUNG", prodi: "FMIPA - MATEMATIKA", peringkatEligible: 5, nilai: 90.06, nilaiAsli: "90.06" },
  { tahun: 2024, universitas: "INSTITUT TEKNOLOGI BANDUNG", prodi: "FMIPA - MATEMATIKA", peringkatEligible: 10, nilai: 89.314, nilaiAsli: "89.314" },
  { tahun: 2024, universitas: "INSTITUT TEKNOLOGI BANDUNG", prodi: "FAKULTAS TEKNIK SIPIL DAN LINGKUNGAN (SIPIL)", peringkatEligible: 7, nilai: 89.758, nilaiAsli: "89.758" },
  { tahun: 2024, universitas: "INSTITUT TEKNOLOGI BANDUNG", prodi: "SEKOLAH TINGGI ILMU TEKNOLOGI HAYATI - SAINS", peringkatEligible: 1, nilai: 91.096, nilaiAsli: "91096" },
  { tahun: 2024, universitas: "POLITEKNIK BANDUNG", prodi: "TEKNIK KIMIA (D4)", peringkatEligible: 6, nilai: 89.5, nilaiAsli: "89.5" },
  { tahun: 2024, universitas: "POLITEKNIK BANDUNG", prodi: "TEKNOLOGI PEMBANGKIT TENAGA LISTRIK", peringkatEligible: 100, nilai: 86.85, nilaiAsli: "86.85" },
  { tahun: 2024, universitas: "UNIVERITAS NEGERI SURABAYA", prodi: "EKONOMI", peringkatEligible: 12, nilai: null, nilaiAsli: "86..255" },
  { tahun: 2024, universitas: "UNIVERSITAS BRAWIJAYA", prodi: "KEBIDANAN", peringkatEligible: 13, nilai: 89.054, nilaiAsli: "89.054" },
  { tahun: 2024, universitas: "UNIVERSITAS BRAWIJAYA", prodi: "AGROEKOTEKNOLOGI", peringkatEligible: 67, nilai: 87.472, nilaiAsli: "87.472" },
  { tahun: 2024, universitas: "UNIVERSITAS DIPONEGORO", prodi: "HUKUM", peringkatEligible: 2, nilai: 87.772, nilaiAsli: "87.772" },
  { tahun: 2024, universitas: "UNIVERSITAS DIPONEGORO", prodi: "BAHASA ASING TERAPAN (D4)", peringkatEligible: 9, nilai: 86.473, nilaiAsli: "86.473" },
  { tahun: 2024, universitas: "UNIVERSITAS GADJAH MADA", prodi: "PENGELOLAAN HUTAN (D4)", peringkatEligible: 42, nilai: 88.002, nilaiAsli: "88.002" },
  { tahun: 2024, universitas: "UNIVERSITAS NEGERI SEMARANG", prodi: "ILMU HUKUM", peringkatEligible: 105, nilai: 86.815, nilaiAsli: "86.815" },
  { tahun: 2024, universitas: "UNIVERSITAS NEGERI SEMARANG", prodi: "ILMU POLITIK", peringkatEligible: 31, nilai: 85.455, nilaiAsli: "85.455" },
  { tahun: 2024, universitas: "UNIVERSITAS NEGERI SEMARANG", prodi: "PENDIDIKAN TATA KECANTIKAN (S1)", peringkatEligible: 38, nilai: 85.208, nilaiAsli: "85.208" },
  { tahun: 2024, universitas: "UNIVERSITAS NEGERI SEMARANG", prodi: "ILMU HUKUM (S1)", peringkatEligible: 22, nilai: 85.798, nilaiAsli: "85798" },
  { tahun: 2024, universitas: "UNIVERSITAS NEGERI SEMARANG", prodi: "PEND EKONOMI (PEND. ADMINISTRASI PERKANTORAN)", peringkatEligible: 39, nilai: 85.206, nilaiAsli: "85.206" },
  { tahun: 2024, universitas: "UNIVERSITAS PADJADJARAN", prodi: "GEOFISIKA", peringkatEligible: 48, nilai: 87.928, nilaiAsli: "87.928" },
  { tahun: 2024, universitas: "UNIVERSITAS PADJADJARAN", prodi: "FISIKA", peringkatEligible: 21, nilai: 88.59, nilaiAsli: "88.59" },
  { tahun: 2024, universitas: "UNIVERSITAS PADJAJARAN", prodi: "KIMIA", peringkatEligible: 27, nilai: 88.4, nilaiAsli: "88.4" },
  { tahun: 2024, universitas: "UNIVERSITAS PADJAJARAN", prodi: "SASTRA JERMAN", peringkatEligible: 35, nilai: 85.274, nilaiAsli: "85.274" },
  { tahun: 2024, universitas: "UNIVERSITAS PENDIDIKAN INDONESIA", prodi: "PGSD KAMPUS PURWAKARTA", peringkatEligible: 111, nilai: 86.66, nilaiAsli: "86.66" },
  { tahun: 2024, universitas: "UNIVERSITAS PENDIDIKAN INDONESIA", prodi: "PENDIDIKAN MANAJEMEN PERKANTORAN", peringkatEligible: 16, nilai: 86.125, nilaiAsli: "86.125" },
  { tahun: 2024, universitas: "UNIVERSITAS PENDIDIKAN INDONESIA", prodi: "PENDIDIKAN BIOLOGI", peringkatEligible: 51, nilai: 87.749, nilaiAsli: "87.749" },
  { tahun: 2024, universitas: "UNIVERSITAS PENDIDIKAN INDONESIA", prodi: "PENDIDIKAN BAHASA SUNDA", peringkatEligible: 57, nilai: 87.673, nilaiAsli: "87.673" },
  { tahun: 2024, universitas: "UNIVERSITAS PENDIDIKAN INDONESIA (Kampus Purwakarta)", prodi: "SISTEM TELEKOMUNIKASI", peringkatEligible: 113, nilai: 86.603, nilaiAsli: "86.603" },
  { tahun: 2024, universitas: "UNIVERSITAS SIPERBANGSA KARAWANG", prodi: "AGROTEKNOLOGI", peringkatEligible: 112, nilai: 86.644, nilaiAsli: "86.644" },
  { tahun: 2024, universitas: "UNIVERSITAS SIPERBANGSA KARAWANG", prodi: "TEKNIK LINGKUNGAN", peringkatEligible: 60, nilai: 87.61, nilaiAsli: "87.61" },

  // TAHUN 2025
  { tahun: 2025, universitas: "IPB", prodi: "Analis Kimia", peringkatEligible: 33, nilai: 88.084, nilaiAsli: "88084" },
  { tahun: 2025, universitas: "IPB", prodi: "Smart Agriculture", peringkatEligible: 38, nilai: 87.97, nilaiAsli: "87.97" },
  { tahun: 2025, universitas: "Universitas Padjadjaran", prodi: "Ilmu Hukum", peringkatEligible: 8, nilai: 87.993, nilaiAsli: "87.993" },
  { tahun: 2025, universitas: "ITB", prodi: "FTSL-SI (SIPIL)", peringkatEligible: 7, nilai: 89.169, nilaiAsli: "89.169" },
  { tahun: 2025, universitas: "Insitut Pertanian Bogor (IPB)", prodi: "Bisnis S1", peringkatEligible: 47, nilai: 87.772, nilaiAsli: "87772" },
  { tahun: 2025, universitas: "Universitas Diponegoro", prodi: "Ekonomi - S1", peringkatEligible: 12, nilai: 87.558, nilaiAsli: "87.558" },
  { tahun: 2025, universitas: "Politeknik Manufaktur Bandung", prodi: "Manajemen Teknologi Rekayasa (D4)", peringkatEligible: 49, nilai: 87.728, nilaiAsli: "87.728" },
  { tahun: 2025, universitas: "Universitas Padjadjaran", prodi: "Pariwisata Bahari", peringkatEligible: 42, nilai: 86.323, nilaiAsli: "86323" },
  { tahun: 2025, universitas: "ITB", prodi: "FITB", peringkatEligible: 10, nilai: 89.03, nilaiAsli: "89,03" },
  { tahun: 2025, universitas: "UNPAD", prodi: "AKUNTANSI SEKTOR PUBLIK (D4)", peringkatEligible: 43, nilai: 86.304, nilaiAsli: "86304" },
  { tahun: 2025, universitas: "ITB", prodi: "FAKULTAS ILMU DAN TEKNOLOGI KEBUMIAN", peringkatEligible: 17, nilai: 88.695, nilaiAsli: "88695" },
  { tahun: 2025, universitas: "Universitas Padjadjaran", prodi: "Ilmu Ekonomi", peringkatEligible: 7, nilai: 88.164, nilaiAsli: "88.164" },
  { tahun: 2025, universitas: "ITS", prodi: "Matematika", peringkatEligible: 78, nilai: 87.075, nilaiAsli: "87075" },
  { tahun: 2025, universitas: "POLBAN(Politeknik Bandung)", prodi: "AKUNTANSI (D3)", peringkatEligible: 41, nilai: 86.334, nilaiAsli: "86334" },
  { tahun: 2025, universitas: "Universitas Padjadjaran (UNPAD)", prodi: "Ilmu Keperawatan", peringkatEligible: 19, nilai: 88.621, nilaiAsli: "88.621" },
  { tahun: 2025, universitas: "Universitas Padjadjaran (UNPAD)", prodi: "Biologi", peringkatEligible: 28, nilai: 88.257, nilaiAsli: "88257" },
  { tahun: 2025, universitas: "POLITEKNIK NEGERI BANDUNG", prodi: "MANAJEMEN PEMASARAN D3", peringkatEligible: 2, nilai: 89.416, nilaiAsli: "89.416" },
  { tahun: 2025, universitas: "Universitas Padjadjaran", prodi: "Ilmu Sejarah", peringkatEligible: 33, nilai: 86.515, nilaiAsli: "86515" },
  { tahun: 2025, universitas: "UNDIP", prodi: "PSIKOLOGI", peringkatEligible: 9, nilai: 87.752, nilaiAsli: "87.752" },
  { tahun: 2025, universitas: "UPI", prodi: "PGSD KAMPUS PURWAKARTA", peringkatEligible: 71, nilai: 87.169, nilaiAsli: "87.169" },
  { tahun: 2025, universitas: "ITB", prodi: "Fakultas Teknik Pertambangan dan Perminyakan", peringkatEligible: 8, nilai: 89.167, nilaiAsli: "89167" },
  { tahun: 2025, universitas: "UNDIP", prodi: "Ilmu Pemerintahan", peringkatEligible: 11, nilai: 87.634, nilaiAsli: "87.634" },
  { tahun: 2025, universitas: "Universitas Pendidikan Indonesia", prodi: "Management Resort dan Leisure", peringkatEligible: 10, nilai: 87.738, nilaiAsli: "87.738" },
  { tahun: 2025, universitas: "Universitas Padjajaran", prodi: "Kimia", peringkatEligible: 29, nilai: 88.143, nilaiAsli: "88.143" },
  { tahun: 2025, universitas: "UGM", prodi: "Pengelolaan Hutan", peringkatEligible: 14, nilai: 88.81, nilaiAsli: "88,81" },
  { tahun: 2025, universitas: "IPB", prodi: "Teknik Industri Pertanian (S1)", peringkatEligible: 6, nilai: 89.378, nilaiAsli: "89378" },
  { tahun: 2025, universitas: "ITB", prodi: "FPMIPIA-IPA (PEMINATAN KIMIA)", peringkatEligible: 23, nilai: 88.32, nilaiAsli: "88320" },
  { tahun: 2025, universitas: "UPI KAMPUS PURWAKARTA", prodi: "PGPAUD", peringkatEligible: 74, nilai: 87.131, nilaiAsli: "87.131" },
  { tahun: 2025, universitas: "UNPAD", prodi: "Manajemen Produksi Media", peringkatEligible: 15, nilai: 87.443, nilaiAsli: "87.443" },
  { tahun: 2025, universitas: "Universitas Diponegoro", prodi: "Hukum", peringkatEligible: 13, nilai: 87.525, nilaiAsli: "87525" },
  { tahun: 2025, universitas: "UNPAD", prodi: "PERIKANAN (S1)", peringkatEligible: 35, nilai: 88.054, nilaiAsli: "88054" },
  { tahun: 2025, universitas: "UPI", prodi: "Pendidikan Fisika", peringkatEligible: 92, nilai: 86.81, nilaiAsli: "86,81" },

  // TAHUN 2026
  { tahun: 2026, universitas: "Institut Pertanian Bogor", prodi: "Matematika", peringkatEligible: 15, nilai: 89.559322, nilaiAsli: "89.559322" },
  { tahun: 2026, universitas: "Institut Pertanian Bogor", prodi: "Ekowisata Kampus Sukabumi D4", peringkatEligible: 1, nilai: 90.220339, nilaiAsli: "90.220339" },
  { tahun: 2026, universitas: "Institut Pertanian Bogor", prodi: "Teknologi Produksi Ternak", peringkatEligible: 51, nilai: 88.118644, nilaiAsli: "88.118644" },
  { tahun: 2026, universitas: "Institut Teknologi Bandung", prodi: "SEKOLAH FARMASI (SF) S1", peringkatEligible: 2, nilai: 91.101695, nilaiAsli: "91.101695" },
  { tahun: 2026, universitas: "Institut teknologi Bandung Cirebon", prodi: "Fakultas seni rupa dan desain ( FSRD-C )", peringkatEligible: 38, nilai: 88.457627, nilaiAsli: "88.457627" },
  { tahun: 2026, universitas: "Institut Teknologi Sepuluh Nopember", prodi: "MATEMATIKA", peringkatEligible: 25, nilai: 88.92, nilaiAsli: "88.92" },
  { tahun: 2026, universitas: "Politeknik Negeri Bandung", prodi: "Keuangan dan Perbankan", peringkatEligible: 55, nilai: 86.32, nilaiAsli: "86.32" },
  { tahun: 2026, universitas: "Politeknik Negeri Jakarta", prodi: "Teknik Sipil", peringkatEligible: 57, nilai: 87.98, nilaiAsli: "87, 98" },
  { tahun: 2026, universitas: "Universitas Diponegoro", prodi: "PSIKOLOGI (S1)", peringkatEligible: 3, nilai: 89.63, nilaiAsli: "89, 63" },
  { tahun: 2026, universitas: "Universitas Jenderal Soedirman", prodi: "Ilmu Gizi", peringkatEligible: 113, nilai: 86.88, nilaiAsli: "86, 88" },
  { tahun: 2026, universitas: "Universitas Padjadjaran", prodi: "Fakultas Teknologi Industri Pertanian", peringkatEligible: 20, nilai: 89.17, nilaiAsli: "89, 17" },
  { tahun: 2026, universitas: "Universitas Padjadjaran", prodi: "Agroteknologi", peringkatEligible: 27, nilai: 88.86, nilaiAsli: "88, 86" },
  { tahun: 2026, universitas: "Universitas Padjajaran", prodi: "Matematika", peringkatEligible: 5, nilai: 90.22, nilaiAsli: "90.22" },
  { tahun: 2026, universitas: "Universitas Padjajaran", prodi: "Perikanan", peringkatEligible: 67, nilai: 87.83, nilaiAsli: "87, 83" },
  { tahun: 2026, universitas: "Universitas Pendidikan Indonesia", prodi: "Teknik Energi Terbarukan", peringkatEligible: 82, nilai: 87.46, nilaiAsli: "87.46" },
  { tahun: 2026, universitas: "Universitas Pendidikan Indonesia", prodi: "Sistem Telekomunikasi", peringkatEligible: 68, nilai: 87.81, nilaiAsli: "87.81" },
  { tahun: 2026, universitas: "Universitas Pendidikan Indonesia", prodi: "Mekatronika dan Kecerdasan Buatan", peringkatEligible: 94, nilai: 87.29, nilaiAsli: "87.29" },
  { tahun: 2026, universitas: "Universitas pendidikan indonesia", prodi: "Manajemen industri katering", peringkatEligible: 18, nilai: 87.73, nilaiAsli: "87.73" },
  { tahun: 2026, universitas: "Universitas Singaperbangsa Karawang", prodi: "PEND.Jasmani,Kesehatan dan Rekreasi (S1)", peringkatEligible: 23, nilai: 87.49, nilaiAsli: "87.49" },
  { tahun: 2026, universitas: "Universitas Pendidikan Indonesia", prodi: "Teknik sipil (S1)", peringkatEligible: 34, nilai: 88.52, nilaiAsli: "88, 52" }
];

// Menyeragamkan nama universitas
const namaUniversitas = {
  "IPB": "Institut Pertanian Bogor",
  "INSITUT PERTANIAN BOGOR (IPB)": "Institut Pertanian Bogor",

  "ITB": "Institut Teknologi Bandung",
  "INSTITUT TEKNOLOGI BANDUNG": "Institut Teknologi Bandung",
  "INSTITUT TEKNOLOGI BANDUNG CIREBON": "Institut Teknologi Bandung",

  "UNPAD": "Universitas Padjadjaran",
  "UNIVERSITAS PADJAJARAN": "Universitas Padjadjaran",
  "UNIVERSITAS PADJADJARAN": "Universitas Padjadjaran",

  "UPI": "Universitas Pendidikan Indonesia",
  "UPI KAMPUS PURWAKARTA": "Universitas Pendidikan Indonesia",
  "UNIVERSITAS PENDIDIKAN INDONESIA (KAMPUS PURWAKARTA)": "Universitas Pendidikan Indonesia",

  "UNDIP": "Universitas Diponegoro",
  "ITS": "Institut Teknologi Sepuluh Nopember",
  "UGM": "Universitas Gadjah Mada",

  "POLBAN(POLITEKNIK BANDUNG)": "Politeknik Negeri Bandung",
  "POLITEKNIK BANDUNG": "Politeknik Negeri Bandung",
  "POLITEKNIK NEGERI BANDUNG": "Politeknik Negeri Bandung",

  "UNIVERITAS NEGERI SURABAYA": "Universitas Negeri Surabaya",
  "UNIVERSITAS SIPERBANGSA KARAWANG": "Universitas Singaperbangsa Karawang"
};

dataAlumni.forEach((item) => {
  const nama = item.universitas.trim().toUpperCase();

  if (namaUniversitas[nama]) {
    item.universitas = namaUniversitas[nama];
  }
});

window.dataAlumni = dataAlumni;
