import SearchBar from "../../shared/SearchBar/SearchBar.tsx";
import Models3D from "./components/Models3D.tsx";

const PolyItems = () => {
    return (
        <div className={"flex-col justify-center space-y-10 w-full"}>
            <SearchBar />
            <Models3D />
        </div>
    );
}

export default PolyItems
