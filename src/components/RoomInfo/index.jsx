import './style.css';

export const RoomInfo = ({ activeRoom }) => {
  return (
    <>
      {activeRoom === null ? (
        '<p>Načítání ...</p>'
      ) : (
        <div className="container container__room-description">
          <h1>{activeRoom.name}</h1>
          <p className="room-info__description">{activeRoom.description}</p>
          <div className="room-info__img">
            <img
              className="info__img"
              src={activeRoom.image}
              alt={activeRoom.name}
            ></img>
          </div>
        </div>
      )}
    </>
  );
};
