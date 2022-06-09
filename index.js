//laat de canvas zien op de browers
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
//maakt de canavas breeder

canvas.width = innerWidth
canvas.height = innerHeight
//speler aan maken
class Player{
    constructor() {
       
         
        this.velocity = {
            x: 0,
            y: 0
        }

         this.rotation = 0

        //speler onder in het schrem te krijgen
        const image = new image()
        image.src = './img/spaceship.png'
        image.onload = () => {
            const scale = 0.15
            this.image = image
            this.width = image.width * scale  
            this.height = image.height * scale
            this.position = {
                x: canvas.width / 2 - this.width / 2,
                y: canvas.height - this.height - 20
            }
        }

        
    }
    //de speler laten verschijnen op het scherm
    draw() {
        //c.fillStyle = 'red'
        //c.fillRect(this.position.x, this.position.y, this.width, 
        //this.height) 

        //speler kantelt mee als je naar links of rechts ga
        c.save()
        c.translate(
        player.position.x + player.width / 2,
        player.position.y + player.height / 2)


        c.rotate(this.rotation)

        c.translate(
            -player.position.x - player.width / 2,
            -player.position.y - player.height / 2)

        if(this.image)
        c.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
            )    
            c.restore
        }

    update(){
        if (this,this.image){
            this.draw
        this.position.x += this.velocity.x
        }
    }
}

const player = new player()
const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    space: {
        pressed: false
    }
}

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    
    if (keys.a.pressed && player.position.x >=0) {
        player.velocity.x = -7
        player.rotation = -0.15
    } else if(keys.d.pressed && player.position.x +player.width <= canvas.width){
        player.velocity.x = 7
        player.rotation = 0.15

    } else{
        player.velocity.x = 0
        player.rotation = 0

    }
}

animate() 
//speler laten bewegen met A.S.D.w
addEventListener('keydown', ({key}) => {
    console.log()
    switch (key) {
        case 'a':
            console.log('left')
            player.velocity.x = -5
            keys.a.pressed = true
            break
            case 'd':
            console.log('right')
            keys.d.pressed = true
            break
            case '':
            console.log('space')
            break
    }
})



addEventListener('keyup', ({key}) => {
    console.log()
    switch (key) {
        case 'a':
            console.log('left')
            player.velocity.x = -5
            keys.a.pressed = false
            break
            case 'd':
            console.log('right')
            keys.d.pressed = false
            break
            case '':
            console.log('space')
            break
    }
})