import './style.css';

export const RoomList = ({ rooms, setActiveId }) => {
  return (
    <div className="container container__room-list">
      <h2>Naše pokoje</h2>
      {rooms === null ? (
        <p>Načítání pokojů</p>
      ) : (
        <>
          <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
          <div className="room-list__row">
            {rooms.map((room) => (
              <div
                key={room.id}
                onClick={() => setActiveId(room.id)}
                className="room__card"
              >
                <img className="card__img" src={room.image} alt={room.name} />
                <h1>{room.name}</h1>
                <p>
                  Cena za noc: <br></br> {room.price} Kč/os.
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
