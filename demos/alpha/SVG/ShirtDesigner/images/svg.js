function notify( ref, type ) {
    var event = document.createEvent("CustomEvent");
    event.initEvent(type,true,true);
    ref.dispatchEvent(event);
}