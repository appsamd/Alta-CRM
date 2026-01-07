// Proteção contra F12 e view-source
(function() {
    // Desabilita clique direito
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Desabilita teclas de atalho
    document.addEventListener('keydown', function(e) {
        // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        if (e.keyCode == 123 || 
            (e.ctrlKey && e.shiftKey && e.keyCode == 73) ||
            (e.ctrlKey && e.shiftKey && e.keyCode == 74) ||
            (e.ctrlKey && e.keyCode == 85)) {
            e.preventDefault();
            return false;
        }
    });

    // Detecta DevTools aberto
    let devtools = {open: false};
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function() {
            devtools.open = true;
        }
    });

    setInterval(function() {
        devtools.open = false;
        console.log(element);
        if (devtools.open) {
            window.location.href = 'about:blank';
        }
    }, 1000);
})();
