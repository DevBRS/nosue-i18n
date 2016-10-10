module.exports = {
	lang: "Español",
	common: {
		search: "Buscar...",
		leaderboard: "Rankings",  // It can be translated as "Posiciones", but most people understand "Rankings" better
		login: "Iniciar sesión",
		logout: "Cerrar sesión",
		register: "Registrarse",
		performance: "PP",
		score: "Puntuación",
		dashboard: "Tablero",
		any: "Todos",
		field: { // Common Form fields
			username: "Usuario",
			password: "Contraseña",
			email: "Correo",
			submit: "Enviar"
		},
		error: {
			e500: "Ocurrió un error al realizar tu solicitud (Error 500)"
		}
	},
	auth: {
		login: {
			forgotpass: "¿Olvidaste tu contraseña?",

			success: "Has iniciado sesión exitosamente",
			error: "Por favor, verifica tu nombre de usuario y/o contraseña"
		},
		logout: {
			success: "Has cerrado sesión exitosamente",
			error: "Ocurrió un error al intentar cerrar sesión"
		},
		register: {
			success: "Bienvenido a nosue! Disfruta tu estancia",
			error: {
				email: {
					invalid: "¡Esa dirección de correo no es válida!",
					taken: "¡Ese correo ya está en uso!",
				},
				name: {
					invalid: "¡El nombre de usuario no es válido! Utiliza letras del inglés y números (se admiten espacios y - [])",
					taken: "¡Disculpa, pero ese nombre de usuario ya está en uso!"
				}
			}
		}
	},
	scoreboard: {
		rank: "Posición",
		accuracy: "Precisión",
		playcount: "Partidas jugadas",
		player: "Jugador",
		pp: "PP",
		score: "Puntuación",
		ranking: {
			global: "Ranking global",
			country: "Ranking por países",
			friend: "Ranking entre amigos"
		}
	},
	beatmapsets: {
		rankstatus: {
			ranked: "Rankeados y aprobados",
			approved: "Aprobados",
			pending: "En espera",
			graveyard: "Cementerio"
		},
		mapped: "mappeado por {name}",
		submitted: "enviado el {date}",
		ranked: "rankeado el {date}",
		download: "Descargar",
	}
}
