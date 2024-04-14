import React from 'react'
import { useNavigate } from 'react-router-dom'

const MainRouter = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/TimetableClean');
    };

    return (
        <div className='d-flex justify-content-center'>
            <form className="card" style={{ width: '30rem' }}>
                <div className="card-body">
                    <h2 className="card-title">Choose!</h2>
                    <div>
                        <label className="form-label">Choose Your Preffered Functionality:</label>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <p>
                                    <a className="link-offset-3 link-primary link-offset-2 link-underline-opacity-50 link-underline-opacity-100-hover"
                                        onClick={handleNavigate}
                                        style={{ cursor: 'pointer' }}>
                                        Timetable Tool
                                    </a>
                                </p>
                            </li>
                            {/* <li className="list-group-item">
                                <p><a className="link-offset-3 link-primary link-offset-2 link-underline-opacity-50 link-underline-opacity-100-hover" href="#">Offset 3 link</a></p>
                            </li>
                            <li className="list-group-item">
                                <p><a className="link-offset-3 link-primary link-offset-2 link-underline-opacity-50 link-underline-opacity-100-hover" href="#">Offset 3 link</a></p>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MainRouter