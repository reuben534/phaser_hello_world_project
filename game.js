function create() {
    this.add.text(50, 100, "Ruby's Adventures\n  in Showdown", { font: "40px Times New Roman", fill: "#ffa0d0" });
    this.add.text(130, 300, "by Reuben", { font: "20px Times New Roman", fill: "#ffa0d0" });
    this.add.circle(200, 400, 30, 0x00FF00);
}

const config = {
    type: Phaser.AUTO,
    width: 450,
    height: 600,
    backgroundColor: "#5f2a55",
    scene: {
        create
    }
};

const game = new Phaser.Game(config);