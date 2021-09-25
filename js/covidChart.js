// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
// Bar Chart Example
window.addEventListener('load', loadData);
function loadData() {
  fetch("https://static.pipezero.com/covid/data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var duLieuNgayThang = [];
      var duLieuSoCaNhiem = [];
      var duLieuSoCaKhoi = [];
      var duLieuSoCaTuVong = [];
      for (let i = 0; i < 7; i++) {
        duLieuNgayThang.push(response.overview[i].date);
        duLieuSoCaNhiem.push(response.overview[i].recovered);
        duLieuSoCaKhoi.push(response.overview[i].cases);
        duLieuSoCaTuVong.push(response.overview[i].death);
      }
      $('#nhiemtrungbinh7ngay').text('Trung bình 7 ngày : ' + response.overview[0].avgCases7day.toLocaleString());
      $('#khoitrungbinh7ngay').text('Trung bình 7 ngày : ' + response.overview[0].avgRecovered7day.toLocaleString());
      $('#tuvongtrungbinh7ngay').text('Trung bình 7 ngày : ' + response.overview[0].avgDeath7day.toLocaleString());

      // Chart nhiễm
      var ctx = document.getElementById("myBarChart");
      var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: duLieuNgayThang,
          datasets: [{
            label: "SỐ CA NHIỄM",
            backgroundColor: "#F89C26",
            hoverBackgroundColor: "#F89C26",
            borderColor: "#F89C26",
            data: duLieuSoCaNhiem,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {

            yAxes: [{
              ticks: {
                min: 0,
                maxTicksLimit: 5,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function (value, index, values) {
                  return value.toLocaleString();
                }
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
        }
      });
      // Chart khỏi
      var ctx = document.getElementById("myBarChart2");
      var myBarChart2 = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: duLieuNgayThang,
          datasets: [{
            label: "SỐ CA NHIỄM",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: duLieuSoCaKhoi,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {

            yAxes: [{
              ticks: {
                min: 0,
                maxTicksLimit: 5,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function (value, index, values) {
                  return value.toLocaleString();
                }
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
        }
      });
      // Chart tử vong
      var ctx = document.getElementById("myBarChart3");
      var myBarChart3 = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: duLieuNgayThang,
          datasets: [{
            label: "SỐ CA NHIỄM",
            backgroundColor: "#C13016",
            hoverBackgroundColor: "#C13016",
            borderColor: "#C13016",
            data: duLieuSoCaTuVong,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {

            yAxes: [{
              ticks: {
                min: 0,
                maxTicksLimit: 5,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function (value, index, values) {
                  return value.toLocaleString();
                }
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
        }
      });
    })
}

