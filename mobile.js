if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i) || window.innerWidth <= 768) {
    document.documentElement.innerHTML =
    `
    <head>
    <title>Not Available</title>
    <style>
    body {
    font-family: sans-serif;
    background: #111;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    }
    </style>
    </head>
    <body>
    <div>
    <h2>Not Available</h2>
    </div>
    </body>
    `;
}
