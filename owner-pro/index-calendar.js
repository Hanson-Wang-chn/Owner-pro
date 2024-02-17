var today = new Date();
var year = today.getFullYear();//获得年份
var month = today.getMonth() + 1;//获得月份，getMonth是从0-11的
var day = today.getDate();//获得当前日
var days = 0;
//先判断每个月应该有的天数
function count() {
    if (month != 2) {
        if ((month == 4) || (month == 6) || (month == 9) || (month == 11)) {
            days = 30;
        } else {
            days = 31;
        }
    } else {
        if ((year % 4) == 0 && (year % 100) != 0 || year % 400 == 0) {
            days = 29;
        } else {
            days = 28;
        }
    }
}
//输出当前日期
function showMonth() {
    var year_month = year + "年" + month + "月" + day + "日";
    document.getElementById("dqrq").innerHTML = year_month;
}

function showDate() {
    showMonth();
    count();
    var firstdate = new Date(year, month - 1, 1);
    var xq = firstdate.getDay();
    var daterow = document.getElementById("day");
    daterow.innerHTML = "";
    if (xq != 0) {
        for (var i = 0; i < xq; i++) {
            var dayElement = document.createElement("div");
            dayElement.className = "everyday";
            daterow.appendChild(dayElement);
        }
    }
    for (var j = 1; j <= days; j++) {
        var dayElement = document.createElement("div");
        dayElement.className = "everyday";
        dayElement.innerHTML = j + "";
        if (j == day) {
            dayElement.style.color = "red";
        }
        daterow.appendChild(dayElement);
    }
}
//上个月
function lastMonth() {
    if (month > 1) {
        month = month - 1;
    } else {
        month = 12;
        year = year - 1;
    }
    showDate();
}
//下个月
function nextMonth() {
    if (month < 12) {
        month = month + 1;
    } else {
        month = 1;
        year = year + 1;
    }
    showDate();
}