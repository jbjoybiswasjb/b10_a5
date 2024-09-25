function showHistory(headingId, donationAmount) {
    // Create div for show history.
    const dateTime = new Date();

    const heading = document.getElementById(headingId).innerText;

    const historyContainer = document.getElementById('history_container');
    const div = document.createElement('div');
    div.setAttribute('class', 'p-8 border border-heading/10 rounded-2xl');
    div.innerHTML = `            
            <h2 class="mb-4 text-heading text-xl font-bold">
                ${donationAmount} Taka is ${heading}
            </h2>
            <p class="text-base font-light text-heading/70">
                Date: ${dateTime}
            </p>            
            `;
    historyContainer.appendChild(div);
}