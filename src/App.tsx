import Background from "./components/Background";
import Foreground from "./components/Foreground";

const App = () => {
    return (
        <div className="relative bg-zinc-900 h-screen w-full">
            <Background />
            <Foreground />
        </div>
    );
};

export default App;
