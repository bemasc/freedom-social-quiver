
var View_unprivileged = function (caller, dispatchEvent) {
  this.dispatchEvent = dispatchEvent;
  this.module = caller;
  var config = this.module.manifest.views;
  fdom.util.handleEvents(this);
};

View_unprivileged.prototype.open = function (name, what, continuation) {
/*  this.dispatchEvent('message', {
    cmd: 'ready'
  }); */
  continuation();
};

View_unprivileged.prototype.show = function (continuation) {
  continuation();
};

View_unprivileged.prototype.postMessage = function (args, continuation) {
  this.win.contentWindow.postMessage(args, '*');
  continuation();
};

View_unprivileged.prototype.close = function (continuation) {
  continuation();
};

View_unprivileged.prototype.onMessage = function (m) {
};

fdom.apis.register("core.view", View_unprivileged);
