// Change button bg color and show specific section by id after button click.
ChangeBtnBgShowSpecificSectionById('donation_btn', 'donation_page');
ChangeBtnBgShowSpecificSectionById('history_btn', 'history_page');





// Add donation amount in total donation, show confirmation modal, show alert if insufficient balance, decrease main balance after donation by giving id.
addAddDonationAmountInTotalDonationAndShowTheRemainingTotalAmount('total_amount_before_donation_id', 'donate_flood_at_noakhali_amount', 'donate_flood_at_noakhali', 'main_balance', 'donate_flood_noakhali_heading');

addAddDonationAmountInTotalDonationAndShowTheRemainingTotalAmount('total_flood_relief_in_feni_amount', 'flood_relief_in_feni_amount', 'flood_relief_in_feni_btn', 'main_balance', 'flood_relief_in_feni_heading');

addAddDonationAmountInTotalDonationAndShowTheRemainingTotalAmount('aid_quota_protest_donation_amount', 'aid_quota_protest_donation_field', 'aid_quota_protest_donation_btn', 'main_balance', 'aid_quota_protest_donation_heading');




// Go to the blog page after click the blog button.
document.getElementById('blog_btn').addEventListener('click', function(){
    window.location.href = "../blog.html";
})