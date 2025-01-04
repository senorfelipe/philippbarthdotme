class TypeWriter {
  constructor(text, speed = 100) {
    this.text = text;
    this.speed = speed;
    this.isDeleting = false;
  }

  type() {
    let index = 0;
    while (index < this.text.length) {
      setTimeout(() => {
        document.getElementById(this.elementId).innerHTML += this.text[index];
        index++;
      }, this.speed);
    }
  }
}
