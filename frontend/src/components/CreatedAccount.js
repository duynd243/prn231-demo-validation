import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import axiosClient from '../api/axiosClient';
import RowAccount from './RowAccount'

const CreatedAccount = ({ hasChange }) => {
    const [deleteItem, setDeleteItem] = useState(null);

    const { data: accounts, isLoading } = useQuery(['accounts', hasChange, deleteItem],
        () => axiosClient.get('/Account').then(res => res.data)
    );

    const deleteMutate = useMutation((id) => axiosClient.delete(`/Account/${id}`).then(res => res.data), {
        onSettled: (data) => {
            setDeleteItem(data);
        }
    });

    const onDelete = (id) => {
        deleteMutate.mutate(id);
    }

    const sortedAccounts = accounts?.sort((a, b) => b.accountId - a.accountId);
    return (
        <div className="mx-auto overflow-x-auto max-w-4xl mb-20">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Country</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {sortedAccounts?.map(account => <RowAccount key={account?.accountId} account={account} onDelete={onDelete} />)}
                </tbody>

            </table>
            {!isLoading && !accounts?.length && <h1 className='mt-4 font-medium mx-auto w-full'>No data ...</h1>}
        </div>
    )
}

export default CreatedAccount