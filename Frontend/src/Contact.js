import { useState } from "react";
import useFetchEmp from "./useFetchEmp";

const Contact = () => {

    const { data: emp, pending } = useFetchEmp('http://localhost:4000/apiEmp/Emps/');

    const [counterId, setCounterId] = useState(0);
    // const incrementCounter = () => setCounter(counter + 1);
    // let decrementCounter = () => setCounter(counter - 1);

    let incrementCounter = (e) => {
        e.preventDefault();
        console.log(emp[counterId]._id);
        if (counterId > emp[counterId]._id) {
            decrementCounter = () => setCounterId(counterId);
        } else {
            setCounterId(counterId + 1)
        }
    }

    let decrementCounter = (e) => {
        e.preventDefault();
        console.log(emp[counterId]._id);
        if (counterId < emp[counterId]._id) {
            decrementCounter = () => setCounterId(0);
        } else {
            setCounterId(counterId - 1)
        }
    }

    return (
        <div className="contact">
            <h2 style={{
                paddingBottom: '15px',
                color: '#f1356d'
            }}>Contact</h2>
            {pending && <div>Loading...</div>}
            <div className="contact-info" >
                {emp && <div className="personal-details">
                    <h3 id="personal-details-title" style={{
                        paddingBottom: '15px',
                        color: '#f1356d',
                        marginTop: '10px'
                    }}>Employee Details</h3>
                    <button onClick={decrementCounter} >Previous</button> <p>{counterId}</p> <button onClick={incrementCounter}>Next</button><br /><br />
                    <img src={emp[counterId].employeePic} alt="" />
                    <h4>Employee Name: {emp[counterId].employeeName}</h4><br /><br />
                    <h4>Employee Position: {emp[counterId].employeePosition}</h4><br /><br />
                    <p id="disclaimer">All the information on this page is disclosed information from the company</p>
                </div> /* /* end of personal-details */}
                <div className="more-section">
                    {emp &&
                        <div className="">
                            <h3 id="company-info-title" style={{
                                paddingBottom: '15px',
                                color: '#f1356d',
                                marginTop: '10px'
                            }}>Company Details</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod, nunc at gravida dictum, augue metus ullamcorper elit, eget fringilla est nunc ut libero. Curabitur eget suscipit nibh, a facilisis dui. Maecenas ut bibendum ex, ac pharetra tortor. Pellentesque sagittis enim vulputate, aliquam nisl feugiat, convallis ex. Phasellus nisi turpis, euismod dictum urna vel, vestibulum porttitor risus. Aliquam erat volutpat. Donec sagittis libero quis arcu porta, ac laoreet ex ultrices. Etiam suscipit scelerisque massa non egestas.

                                Sed nibh ipsum, condimentum ac elit tincidunt, sodales mollis nisl. Sed at vulputate mauris, et semper sapien. Mauris quis mauris consectetur, accumsan orci ut, malesuada enim. In sollicitudin sapien est, non lobortis tellus fermentum at. Ut in erat suscipit, semper urna eget, consequat felis. Morbi rutrum nisl et ligula mollis, id eleifend dolor porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nulla neque ipsum, bibendum eu pharetra quis, egestas id nisi. Morbi interdum diam ullamcorper bibendum aliquam. Nunc tincidunt quis nulla tincidunt vehicula.</p><br />
                            <p>Morbi ac sem lacinia, dignissim felis eget, dapibus neque. Quisque at justo ut elit pulvinar molestie id ac tellus. Donec eu diam ut nisl molestie ultrices nec at felis. Vestibulum eu maximus orci. Nam eleifend finibus tristique. Phasellus erat lacus, congue a pretium et, tincidunt sed sem. Quisque viverra hendrerit magna, in scelerisque felis placerat sit amet. Fusce mollis massa id lectus porttitor malesuada.

                                Aenean in erat lectus. Ut ac vestibulum ligula, quis vehicula lectus. Praesent at magna non ante pharetra rutrum vel eu mauris. Nam quis lectus id risus condimentum efficitur et a lectus. Integer eleifend lobortis ultrices. Quisque maximus condimentum viverra. Nam dolor urna, ullamcorper eu tellus a, malesuada sodales ante.</p>
                            <p id="disclaimer">All the information on this page is disclosed information from the company</p>
                        </div>

                    }

                </div> {/* end of more-section */}

            </div> {/* end of contact-info */}
        </div>
    );
}

export default Contact;