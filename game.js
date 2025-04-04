function preload() {
    this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');
}

function create() {
    this.add.text(50, 100, "Ruby's Adventures\n  in Showdown", { font: "40px Times New Roman", fill: "#ffa0d0" });
    this.add.text(130, 300, "by Reuben", { font: "20px Times New Roman", fill: "#ffa0d0" });
    this.add.circle(100, 200, 20, 0xFF0000);
    this.add.circle(200, 200, 20, 0x00FF00);
    this.add.circle(300, 200, 20, 0x0000FF);
    this.add.circle(400, 200, 20, 0xFFFF00);
    let circle5 = this.add.circle(150, 400, 25, 0xFF00FF);
    this.add.sprite(225, 450, 'codey');
}

const config = {
    type: Phaser.AUTO,
    width: 450,
    height: 600,
    backgroundColor: "#5f2a55",
    scene: {
        preload,
        create
    }
};

const game = new Phaser.Game(config);