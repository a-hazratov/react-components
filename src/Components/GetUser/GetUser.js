import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './GetUser.module.css'

function GetUser () {

    const [users, setUsers] = useState();
    const [search, setSearch] = useState("");

    useEffect(()=> {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("https://randomuser.me/api?results=200");
                setUsers(response.data.results)
            } catch {
                alert("User request failed")
            }
        }

        fetchUsers();
    }, []);

    return (
        <div className = {styles.mainContainer}>
            <input
               value = {search}
               placeholder = "Search users"
               onChange = {(e)=> setSearch(e.target.value)}   
            />

            {users ? (
                <div>
                    {users.filter((user) => `${user.name.first} ${user.name.last}`.toLowerCase().startsWith(search.toLowerCase()))
                    .map((user) => {
                        return (
                            <p>{`${user.name.first} ${user.name.last}`}</p>
                        );
                    })}
                </div>
            ) : (
                <div/>
            )}
        </div>
    );

}

export default GetUser;