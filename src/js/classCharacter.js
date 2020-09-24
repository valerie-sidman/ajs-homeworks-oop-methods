export default class Character {
  constructor(name, type, attack, defence) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Некорректное значение имени');
    }

    if (typeof type !== 'string' || !types.includes(type)) {
      throw new Error('Некорректное значение типа');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}
