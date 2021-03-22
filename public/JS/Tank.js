import { Hull } from './Hull.js';
import { Gun } from './Gun.js';

class Tank {
    //hulltype is number from 0 to 8 which shows which hull must be used
    //guntype is number from 0 to 8 which shows which gun must be used
    //color is char A/B/C/D
    //isPlayer bool
    constructor(scene, x, y, hulltype, guntype, color, isPlayer) {

        this.isPlayer = isPlayer;

        this.scene = scene;
        var container = this.CreateMatterContainer(x,y)
        this.Hull = new Hull(container , hulltype, color)
        this.Gun = new Gun(container, guntype, color)

        container.setCollisionCategory(this.isPlayer ? 2 : 8);

        container.setCollidesWith(4 | 1 | 2 | 8);

        console.log(container);
    }

    CreateMatterContainer(x, y) {


        var container = this.scene.add.container(x, y);

        this.matterEnabledContainer = this.scene.matter.add.gameObject(container);

        this.matterEnabledContainer.setCollisionCategory(this.isPlayer? 2 : 8);

        this.matterEnabledContainer.setCollidesWith(4 | 1 | 2 | 8);

        return container;
    }

    rotateHull(delta) {
        this.Hull.rotate(delta);
        
    }

    rotateClockwiseHull() {
        this.Hull.rotateClockwise();
     

    }

    rotateCounterclockwiseHull() {
        this.Hull.rotateCounterclockwise();
       
    }

    rotateGun(delta) {
        
        this.Gun.rotate(delta - this.Hull.GetContainer().rotation);
    }

    GetGunBody() {
        return this.Gun.GetBody();
    }

    GetContainer() {
        return this.Hull.GetContainer();
    }

    goForward() {
        this.Hull.goForward();
       // this.Gun.moveForward(this.Hull.GetSpeed());
    }

    goBackward() {
        this.Hull.goBackward();
        //this.Gun.moveBackward(this.Hull.GetSpeed())
    }

    Shoot() {
        var hull = this.GetContainer();
        this.Gun.Shoot(hull);
    }

};

export { Tank }
