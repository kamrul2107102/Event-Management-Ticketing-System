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
        // TODO: Implement ticket booking logic
        return null;
    }

    // Team C will work on this feature
    generateReport() {
        console.log("Generating report...");
        
        // Team C Implementation: Reporting logic
        const totalEvents = this.events.length;
        const totalTickets = this.tickets.length;
        const totalRevenue = this.tickets.reduce((sum, ticket) => sum + ticket.price, 0);
        
        // Event statistics
        const eventStats = this.events.map(event => {
            const eventTickets = this.tickets.filter(t => t.eventId === event.id);
            const soldTickets = eventTickets.length;
            const revenue = eventTickets.reduce((sum, ticket) => sum + ticket.price, 0);
            const occupancyRate = ((soldTickets / event.capacity) * 100).toFixed(2);
            
            return {
                eventId: event.id,
                eventName: event.name,
                capacity: event.capacity,
                soldTickets: soldTickets,
                availableTickets: event.capacity - soldTickets,
                revenue: revenue,
                occupancyRate: `${occupancyRate}%`
            };
        });
        
        const report = {
            summary: {
                totalEvents: totalEvents,
                totalTicketsSold: totalTickets,
                totalRevenue: totalRevenue,
                averageRevenuePerEvent: totalEvents > 0 ? (totalRevenue / totalEvents).toFixed(2) : 0,
                generatedAt: new Date()
            },
            eventDetails: eventStats
        };
        
        console.log("Report generated successfully:");
        console.log(`Total Events: ${totalEvents}`);
        console.log(`Total Tickets Sold: ${totalTickets}`);
        console.log(`Total Revenue: $${totalRevenue.toFixed(2)}`);
        
        return report;
    }
}

module.exports = EventManager;