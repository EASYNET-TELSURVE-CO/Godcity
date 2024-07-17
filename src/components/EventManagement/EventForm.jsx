// src/components/EventManagement/EventForm.jsx
import React, { useState } from 'react';
import { createEvent } from '../../api/events';
import Button from '../common/Button';
import Input from '../common/Input';

const EventForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newEvent = { title, description, date, time, location };
      await createEvent(newEvent);
      // Optionally reset the form or show a success message
    } catch (error) {
      console.error('Failed to create event', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Event Title"
      />
      <Input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Event Description"
      />
      <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Event Date"
      />
      <Input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Event Time"
      />
      <Input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Event Location"
      />
      <Button type="submit">Create Event</Button>
    </form>
  );
};

export default EventForm;
