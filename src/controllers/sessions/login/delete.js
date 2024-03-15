async function deleteLogin(req, res) {
   res.cookie('user_id', '')
   res.cookie('user_email', '')
   res.redirect(200, '/login')
}

module.exports = { deleteLogin }
