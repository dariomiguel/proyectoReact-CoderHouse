import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "../node_modules/bulma/css/bulma.css"

function App(){
    return (
        <div className="App">
            <NavBar/>
            <ItemListContainer greeting={"Bienvenido a Capyart!!!"}/>
        </div>
    )
}

export default App;