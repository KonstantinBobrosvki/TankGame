import { Hull } from './Hull.js';
import { Gun } from './Gun.js';

class Tank {
    //hulltype is number from 0 to 8 which shows which hull must be used
    //guntype is number from 0 to 8 which shows which gun must be used
    //color is char A/B/C/D
    constructor(scene, x, y, hulltype, guntype, color) {

        this.Hull = new Hull(scene, x, y, hulltype,color)
        this.Gun = new Gun(scene, x, y, guntype, color, this.Hull.GetContainer())

        this.scene = scene;

      //this.body=this.scene.matter.add.constraint(this.Hull.GetBody(), this.Gun.GetBody());
    }

    rotateHull(delta) {
        this.Hull.rotate(delta);
        //this.Gun.rotate(delta);
    }

    rotateClockwiseHull() {
        this.Hull.rotateClockwise();
       this.Gun.rotate(this.Hull.GetContainer().rotation);

    }

    rotateCounterclockwiseHull() {
        this.Hull.rotateCounterclockwise();
        this.Gun.rotate(this.Hull.GetContainer().rotation);
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
