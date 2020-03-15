// const tab = document.querySelector('.tab__block');
// const block_photo = document.querySelector('.tabs__block');
// tab.addEventListener('click', function(){
// })
let tab = function () {
    let tabNav = document.querySelectorAll('.tab__block'),
        tabBlock = document.querySelectorAll('.tabs__block'),
        tabName;
    
    tabNav.forEach( item => {
        item.addEventListener('click', selectTabNav)

    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('tab_active');
        });
        this.classList.add('tab_active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
        tabBlock.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('block_active') : item.classList.remove('block_active');
            

        })
    }
}

tab();