class Loader extends Phaser.Scene {
    constructor() {
        super({ key: "Loader" });

    }

    preload() {
        //Load all hulls
        for (var i = 1; i < 9; i++) {
            this.load.image('A_Hull_0'+i, 'assets/Tanks/Hulls_Color_A/Hull_0' + i + '.png');
            this.load.image('B_Hull_0' + i, 'assets/Tanks/Hulls_Color_B/Hull_0' + i + '.png');
            this.load.image('C_Hull_0' + i, 'assets/Tanks/Hulls_Color_C/Hull_0' + i + '.png');
            this.load.image('D_Hull_0' + i, 'assets/Tanks/Hulls_Color_D/Hull_0' + i + '.png');
        }
        //Load all guns
        for (var i = 1; i < 9; i++) {
            this.load.image('A_Gun_0' + i, 'assets/Tanks/Weapon_Color_A_256X256/Gun_0' + i + '.png');
            this.load.image('B_Gun_0' + i, 'assets/Tanks/Weapon_Color_B_256X256/Gun_0' + i + '.png');
            this.load.image('C_Gun_0' + i, 'assets/Tanks/Weapon_Color_C_256X256/Gun_0' + i + '.png');
            this.load.image('D_Gun_0' + i, 'assets/Tanks/Weapon_Color_D_256X256/Gun_0' + i + '.png');
        }
    
        // this.load.image('bullet', 'assets/Tanks/Effects/Sprites/Sprite_Effects_Exhaust_01_000.png');
        this.load.spritesheet('bullet',
            'assets/Tanks/Effects/Sprites/Sprite_Effects_Exhaust_01_000.png',
            { frameWidth: 32, frameHeight: 48 }
        );
        this.load.image('background', 'assets/Titles/Tiles/Ground_Tile_01_A.png');
    }

    update() {
        this.scene.start('Creater');
    }

}
export default Loader;