import React from 'react';

const RowAccount = ({ account, onDelete }) => {


    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="https://daisyui.com/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{account?.fullname}</div>
                        <div className="text-sm opacity-50">{account?.email}</div>
                    </div>
                </div>
            </td>
            <td>
                {account?.password}
            </td>
            <td>{account?.country}</td>
            <th>
                <button onClick={() => onDelete(account?.accountId)} className="btn btn-error text-white btn-xs">Delete</button>
            </th>
        </tr>
    )
}

export default RowAccount