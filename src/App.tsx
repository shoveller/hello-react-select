import './App.css'
import CreatableSelect from "react-select/creatable";
import {MultiValueGenericProps, components} from "react-select";
import {createPortal} from "react-dom";

const MultiValueContainer = (props: MultiValueGenericProps) => {
    return createPortal(
        <components.MultiValueContainer {...props} />,
        document.getElementById('multiselect-container')!
    );
};

function App() {

  return (
    <>
        <CreatableSelect isMulti components={{ MultiValueContainer }} />
        <section id="multiselect-container" style={{ display: 'flex' }}></section>
    </>
  )
}

export default App
