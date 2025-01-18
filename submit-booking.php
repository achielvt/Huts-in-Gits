<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $eventDate = htmlspecialchars($_POST['event-date']);
    $location = htmlspecialchars($_POST['location']);
    $details = htmlspecialchars($_POST['details']);

    $to = "info.hutsingits@gmail.com";
    $subject = "Nieuwe boekingsaanvraag van $name";
    $message = "Naam: $name\nE-mail: $email\nDatum: $eventDate\nLocatie: $location\nDetails:\n$details";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Bedankt voor uw boekingsaanvraag! We nemen spoedig contact met u op.";
    } else {
        echo "Er is een probleem opgetreden. Probeer het later opnieuw.";
    }
}
?>