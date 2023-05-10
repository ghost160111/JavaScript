class MobileNav {
    menu = "burgerMenu";
    menu_on = "menu on";
    menu_off = "menu off";
    menu_id = "menu";
    menu_on_id = "on";
    menu_off_id = "off";
    
    constructor(burgerMenu, menuOn, menuOff) {
        this.burgerMenu = burgerMenu;
        this.menuOn = menuOn;
        this.menuOff = menuOff;
    }
    get [menu]() {
        return this.burgerMenu;
    }
    set [menu](menu_id) {
        this.burgerMenu = document.getElementById(menu_id);
    }

    get [menu_on]() { return this.menuOn; }
    get [menu_off]() { return this.menuOff; }

    set [menu_on](turn_on_btn_id) {
        turn_on_btn_id = menu_on_id;
        this.menuOn = turn_on_btn_id;
    }

    set [menu_off](turn_off_btn_id) {
        turn_off_btn_id = menu_off_id;
        this.menuOff = turn_off_btn_id;
    }

    turn_on(menu_on_btn_id) {
        menu_on_btn_id = menu_on_id;
        let btn = document.getElementById(menu_on_btn_id);
        
    }

    turn_off(menu_off_btn_id) {

    }
}
