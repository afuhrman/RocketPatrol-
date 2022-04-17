class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
 
    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.audio('sfx_EpicMusic', './assets/EpicMusic.wav'); // Copyright-free music, Hostiles Inbound [Epic Battle Music – Powerful Orchestral] by Miguel Johnson (https://www.chosic.com/download-audio/29436/)
      }

    
    create() {

        let menuConfig = {
            fontFamily: 'Fantasy',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#FFFFFF',
            align: 'right',
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 0
          }

        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use <--> arrows to move & (F) to fire', menuConfig).setOrigin(0.5); 
        menuConfig.backgroundColor = '#00FF00'; 
        menuConfig.color = '#FFFFFF'; 
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press <-- for Novice or --> for Expert', menuConfig).setOrigin(0.5);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT); 
        var music = this.sound.add('sfx_EpicMusic'); 
        music.setLoop(true);
        music.play(); 
        //code source (https://stackoverflow.com/questions/34210393/looping-audio-in-phaser)
    }

    update() {
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        // easy mode
        game.settings = {
          spaceshipSpeed: 3,
          gameTimer: 60000   
        }
        this.sound.play('sfx_select');
        this.scene.start("playScene");    
      }
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        // hard mode
        game.settings = {
          spaceshipSpeed: 4,
          gameTimer: 45000    
        }
        this.sound.play('sfx_select');
        this.scene.start("playScene");    
      }
    }
} 
