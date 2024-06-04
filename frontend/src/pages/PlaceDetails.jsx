import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { StarHalf, StarFill } from "react-bootstrap-icons";
import Spinner from "react-bootstrap/Spinner";

const PlaceDetail = ({ user, isLoggedIn }) => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/place/${id}`)
      .then((response) => {
        console.log("Place Data:", response.data);
        setPlace(response.data);
      })
      .catch((err) => {
        console.error("Error fetching place details:", err);
      });
  }, [id]);

  const handleReviewSubmit = () => {
    if (!isLoggedIn) {
      alert("Anda harus login untuk mengirim ulasan.");
      return;
    }

    const newReview = {
      tempat_id: id,
      rating: reviewRating,
      ulasan: reviewText,
      user_id: user.id,
    };

    axios
      .post(`http://localhost:8000/place/${id}/review`, newReview, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("Review submitted:", response.data);
        setPlace((prevPlace) => ({
          ...prevPlace,
          reviews: [...prevPlace.reviews, response.data],
        }));
        setReviewText("");
        setReviewRating(0);
      })
      .catch((err) => {
        console.error("Error submitting review:", err);
      });
  };

  if (!place) {
    return <Spinner animation="border" variant="dark" />;
  }

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarFill key={i} size={17} className="star-full" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" size={17} className="star-half" />);
    }

    return stars;
  };

  const averageRating = place.averageRating ?? 0;

  return (
    <div>
      <h1>{place.nama_tempat}</h1>
      <img
        src={`data:image/png;base64,${place.gambarBase64}`}
        alt={place.nama_tempat}
      />
      <p>{place.lokasi}</p>
      <p>{place.deskripsi}</p>
      <p>
        Rating Rata-rata: {averageRating.toFixed(1)}{" "}
        {renderRating(averageRating)}
      </p>
      <p>Harga: Rp. {place.harga}</p>

      <a href={place.link_map}>
        <img
          src={`data:image/png;base64,${place.gambarMapBase64}`}
          alt={place.nama_tempat}
        />
      </a>

      <h3>Ulasan Pengguna</h3>

      {place.reviews.length > 0 ? (
        place.reviews
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .map((review, index) => (
            <div
              key={index}
              className="review"
              style={{ padding: " 1rem 20rem" }}
            >
              <div
                style={{
                  border: "1px solid #000",
                  padding: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  {review.foto ? (
                    <img
                      src={`data:image/png;base64,${review.foto}`}
                      alt="user"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "100%",
                        border: "1px solid #000",
                      }}
                    />
                  ) : (
                    <img
                      src="../public/logo/default.png"
                      alt="user"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "100%",
                        border: "1px solid #000",
                      }}
                    />
                  )}
                  <p style={{ paddingTop: "0.8rem" }}>
                    {review.first_name} {review.last_name}
                  </p>
                </div>
                <p>
                  {typeof review.rating === "number"
                    ? review.rating.toFixed(2)
                    : review.rating}
                  {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                    <StarFill key={i} size={17} className="star-full" />
                  ))}
                  {review.rating % 1 !== 0 && (
                    <StarHalf size={17} className="star-half" />
                  )}
                </p>
                <p>{review.ulasan}</p>
              </div>
            </div>
          ))
      ) : (
        <p>Belum ada ulasan.</p>
      )}

      <div>
        <h3>Tulis Ulasan</h3>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            value={reviewRating}
            onChange={(e) => setReviewRating(parseFloat(e.target.value))}
            min="0"
            max="5"
            step="0.01"
          />
        </div>
        <div>
          <label>Ulasan:</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
        </div>
        <button onClick={handleReviewSubmit}>Kirim Ulasan</button>
      </div>
    </div>
  );
};

export default PlaceDetail;
