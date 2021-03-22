class Gun {

    //type is number from 0 to 8 which shows which gun must be used
    constructor(container, type, color) {


        this.ANGLE_DELTA = 0.01;
       

        this.Type = type;

        const kind = color+'_Gun_0' + type;

        this.body = container.scene.matter.add.image(0, 30, kind);

        this.body.setFrictionAir(0.15)
            .setMass(30)
            .setScale(0.9)
            .setFixedRotation()
            .setAngularVelocity(0)
            .setVelocity(0, 0);

        this.body.setCollisionCategory(null);

        this.body.setOrigin(0.5, 0.7);

        this.container = container;
       
        container.add(this.body)
        
        container.scene.matter.world.remove(this.body)

        
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
            var bullet = this.container.scene.matter.add.image(x, y, 'bullet')
            var angle = this.body.angle+hull.angle;


            
            
            var x_n = x + 130 * Math.cos((angle - 90) * Math.PI / 180);
            var y_n = y + 160* Math.sin((angle-90) * Math.PI / 180);
           

            //console.log([x_n, y_n ])

            var matterBody = this.container.scene.matter.bodies.rectangle(x_n, y_n, 40, 40)
            bullet.setExistingBody(matterBody)

            var enemyGroup = this.container.body.collisionFilter.category == 2 ? 8 : 2

            bullet.setCollisionCategory(4);//4 is bullet
            bullet.setCollidesWith(enemyGroup | 4);//2 is tank

            bullet.setAngle(angle);
            bullet.thrustLeft(bullet_speed);

            bullet.setOnCollide(pair => {
              //  console.log(pair.bodyA.collisionFilter.category);
                
               
                
                if (pair.bodyA.collisionFilter.category != 1 && pair.bodyB.collisionFilter.category != 1) {
                    
                    pair.bodyA.gameObject.destroy()
                    pair.bodyB.gameObject.destroy()
                   
                    console.log('Destroyed')
                }
                
            }); 

            setTimeout(() => { this.shooted = false }, 1000)
            setTimeout(() => {
                bullet.destroy();
            }, 2000)    
        }

    }

   
};

export { Gun }
