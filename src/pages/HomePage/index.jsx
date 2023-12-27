import { Banner } from '../../components/Banner';
import { Contact } from '../../components/Contact';
import { RoomList } from '../../components/RoomList';
import { RoomInfo } from '../../components/RoomInfo';
import './style.css';
import { useState, useEffect } from 'react';
import { RoomForm } from '../../components/RoomForm';

export const HomePage = () => {
  const [rooms, setRooms] = useState(null);
  const [activeId, setActiveId] = useState(2);

  useEffect(() => {
    const FetchRooms = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const data = await response.json();
      setRooms(data.result);
    };
    FetchRooms();
  }, []);

  console.log(activeId);

  const activeRoom = rooms !== null ? rooms[activeId] : null;

  return (
    <div>
      <Banner />
      <section id="rooms" className="section__dark">
        <RoomList setActiveId={setActiveId} rooms={rooms}></RoomList>
      </section>
      <section id="booking" className="section__light">
        <div className="container container__room-info">
          {rooms === null ? (
            <p>Načítání...</p>
          ) : (
            <>
              {rooms !== null && (
                <div className="container--left">
                  <RoomInfo activeRoom={activeRoom}></RoomInfo>{' '}
                </div>
              )}
              <div className="container--right">
                <RoomForm activeRoom={activeRoom} />
              </div>
            </>
          )}
        </div>
      </section>
      <section id="contact" className="section__dark">
        <Contact></Contact>
      </section>
    </div>
  );
};
