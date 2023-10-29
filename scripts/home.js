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

