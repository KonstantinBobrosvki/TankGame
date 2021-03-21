import { Tank } from './Tank.js';

class Game extends Phaser.Scene {
    

    constructor() {
        super({ key: 'Game' });
       
    }

    create() {
        const world_width = 3000;
        const world_height = 2000;

        for (var i = 1; i < 5; i++) {
            this.anims.create({
                key: 'trackGo_'+i,
                frames: [
                    { key: 'Track_'+i+'_A' },
                    { key: 'Track_' + i + '_B' },
                ],
                frameRate: 4,
                repeat: 1
                
            });
        }
       

        this.matter.world.setBounds(0, 0, world_width, world_height)
        for (var i = 128; i <= world_width; i = i + 256) {
            for (var ii = 128; ii < world_height; ii=ii+256) {
                this.add.tileSprite(i, ii, 256, 256, 'background')

            }

        }
        this.input.setPollAlways(true);
       
        
        this.createInput();

        this.player = new Tank(this, Phaser.Math.Between(400, 2600), Phaser.Math.Between(500, 1500), Phaser.Math.Between(1, 8), Phaser.Math.Between(1, 8), ['A', 'B', 'C', 'D'][Phaser.Math.Between(0, 3)]);
        new Tank(this, Phaser.Math.Between(400, 2600), Phaser.Math.Between(500, 1500), Phaser.Math.Between(1, 8), Phaser.Math.Between(1, 8), ['A', 'B', 'C', 'D'][Phaser.Math.Between(0, 3)])
        this.cameras.main.startFollow(this.player.GetContainer());

        this.matter.world.on('collisionstart', function (event, bodyA, bodyB) {
            console.log('collision');
        });
        console.log('complete create')
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

        this.mouse = this.input.mousePointer;
    }

    update() {
        this.input.activePointer.updateWorldPoint(this.cameras.main);

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
        var hull = this.player.GetContainer();
        

        const crosshairX = this.input.activePointer.worldX
        const crosshairY = this.input.activePointer.worldY

       

        

        let angle = Phaser.Math.Angle.Between(gun.x + hull.x, gun.y + hull.y, crosshairX, crosshairY);

        this.player.rotateGun(angle + Math.PI / 2);

        if (this.mouse.isDown) {
            this.player.Shoot();
        }

        

    }



}

export default Game