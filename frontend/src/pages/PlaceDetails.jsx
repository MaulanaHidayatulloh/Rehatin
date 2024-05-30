import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { StarHalf, StarFill } from "react-bootstrap-icons";
import Spinner from "react-bootstrap/Spinner";

const PlaceDetail = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

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

  const averageRating = place.averageRating ?? 0; // Untuk nilai default jika nilai 0

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
      <h3>Ulasan Pengguna</h3>
      {place.reviews.length > 0 ? (
        place.reviews.map((review, index) => (
          <div key={index} className="review">
            <p>
              {review.rating}
              {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                <StarFill key={i} size={17} className="star-full" />
              ))}
              {review.rating % 1 !== 0 && (
                <StarHalf size={17} className="star-half" />
              )}
            </p>
            <p>{review.ulasan}</p>
            <p>
              - {review.first_name} {review.last_name}
            </p>
          </div>
        ))
      ) : (
        <p>Belum ada ulasan.</p>
      )}
    </div>
  );
};

export default PlaceDetail;
