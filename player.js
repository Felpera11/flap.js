class Player {
    constructor(position = new vector2(0, 0), size = 10, speed = 1, color = "black", controller) {
        this.position = position;
        this.size = size;
        this.speed = speed;
        this.color = color;
        this.controller = controller;

        this.originalSize = size;
        this.originalSpeed = speed;
        this.col = new collider(new vector2(), 0);
    }

    setCollider(col = new collider(new vector2(this.position.x, this.position.y), this.size)){
        this.col = col;
    }

    /**Runs rendering logic */
    render() {
        ctx.fillStyle = this.color;
        this.drawSquare(this.position, this.size);
    }

    /**Draws a square on the specified coordinates of the canvas */
    drawSquare(pos, size)
    {
        ctx.fillRect(pos.x, pos.y, size, size);
    }

    /**Runs game logic */
    tick() {
        var move = new vector2(this.controller.state.Horizontal * this.speed, this.controller.state.Vertical * this.speed);
        this.position = this.position.add(move);
        this.col.position = this.position;

        this.position = clampPosition(this.position, this.size, WIDTH, HEIGHT);

        if(this.controller.state.Button)
        {
            /*Button Pressed */
        }


        for (let i = 0; i < entities.length; i++) {
            if(entities[i] == this)
            {
                continue;
            }
            if(this.col.checkCollision(entities[i].col))
            {
                /*Collision */
            }
        }
    }
}

class collider
{
    constructor(position = new vector2(), size = new vector2())
    {
        this.position = position;

        if(typeof(size) == vector2)
        {
            this.size = size;
        }
        else
        {
            this.size = new vector2(size, size);
        }

        collider.prototype.toString = function() {
            return "(" + this.position.x + "," + this.position.y + ")";
        }
    }

    /**Returns wheter this object's shape overlaps with another shape */
    checkCollision(col)
    {
        if(col.size.x == 0 || col.size.y == 0)
        {
            return false;
        }

        if(this.position.x + this.size.x < col.position.x || this.position.x > col.position.x + col.size.x)
        {
            return false;
        }
        if(this.position.y + this.size.y < col.position.y || this.position.y > col.position.y + col.size.y)
        {
            return false;
        }
        return true;
    }
}
