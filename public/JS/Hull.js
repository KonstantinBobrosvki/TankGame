class Hull {
    //hulltype is number from 0 to 8 which shows which hull must be used
    constructor(container, hulltype, color) {

        this.ANGLE_DELTA = 0.01;

        this.SPEED = 0.05;

       


        this.hullType = hulltype;

        this.container = container;

        this.createBody(container, color);
    }

    createBody(container, color) {
        const kind = color + '_Hull_0' + this.hullType;

        this.body = container.scene.matter.add.image(0, 0, kind).setStatic(true);

        var track_X = 0 - this.body.width / 2;
        this.track1 = container.scene.matter.add.sprite(track_X + 5, 0, 'Track_1_A')
        this.track2 = container.scene.matter.add.sprite(track_X + this.body.width - 5, 0, 'Track_1_A')
        this.track1.setCollisionCategory(null);
        this.track2.setCollisionCategory(null);



        container.add(this.body);
        container.add(this.track1);
        container.add(this.track2);
        container.bringToTop(this.body)

        
        var matterBody = container.scene.matter.bodies.rectangle(container.x, container.y, this.body.width, this.body.height) // setup matter.js-body
        container.setExistingBody(matterBody);

        container.setFrictionAir(0.15)
            .setMass(30)
            .setScale(0.9)
            .setFixedRotation()
            .setAngularVelocity(0)
            .setVelocity(0, 0);

        container.scene.matter.world.remove(this.body);
        container.scene.matter.world.remove(this.track1);
        container.scene.matter.world.remove(this.track2);


        //container.setCollisionCategory(2);
        
        //container.setCollidesWith(4 | 1 | 2);
    }

    rotate(delta) {
        this.container.setAngularVelocity(delta);
    }

    rotateClockwise() {
        this.rotate(this.ANGLE_DELTA);
    }

    rotateCounterclockwise() {
        this.rotate(-this.ANGLE_DELTA);
    }

    goForward() {
        this.container.thrustLeft(this.SPEED);
        this.track1.play('trackGo_1',true)
        this.track2.play('trackGo_1',true)
    }

    goBackward() {
        this.container.thrustLeft(-this.SPEED);
        this.track1.play('trackGo_1', true)
        this.track2.play('trackGo_1', true)
    }

    GetSpeed() {
        return this.SPEED;
    }

    GetContainer() {
        return this.container;
    }

};

export { Hull }
