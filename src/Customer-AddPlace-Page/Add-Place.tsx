import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Add-Place.css'

import React, { useEffect, useState } from 'react';

function AddPlace() {
    const [selectedProvince, setSelectedProvince] = useState("SELECT PROVINCE");
    const [placeName, setPlaceName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [imageId, setImageId] = useState('');





    useEffect(() => {
        async function getImageId() {
            try {
                const response = await fetch('http://localhost:8080/saveImage/get');
                if (!response.ok) {
                    throw new Error('Failed Fetch Image ID');
                }
                const result = await response.text();
                setImageId(result);
            } catch (error) {
                console.error('Error fetching image ID:', error);
            }
        }

        getImageId();
    }, [])






    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = event.target.files ? event.target.files[0] : null;
        setImage(selectedImage);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!image) {
            console.error('Please select an image.');
            return;
        }

        const formData = new FormData();
        formData.append("province", selectedProvince);
        formData.append("name", placeName);
        formData.append("description", description);
        formData.append("placeImage", image);
        

        try {
            const response = await fetch('http://localhost:8080/saveImage/add', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to save the data.');
            }

            const result = await response.text();
            console.log(result);

            setPlaceName('');
            setDescription('');
            setImage(null);
        } catch (error) {
            console.error('Error saving the data:', error);
        }
    };

    const handleProvinceSelect = (province: any) => {
        setSelectedProvince(province);
    };





    
    return (
        <div className="container bg-image">
            <div className='body'>
                <form onSubmit={handleSubmit}>
                    <div className="dropdown">
                        <div className="mb-3">
                            <label htmlFor="lblImageId" className="form-label"></label>
                            <label id="lblImageId">{imageId}</label>
                        </div>
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {selectedProvince}
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark" id="drpProvince">
                            <li><a className="dropdown-item active" href="#" onClick={() => handleProvinceSelect("CENTRAL PROVINCE")}>CENTRAL PROVINCE</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => handleProvinceSelect("EASTERN PROVINCE")}>EASTERN PROVINCE</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => handleProvinceSelect("NORTH CENTRAL PROVINCE")}>NORTH CENTRAL PROVINCE</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => handleProvinceSelect("NORTHERN PROVINCE")}>NORTHERN PROVINCE</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => handleProvinceSelect("NORTH WESTERN PROVINCE")}>NORTH WESTERN PROVINCE</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => handleProvinceSelect("SABARAGAMUWA PROVINCE")}>SABARAGAMUWA PROVINCE</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => handleProvinceSelect("SOUTHERN PROVINCE")}>SOUTHERN PROVINCE</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => handleProvinceSelect("UVA PROVINCE")}>UVA PROVINCE</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => handleProvinceSelect("WESTERN PROVINCE")}>WESTERN PROVINCE</a></li>
                        </ul>
                    </div>
                    <div className='row1 row'>
                        <div className='col-3'>
                            <label htmlFor="placeName">Input Name of the Place</label>
                        </div>
                        <div className="col-7">
                            <div className="input-group mb-3">
                                <span className="input-text input-text" id="txt"></span>
                                <input type="text" className="form-control" id="placeName" placeholder="eg : Sigiriya Rock" aria-label="Username" value={placeName} onChange={(e) => setPlaceName(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <div className='row1 row'>
                        <div className='col-3'>
                            <label htmlFor="placeName">Add Description About the Place</label>
                        </div>
                        <div className="col-7">
                            <div className="input-group mb-3">
                                <span className="input-text"></span>
                                <textarea className="form-control" aria-label="With textarea" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            </div>
                        </div>
                    </div>

                    <div className='row1 row'>
                        <div className='col-3'>
                            <label htmlFor="placeName">Add Image of the Place</label>
                        </div>
                        <div className="col-7">
                            <div className="mb-3">
                                <input className="form-control" type="file" id="imgPlace" onChange={handleImageChange} />
                            </div>
                        </div>
                    </div>

                    <div className='col-10'><button type="submit" id='btnAddPlace' className="btn btn-primary">Add Place</button></div>
                </form>
            </div>
        </div>
    );
}

export default AddPlace;
