export default function testType(obj: unknown): string {
    return Object.prototype.toString.call(obj).split(' ')[1].replace(']', '').toLowerCase()
  }
  