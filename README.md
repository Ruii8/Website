<html>
<head>
<link rel="stylesheet" type=text/css href="20240318.css"/>
</head>
<body>
<div id=egg></div>
<div id=heart></div>
div
{
      background-color:red; 
      border-radius: 100px;
      -webkit-border-radius:100px;
      -moz-border-radius:100px; 
      height:200px; 
      width:200px
}
      

#egg 
{
      display: block;
      width: 126px;
      height: 180px;
      background-color: red;
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    }
  
 #heart 
{
      position: relative;
      width: 100px;
      height: 90px;
    }
    #heart:before,
    #heart:after {
      position: absolute;
      content: "";
      left: 50px;
      top: 0;
      width: 50px;
      height: 80px;
      background: red;
      border-radius: 50px 50px 0 0;
      transform: rotate(-45deg);
      transform-origin: 0 100%;
    }
    #heart:after {
      left: 0;
      transform: rotate(45deg);
      transform-origin: 100% 100%;
    }
  
  
