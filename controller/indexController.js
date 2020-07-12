const welcome_get = (req, res) => {
  console.log('Welcome page');
}

const dashboard = (req, res) => {
  console.log('Dashboard page');
}
module.exports = {
  welcome_get,
  dashboard
};