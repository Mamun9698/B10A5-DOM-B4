function showSectionById(id){
    document.getElementById('show-donation-page').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    // show the section with the provided Id
    document.getElementById(id).classList.remove('hidden');
}


