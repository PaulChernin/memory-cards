if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/memory-cards/sw.js', { scope: '/memory-cards/' })})}