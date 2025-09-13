// Event Management Ticketing System - Main Application
// This file will be modified by different teams

class EventManager {
    constructor() {
        this.events = [];
        this.tickets = [];
    }

    // Team A will work on this feature
    createEvent(eventData) {
        console.log("Creating event...");
        // TODO: Implement event creation logic
        return null;
    }

    // Team B will work on this feature
    bookTicket(eventId, userInfo) {
        console.log("Booking ticket...");
        
        // Team B Implementation: Ticket booking logic
        const event = this.events.find(e => e.id === eventId);
        if (!event) {
            throw new Error(`Event with ID ${eventId} not found`);
        }
        
        if (!userInfo.name || !userInfo.email) {
            throw new Error("User name and email are required");
        }
        
        // Check if event has available capacity
        const bookedTickets = this.tickets.filter(t => t.eventId === eventId).length;
        if (bookedTickets >= event.capacity) {
            throw new Error("Event is fully booked");
        }
        
        const ticket = {
            id: this.tickets.length + 1,
            eventId: eventId,
            eventName: event.name,
            userName: userInfo.name,
            userEmail: userInfo.email,
            price: event.price,
            bookingDate: new Date(),
            status: 'confirmed'
        };
        
        this.tickets.push(ticket);
        console.log(`Ticket booked successfully for ${userInfo.name}. Ticket ID: ${ticket.id}`);
        return ticket;
    }

    // Team C will work on this feature
    generateReport() {
        console.log("Generating report...");
        // TODO: Implement reporting logic
        return null;
    }
}

module.exports = EventManager;