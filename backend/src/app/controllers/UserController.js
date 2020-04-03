import User from '../models/User';

function checkUserExists(email) {
	return User.findOne({ where: { email } });
}

class UserController {
	async store(req, res) {
		const { name, email, password, provider } = req.body;

		if (await checkUserExists(email)) {
			return res.status(400).json({ error: 'User already exists' });
		}

		const { id } = await User.create({
			name,
			email,
			password,
			provider,
		});

		return res.json({ id, name, email, provider });
	}

	async update(req, res) {
		const { email, oldPassword } = req.body;

		const user = await User.findByPk(req.userId);

		if (email !== user.email && (await checkUserExists(email))) {
			return res.status(400).json({ error: 'User already exists' });
		}

		if (oldPassword && !(await user.checkPassword(oldPassword))) {
			return res.status(401).json({ error: 'Password does not match' });
		}

		const { id, name, provider } = await user.update(req.body);

		return res.json({ id, name, email, provider });
	}
}

export default new UserController();
