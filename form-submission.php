<?php

if ( isset($_POST['name']) ) {
  $name = $_POST['name'];
}
$url = $_POST['url'];
$email = '';
if ( isset($_POST['email']) ) {
  $email = $_POST['email'];
}
$visitor_email = $email;
$description = $_POST['description'];
$categories = 'No categories selected';
if (isset($_POST['category'])){
  $categories = implode(',', $_POST['category']);
}
$phone = $_POST['phone'];
if ( isset($_POST['neighborhood']) ) {
  $neighborhood = $_POST['neighborhood'];
}
$address = $_POST['address'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip = $_POST['zip'];

//Validate first
if( empty($name) ) {
    echo "We need your name and email address";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Sorry, that's not a real email address";
    exit;
}

$email_from = 'helpoverhate@upstatement.com';//<== update the email address
$email_subject = "New Boston Built form submission";
$email_body = "You have received a new message from $name.\n".
    "Company name: $name.\n".
    "URL: $url.\n".
    "Email: $email\n".
    "Company description: $description\n".
    "Categories: $categories\n".
    "Phone number: $phone\n".
    "Neighborhood: $neighborhood\n".
    "Address: $address $city $state $zip\n";
    
$to = "helpoverhate@upstatement.com";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
$success = mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: /success');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   