import orderByProps from '../js/app';

const exampleObj = {
    speed: 70,
    level: 2,
    name: 'мечник',
    health: 10,
    defence: 40,
    attack: 80,
};
const exampleOrder = ['name', 'level', 1, 'hey'];

const expected = [
    { key: 'name', value: 'мечник' }, // порядок взят из массива с ключами
    { key: 'level', value: 2 }, // порядок взят из массива с ключами
    { key: 'attack', value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения 'attack')
    { key: 'defence', value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения 'defence')
    { key: 'health', value: 10 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения 'health')
    { key: 'speed', value: 70 },
];

test('order func check', () => {
    const result = orderByProps(exampleObj, exampleOrder);

    expect(result).toEqual(expected);
});
