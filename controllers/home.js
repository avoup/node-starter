/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

/**
 * GET /
 * About us page.
 */
exports.getAbout = (req, res) => {
  res.render('about', {
    title: 'About us'
  });
};

exports.socket = (req, res) => {
  res.render('socket', {
    title: 'socket'
  });
};