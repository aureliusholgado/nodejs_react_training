const functions = require('./functions')

// .toBe()
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
})

// .not.toBe()
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
})

// Check Null
test('Should be NULL', () => {
    expect(functions.isNull()).toBe(null);
})

// .toBeFalsy()
test('Should be FALSY', () => {
    expect(functions.checkValue(null)).toBeFalsy()
})

// .not.toBeFalsy()
test('Should be FALSY', () => {
    expect(functions.checkValue("x")).not.toBeFalsy()
})

// .toEqual (.toBe() is for primitive types; .toEqual() is for reference types)
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: "Brad",
        lastName: "Traversy"
    })
})

// Less Than and Greater Than

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
})

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
})

// Regex 
test('There is no I in team', () => {
    expect('teami').not.toMatch(/I/) // the small i is to make it case sensitive
})

// Arrays
it('Admin should be in usernames', () => {
    const usernames = ['john', 'karen', 'admin'] 
    expect(usernames).toContain('admin')
})

// Working with async data
it('Name should be Leanne Graham', async () => {
    expect.assertions(1); // .assertions() is to determine how many will be fetched
    const data = await functions.fetchUser()
    expect(data.name).toEqual("Leanne Graham");
})