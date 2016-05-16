module.exports = function (opts) {
  var visitor = {};
  visitor.JSXIdentifier = {
    exit: function (a, b) {
      if (a.node.name === 'class')
        a.node.name = 'className'
    }
  }
  return {visitor: visitor}
};