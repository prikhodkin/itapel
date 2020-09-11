export const changeSubmenuImg = () => {
  const wrap = document.querySelectorAll(`.submenu__wrapper`);


  wrap.forEach(it => {
    it.addEventListener(`mouseover`, (e) => {

      if (e.target.classList.contains('submenu__link')) {
        let item = e.target.closest('.submenu__item');
        const imgContainer = it.querySelector(`.submenu__image`);
        const img = imgContainer.querySelector(`picture`);
        const title = imgContainer.querySelector(`.submenu__reccomend-title`);

        if (item) {
          let itemImg = item.querySelector(`picture`);
          let clone = itemImg.cloneNode(true);
          let itemTitle = item.querySelector(`.submenu__reccomend-title`);
          title.textContent = itemTitle.textContent;

          if (itemImg) {
            imgContainer.replaceChild(clone, img)
          }
        }
      }

    })
  })
}
