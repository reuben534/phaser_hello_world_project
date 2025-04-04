function preload() {
    this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');
}

function create() {
    this.add.text(50, 100, "Ruby's Adventures\n  in Showdown", { font: "40px Times New Roman", fill: "#ffa0d0" });
    this.add.text(130, 300, "by Reuben", { font: "20px Times New Roman", fill: "#ffa0d0" });
    this.startText = this.add.text(150, 350, "Start Game", { font: "30px Times New Roman", fill: "#ffffff" });
    this.add.circle(100, 200, 20, 0xFF0000);
    this.add.circle(200, 200, 20, 0x00FF00);
    this.add.circle(300, 200, 20, 0x0000FF);
    this.add.circle(400, 200, 20, 0xFFFF00);
    let circle5 = this.add.circle(150, 400, 25, 0xFF00FF);
    this.codey = this.add.sprite(225, 450, 'codey');
}

function update() {
    this.codey.x += 1; // Move Codey right
    this.startText.setScale(1 + Math.sin(Date.now() * 0.002) * 0.2); // Pulse "Start Game"
}

const config = {
    type: Phaser.AUTO,
    width: 450,
    height: 600,
    backgroundColor: "#5f2a55",
    scene: {
        preload,
        create,
        update
    }
};

const game = new Phaser.Game(config);