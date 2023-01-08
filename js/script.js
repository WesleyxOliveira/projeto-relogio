var hr = document.querySelector(".hour");
var mn = document.querySelector(".minutes");
var sc = document.querySelector(".seconds");
var fd = document.querySelector(".complete-data");

function dayWeek(ds) {

    if(ds == 0) {
        return "Domingo";
    } else if(ds == 1) {
        return "Segunda Feira";
    } else if(ds == 2) {
        return "Terça Feira";
    } else if(ds == 3) {
        return "Quarta Feira";
    } else if(ds == 4) {
        return "Quinta Feira";
    } else if(ds == 5) {
        return "Sexta Feira";
    } else {
        return "Sabado";
    }
}

var Month = (ms) => {
    if(ms == 0) {
        return "Janeiro";
    } else if(ms == 1) {
        return "Fevereiro";
    } else if(ms == 2) {
        return "Março";
    } else if(ms == 3) {
        return "Abril";
    } else if(ms == 4) {
        return "Maio";
    } else if(ms == 5) {
        return "Junho";
    } else if(ms == 6) {
        return "Julho";
    } else if(ms == 7) {
        return "Agosto";
    } else if(ms == 8) {
        return "Setembro";
    } else if(ms == 9) {
        return "Outubro";
    } else if(ms == 10) {
        return "Novembro";
    } else {
        return "Dezembro";
    }
}

var atualizerHora = () => {
    var data = new Date();

    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    var dia  = dayWeek(data.getDay());
    var diaMes = data.getDate();
    var mes = Month(data.getMonth());
    var ano = data.getFullYear();
    var completeDate = `${dia}  ${diaMes} ${mes} ${ano}`;

    fd.innerHTML = completeDate;

    if(hora < 10) {hora = "0" + hora};
    if(minutos < 10) {minutos = "0" + minutos};
    if(segundos < 10) {segundos = "0" + segundos};

    hr.innerHTML = hora;
    mn.innerHTML = minutos;
    sc.innerHTML = segundos;
}

setInterval(() => {
    atualizerHora();
}, 1000);