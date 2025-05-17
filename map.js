ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map",{
    center: [53.901716, 27.556899], // Пример: Минск
    zoom: 10,
  });

  var myPlacemark = new ymaps.Placemark([53.901716, 27.556899], {
    hintContent: "Мы здесь!",
    balloonContent: "Адрес вашей компании",
  });

  var myMap = new ymaps.Map("map1",{
    center: [53.901716, 27.556899], // Пример: Минск
    zoom: 10,
  });

  var myPlacemark = new ymaps.Placemark([53.901716, 27.556899], {
    hintContent: "Мы здесь!",
    balloonContent: "Адрес вашей компании",
  });

  myMap.geoObjects.add(myPlacemark);
}