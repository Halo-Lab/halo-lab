import React, { useEffect, useRef } from 'react';
import useBreakpoints from 'use-breakpoints-width';

import styles from './BackgroundBlackHole.module.scss';

const BackgroundBlackHole = () => {
  const container = useRef(null);
  const { width } = useBreakpoints();

  useEffect(() => {
    // Global Animation Setting
    window.requestAnimFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };

    // Global Canvas Setting
    var canvas = container.current;
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particles Around the Parent
    function Particle(x, y, distance) {
      this.angle = Math.random() * 2 * Math.PI;
      this.radius = Math.random() * 1.5;
      if (window.innerWidth > 2560) {
        this.radius = Math.random() * 4;
      }
      this.opacity = (Math.random() * 5 + 2) / 10;
      this.distance = (1 / this.opacity) * distance;
      this.speed = this.distance * 0.00002;

      this.position = {
        x: x + this.distance * Math.cos(this.angle),
        y: y + this.distance * Math.sin(this.angle),
      };

      this.draw = function() {
        ctx.fillStyle = 'rgba(255,255,255,' + this.opacity + ')';
        ctx.beginPath();
        ctx.arc(
          this.position.x,
          this.position.y,
          this.radius,
          0,
          Math.PI * 2,
          false
        );
        ctx.fill();
        ctx.closePath();
      };
      this.update = function() {
        this.angle += this.speed;
        this.position = {
          x: x + this.distance * Math.cos(this.angle),
          y: y + this.distance * Math.sin(this.angle),
        };
        this.draw();
      };
    }

    function Emitter(x, y) {
      this.position = {
        x: x,
        y: y,
      };
      if (canvas.width < 768) {
        this.radius = canvas.width / 4;
      }
      if (canvas.width > 768) {
        this.radius = canvas.width / 8;
      }
      if (canvas.width > 2560) {
        this.radius = canvas.width / 12;
      }
      this.count = canvas.width * 2;
      // if(this.count > 4000) {
      //   this.count = 4000;
      // }
      this.particles = [];

      for (var i = 0; i < this.count; i++) {
        this.particles.push(
          new Particle(this.position.x, this.position.y, this.radius)
        );
      }
    }

    Emitter.prototype = {
      draw: function() {
        ctx.fillStyle = 'rgba(2,2,30,1)';
        ctx.beginPath();
        ctx.arc(
          this.position.x,
          this.position.y,
          this.radius,
          0,
          Math.PI * 2,
          false
        );
        ctx.fill();
        ctx.closePath();
      },
      update: function() {
        for (var i = 0; i < this.count; i++) {
          this.particles[i].update();
        }
        this.draw();
      },
    };

    var emitter = new Emitter(canvas.width / 2, canvas.height / 2);

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      emitter.update();
      window.requestAnimFrame(loop);
    }

    loop();
  }, [width]);

  return <canvas ref={container} className={styles.container}></canvas>;
};

export default BackgroundBlackHole;
