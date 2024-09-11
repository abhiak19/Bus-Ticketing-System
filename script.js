let ticketNo = 0;

document.addEventListener("DOMContentLoaded", () => {
    const ticketNoElement = document.getElementById("ticketNo");
    ticketNoElement.textContent = `0/2300`;

    function downloadTicket() {
        if (ticketNo >= 2300) {
            alert("Needs a refill");
            return;
        }

        ticketNo++;
        ticketNoElement.textContent = `${ticketNo}/2300`;

        document.querySelectorAll("input").forEach(input => input.value = "");

        html2canvas(document.getElementById("finalTicket")).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'ticket.png';
            link.click();
        });
    }

    function updateDateTime() {
        const dateElement = document.getElementById("date");
        const timeElement = document.getElementById("time");

        const now = new Date();
        const date = now.toLocaleDateString(); // Get the current date
        const time = now.toLocaleTimeString(); // Get the current time

        dateElement.textContent = `Date - ${date}`;
        timeElement.textContent = `Time - ${time}`;
    }

    // Call the function every second to keep the time updated
    setInterval(updateDateTime, 1000);

    // Update the date and time immediately when the page loads
    updateDateTime();

    // Attach the downloadTicket function to the button click event
    document.querySelector('button').addEventListener('click', downloadTicket);
});
