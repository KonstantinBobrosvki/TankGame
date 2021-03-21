class Hull {
    //hulltype is number from 0 to 8 which shows which hull must be used
    constructor(scene, x, y, hulltype, color) {

        this.ANGLE_DELTA = 0.01;

        this.SPEED = 0.05;

        this.scene = scene;

        this.hullType = hulltype;

        const kind = color+ '_Hull_0' + hulltype;

       

        this.container = this.scene.add.container(x, y);
        this.body = this.scene.matter.add.image(0, 0, kind).setStatic(true);

        var track_X = 0 - this.body.width/2;
        this.track1 = this.scene.matter.add.sprite(track_X+5, 0, 'Track_1_A')
        this.track2 = this.scene.matter.add.sprite(track_X + this.body.width-5, 0, 'Track_1_A')
        this.track1.setCollisionCategory(null);
        this.track2.setCollisionCategory(null);
        

        this.container.add(this.body);
        this.container.add(this.track1);
        this.container.add(this.track2);
        this.container.bringToTop(this.body)
        this.matterEnabledContainer = scene.matter.add.gameObject(this.container);
        var matterBody = this.scene.matter.bodies.rectangle(x,y,this.body.width,this.body.height) // setup matter.js-body
        this.matterEnabledContainer.setExistingBody(matterBody);

        this.matterEnabledContainer.setFrictionAir(0.15)
            .setMass(30)
            .setScale(0.9)
            .setFixedRotation()
            .setAngularVelocity(0)
            .setVelocity(0, 0);

        this.scene.matter.world.remove(this.body);
        this.scene.matter.world.remove(this.track1);
        this.scene.matter.world.remove(this.track2);

        
        this.matterEnabledContainer.setCollisionCategory(2);
        console.log(this.scene.matter.world.walls)
        this.matterEnabledContainer.setCollidesWith(4 | 1  |2);
    }

    rotate(delta) {
        this.matterEnabledContainer.setAngularVelocity(delta);
    }

    rotateClockwise() {
        this.rotate(this.ANGLE_DELTA);
    }

    rotateCounterclockwise() {
        this.rotate(-this.ANGLE_DELTA);
    }

    goForward() {
        this.matterEnabledContainer.thrustLeft(this.SPEED);
        this.track1.play('trackGo_1',true)
        this.track2.play('trackGo_1',true)
    }

    goBackward() {
        this.matterEnabledContainer.thrustLeft(-this.SPEED);
        this.track1.play('trackGo_1', true)
        this.track2.play('trackGo_1', true)
    }

    GetSpeed() {
        return this.SPEED;
    }

    GetContainer() {
        return this.matterEnabledContainer;
    }

};

export { Hull }
