// prevent.js

// 1. 우클릭 방지 (PC)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);


// 2. 텍스트 선택 방지 (PC + 모바일)
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
}, false);


// 3. 이미지 및 요소 드래그 방지
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
}, false);


// 4. 모바일 꾹 누르기 방지
document.addEventListener('DOMContentLoaded', function() {

    document.body.style.webkitUserSelect = 'none';
    document.body.style.userSelect = 'none';
    document.body.style.webkitTouchCallout = 'none';

});