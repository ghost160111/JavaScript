
class Nav {
    constructor() {
        this.doc = document;
    }
}

class MobileNav extends Nav {

    constructor(on, off) {
        super();

        this.on = on;
        this.off = off;
    }

    get On  () { return this.on;  }
    get Off () { return this.off; }

    turn_on_nav (menu_id, btn_id1, btn_id2) {

        let menu = this.doc.getElementById(menu_id),
            btn1 = this.doc.getElementById(btn_id1),
            btn2 = this.doc.getElementById(btn_id2);
        
        menu.style.display = this.on;
        btn1.style.display = this.off;
        btn2.style.display = this.on;

        return { menu, btn1, btn2 };
    }

    turn_off_nav (menu_id, btn_id1, btn_id2) {

        let menu = this.doc.getElementById(menu_id),
            btn1 = this.doc.getElementById(btn_id1),
            btn2 = this.doc.getElementById(btn_id2);
        
        menu.style.display = this.off;
        btn1.style.display = this.on;
        btn2.style.display = this.off;

        return { menu, btn1, btn2 };
    }

}


const mobile_nav = new MobileNav('block', 'none');

const nav_on  = (nav_id = "mob", btn_id1 = "on", btn_id2 = "off") => mobile_nav.turn_on_nav(nav_id, btn_id1, btn_id2);
const nav_off = (nav_id = "mob", btn_id1 = "on", btn_id2 = "off") => mobile_nav.turn_off_nav(nav_id, btn_id1, btn_id2);

