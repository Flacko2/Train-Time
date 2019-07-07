// const train = $("#train");
// const location = $("#location");
// const initTrain = $("#init-train");
// const frequency = $("#frequency");
// const addTrain = $("#add-train");

let firebaseConfig = {
    apiKey: "AIzaSyCKX-7P9AKF60eVsRMpytVFNu6nsNpN3-Q",
    authDomain: "coolio-30b4c.firebaseapp.com",
    databaseURL: "https://coolio-30b4c.firebaseio.com",
    projectId: "coolio-30b4c",
    storageBucket: "coolio-30b4c.appspot.com",
    messagingSenderId: "264694599555",
    appId: "1:264694599555:web:d327dd842462b1d0"
};



firebase.initializeApp(firebaseConfig);

const database = firebase.database();

function addNew() {
    event.preventDefault();

    console.log("It's good");

    const train = $("#train").val().trim();
    const location = $("#location").val().trim();
    const initTrain = $("#init-train").val().trim();
    const frequency = $("#frequency").val().trim();


    const newInfo = {
        train: train,
        location: location,
        initTrain: initTrain,
        frequency: frequency
    };

    database.ref().push(newInfo);

    console.log(newInfo.train);
    console.log(newInfo.location);
    console.log(newInfo.initTrain);
    console.log(newInfo.frequency);

    $("#train").val("");
    $("#location").val("");
    $("#init-train").val("");
    $("#frequency").val("");
}

database.ref().on("child_added", function (snapshot) {

    console.log(snapshot.val());

    $("#train").text(snapshot.val().train);
    $("#location").text(snapshot.val().location);
    $("#init-train").text(snapshot.val().initTrain);
    $("#frequency").text(snapshot.val().frequency);



}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
    console.log(response);
});


database.ref().on("child_added", function () {
    for (let i = 0; i < Object.length; i++) {
    $('#table-data').append(
    '<tr><td>' + response.initTrain[i] + '</td>' +
    '<td>' + response.train[i] + '</td>' +
    '<td>' + response.frequency[i] + '</td>' +
    '<td>' + response.location[i] + '</td><tr>');
    }
});
