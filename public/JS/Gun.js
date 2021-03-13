class Gun {

    //type is number from 0 to 8 which shows which gun must be used
    constructor(scene, x, y, type,color) {
        this.ANGLE_DELTA = 10;

        
        this.scene = scene;

        this.Type = type;

        const kind = color+'_Gun_0' + type;

        this.body = this.scene.matter.add.image(x, y+20, kind);

        this.body.setFrictionAir(0.15)
            .setMass(30)
            .setScale(0.9)
            .setFixedRotation()
            .setAngularVelocity(0)
            .setVelocity(0, 0);

        this.body.setCollisionCategory(null);

        this.body.setOrigin(0.5, 0.7);
       
        
    }

    rotate(delta) {
       

       
        this.body.setRotation(delta + Math.PI / 2);
       
    }

    rotateClockwise() {
        this.rotate(this.ANGLE_DELTA);
    }

    rotateCounterclockwise() {
        this.rotate(-this.ANGLE_DELTA);
    }


    GetBody() {
        return this.body;
    }

   
};

export { Gun }
