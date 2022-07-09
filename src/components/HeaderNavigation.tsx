import Login from "./LoginButton";
import Title from "./Title/Title";

export default function HeaderNavigation() {
    return (
        <header className="max-w-xl mx-auto p-4">
            <div className="md:flex md:items-center md:justify-between">
                <Title />
                <Login />
            </div>
        </header>
    );
}
