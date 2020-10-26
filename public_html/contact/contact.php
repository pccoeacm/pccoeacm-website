   
<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subjectmain = $_POST['subject'];
$myemail = "websupport@pccoe.acm.org";
$formcontent="From: $name \n Message: $message";
$subject = "Contact Form - $subjectmain";
$mailheader = "From: $email \r\n";
$mailheader .= "Reply-To: patilswap33.sp.sp@gmail.com \r\n";
$mailheader .= "Return-Path: $email \r\n";
$mailheader .= "MIME-Version: 1.0\r\n";
$mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
$mailheader .='X-Mailer: PHP/' . phpversion();
mail($myemail, $subject, $formcontent, $mailheader) or die("Error!");
echo "<div style='padding:50px;text-align:center;'>
    <script>
         setTimeout(function(){
            window.location.href = '../index.html';
         }, 7000);
    </script>
      <h1 style='color:#13b7ed;font-size:30px;'>Thanks for contacting us, your message has been sent to the Administrator. You will receive the mail from our support regarding the same.</h1><br>
      <h2 style='color:#13b7ed;font-size:20px;'>Redirecting you to the homepage....</h2>
</div>";

$mailheader = "From: $myemail \r\n";
$mailheader .= "Reply-To: $email \r\n";
$mailheader .= "Return-Path: $myemail \r\n";
$subject = "PCCOE ACM Student Chapter Support - Thanks for Contacting Us";
$formcontent= "Hi $name, \n\nThanks for reaching out! We would be more than happy to help you.\nWe have received your request regarding - \"$subjectmain\". We will look into the matter and revert back to you as soon as possible.\n\nThanks,\nWeb Support\nPCCOE ACM Student Chapter";
mail($email, $subject, $formcontent, $mailheader) or die("Error!");
?>