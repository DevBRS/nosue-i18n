module.exports = {
	lang: "Français",

	common: {
		search: "recherche...",
		leaderboard: "classement",
		login: "Login",
@@ -9,19 +9,65 @@ module.exports = {
		performance: "résultats",
		score: "Score",
		dashboard: "tableau de bord",
		any: "Any",
		field: { // Common Form fields
			username: "Nom d'utilisateur",
			password: "mot de passe",
			email: "E-mail",
			submit: "soumettre"
		},
		error: {
			e500: "Une erreur lors d'une demande a eu lieu. (Error 500)"
		}
	},
	auth: {
		login: {
			name: "Nom d'utilisateur",
			password: "mot de passe",

			forgotpass: "Vous avez oublié votre mot de passe?",

			success: "Vous êtes connecté avec succès",
			error: "S'il vous plaît vérifier votre Nom d'utilisateur/mot de passe."
		},
		logout: {
			success: "Vous avez enregistré avec succès."
			success: "Vous avez enregistré avec succès.",
			error: "Une erreur est survenue lors de la fermeture de session."
		},
		register: {
			success: "Bienvenue sur nosue! S'il vous plaît profiter de votre séjour.",
			error: {
				email: {
					invalid: "Cet e-mail est pas valide!",
					taken: "L'e-mail a déjà été utilisé!",
				},
				name: {
					invalid: "Votre nom d'utilisateur est invalide! S'il vous plaît utiliser les chiffres et les chiffres anglais! (sans s'y limiter, l'espace et - [])",
					taken: "Désolé, le nom d'utilisateur est déjà pris."
				}
			}
		}
	},
	scoreboard: {
		rank: "rang",
		accuracy: "précision",
		playcount: "Nombre de lectures",
		player: "joueur",
		pp: "PP",
		score: "Score",
		ranking: {
			global: "rang global",
			country: "Classement dans le Pays",
			friend: "ami rank"
		}
	},
	beatmapsets: {
		rankstatus: {
			ranked: "Ranked & Approved",
			approved: "Approved",
			pending: "Pending",
			graveyard: "Graveyard"
		},
		mapped: "mapped by {name}",
		submitted: "submitted on {date}",
		ranked: "ranked on {date}",
		download: "download",
	}
}
