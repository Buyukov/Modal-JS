'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //querySelectorAll shu classlar qayerda bo'lsa hammasini oladi All qo'shilsa.


const closeModal = function(){
    modal.classList.add('hidden'); //add ni o'rniga toggle ni ham qo'shsak bo'ladi toggle add bugan busa remove qiladi remove bogan busa add qiladi.
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Modalni klaviatura bilan yopish //
document.addEventListener('keydown', function(event){
     console.log(event.key);

  if (event.key === 'Escape') {
    closeModal();
  }
}); 
/* 'keydown' klaviatura bosilganda ishga tushadi. 
'keypress' bosibb tursa ishloviradi. 
'keyup' klaviaturani bosib qo'yvaryotgan paytda ishga tushadi.
*/

