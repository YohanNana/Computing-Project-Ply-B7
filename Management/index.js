const firebaseConfig = {
    apiKey: "AIzaSyBm9ryFrZMedJ6p14RDxXD67boIOElE_-U",
    authDomain: "hpms-85ed2.firebaseapp.com",
    databaseURL: "https://hpms-85ed2-default-rtdb.firebaseio.com",
    projectId: "hpms-85ed2",
    storageBucket: "hpms-85ed2.appspot.com",
    messagingSenderId: "1000800775577",
    appId: "1:1000800775577:web:0f1a641e843ea088bc3708"
};

firebase.initializeApp(firebaseConfig);

/*
const db = firebase.firestore();

function addTicket(ticketData) {
    return db.collection('tickets').add(ticketData);
}

const functions = firebase.functions();

function sendConfirmationEmail(ticketId) {
    return functions.httpsCallable('sendConfirmationEmail')(ticketId);
}

async function sendConfirmationEmail(ticketId) {
    try {
        const result = await sendConfirmationEmailCallable(ticketId);
        console.log('Email sent successfully:', result.data);
    } catch (error) {
        console.error('Error sending email:', error.response.data);
 */


// old edit

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');

admin.initializeApp();

// Firebase Cloud Function to send confirmation email
exports.sendConfirmationEmail = functions.database.ref('/rangers/rid')
    .onCreate((snapshot, context) => {
        const rangers = snapshot.val();

        // Compose email message
        const emailData = {
            sender: {
                //Add a temporary email address
                email: 'your@example.com',
                name: 'Horton Plains Team'
            },
            to: [
                {
                    //change these to databse names
                    email: rangers.email,
                    name: rangers.name
                }
            ],
            subject: 'Ticket Purchase Confirmation',
            text: Dear ${ rangers.name }, \n\nThank you for purchasing a ticket.Your order details are as follows: ${ rangers.details },
        // You can also use HTML content for the email body if desired
    };

// Send the email using MailerSend API
return axios.post('https://api.mailersend.com/v1/email', emailData, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': mlsn.dca412284a7b9aada6ede6357a65089fbc9cf878169644eb557c595051d36add
    }
})
    .then(response => {
        console.log('Email sent successfully:', response.data);
    })
    .catch(error => {
        console.error('Error sending email:', error.response.data);
    });
    });