class Gun {

    //type is number from 0 to 8 which shows which gun must be used
    constructor(scene, x, y, type, color, container) {


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

        this.body.setOrigin(0.5, 0.7);
       
        container.add(this.body)
        console.log(container.getIndex(this.body))
        var t = container.getAt(container.getIndex(this.body))
        t.x = 0;
        t.y = 30;
        this.scene.matter.world.remove(this.body)

       
    }

    rotate(delta) {
       //console.log(delta)
        this.body.setRotation(delta);
       
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


    Shoot(hull) {
        const bullet_speed = 0.1;

        if (!this.shooted) {

           var x = hull.x;
           var y = hull.y;

            this.shooted = true;
            //console.log(this.body.angle )
            x = x - this.body.x;
            y = y + this.body.y;
            var bullet = this.scene.matter.add.image(x, y, 'bullet')
            var angle = this.body.angle+hull.angle;


            var cos = Math.cos(angle);
            var sin = Math.sin(angle);
            //console.log([cos,sin])
            
            var x_n = x * cos + y * sin;
            var y_n = (-1) * x * sin + y * cos;
            x_n = Math.max(x_n, -x_n);
            y_n = Math.max(y_n, -y_n);

            //console.log([x_n, y_n ])

            var matterBody = this.scene.matter.bodies.rectangle(x, y, 40, 40)
            bullet.setExistingBody(matterBody)
            bullet.setCollisionCategory('otherTank');
            

            bullet.setAngle(angle);
            bullet.thrustLeft(bullet_speed);

            setTimeout(() => { this.shooted = false },1000)
        }

    }

   
};

export { Gun }
