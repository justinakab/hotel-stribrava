import './style.css';
import { motion } from 'framer-motion';

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
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                key={room.id}
                onClick={() => setActiveId(room.id)}
                className="room__card"
              >
                <img className="card__img" src={room.image} alt={room.name} />
                <div className="card__info">
                  <h1>{room.name}</h1>
                  <p>
                    Cena za noc: <br></br> {room.price} Kč/os.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
