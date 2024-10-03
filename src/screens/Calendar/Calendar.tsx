import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Button, Form } from "react-bootstrap"; // Bootstrap for modal and form
import { useData } from "./useData";
import style from "./Calendar.module.scss";
import { PageLayout } from "@/components";
export const Calendar = () => {
  const {
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
  } = useData();

  return (
    <PageLayout>
      <div className={style.root}>
        <div className={style.calendar}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView='dayGridMonth'
            headerToolbar={calendarHeader}
            events={eventsData}
            editable={true}
            selectable={true}
            dateClick={handleDateClick}
            eventClick={handleEventClick}
            eventDrop={handleEventDrop}
          />
        </div>
      </div>
      <Modal
        show={modalOpen}
        onHide={() => setModalOpen(false)}
        className={style.customModal} // Add the custom class for the modal
      >
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? "Edit Event" : "Add Event"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                type='text'
                maxLength={30}
                name='title'
                value={newEventData.title}
                onChange={handleFormChange}
                placeholder='Enter event title'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type='date'
                name='date'
                value={newEventData.date}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Time</Form.Label>
              <Form.Control
                type='time'
                name='time'
                value={newEventData.time}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Color</Form.Label>
              <Form.Control
                type='color'
                name='color'
                value={newEventData.color}
                onChange={handleFormChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {isEditing && (
            <Button variant='danger' onClick={handleDeleteEvent}>
              Delete
            </Button>
          )}
          <Button variant='secondary' onClick={() => setModalOpen(false)}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSaveEvent}>
            {isEditing ? "Save Changes" : "Add Event"}
          </Button>
        </Modal.Footer>
      </Modal>
    </PageLayout>
  );
};
