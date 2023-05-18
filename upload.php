<?php
echo "HI";

move_uploaded_file(
  $_FILES["upfile"]["tmp_name"], 
  "demo.html"
) ? "OK" : "ERROR UPLOADING"; 