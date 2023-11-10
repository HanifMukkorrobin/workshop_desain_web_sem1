Highcharts.chart("chartStatistikKonten", {
  chart: {
    type: "column",
  },
  title: {
    text: "",
  },
  xAxis: {
    categories: [
      "September 2021",
      "Oktober 2021",
      "November 2021",
      "Desember 2021",
      "Januari 2022",
      "Februari 2022",
      "Maret 2022",
      "April 2022",
      "Mei 2022",
    ],
    crosshair: true,
    labels: {
      style: {
        fontSize: '12px',
        color: '#808080'
      }
    }
  },
  colors: ["#025198"],
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
      borderRadius: 6,
    },
  },
  
  yAxis: {
    title: {
      text: ''
    },
    labels: {
      formatter: function () {
        return Highcharts.numberFormat(this.value, 0, ',', '.').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      },
      style: {
        fontSize: '12px',
        color: '#808080'
      }
    },
  },
  series: [
    {
      name: "Aduan Konten",
      data: [16000,11000,21000,16000,6000,17000,9000,13000, 20000],
    }
  ],
});

var activeContent = 1;
var bunchOfContent = [
  {
    id: 1,
    judul: 'Siaran Pers Tentang Menkominfo: Pemerintah Terus Berantas Judi Online',
    tanggal: '13/10/2023',
    jenis: 'Siaran Pers',
    image: 'content_4.png'
  },
  {
    id: 2,
    judul: 'Siaran Pers Tentang Sukseskan MotoGP 2023, Kominfo Beri Dukungan Penuh',
    tanggal: '13/10/2023',
    jenis: 'Siaran Pers',
    image: 'content_5.png'
  },
  {
    id: 3,
    judul: 'Siaran Pers Tentang Wamenkominfo: Kolaborasi dan Sinergi Jadi Kunci Penerapan SPBE',
    tanggal: '13/10/2023',
    jenis: 'Siaran Pers',
    image: 'content_6.png'
  },
  {
    id: 4,
    judul: 'Siaran Pers Tentang Menkominfo: Pemerintah Terus Berantas Judi Online',
    tanggal: '13/10/2023',
    jenis: 'Siaran Pers',
    image: 'content_4.png'
  },
  {
    id: 5,
    judul: 'Siaran Pers Tentang Sukseskan MotoGP 2023, Kominfo Beri Dukungan Penuh',
    tanggal: '13/10/2023',
    jenis: 'Siaran Pers',
    image: 'content_5.png'
  },
  {
    id: 6,
    judul: 'Siaran Pers Tentang Wamenkominfo: Kolaborasi dan Sinergi Jadi Kunci Penerapan SPBE',
    tanggal: '13/10/2023',
    jenis: 'Siaran Pers',
    image: 'content_6.png'
  },
]
function loadContent(){
  const parent = document.getElementById('content-siaran-id');
  bunchOfContent.forEach(element => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
      <div class="content-siaran me-3" id="content-siaran-${element.id}">
        <div class="content-siaran-text py-4 px-3">
          <div class="d-flex align-items-center">
            <div
              class="p-1 bg-white main-text-color rounded jakarta-semibold font-12"
            >
              ${element.jenis}
            </div>
            <div class="text-white font-12 jakarta-semibold ms-3">
              ${element.tanggal}
            </div>
          </div>
          <div class="mt-2 text-white font-16 jakarta-bold">
            ${element.judul}
          </div>
        </div>
      </div>`;
    parent.appendChild(newDiv);

    const elementContent = document.getElementById(`content-siaran-${element.id}`);
    elementContent.addEventListener('click', () => {
      window.location.href = 'detailBerita.html';
    })
    elementContent.style.backgroundImage = `url('../assets/images/${element.image}')`;
  });
}

window.addEventListener('load', loadContent);

var scroll = 0;
function prevSiaran() {
  console.log('prev');
  const content = document.getElementById(`content-container`);
  content.scrollTo({
    left: content.scrollLeft - 520,
    behavior: "smooth",
  });
  console.log(content.scrollLeft);
}

function nextSiaran () {
  const content = document.getElementById(`content-container`);
  content.scrollTo({
    left: content.scrollLeft + 520,
    behavior: "smooth",
  });
  console.log(content.scrollLeft);
}