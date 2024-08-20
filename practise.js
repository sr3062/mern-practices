function example() {
    var x = 5;
    let y = 6;
    const z = 1;
    console.log("Initial values:", x, y, z); // Corrected to log x, y, z

    if (true) {
        var x = 8;
        let y = 9;
        const z = 10;

        console.log("Block values:", x, y, z); // Corrected to log x, y, z
    }

    console.log("Outside block values:", x, y, z); // Adding this to see final values after the block
}

example();
