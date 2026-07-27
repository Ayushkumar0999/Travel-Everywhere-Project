import { useCookies } from "react-cookie"; 
import { useNavigate } from "react-router-dom"; 
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaPlane,
  FaGlobe,
  FaHeart,
  FaUser,
} from "react-icons/fa";

export function UserDashBoard() { 
  const [cookies, setCookie, removeCookie] = useCookies(["userid"]); 
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
  if (!cookies.userid) {
    navigate("/");
  }
}, [cookies.userid, navigate]);

    function HandleLogout() { 
      removeCookie("userid"); navigate("/"); }

      return(
      <div>
        <nav
  className="navbar navbar-expand-lg bg-white shadow-sm px-4"
  style={{ height: "80px", marginLeft:"" }}
>
  <div className="container-fluid">

    {/* Logo */}
    <Link
      className="navbar-brand d-flex align-items-center"
      to="/dashboard"
    >
      <FaPlane
        style={{
          color: "#2F80ED",
          fontSize: "30px",
          marginRight: "8px",
        }}
      />

      <div>
        <h4
          style={{
            color: "#2F80ED",
            margin: 0,
            fontWeight: "bold",
          }}
        >
          Travel
        </h4>

        <small style={{ color: "gray" }}>
          Everywhere
        </small>
      </div>
    </Link>

    {/* Mobile Button */}
    <button
      className="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#navbarContent"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div
      className="collapse navbar-collapse"
      id="navbarContent"
    >

      {/* Menu */}
      <ul className="navbar-nav mx-auto">

        <li className="nav-item mx-2">
          <Link className="nav-link text-primary fw-bold" to="/user-dashboard">
            Home
          </Link>
        </li>

        <li className="nav-item mx-2">
          <Link className="nav-link text-dark" to="/destinations">
            Destinations
          </Link>
        </li>

        {/* <li className="nav-item mx-2">
          <Link className="nav-link text-dark" to="/trips">
            Trips
          </Link>
        </li> */}

        <li className="nav-item mx-2">
          <Link className="nav-link text-dark" to="/hotels">
            Hotels
          </Link>
        </li>

        {/* <li className="nav-item mx-2">
          <Link className="nav-link text-dark" to="/collections">
            Collections
          </Link>
        </li> */}

        <li className="nav-item mx-2">
          <Link className="nav-link text-dark" to="/about">
            About Us
          </Link>
        </li>

      </ul>

      {/* Right Side */}

      <div className="d-flex align-items-center">

        {/* Language */}

        <div className="d-flex align-items-center me-4">
          <FaGlobe />
          <span className="mx-2">EN</span>
          {/* <FaChevronDown size={12} /> */}
          <select className=" rounded-2">
            <option value="Country">-Select-</option>
          <option value="india">India</option>
        <option value="dubai">Dubai</option>
        <option value="maldives">Maldives</option>
        <option value="switzerland">Switzerland</option>
        <option value="thailand">Thailand</option>
        <option value="singapore">Singapore</option>
        <option value="bali">Bali</option>
        <option value="paris">Paris</option>
        <option value="london">London</option>
        <option value="new-york">New York</option>
        </select>   
        </div>

        {/* Favourite */}

        <FaHeart 
        onClick={()=> setLiked(!liked)}
          style={{
            color: liked ? "red": "gray",
            fontSize: "20px",
            marginRight: "25px",
            cursor: "pointer",
          }}
        />

        {/* Username */}

        <span className="me-3 fw-semibold">
          Welcome, {cookies.userid}
        </span>

        {/* Logout */}

        <button
          onClick={HandleLogout}
          className="btn"
          style={{
            background: "#2F80ED",
            color: "white",
            borderRadius: "10px",
            padding: "10px 18px",
          }}
        >
          <FaUser className="me-2"  />
          Logout
        </button>

      </div>

    </div>
  </div>
</nav>

{/* <div style={{ padding: "20px" }}> 
  <h1>Welcome to User Dashboard</h1> 
  <h4>User ID : {cookies.userid}</h4> 
  <div className="mt-3"> <a href="/destinations">Destinations</a> | 
  <a href="/bookings" className="ms-2">My Trips</a> | 
  <a href="/profile" className="ms-2">Profile</a> 
  </div> 
  </div> */}


{/* Hero Section */}

<div
  className="container-fluid p-0 position-relative"
  style={{ height: "620px" }}
>
  <img
    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600"
    className="w-100 h-100"
    style={{
      objectFit: "cover",
      filter: "brightness(60%)",
    }}
  />

  <div
    className="position-absolute top-50 start-0 translate-middle-y text-white"
    style={{
      marginLeft: "80px",
      maxWidth: "650px",
    }}
  >
    <span className="badge bg-light text-dark fs-6 px-3 py-2 rounded-pill mb-3">
      ✈ Explore the World
    </span>

    <h1
      className="fw-bold"
      style={{
        fontSize: "65px",
        lineHeight: "75px",
      }}
    >
      Discover Beautiful
      <br />
      Places Around
      <br />
      The World
    </h1>

    <p
      className="mt-4"
      style={{
        fontSize: "20px",
      }}
    >
      Discover amazing destinations, book unforgettable
      trips and enjoy your holidays with Travel Everywhere.
    </p>

    <div className="mt-4">

      <button className="btn btn-primary btn-lg me-3 rounded-pill px-4">
        Explore Now
      </button>

      <button className="btn btn-outline-light btn-lg rounded-pill px-4">
        Learn More
      </button>

    </div>
  </div>

  {/* Search Box */}

  <div
    className="position-absolute start-50 translate-middle-x bg-white shadow-lg rounded-4 p-4"
    style={{
      width: "90%",
      bottom: "-70px",
    }}
  >
    <div className="row g-3">

      <div className="col-md-3">
        <label className="fw-bold">
          Destination
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Where to?"
        />
      </div>

      <div className="col-md-2">
        <label className="fw-bold">
          Check In
        </label>

        <input
          type="date"
          className="form-control"
        />
      </div>

      <div className="col-md-2">
        <label className="fw-bold">
          Check Out
        </label>

        <input
          type="date"
          className="form-control"
        />
      </div>

      <div className="col-md-2">
        <label className="fw-bold">
          Guests
        </label>

        <select className="form-select">
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
          <option>4 Guests</option>
        </select>
      </div>

      <div className="col-md-3 d-flex align-items-end">
        <button className="btn btn-primary w-100 py-2">
          🔍 Search
        </button>
      </div>

    </div>
  </div>
</div>

<div style={{ height: "120px" }}></div>


{/* Why Choose Us */}

<div className="container my-5">

  <div className="text-center mb-5">
    <h2 className="fw-bold">Why Choose Travel Everywhere?</h2>
    <p className="text-muted">
      We make your travel simple, secure and unforgettable.
    </p>
  </div>

  <div className="row g-4">

    <div className="col-md-3">
      <div className="card border-0 shadow-lg rounded-4 text-center p-4 h-100">
        <div className="display-3">💰</div>
        <h5 className="mt-3 fw-bold">Best Price</h5>
        <p className="text-muted">
          Find the best travel deals at affordable prices.
        </p>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card border-0 shadow-lg rounded-4 text-center p-4 h-100">
        <div className="display-3">🛡️</div>
        <h5 className="mt-3 fw-bold">Safe Booking</h5>
        <p className="text-muted">
          Your bookings are protected and completely secure.
        </p>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card border-0 shadow-lg rounded-4 text-center p-4 h-100">
        <div className="display-3">📞</div>
        <h5 className="mt-3 fw-bold">24/7 Support</h5>
        <p className="text-muted">
          Our travel experts are always available to help you.
        </p>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card border-0 shadow-lg rounded-4 text-center p-4 h-100">
        <div className="display-3">🌍</div>
        <h5 className="mt-3 fw-bold">Worldwide Tours</h5>
        <p className="text-muted">
          Explore thousands of destinations across the world.
        </p>
      </div>
    </div>

  </div>

</div>

<div className="container mt-5">

    <div className="text-center mb-5">
        <h2 className="fw-bold" >Popular Destinations</h2>

        <p className="text-muted">
            Discover our most loved travel destinations.
        </p>
    </div>

    <div className="row g-4">

        {/* Cards Next Part */}
{/* Destination 1 */}
<div className="col-lg-4 col-md-6">
  <div className="card border-0 shadow rounded-4 overflow-hidden h-100">
    <img
      src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800"
      className="card-img-top"
      style={{ height: "250px", objectFit: "cover" }}
      alt="Bali"
    />
    <div className="card-body">
      <h4 className="fw-bold">Bali, Indonesia</h4>
      <p className="text-muted">
        Tropical beaches, luxury resorts and unforgettable sunsets.
      </p>

      <div className="d-flex justify-content-between align-items-center">
        <span className="text-primary fw-bold fs-5">
          ₹39,999
        </span>

        <button className="btn btn-primary rounded-pill">
          Explore
        </button>
      </div>
    </div>
  </div>
</div>

{/* Destination 2 */}
<div className="col-lg-4 col-md-6">
  <div className="card border-0 shadow rounded-4 overflow-hidden h-100">
    <img
      src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800"
      className="card-img-top"
      style={{ height: "250px", objectFit: "cover" }}
      alt="Paris"
    />
    <div className="card-body">
      <h4 className="fw-bold">Paris, France</h4>
      <p className="text-muted">
        Experience romance, culture and the Eiffel Tower.
      </p>

      <div className="d-flex justify-content-between align-items-center">
        <span className="text-primary fw-bold fs-5">
          ₹54,999
        </span>

        <button className="btn btn-primary rounded-pill">
          Explore
        </button>
      </div>
    </div>
  </div>
</div>

{/* Destination 3 */}
<div className="col-lg-4 col-md-6">
  <div className="card border-0 shadow rounded-4 overflow-hidden h-100">
    <img
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800"
      className="card-img-top"
      style={{ height: "250px", objectFit: "cover" }}
      alt="Switzerland"
    />
    <div className="card-body">
      <h4 className="fw-bold">Switzerland</h4>
      <p className="text-muted">
        Snowy mountains, lakes and breathtaking landscapes.
      </p>

      <div className="d-flex justify-content-between align-items-center">
        <span className="text-primary fw-bold fs-5">
          ₹79,999
        </span>

        <button className="btn btn-primary rounded-pill">
          Explore
        </button>
      </div>
    </div>
  </div>
</div>

{/* Destination 4 */}
<div className="col-lg-4 col-md-6">
  <div className="card border-0 shadow rounded-4 overflow-hidden h-100">
    <img
      src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800"
      className="card-img-top"
      style={{ height: "250px", objectFit: "cover" }}
      alt="Maldives"
    />
    <div className="card-body">
      <h4 className="fw-bold">Maldives</h4>
      <p className="text-muted">
        Crystal-clear water and luxury overwater villas.
      </p>

      <div className="d-flex justify-content-between align-items-center">
        <span className="text-primary fw-bold fs-5">
          ₹69,999
        </span>

        <button className="btn btn-primary rounded-pill">
          Explore
        </button>
      </div>
    </div>
  </div>
</div>

{/* Destination 5 */}
<div className="col-lg-4 col-md-6">
  <div className="card border-0 shadow rounded-4 overflow-hidden h-100">
    <img
      src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800"
      className="card-img-top"
      style={{ height: "250px", objectFit: "cover" }}
      alt="Greece"
    />
    <div className="card-body">
      <h4 className="fw-bold">Santorini, Greece</h4>
      <p className="text-muted">
        White-blue houses and amazing sunset views.
      </p>

      <div className="d-flex justify-content-between align-items-center">
        <span className="text-primary fw-bold fs-5">
          ₹64,999
        </span>

        <button className="btn btn-primary rounded-pill">
          Explore
        </button>
      </div>
    </div>
  </div>
</div>

{/* Destination 6 */}
<div className="col-lg-4 col-md-6">
  <div className="card border-0 shadow rounded-4 overflow-hidden h-100">
    <img
      src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800"
      className="card-img-top"
      style={{ height: "250px", objectFit: "cover" }}
      alt="Dubai"
    />
    <div className="card-body">
      <h4 className="fw-bold">Dubai, UAE</h4>
      <p className="text-muted">
        Modern skyline, desert safari and luxury shopping.
      </p>

      <div className="d-flex justify-content-between align-items-center">
        <span className="text-primary fw-bold fs-5">
          ₹49,999
        </span>

        <button className="btn btn-primary rounded-pill">
          Explore
        </button>
      </div>
    </div>
  </div>
</div>
{/* Statistics Section */}

<div className="container-fluid bg-primary text-white py-5 mt-5">
  <div className="container">
    <div className="row text-center">

      <div className="col-md-3 mb-4">
        <h1 className="fw-bold">10K+</h1>
        <p>Happy Travelers</p>
      </div>

      <div className="col-md-3 mb-4">
        <h1 className="fw-bold">500+</h1>
        <p>Destinations</p>
      </div>

      <div className="col-md-3 mb-4">
        <h1 className="fw-bold">250+</h1>
        <p>Hotels</p>
      </div>

      <div className="col-md-3 mb-4">
        <h1 className="fw-bold">4.9 ★</h1>
        <p>Customer Rating</p>
      </div>

    </div>
  </div>
</div>

{/* Customer Reviews */}

<div className="container my-5">

  <div className="text-center mb-5">
    <h2 className="fw-bold">
      What Our Customers Say
    </h2>

    <p className="text-muted">
      Thousands of travelers trust Travel Everywhere.
    </p>
  </div>

  <div className="row">

    <div className="col-md-4 mb-4">
      <div className="card shadow border-0 h-100">
        <div className="card-body text-center">
          <img
            src="https://i.pravatar.cc/100?img=12"
            className="rounded-circle mb-3"
            alt=""
          />

          <h5>Rahul Sharma</h5>

          <p className="text-warning">
            ★★★★★
          </p>

          <p className="text-muted">
            Amazing experience! Booking was easy and the trip was unforgettable.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="card shadow border-0 h-100">
        <div className="card-body text-center">
          <img
            src="https://i.pravatar.cc/100?img=32"
            className="rounded-circle mb-3"
            alt=""
          />

          <h5>Priya Singh</h5>

          <p className="text-warning">
            ★★★★★
          </p>

          <p className="text-muted">
            Excellent service and affordable packages. Highly recommended.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="card shadow border-0 h-100">
        <div className="card-body text-center">
          <img
            src="https://i.pravatar.cc/100?img=45"
            className="rounded-circle mb-3"
            alt=""
          />

          <h5>Ayush Kumar</h5>

          <p className="text-warning">
            ★★★★★
          </p>

          <p className="text-muted">
            Beautiful destinations and smooth booking experience.
          </p>
        </div>
      </div>
    </div>

  </div>
</div>

{/* Newsletter */}

<div className="container my-5">

  <div className="card bg-light border-0 shadow-lg rounded-4">

    <div className="card-body text-center p-5">

      <h2 className="fw-bold">
        Subscribe To Our Newsletter
      </h2>

      <p className="text-muted">
        Get the latest travel deals and destination updates.
      </p>

      <div className="row justify-content-center mt-4">

        <div className="col-md-5">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter your email"
          />
        </div>

        <div className="col-md-2 mt-3 mt-md-0">
          <button className="btn btn-primary btn-lg w-100">
            Subscribe
          </button>
        </div>

      </div>

    </div>

  </div>

</div>

{/* Footer */}

<footer className="bg-dark text-white mt-5">

  <div className="container py-5">

    <div className="row">

      <div className="col-md-4">

        <h3 className="fw-bold">
          Travel Everywhere
        </h3>

        <p className="text-secondary">
          Explore the world with confidence and comfort.
        </p>

      </div>

      <div className="col-md-4">

        <h5>Quick Links</h5>

        <ul className="list-unstyled">

          <li><Link to="/dashboard" className="text-white text-decoration-none">Home</Link></li>
          <li><Link to="/destinations" className="text-white text-decoration-none">Destinations</Link></li>
          <li><Link to="/about" className="text-white text-decoration-none">About</Link></li>

        </ul>

      </div>

      <div className="col-md-4">

        <h5>Contact</h5>

        <p>Email: info@traveleverywhere.com</p>

        <p>Phone: +91 9876543210</p>

      </div>

    </div>

    <hr />

    <div className="text-center">
      © 2026 Travel Everywhere. All Rights Reserved.
    </div>

  </div>

</footer>
</div>

</div>
</div>

  
    );
}