import { Tank } from './Tank.js';

class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'Game' });
       
    }

    create() {

        this.player = new Tank(this, 400, 500, Phaser.Math.Between(1, 8), Phaser.Math.Between(1, 8), ['A', 'B', 'C', 'D'][Phaser.Math.Between(0, 3)]);
        this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#0000FF");
        this.createInput();
    }

    createInput() {

       

        this.cursors = this.input.keyboard.createCursorKeys();

        this.counterclockwise = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.A);

        this.clockwise = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.D);

        this.forward = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.W);

        this.backward = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.S);

        [
            this.cursors.up, this.cursors.down, this.cursors.left,
            this.cursors.right, this.counterclockwise, this.clockwise,
            this.forward, this.backward,
        ].forEach(key => {
            key.reset();
        });
    }

    update() {
     

        if (this.clockwise.isDown || this.cursors.right.isDown) {
            this.player.rotateClockwiseHull();
        }
        else if (this.counterclockwise.isDown || this.cursors.left.isDown) {
            this.player.rotateCounterclockwiseHull();
        }
        if (this.forward.isDown || this.cursors.up.isDown) {
            this.player.goForward();
        }
        else if (this.backward.isDown || this.cursors.down.isDown) {
            this.player.goBackward();
        }
        var gun = this.player.GetGunBody();

        var input = this.input;
        let angle = Phaser.Math.Angle.Between(gun.x, gun.y, input.x, input.y);

        this.player.rotateGun(angle);

       // this.cameras.main.startFollow(this.player.GetHullBody());

    }



}

export default Game