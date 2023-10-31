const SellerCard = ({ avatarUrl, imageUrl, name, username }) => (
    <div className="card">
      <div className="image-container">
        <img src={imageUrl} width="244" height="126" alt={`${name}'s artwork`} />
      </div>
      <img className="avatar" src={avatarUrl} alt={`${name}'s avatar`} />
      <div className="card-info">
        <h2>{name}</h2>
        <p>@{username}</p>
      </div>
    </div>
  );
  export default SellerCard;