const robot = require('./robot').robot;

describe('Robot module', () => {
    // ARRANGE: setup variables or dependencies.
    // The list of commands that will be sent to the Robot script
    const instructions = [
        "PLACE 1,2,NORTH",
        "REPORT"
    ];

    // ACT: execute the function to be tested using the control values created above.
    // Calling each of those commands will produce an Array of results
    const result = instructions.map(i => robot.do(i));

    // ASSERT: verify that the requirements of your test were met.
    // BUILD YOUR TESTS HERE

    // 1. Test that result is an array.
    test('arrayContaining', () => {
        expect(result).toEqual(expect.any(Array))
    })

    // 2. Test that result[1] is of type object.

    test('isAnObject', () => {
        expect(result[1]).toEqual(expect.any(Object))
    })


    describe('Validate report values', () => {
        // Create this variable after checking that type is object.

        const report = result[1];

        // 3. Test that report contains the properties: action, x, y, and facing.

        test('containsProperties', () => {
            expect(report).toHaveProperty('action', 'x', 'y', 'facing')
        })

        // 4. Test that report.x is a number between 0 and 5.

        test('bettwen0and5', () => {
            expect(report.x).toBeGreaterThanOrEqual(0)
            expect(report.x).toBeLessThanOrEqual(5)
        
        })
        
        // 5. Test that report.y is a number between 0 and 5.
        test('report_y_bettwen0and5', () => {
            expect(report.y).toBeGreaterThanOrEqual(0)
            expect(report.y).toBeLessThanOrEqual(5)
        })

        // 6. Test that report.facing is one of: NORTH, SOUTH, EAST, or WEST.

        test('isIn ', () => {
            expect(report.facing).toBe('NORTH', 'SOUTH', 'EAST', 'WEST')
        })
        

      
    })
})