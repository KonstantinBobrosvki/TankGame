class Gun {

    //type is number from 0 to 8 which shows which gun must be used
    constructor(scene, x, y, type,color) {
        this.ANGLE_DELTA = 0.01;

        
        this.scene = scene;

        this.Type = type;

        const kind = color+'_Gun_0' + type;

        this.body = this.scene.matter.add.image(x, y, kind);

        this.body.setFrictionAir(0.15)
            .setMass(30)
            .setScale(0.9)
            .setFixedRotation()
            .setAngularVelocity(0)
            .setVelocity(0, 0);

        this.body.setCollisionCategory(null);


        
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

    moveForward(speed) {
        this.thrustLeft(speed);
    }

    moveBackward(speed) {
        this.body.thrustLeft(-speed);
    }

    GetBody() {
        return this.body;
    }

   
};

export { Gun }
