type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a = 0,
    public b = 0,
    public c = 0,
    public shape: Shape = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('the length of side is 0 or negative');
    }

    const maximal = Math.max(a, b, c);

    if (maximal >= a + b + c - maximal) {
      throw new Error('wrong length');
    }
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);

    return +Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(
      2,
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public r = 0,
    public shape: Shape = 'circle',
  ) {
    if (r <= 0) {
      throw new Error('the length of radius is 0 or negative');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.r * this.r * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public a = 0,
    public b = 0,
    public shape: Shape = 'rectangle',
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('the length of side is 0 or negative');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
