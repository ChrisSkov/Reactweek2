import React from 'react';
import { Link } from "react-router-dom";
import data from './data/data.json';

export default function Details({ match })
{
    const personDetails = data.users.find((u, index) => index == match.params.personId);
    return (
        <div>
            <h1>Details about {personDetails.first} {personDetails.last}</h1>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={personDetails.picture.large} alt="Profile"></img>
                        </td>
                    </tr>
                    <tr>
                        <td><p>First name: </p></td>
                        <td>{personDetails.first}</td>
                    </tr>

                    <tr>
                        <td><p>Last name: </p></td>
                        <td>{personDetails.last}</td>
                    </tr>

                    <tr>
                        <td><p>Gender: </p></td>
                        <td>{personDetails.gender}</td>
                    </tr>

                    <tr>
                        <td><p>Date of Birth: </p></td>
                        <td>{personDetails.dob}</td>
                    </tr>

                    <tr>
                        <td>
                            <hr />
                        </td>
                    </tr>

                    <tr>
                        <td><p>Email: </p></td>
                        <td><p>{personDetails.email}</p></td>
                    </tr>

                    <tr>
                        <td><p>Phone: </p></td>
                        <td><p>{personDetails.phone}</p></td>
                    </tr>

                    <tr>
                        <td><p>Cell: </p></td>
                        <td>{personDetails.cell}</td>
                    </tr>

                    <tr>
                        <td>
                            <hr />
                        </td>
                    </tr>


                    <tr>
                        <td><p>Street : </p></td>
                        <td>{personDetails.street}</td>
                    </tr>

                    <tr>
                        <td><p>City: </p></td>
                        <td>{personDetails.city}</td>
                    </tr>

                    <tr>
                        <td><p>State: </p></td>
                        <td>{personDetails.state}</td>
                    </tr>

                    <tr>
                        <td><p>zip: </p></td>
                        <td>{personDetails.zip}</td>
                    </tr>

                </tbody>
            </table>
            <Link to="/all">Go back</Link>
        </div>
    )
}