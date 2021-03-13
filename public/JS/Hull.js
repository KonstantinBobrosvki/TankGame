class Hull {
    //hulltype is number from 0 to 8 which shows which hull must be used
    constructor(scene, x, y, hulltype, color) {

        this.ANGLE_DELTA = 0.01;

        this.SPEED = 0.05;

        this.scene = scene;

        this.hullType = hulltype;

        const kind = color+ '_Hull_0' + hulltype;
        this.body = this.scene.matter.add.image(x, y, kind);

        this.body.setFrictionAir(0.15)
            .setMass(30)
            .setScale(0.9)
            .setFixedRotation()
            .setAngularVelocity(0)
            .setVelocity(0, 0);



    }

    rotate(delta) {
        this.body.setAngularVelocity(delta);
    }

    rotateClockwise() {
        this.rotate(this.ANGLE_DELTA);
    }

    rotateCounterclockwise() {
        this.rotate(-this.ANGLE_DELTA);
    }

    goForward() {
        this.body.thrustLeft(this.SPEED);
    }

    goBackward() {
        this.body.thrustLeft(-this.SPEED);
    }

    GetSpeed() {
        return this.SPEED;
    }

    GetBody() {
        return this.body;
    }

};

export { Hull }
