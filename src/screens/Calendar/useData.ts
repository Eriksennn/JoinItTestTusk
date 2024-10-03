import { useState } from "react";

export const useData = () => {
  const [eventsData, setEventsData] = useState([
    {
      id: "1",
      title: "Sample Event",
      start: "2023-10-03T10:00:00",
      end: "2023-10-03T12:00:00",
      backgroundColor: "#4a90e2",
      textColor: "#fff",
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newEventData, setNewEventData] = useState({
    title: "",
    date: "",
    time: "",
    color: "#4a90e2",
  });

  const handleDateClick = (info: any) => {
    setNewEventData({
      title: "",
      date: info.dateStr,
      time: "",
      color: "#4a90e2",
    });
    setIsEditing(false);
    setModalOpen(true);
  };

  const handleEventClick = (info: any) => {
    const event = info.event;
    setNewEventData({
      title: event.title,
      date: event.startStr.split("T")[0],
      time: event.startStr.split("T")[1] || "",
      color: event.backgroundColor || "#4a90e2",
    });
    setSelectedEvent(event);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleFormChange = (e: any) => {
    setNewEventData({ ...newEventData, [e.target.name]: e.target.value });
  };

  const handleSaveEvent = () => {
    const { title, date, time, color } = newEventData;
    const startTime = `${date}T${time || "00:00:00"}`;

    if (isEditing && selectedEvent) {
      selectedEvent.setProp("title", title);
      selectedEvent.setProp("start", startTime);
      selectedEvent.setProp("backgroundColor", color);
      selectedEvent.setProp("textColor", "#fff");
    } else {
      const newEvent = {
        id: `${Date.now()}`,
        title,
        start: startTime,
        backgroundColor: color,
        textColor: "#fff",
      };
      setEventsData([...eventsData, newEvent]);
    }

    setModalOpen(false);
  };

  const handleEventDrop = (info: any) => {
    const updatedEvents = eventsData.map((event) =>
      event.id === info.event.id
        ? { ...event, start: info.event.startStr, end: info.event.endStr }
        : event
    );
    setEventsData(updatedEvents);
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      selectedEvent.remove();
      setModalOpen(false);
    }
  };

  const calendarHeader = {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay",
  };
  return {
    calendarHeader,
    eventsData,
    handleDateClick,
    handleEventClick,
    handleEventDrop,
    modalOpen,
    setModalOpen,
    isEditing,
    newEventData,
    handleFormChange,
    handleDeleteEvent,
    handleSaveEvent,
  };
};
