function Card({ title, description, image }) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 max-w-sm">
        {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />}
        <h3 className="text-xl font-bold mt-2">{title}</h3>
        <p className="text-gray-700 mt-1">{description}</p>
      </div>
    );
  }
  
  export default Card;
  