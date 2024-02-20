import "./Body.css"
import {Link} from "react-router-dom"

function Body() {
    return (
        <div className="body-container">
            <div className="row justify-content-center">


                {/* Background image */}
                <img src="./public/Photos-Search-Page/background.jpg" className="background-image" alt="Background" />
                <div className="col-7">
                    <div className="input-group mb-3">


                        {/* Search Element */}
                        <div className="col-4">
                            <input type="text" className="form-control" placeholder="Enter Place" aria-label="Search" aria-describedby="button-addon2" />
                        </div>
                        <div className="col">
                            <button className="btn btn-outline-secondary" type="button" id="btnSearch">Search</button>
                        </div>


                        {/* Select-Type-DropDown */}
                        <div className="col-2">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="btnType" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select Type
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item active" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </div>
                        </div>


                        {/* Sort-ByPrice-DropDown */}
                        <div className="col-2">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="btnSortByPrice" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort by Price
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item active" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </div>
                        </div>


                        {/* Sort-ByRating-DropDown */}
                        <div className="col-2">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="btnSortByRating" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort by Ratings
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item active" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Cards row-1 */}

            <div className='row'>
                <div className="card">
                    <img src="public/Photos-Search-Page/Sigiriya.jpg" className="img-card" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Sigiriya Rock</h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">Add to Plan</a>
                    </div>
                </div>
                <div className="card">
                    <img src="public/Photos-Search-Page/Temple of the Tooth Relic.jpg" className="img-card" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Temple of the Tooth</h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">Add to Plan</a>
                    </div>
                </div>
                <div className="card">
                    <img src="public/Photos-Search-Page/Pidurangala Rock.jpeg" className="img-card" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Pidurangala Rock</h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">Add to Plan</a>
                    </div>
                </div>
                <div className="card">
                    <img src="public/Photos-Search-Page/Royal Botanical Gardens.jpeg" className="img-card" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Royal Botanical Gardens</h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">Add to Plan</a>
                    </div>
                </div>
            </div>



            {/* Cards row-2 */}

            <div className='row'>
                <div className="card">
                    <img src="public/Photos-Search-Page/Horton Plains National Park.jpeg" className="img-card" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Horton Plains</h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">Add to Plan</a>
                    </div>
                </div>
                <div className="card">
                    <img src="public/Photos-Search-Page/Ramboda Falls.jpeg" className="img-card" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Ramboda Falls</h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">Add to Plan</a>
                    </div>
                </div>
                <div className="card">
                    <img src="public/Photos-Search-Page/Gregory Lake.jpeg" className="img-card" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Gregory Lake</h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">Add to Plan</a>
                    </div>
                </div>
                <div className="card">
                    <img src="public/Photos-Search-Page/Knuckels Mountain Range.jpeg" className="img-card" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Knuckels Mountains</h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">Add to Plan</a>
                    </div>
                </div>
            </div>



            {/* Cards row-3 */}

            <div className='row'>
                <div className="card">
                    <img src="public/Photos-Search-Page/Ambuluwawa.jpg" className="img-card" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Ambuluwawa Tower</h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">Add to Plan</a>
                    </div>
                </div>
                <div className="card">
                    <img src="public/Photos-Search-Page/Victoria Park.jpeg" className="img-card" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Victoria Park</h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">Add to Plan</a>
                    </div>
                </div>
                <div className="card">
                    <img src="public/Photos-Search-Page/Ceylon Tea Museum.jpeg" className="img-card" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Ceylon Tea Museum</h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">Add to Plan</a>
                    </div>
                </div>
                <div className="card">
                    <img src="public/Photos-Search-Page/St Clair's Falls.jpeg" className="img-card" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">St. Clair's Falls</h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">Add to Plan</a>
                    </div>
                </div>
            </div>


            <div className="go-to-plans">
                <Link to="/plan"><button type="button" className="btn btn-primary btn-lg">Go To Plans</button></Link>
            </div>


        </div>
    );
}

export default Body;