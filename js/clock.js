const isim = prompt('Adınız nedir?');
document.querySelector('#myName').innerHTML = isim;
const gunler = ['Pazar','Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
function showTime(){
    let zaman = new Date();
    let h = zaman.getHours();
    let m = zaman.getMinutes();
    let s = zaman.getSeconds();
    let day = gunler[zaman.getDay()];
    let suan = `${h}:${m}:${s} ${day}`;
    document.querySelector('#myClock').innerHTML = suan
};
setInterval(showTime,500);