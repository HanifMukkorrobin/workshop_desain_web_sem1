var bunchOfFaq = [
  {
    id: 'faq1',
    pertanyaan: 'Bagaimanakah cara agar saya dapat berkarir di Kementerian Kominfo?',
    jawaban: 'Pendaftaran karir sebagai Aparatur Sipil Negara dilakukan dalam format seleksi nasional. Untuk Pegawai Negeri Sipil akan diumumkan penerimaan Calon Pegawai Negeri Sipil (CPNS) yang dilakukan untuk seluruh instansi pemerintahan di Indonesia, termasuk di Kementerian Kominfo. Sementara untuk Pegawai Pemerintah dengan Perjanjian Kerja akan diumumkan sesuai dengan kebutuhan Kementerian Kominfo. Anda bisa mendapatkan informasi mengenai seleksi dan formasi ASN di halaman muka website Kementerian Kominfo maupun dalam publikasi nasional saat periode seleksi CPNS berlangsung.'
  },
  {
    id: 'faq2',
    pertanyaan: 'Saya adalah seorang mahasiswa. Bagaimanakah prosedur pengajuan kegiatan magang di Kementerian Kominfo?',
    jawaban: 'Kementerian Kominfo menyelenggarakan program magang bagi mahasiswa yang ingin mengembangkan diri dan memperoleh pengalaman kerja di lingkungan Kementerian Kominfo. Untuk mengajukan permohonan magang, mahasiswa dapat mengirimkan surat permohonan magang ke Kementerian Kominfo. Surat permohonan magang dapat dikirimkan ke alamat email: example@gmail.com'
  },
];

// make a function to render the bunch of faq
function renderFaq() {
  var faqContainer = document.getElementById('faq-container');
  faqContainer.innerHTML = '';

  for (var i = 0; i < bunchOfFaq.length; i++) {
    var faq = bunchOfFaq[i];

    var faqElement = document.createElement('div');
    faqElement.setAttribute('class', 'faq');

    var faqPertanyaan = document.createElement('div');
    faqPertanyaan.setAttribute('class', 'faq-pertanyaan');
    faqPertanyaan.innerHTML = faq.pertanyaan;

    var faqJawaban = document.createElement('div');
    faqJawaban.setAttribute('class', 'faq-jawaban');
    faqJawaban.innerHTML = faq.jawaban;

    faqElement.appendChild(faqPertanyaan);
    faqElement.appendChild(faqJawaban);

    faqContainer.appendChild(faqElement);
  }
}