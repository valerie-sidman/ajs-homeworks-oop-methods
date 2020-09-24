import Character from '../classCharacter';
import Bowman from '../classBowman';
import Swordsman from '../classSwordsman';
import Magician from '../classMagician';
import Undead from '../classUndead';
import Zombie from '../classZombie';
import Daemon from '../classDaemon';

test('Bowman', () => {
  const bowman = new Bowman('Василий');
  expect(bowman.name).toBe('Василий');
  expect(bowman.type).toBe('Bowman');
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(1);
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
});

test('Swordsman', () => {
  const swordsman = new Swordsman('Афанасий');
  expect(swordsman.name).toBe('Афанасий');
  expect(swordsman.type).toBe('Swordsman');
  expect(swordsman.health).toBe(100);
  expect(swordsman.level).toBe(1);
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
});

test('Magician', () => {
  const magician = new Magician('Авдотий');
  expect(magician.name).toBe('Авдотий');
  expect(magician.type).toBe('Magician');
  expect(magician.health).toBe(100);
  expect(magician.level).toBe(1);
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});

test('Undead', () => {
  const undead = new Undead('Эрнест');
  expect(undead.name).toBe('Эрнест');
  expect(undead.type).toBe('Undead');
  expect(undead.health).toBe(100);
  expect(undead.level).toBe(1);
  expect(undead.attack).toBe(25);
  expect(undead.defence).toBe(25);
});

test('Zombie', () => {
  const zombie = new Zombie('Клавдия');
  expect(zombie.name).toBe('Клавдия');
  expect(zombie.type).toBe('Zombie');
  expect(zombie.health).toBe(100);
  expect(zombie.level).toBe(1);
  expect(zombie.attack).toBe(40);
  expect(zombie.defence).toBe(10);
});

test('Daemon', () => {
  const daemon = new Daemon('Ефросинья');
  expect(daemon.name).toBe('Ефросинья');
  expect(daemon.type).toBe('Daemon');
  expect(daemon.health).toBe(100);
  expect(daemon.level).toBe(1);
  expect(daemon.attack).toBe(10);
  expect(daemon.defence).toBe(40);
});

test('fail name', () => {
  let thrownError;
  const expextedError = new Error('Некорректное значение имени');
  try {
    const failName = new Character('1', 'Zombie', 14, 113);
    console.log(failName);
  } catch (error) {
    thrownError = error;
  }
  expect(thrownError).toEqual(expextedError);
});

test('fail type', () => {
  let thrownError;
  const expextedError = new Error('Некорректное значение типа');
  try {
    const failType = new Character('Айболит', 'Doctor', 1000, 1000);
    console.log(failType);
  } catch (error) {
    thrownError = error;
  }
  expect(thrownError).toEqual(expextedError);
});

// Методы
test('level up', () => {
  const daemonUp = new Character('ФросяПро', 'Daemon', 10, 40);
  daemonUp.levelUp();
  expect(daemonUp.level).toBe(2);
  expect(daemonUp.attack).toBe(12);
  expect(daemonUp.defence).toBe(48);
  expect(daemonUp.health).toBe(100);
});

test('damage health 100', () => {
  const damageUndead = new Character('Йорик', 'Undead', 25, 25);
  damageUndead.damage(3);
  expect(damageUndead.health).toBe(97.75);
});

test('damage health -10', () => {
  const damageUndead = new Character('Йорик', 'Undead', 25, 25);
  damageUndead.health = -10;
  damageUndead.damage(3);
  expect(damageUndead.health).toBe(-10);
});

test('fail level up', () => {
  let thrownError;
  const expextedError = new Error('Нельзя повысить level умершего');
  try {
    const failLevelUp = new Character('Айболит', 'Daemon', 10, 40);
    failLevelUp.health = 0;
    failLevelUp.levelUp();
    console.log(failLevelUp);
  } catch (error) {
    thrownError = error;
  }
  expect(thrownError).toEqual(expextedError);
});
