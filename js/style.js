document.getElementById('savings-account-form')?.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Please fill out all required fields.');
        event.preventDefault();
    }
});

document.getElementById('funds-transfer-form')?.addEventListener('submit', function(event) {
    const amount = document.getElementById('amount').value;

    if (amount <= 0) {
        alert('Transfer amount must be greater than zero.');
        event.preventDefault();
    }
});

document.getElementById('loan-application-form')?.addEventListener('submit', function(event) {
    const loanAmount = document.getElementById('loan-amount').value;

    if (loanAmount <= 0) {
        alert('Loan amount must be greater than zero.');
        event.preventDefault();
    }
});

document.getElementById('insurance-form')?.addEventListener('submit', function(event) {
    const premium = document.getElementById('premium').value;

    if (premium <= 0) {
        alert('Preferred premium must be greater than zero.');
        event.preventDefault();
    }
});
