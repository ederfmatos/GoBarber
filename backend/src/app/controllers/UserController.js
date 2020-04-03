import User from '../models/User';

class UserController {
	async store(req, res) {
		const { name, email, password, provider } = req.body;

		const userExists = await User.findOne({ where: { email } });

		if (userExists) {
			return res.status(400).json({ error: 'User already exists' });
		}

		const { id } = await User.create({
			name,
			email,
			password_hash: password,
			provider,
		});

		return res.json({ id, name, email, provider });
	}
}

export default new UserController();
