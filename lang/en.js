module.exports = {
	lang: "English",
	common: {
		home: "Home",
		search: "Search...",
		leaderboard: "Rankings",
		login: "Login",
		logout: "Logout",
		register: "Register",
		performance: "Performance",
		score: "Score",
		dashboard: "Dashboard",
		beatmaps: "Beatmaps",
		any: "Any",
		field: { // Common Form fields
			username: "Username",
			password: "Password",
			email: "E-mail",
			submit: "Submit"
		},
		message: {
			connect: "How to connect",
			welcome: {
				anon: "Welcome to nosue!",
				user: "Welcome back, {name}!"
			}
		},
		error: {
			default: "Error",
			e500: "There was an error while making your request (Error 500)"
		}
	},
	auth: {
		login: {
			forgotpass: "Forgot Your Password?",

			success: "You have successfully logged in",
			error: "Please check your username and/or password"
		},
		logout: {
			success: "You have successfully logged out",
			error: "There was an error while trying to logout"
		},
		register: {
			success: "Welcome to nosue! Please enjoy your stay",
			error: {
				email: {
					invalid: "That email isn't valid!",
					taken: "That email has been taken already!",
				},
				name: {
					invalid: "The username is invalid! Please use English letters and numbers (not limited to spaces and - [])",
					taken: "Sorry but that username has already been taken!"
				}
			}
		}
	},
	scoreboard: {
		rank: "Rank",
		accuracy: "Accuracy",
		playcount: "Play Count",
		player: "Player",
		pp: "PP",
		score: "Score",
		ranking: {
			global: "Global Ranking",
			country: "Country Ranking",
			friend: "Friend Ranking"
		}
	},
	beatmapsets: {
		rankstatus: {
			ranked: "Ranked & Approved",
			approved: "Approved",
			pending: "Pending",
			graveyard: "Graveyard"
		},
		listing: "Beatmap Listing",
		mapped: "mapped by {name}",
		submitted: "submitted on {date}",
		ranked: "ranked on {date}",
		download: "download",
	}
}
