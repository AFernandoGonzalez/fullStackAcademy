// Run: tsc declaringVariables.ts



function ScopeTest() {
    if (true) {
        var myVariableVar = "Hello World"; // global scope
        let myVariableLet = "Hello World"; // local scope
        const myVariableConst = "Hello World"; // local scope
    }
    console.log(myVariableVar);
    console.log(myVariableLet);
    console.log(myVariableConst);
}
