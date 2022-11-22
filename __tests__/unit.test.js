// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

//Phone Number Tests

test('phone number 1234567891 is not valid', () => {
    expect(functions.isPhoneNumber('1234567891')).toBe(false);
});

test('phone number (123)4567891 is not valid', () => {
    expect(functions.isPhoneNumber('(123)4567891')).toBe(false);
});

test('phone number 123-456-7891 is valid', () => {
    expect(functions.isPhoneNumber('123-456-7891')).toBe(true);
});

test('phone number (123)456-7891 is valid', () => {
    expect(functions.isPhoneNumber('(123)456-7891')).toBe(true);
});

//Email Tests
test('email 123@123.com is not valid', () => {
    expect(functions.isEmail('123@123.com')).toBe(false);
});

test('email 123@?.? is not valid', () => {
    expect(functions.isEmail('123@?.?')).toBe(false);
});

test('email abcd@gmail.com is valid', () => {
    expect(functions.isEmail('abcd@gmail.com')).toBe(true);
});

test('email abcdef@yahoo.com is valid', () => {
    expect(functions.isEmail('abcdef@yahoo.com')).toBe(true);
});

//Strong Password Tests
test('password is too long', () => {
    expect(functions.isStrongPassword("asdfghjkmnbgysujmnbdyujmsndbchdsbjhahdg")).toBe(false);
});
 
test('password starts with a number', () => {
    expect(functions.isStrongPassword("56tsyghdsd")).toBe(false);
});

test('good password with nums and letters', () => {
    expect(functions.isStrongPassword("ayget635tb")).toBe(true);
  });
  
test('good password with nums, letters and underscore', () => {
    expect(functions.isStrongPassword("sgha_3hjkas")).toBe(true);
});

//Date Tests
test('order of year and day is switched', () => {
    expect(functions.isDate("2022/23/02")).toBe(false);
});

test('year is 2 digits', () => {
    expect(functions.isDate("20/23/02")).toBe(false);
});

test('correct date: one digit for day and month', () => {
    expect(functions.isDate("2/3/2002")).toBe(true);
});

test('correct date: two digit for day and month', () => {
    expect(functions.isDate("20/23/2002")).toBe(true);
});

//Hex Color Tests
test('bad hex: unexpected letters', () => {
    expect(functions.isHexColor("tgs123")).toBe(false);
});

test('bad hex: too long', () => {
    expect(functions.isHexColor("fea123a34521")).toBe(false);
});

test('good hex: length 6', () => {
    expect(functions.isHexColor("fea123")).toBe(true);
});

test('good hex: length 3', () => {
    expect(functions.isHexColor("fea")).toBe(true);
});
