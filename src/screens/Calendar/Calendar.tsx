import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Button, Form } from "react-bootstrap";
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
        <h1>Calendar</h1>
        <div className={`${style.calendar} calendar`}>
          <FullCalendar
            dayCellClassNames={style.cell}
            dayHeaderClassNames={style.header}
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
        className={style.customModal}
      >
        <Modal.Header>
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
