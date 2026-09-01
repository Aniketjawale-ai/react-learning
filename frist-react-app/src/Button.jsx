function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}
function printBye() {
    console.log("bye!");
}
function handleDblClick() {
    console.log("you double clicked");
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={printBye}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Praesentium, possimus quibusdam. Obcaecati, neque praesentium! 
                Nemo magnam minus itaque architecto repudiandae, ullam nesciunt 
                velit quo rem accusamus commodi voluptate beatae ab? Lorem ipsum dolor
                 sit, amet consectetur adipisicing elit. Quasi, sed.
            </p>
            <button onDoubleClick={handleDblClick}>double clicked</button>

        </div>
    );
}