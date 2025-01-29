import { useForm } from 'react-hook-form';

export default function RegistrationForm(){

    const {register, handleSubmit}= useForm()
    return (
        <form>
            <label htmlFor="login">Login:</label>
            <input type="text" id="login" placeholder="login" {...register("login",{required: true})} />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="email" {...register("email",{required: true, pattern: /^\S+@\S+\.\S+$/})} />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="password" {...register("password",{required: true, minLength: 6})} />

            <button>Register</button>
        </form>
    )
}