import { WindowControlsContainer } from './style';

const WindowControls = ()=>{
    return (
        <WindowControlsContainer>
            <button className="button close-button"></button>
            <button className="button minimize-button"></button>
            <button className="button increase-button"></button>
        </WindowControlsContainer>
        
    );
}

export default WindowControls;
