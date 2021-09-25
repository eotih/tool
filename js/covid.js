(function ($) {
    const fields = [
        {
            title: "Tỉnh/TP",
            name: "name",
            type: "text",
            width: 200
        },
        {
            title: "Tổng số ca",
            name: "cases",
            type: "number",
            width: 100
        },
        {
            title: "Hôm nay",
            name: "casesToday",
            type: "number",
            width: 100
        },
        {
            title: "Tử vong",
            name: "death",
            type: "text",
            width: 100
        },
    ]
    'use strict';
    $(function () {
        fetch("https://static.pipezero.com/covid/data.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                var duLieuNgayThang = [];
                var duLieuSoCaNhiem = []
                var duLieuSoCaKhoi = []
                var duLieuSoCaTuVong = []
                var data = response.locations;
                const { cases, death, recovered } = response.today.internal;
                for (let i = 0; i < 7; i++) {
                    duLieuNgayThang.push(response.overview[i].date);
                    duLieuSoCaNhiem.push(response.overview[i].recovered);
                    duLieuSoCaKhoi.push(response.overview[i].cases);
                    duLieuSoCaTuVong.push(response.overview[i].death);
                }
                var searchByName = data.filter(v => v.name === 'Bình Dương'
                    || v.name === 'TP. Hồ Chí Minh'
                    || v.name === 'Đắk Lắk'
                    || v.name === 'Gia Lai'
                    || v.name === 'Bình Thuận')

                // Xuất ra tbody tình hình dịch cả nước
                var html = data.map(function (response) {
                    const { name, cases, casesToday, death } = response;
                    return `<tr>
                    <td>${name}</td>
                    <td>${cases}</td>
                    <td>${casesToday}</td>
                    <td>${death}</td>
                    </tr>`;
                })
                $('#bang1').html(html);
                $(document).ready(function () {
                    $('#dataTable').DataTable({
                        "order": [[2, "desc"]]
                    });
                });
                // Xuất ra tbody Friend's Areas
                var html = searchByName.map(function (response) {
                    const { name, cases, casesToday, death } = response;
                    return `<tr>
                    <td>${name}</td>
                    <td>${cases}</td>
                    <td>${casesToday}</td>
                    <td>${death}</td>
                    </tr>`;
                })
                $('#bang2').html(html);
                $(document).ready(function () {
                    $('#dataTable2').DataTable({
                        "order": [[2, "desc"]]
                    });
                });

                getDateTime();
                $('#canhiemhomnay').text('+ ' + cases.toLocaleString());
                $('#tuvonghomnay').text('+ ' + death.toLocaleString());
                $('#hoiphuchomnay').text('+ ' + recovered.toLocaleString());

                $('#hoiphuchomnaytg').text(response.today.world.recovered.toLocaleString());
                $('#canhiemhomnaytg').text('+ ' + response.today.world.cases.toLocaleString());

                $('#tongsocanhiem').text(response.total.internal.cases.toLocaleString());
                $('#tongsotuvong').text(response.total.internal.death.toLocaleString());
                $('#tongsocahoiphuctrongnuoc').text(response.total.internal.recovered.toLocaleString());

                $('#tongsocathegioi').text(response.total.world.cases.toLocaleString());
                $('#tongsocahoiphucthegioi').text(response.total.world.recovered.toLocaleString());

                $('#nhiemtrungbinh7ngay').text('Trung bình 7 ngày : ' + response.overview[0].avgCases7day.toLocaleString());
                $('#khoitrungbinh7ngay').text('Trung bình 7 ngày : ' + response.overview[0].avgRecovered7day.toLocaleString());
                $('#tuvongtrungbinh7ngay').text('Trung bình 7 ngày : ' + response.overview[0].avgDeath7day.toLocaleString());
            })
    });
})(jQuery);
function getDateTime() {
    var myVar = setInterval(function () {
        var today = new Date();
        var current_day = today.getDay();
        var day_name = '';
        switch (current_day) {
            case 0:
                day_name = "Chủ nhật";
                break;
            case 1:
                day_name = "Thứ hai";
                break;
            case 2:
                day_name = "Thứ ba";
                break;
            case 3:
                day_name = "Thứ tư";
                break;
            case 4:
                day_name = "Thứ năm";
                break;
            case 5:
                day_name = "Thứ sau";
                break;
            case 6:
                day_name = "Thứ bảy";
        }
        var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        var dateTime = day_name + ', ' + date + ' ' + time;
        $('#nguon').text("Nguồn: Bộ Y Tế - Cập nhật lúc  " + dateTime);
    }, 500)

}