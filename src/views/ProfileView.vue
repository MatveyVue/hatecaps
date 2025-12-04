<template>
<div id="preloader">
  <div style="" class="loader">loading</div>
</div>

<center>
    <h1 style="color: white; margin-top: 50vw;">Soon</h1>
</center>

<div class="bar">
<div class="btn-container">
<RouterLink to="market">
    <button class="market">
        <img style="position: absolute; margin-left: -17px; margin-top: 5px;" src="https://github.com/MatveyVue/icopn/blob/main/Market.png?raw=true" width="33px"></img>
        <p style="margin-top: 40px; color: white;">Market</p>
    </button>
</RouterLink>
<RouterLink to="/">
    <button class="leaders">
        <img style="position: absolute; margin-left: -18px;" src="https://github.com/MatveyVue/icopn/blob/main/LeaderBoard.png?raw=true" width="40px"></img>
        <p style="margin-top: 40px; color: white;">Top</p>
    </button>
</RouterLink>
    <button class="profile">
        <img style="position: absolute; margin-left: -18px;" src="https://github.com/MatveyVue/icopn/blob/main/ProfileActive.png?raw=true" width="35px"></img>
        <p style="margin-top: 40px; color: rgb(25, 122, 207);">Profile</p>
    </button>
</div>
</div>
</template>
    
<script setup>
import { caps, profile, open, top1, top2, top3 } from '../script/home.js'; 
console.log(profile.value); 

window.addEventListener('load', function() {
    // Убираем стандартное поведение при загрузке, т.к. будем использовать setTimeout
});

// Устанавливаем таймер на 10 секунд (10000 миллисекунд)
setTimeout(function() {
    const preloader = document.getElementById('preloader');
    if (preloader) { // Проверяем, существует ли элемент
        preloader.classList.add('hidden'); // Добавляем класс для скрытия
    }
}, 5000); // 10000 миллисекунд = 10 секунд
</script>