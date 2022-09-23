import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axiosClient from '../api/axiosClient';
import CountryCombobox from './CountryCombobox';
const SignUp = ({ onCreated }) => {

    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [loading, setLoading] = useState(false);


    const onSelectCountry = (country) => {
        console.log(country);
        setSelectedCountry(country);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const account = {
            email,
            fullname,
            password,
            country: selectedCountry?.name
        }
        mutation.mutate(account);
    }

    const mutation = useMutation((account) => axiosClient.post('/Account', account).then(res => res.data), {
        onMutate: () => {
            setLoading(true);
        },
        onSuccess: (data) => {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Create account successfully',
            })
            onCreated(data);
            setEmail('');
            setFullname('');
            setPassword('');
            setSelectedCountry('');
        },
        onError: (error) => {
            let errorMessage = '';
            const errors = error?.errors;
            if (errors) {
                for (const err of Object.values(errors)) {
                    errorMessage += `${err}\n`;
                }
            }

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorMessage || error?.errorMessage || 'Something went wrong!',
            })
        },
        onSettled: () => {
            setLoading(false);
        }
    });


    return (
        <div className="mt-10 mb-20 w-full max-w-xs mx-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input type="email" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
                        Fullname
                    </label>
                    <input type="text" minLength={2} maxLength={10} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" placeholder="Fullname"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Country
                    </label>
                    <CountryCombobox onSelect={onSelectCountry} />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input minLength={6} maxLength={12} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-slate-400" disabled={loading}>
                        {loading ? 'Loading...' : 'Sign Up'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignUp