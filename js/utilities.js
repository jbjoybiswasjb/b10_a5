// Change color, bg color etc by id.
function changeButtonBgById(id) {

    document.getElementById('donation_btn').classList.remove('font-semibold', 'text-heading', 'bg-buttonBg', 'hover:bg-buttonBg');
    document.getElementById('donation_btn').classList.add('font-medium', 'text-heading/70', 'border', 'border-heading/30');

    document.getElementById('history_btn').classList.remove('font-semibold', 'text-heading', 'bg-buttonBg', 'hover:bg-buttonBg');
    document.getElementById('history_btn').classList.add('font-medium', 'text-heading/70', 'border', 'border-heading/30');



    document.getElementById(id).classList.remove('font-medium', 'text-heading/70', 'border', 'border-heading/30');

    document.getElementById(id).classList.add('font-semibold', 'text-heading', 'bg-buttonBg', 'hover:bg-buttonBg');

}




// Show Specific section by id.
function showSpecificSectionById(id) {

    document.getElementById('donation_page').classList.add('hidden');
    document.getElementById('history_page').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

}





// Change button bg color and show specific section by id after click button.
function ChangeBtnBgShowSpecificSectionById(buttonId, sectionId) {
    document.getElementById(buttonId)
        .addEventListener('click', function () {

            // Change buttonBg color.
            changeButtonBgById(buttonId);

            // Show specific section.
            showSpecificSectionById(sectionId);

        })
}






// Get dom inner text in number by id.
function getInnerTextNumberById(id) {
    const domInnerText = document.getElementById(id).innerText;
    const domInnerTextNumber = parseFloat(domInnerText);
    return domInnerTextNumber;
}





// Get input field value in number by id.
function getInputNumberById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}





function addAddDonationAmountInTotalDonationAndShowTheRemainingTotalAmount(totalAmountBeforeDonationId, donationAmountFieldId, donationBtnId, mainBalanceId, headingId) {
    document.getElementById(donationBtnId)
        .addEventListener('click', function (event) {

            // Prevent page reload after form button click.
            event.preventDefault();

            // Get all input or text in number.
            const totalAmountBeforeDonation = getInnerTextNumberById(totalAmountBeforeDonationId);
            const donationAmount = getInputNumberById(donationAmountFieldId);
            const mainBalance = getInnerTextNumberById(mainBalanceId);

            // Show the alert if insufficient amount given.
            if (donationAmount < 1 || isNaN(donationAmount)) {
                alert('Please give right amount of donation');
                return;
            }




            // Calculate remaining balance and show the alert if remaining balance is insufficient.
            const remainingBalance = mainBalance - donationAmount;
            if (remainingBalance < 0) {
                alert("You can not donate. you have insufficient  money.");
                return;
            }

            
            if (remainingBalance < mainBalance) {
                document.getElementById("my_modal_1").showModal();
            }

            document.getElementById(mainBalanceId).innerText = remainingBalance;



            const totalDonation = totalAmountBeforeDonation + donationAmount;
            document.getElementById(totalAmountBeforeDonationId).innerText = totalDonation;


            // Empty input field after donation.
            document.getElementById(donationAmountFieldId).value = '';





            // Show history.
            showHistory(headingId, donationAmount);           

        })
}