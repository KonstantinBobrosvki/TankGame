class Loader extends Phaser.Scene {
    constructor() {
        super({ key: "Loader" });

    }

    preload() {

        this.load.image('hull', 'assets/Tanks/Hulls_Color_A/Hull_01.png');
        this.load.image('weapon', 'assets/Tanks/Weapon_Color_A/Gun_01.png');
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