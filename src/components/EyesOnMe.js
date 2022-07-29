import Keypad from "./Keypad"

// Code EyesOnMe Component Here
function EyesOnMe()   {
  function controlFocus  ()  {
    console.log('Good!')
  }
  function controlBlur() {
    console.log("Hey! Eyes on me!")
  }

  return(
    <div>
      <button onFocus={controlFocus} onBlur={controlBlur}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe;