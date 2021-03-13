import Game  from './Game.js';
import Loader from './Loader.js';
import Creater from './Creater.js';


var config = {
    type: Phaser.AUTO,

    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.innerWidth,
        height: window.innerHeight
    },
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                x: 0,
                y: 0
            },
            debug: true,
        }
    },
    scene: [
        Loader,
        Creater,
        Game
    ]
};

new Phaser.Game(config);
