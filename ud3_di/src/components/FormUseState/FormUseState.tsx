import { useState } from "react";

export default function FormUseState() {

    const [form, setForm] = useState({
        name: '',
        lastname: '',
        email: ''
    });

    function handleChangeName(e : React.ChangeEvent<HTMLInputElement>) {
        setForm({...form, name: e.target.value});
    }

    function handleChangeLastname(e : React.ChangeEvent<HTMLInputElement>) {
        setForm({...form, lastname: e.target.value});
    }

    function handleChangeEmail(e : React.ChangeEvent<HTMLInputElement>) {
        setForm({...form, email: e.target.value});
    }

    return (
        <>
            <form action="">
                <input
                    type="text"
                    placeholder="Insert your name"
                    value={form.name}
                    onChange={handleChangeName}
                />
                <input
                    type="text"
                    placeholder="Insert your lastname"
                    value={form.lastname}
                    onChange={handleChangeLastname}
                />
                <input
                    type="email"
                    placeholder="Insert your email"
                    value={form.email}
                    onChange={handleChangeEmail}
                />
                <p>Tu nombre es {form.name}, tu apellido es {form.lastname}, y tu email {form.email}</p>
            </form>
        </>
    );
}
