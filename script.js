// Bu kısımda arama butonuna tıklama işlevselliği eklenebilir.
document.getElementById('searchBtn').addEventListener('click', function() {
    var searchTerm = document.getElementById('search').value;
    // Burada arama işlemi gerçekleştirilebilir. Örneğin, hikayeler arasında arama yapılabilir.
    console.log('Arama: ' + searchTerm);
});
