document.addEventListener('click', (event) => {
    if (event.target.classList.contains('show-pop-up-btn')){
        const targetId = event.target.getAttribute('data-id');
        const popUpToOpen = document.getElementById(targetId);

        if (popUpToOpen){
            popUpToOpen.classList.add('active');
            popUpToOpen.style.display = 'flex';
            console.log("Ouverture de : " + targetId)
        }
    }
});

function hidePopUp(){
    const activePopUp = document.querySelector('.pop-up.active');

    if (activePopUp){
        activePopUp.classList.remove('active');
        activePopUp.style.display = 'none';
        console.log("Action : Pop-up fermée");
    }
}

const hideBtn = document.querySelector('.hide-pop-up-btn');

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('hide-pop-up-btn')){
        hidePopUp();
    }
});