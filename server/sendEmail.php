<?php
    error_reporting(0);
    $msg="";
    if(isset($_POST['submit'])){
        $to = "krpan.aljaz@gmail.com";
        $subject = "Form Submission";
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $msgBody = 'Name : '.$name.' has written you : '.$message;
        $headers = 'From: '.$email;

        $secretKey = "6LdUYq0UAAAAAJD300WQNfB6B1WFaEnDBX97bLiS";
        $responseKey = $_POST['g-recaptcha-response'];

        $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey";
        $response = file_get_contents($url);
        $response = json_decode($response);

        if($response->success){
            if(mail($to, $subject, $msgBody, $headers)){
                $msg="Message Sent Successfully!";
            }
            else{


                $msg="Failed to send the message!";
            }
        }
        else{
            $msg="Verification Failed!";
        }

    }
?>

<!DOCTYPE html>

<html>

<head>
    <title>Contact</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</head>

<body>
    <div class="containter">
        <div class="row justify-content-center"> 
            <div class="col-lg-4 bg-light rounded mt-3">
                <h4 class="text-center text-dark p-2">Contact Us!</h4>
                <form action="<?= $_SERVER['PHP_SELF'] ?>" method="post" class="p-2">
                <div class="form-group">
                    <input type="text" name="name" class="form-control" placeholder="Enter name" required>
                </div>
                <div class="form-group">
                    <input type="text" name="email" class="form-control" placeholder="Enter e-mail" required>
                </div>
                <div class="form-group">
                    <input type="textarea" name="message" class="form-control" rows="4" placeholder="Write your message" required>
                </div>
                <div class="form-group">
                    <div class="g-recaptcha" data-sitekey="6LdUYq0UAAAAAMJh-miT8tLuDn3Fn5wCFVpeZq6F"></div>
                </div>
                <div class="form-group">
                    <input type="submit" name="submit" value="Send" class="btn btn-danger btn-block" placeholder="Enter name" required>
                </div>
                <div class="form-group">
                    <h4 class="text-success text-center"><?= $msg; ?></h4>
                </div>
            </div>
        </div>
    </div>
</body>

</html>