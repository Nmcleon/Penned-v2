import React from 'react';
import { format } from 'date-fns';
import './Badge.css';

// Define the formatDate function here
const formatDate = (dateString) => {
  try {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return format(new Date(dateString), options);
  } catch (error) {
    console.error('Failed to format date:', dateString, error);
    // Return a fallback value or handle the error as needed
    return 'Invalid Date';
  }
};

export default function Badge({ tags = [], publishedAt }) {
  const formattedDate = formatDate(publishedAt);
  console.log('Published At:', publishedAt);

  if (typeof publishedAt !== 'string') {
    console.error('publishedAt is not a string:', typeof publishedAt);
    return null;
  }

  return (
    <div className="card-badge">
      <div className="card-categories">
        {tags && tags.map((tag, index) => <p key={index}>{tag}</p>)}
      </div>
      <div className="card-date">
        <p>{publishedAt}</p>
      </div>
    </div>
  );
}
