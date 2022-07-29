// Code Keypad Component Here

function Keypad (){
    function controlChange() {
        console.log("Entering password...");
    }
    return (
        <div>
            <input type="password" onChange={controlChange}/>
        </div>
    )
}

export default Keypad;