var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'someone';
    leastFavoriteCustomer = 'someone else';
}