import gsap, { Power0 } from "gsap";
import { Container, Sprite } from "pixi.js";
import Matter from "matter-js";
import { GAME_HEIGHT, GAME_WIDTH } from ".";

export default class Game extends Container {

  constructor() {
    super();

    this.init();
  }

  init() {
    let sprite = Sprite.from("logo");
    sprite.anchor.set(0.5);
    sprite.scale.set(0.5);
    this.addChild(sprite);
    sprite.x = GAME_WIDTH * 0.5;  
    sprite.y = GAME_HEIGHT * 0.5;

    gsap.to(sprite, {
      pixi: {
        scale: 0.6,
      },
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.easeInOut",
    })

    // module aliases
var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Bodies = Matter.Bodies,
Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
element: document.body,
engine: engine
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);
  }
}
