# HackYourFuture course / HTML-CSS / Week number 1
<a href="http://htmlpreview.github.io/?https://github.com/asksmith/HTML-CSS/blob/main/week1/prep-exercises/bird.html">Bird (pure HTML + CSS)</a>
<br>
<a href="https://github.com/asksmith/HTML-CSS/blob/main/week1/prep-exercises/bird.html">Bird (pure HTML+CSS) code</a>
<br>
<a href="http://htmlpreview.github.io/?https://github.com/asksmith/HTML-CSS/blob/main/week1/digital-resume/cv.html">Digital Resume</a>
<br>
<a href="https://github.com/asksmith/HTML-CSS/blob/main/week1/digital-resume/cv.html">Digital Resume code</a>

<h2>CLI Challenge</h2>
<p>
<b>1.1. How do I create a hidden file or folder? </b>
<br>
Name of a file or a directory should start with a dot character. <br>

To create a “hidden” directory you should use command “mkdir”, for example: <br>
<i>$mkdir “.myHiddenDirectory”</i><br>

To create “hidden” file you could use “touch” command, for example: <br>
<i>$touch “.myHiddenFile”</i><br>
</p>

<p>
<b>1.2. How do I display it in the CLI?</b>
<br>
You could use command “ls” with a argument “-a” (show all files), for example:<br>
<i>$ls -a</i>
</p>

<p>
<b>2. How do I create multiple nested directories, like /c/Users/myusername/these/folders/are/just/for/fun?</b>
<br>
You should use command “mkdir” with an argument “-p” (Create intermediate directories as required), for example:<br>
<i>$mkdir -p “these/folders/are/just/for/fun” </i>
</p>

<p>
<b>3. How do I append a message to a file, without a newline character, so the output would be…</b>
<br>
There are many ways to do that, for instance, you could use “echo” command with an argument “-n” (Do not print the trailing newline character) like that:<br>
<i>$echo “first message\nsecond message\n”>>file.txt</i>

And there are many more, for instance “printf” command, etc...
</p>
