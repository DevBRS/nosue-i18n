module.exports = {
	lang: "Deutsch",
	common: {
		home: "Startseite",
		search: "Suchen...",
		leaderboard: "Rangliste",
		login: "Einloggen",
		logout: "Ausloggen",
		register: "Registrieren",
		performance: "Performance",
		score: "Score",
		dashboard: "Amaturenbrett",
		beatmaps: "Beatmaps",
		any: "Any",
		field: { // Common Form fields
			username: "Benutzername",
			password: "Passwort",
			email: "E-mail",
			submit: "einreichen"
		},
		message: {
			connect: "Wie man sich verbindet!",
			welcome: {
				anon: "Willkommen auf nosue!",
				user: "Willkommen zurück, {name}!"
			}
		},
		error: {
			default: "Error",
			e500: "Ein Fehler ist während einer Anforderung aufgetreten. (Error 500)"
		}
	},
	auth: {
	  login: {
			forgotpass: "Passwort vergessen?",

			success: "Du hast dich erfolgreich angemeldet!",
			error: "Bitte überprüfe dein Benutzername/Passwort."
		},
		logout: {
			success: "Du hast dich erfolgreich abgemeldet!",
			error: "Ein Fehler während des abmeldens ist aufgetreten."
		},
		register: {
			success: "Willkommen auf nosue! Bitte genieße dein Aufenthalt.",
			error: {
				email: {
					invalid: "Die E-mail ist nicht gültig!",
					taken: "Die E-mail wurde bereits benutzt!",
				},
				name: {
					invalid: "Dein Benutzername ist ungültig! Bitte nutze Englische Ziffern und Nummern! (nicht limitiert bei Leerzeichen und - [])",
					taken: "Entschuldigung, der Benutzername ist schon vergeben."
				}
			}
		}
	},
	scoreboard: {
		rank: "Rang",
		accuracy: "Genauigkeit",
		playcount: "Gespielte Lieder",
		player: "Spieler",
		pp: "PP",
		score: "Score",
		ranking: {
			global: "Globaler Rang",
			country: "Landesrang",
			friend: "Freundesrang"
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
