module.exports = {
	lang: "Dutch",
	common: {
		search: "Zoeken...",
		leaderboard: "Ranglijst",
		login: "Inloggen",
		logout: "Uitloggen",
		register: "Registreren",
		performance: "Prestatie",
		score: "Punten",
		dashboard: "Dashboard",
		any: "Elke",
		field: { // Common Form fields
			username: "Gebruikersnaam",
			password: "Wachtwoord",
			email: "E-mail",
			submit: "Indienen"
		},
		error: {
			e500: "Er is een fout opgetreden tijdens het maken van uw reqest (Error 500)"
		}
	},
	auth: {
		login: {
			forgotpass: "Wachtwoord vergeten?",

			success: "Je bent met succes ingelogd",
			error: "Check je gebruikersnaam en wachtwoord"
		},
		logout: {
			success: "Je bent met succes uitgelogd",
			error: "er is een fout opgetreden tijdens een poging om uit te loggen"
		},
		register: {
			success: "Welkom bij nosue! Gelieve te genieten van uw verblijf",
			error: {
				email: {
					invalid: "Dat e-mail is niet geldig!",
					taken: "Dat e-mail is reeds genomen!",
				},
				name: {
					invalid: "De gebruikersnaam is ongeldig! Gebruik Engels letters en cijfers (niet beperkt tot ruimtes en - [])",
					taken: "Sorry, maar deze gebruikersnaam is reeds genomen!"
				}
			}
		}
	},
	scoreboard: {
		rank: "Rang",
		accuracy: "Nauwkeurigheid",
		playcount: "Play Count",
		player: "Speler",
		pp: "PP",
		score: "Score",
		ranking: {
			global: "Globale Ranglijst",
			country: "Land Ranglijst",
			friend: "Vrienden Ranglijst"
		}
	},
	beatmapsets: {
		rankstatus: {
			ranked: "gerangschikt & Aangenomen",
			approved: "Aangenomen",
			pending: "in afwachting van",
			graveyard: "Begraafplaats"
		},
		mapped: "Gemaakt door {name}",
		submitted: "ingediend op {date}",
		ranked: "Werd gerangschikt op {date}",
		download: "download",
	}
}