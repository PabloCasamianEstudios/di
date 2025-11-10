interface UserData {
    name: string;
    age: number;
    isActive: boolean;
}

export default function Button() {
    let name: string = "Pablo";

    let user: UserData = {
        name: "Juan",
        age: 20,
        isActive: false,
    };

    if (user.isActive) {
        return (
            <button>
                Click here <b>{user.name}</b>
            </button>
        );
    }
}
