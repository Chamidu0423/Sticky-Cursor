import gsap from "https://esm.sh/gsap";
import { vec2 } from "https://esm.sh/vecteur";

class ElasticCursor {
  constructor(el) {
    this.node = el;
    this.pos = {
      prev: vec2(-100, -100),
      now: vec2(-100, -100),
      aim: vec2(-100, -100),
      ease: 0.1
    };
    this.size = {
      prev: 1,
      now: 1,
      aim: 1,
      ease: 0.1
    };
    this.active = false;
    this.target = null;
    this._bindEvents();
  }

  _bindEvents() {
    gsap.utils.toArray("[data-sticky]").forEach((el) => {
      const area = el.querySelector("[data-sticky-area]");

      area.addEventListener("pointerover", () => {
        this.active = true;
        this.target = area;
        el.classList.add("is-bubbled");
      });

      area.addEventListener("pointerout", () => {
        this.active = false;
        this.target = null;
        el.classList.remove("is-bubbled");
      });

      const moveX = gsap.quickTo(el, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
      const moveY = gsap.quickTo(el, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

      el.addEventListener("pointermove", (ev) => {
        const { clientX, clientY } = ev;
        const { width, height, left, top } = el.getBoundingClientRect();
        const dx = clientX - (left + width / 2);
        const dy = clientY - (top + height / 2);
        moveX(dx * 0.2);
        moveY(dy * 0.2);
      });

      el.addEventListener("pointerout", () => {
        moveX(0);
        moveY(0);
      });
    });
  }

  moveTo(x, y) {
    if (this.active && this.target) {
      const rect = this.target.getBoundingClientRect();
      const cx = rect.x + rect.width / 2;
      const cy = rect.y + rect.height / 2;
      const dx = x - cx;
      const dy = y - cy;

      this.pos.aim.x = cx + dx * 0.15;
      this.pos.aim.y = cy + dy * 0.15;
      this.size.aim = 2;

      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const dist = Math.sqrt(dx * dx + dy * dy) * 0.01;
      gsap.set(this.node, { rotate: angle });
      gsap.to(this.node, {
        scaleX: this.size.aim + Math.pow(Math.min(dist, 0.6), 3) * 3,
        scaleY: this.size.aim - Math.pow(Math.min(dist, 0.3), 3) * 3,
        duration: 0.5,
        ease: "power4.out",
        overwrite: true
      });
    } else {
      this.pos.aim.x = x;
      this.pos.aim.y = y;
      this.size.aim = 1;
    }
  }

  update() {
    this.pos.now.lerp(this.pos.aim, this.pos.ease);
    this.size.now = gsap.utils.interpolate(this.size.now, this.size.aim, this.size.ease);

    const diff = this.pos.now.clone().sub(this.pos.prev);
    this.pos.prev.copy(this.pos.now);
    this.size.prev = this.size.now;

    gsap.set(this.node, {
      x: this.pos.now.x,
      y: this.pos.now.y
    });

    if (!this.active) {
      const ang = Math.atan2(diff.y, diff.x) * (180 / Math.PI);
      const dist = Math.sqrt(diff.x ** 2 + diff.y ** 2) * 0.04;
      gsap.set(this.node, {
        rotate: ang,
        scaleX: this.size.now + Math.min(dist, 1),
        scaleY: this.size.now - Math.min(dist, 0.3)
      });
    }
  }
}

const bubbleCursor = new ElasticCursor(document.querySelector(".bubble"));
window.addEventListener("mousemove", (e) => bubbleCursor.moveTo(e.clientX, e.clientY));

function frame() {
  bubbleCursor.update();
  requestAnimationFrame(frame);
}
frame();
