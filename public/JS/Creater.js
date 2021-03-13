import { Tank } from './Tank.js';

class Creater extends Phaser.Scene {
    constructor() {
        super({ key: "Creater" });
    }

    

    update() {
        this.scene.start('Game');
    }

}
export default Creater;