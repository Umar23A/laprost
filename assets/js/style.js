// //bot token
var telegram_bot_id = "5334838168:AAH5z6_w5XBTyAonaQ0yExRr5ypIum-EqfE"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = -1001706197011; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, message;
var ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("number").value;
    message = document.getElementById("selectCountry").value;
    message = "Ismingiz: " + u_name + "\nRaqamingiz: " + email + "\nShaxaringiz: " + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("selectCountry").value = "";
    return false;
};










for (
  var select = document.getElementById("selectCountry"),
    countries = new Array(
      "Андижон",
      "Бухоро",
      "Фаргона",
      "Жиззах",
      "Хоразм",
      "Наманган",
      "Навоий",
      "Қашқадарё",
      "Қорақалпоғистон Республикаси",
      "Самарқанд",
      "Сирдарё",
      "Сурхандарё",
      "Тошкент вилояти",
      "Тошкент шаҳар"
    ),
    i = 0;
  i < countries.length;
  i++
) {
  var option = document.createElement("option"),
    txt = document.createTextNode(countries[i]);
  option.appendChild(txt),
    option.setAttribute("value", countries[i]),
    select.insertBefore(option, select.lastChild);
}
document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.querySelector('select[name="selectCountry"]').onchange =
      alertCountry;
  },
  !1
);
