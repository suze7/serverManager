export class MenuData {
  name: string;
  img: string;
  url: string;
  data: any;
  active = false;
  constructor(name, img, url, data) {
    this.name = name;
    this.img = img;
    this.url = url;
    this.data = data;
  }

  setActive(flag: boolean) {
    this.active = flag;
  }

  getImg () {
    if (this.active) {
      return this.img + '-active.png';
    } else {
      return this.img + '.png';
    }
  }
}

// export class MenuActiveController {
//   activeMenu: MenuData;

//   setActiveData(activeMenu: MenuData) {
//     this.cancelActiveData();
//     this.activeMenu = activeMenu;
//     this.activeMenu.setActive(true);
//   }

//   cancelActiveData() {
//     if (this.activeMenu) {
//       this.activeMenu.setActive(false);
//     }
//   }

//   getActiveData() {
//     return this.activeMenu;
//   }
// }
