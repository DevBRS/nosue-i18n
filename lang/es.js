module.exports = {
	lang: "Español",
	common: {
		home: "Inicio",
		search: "Buscar...",
		leaderboard: "Rankings",
		login: "Iniciar sesión",
		logout: "Cerrar sesión",
		register: "Registrarse",
		performance: "Rendimiento",
		score: "Puntuación",
		dashboard: "Tablero",
		beatmaps: "Beatmaps",
		any: "Todos",
		field: { // Common Form fields
			username: "Usuario",
			password: "Contraseña",
			email: "Correo",
			submit: "Enviar"
		},
		message: {
			connect: "Cómo conectarse",
			welcome: {
				anon: "Bienvenido a nosue!",
				user: "¡Bienvenido de vuelta, {name}!"
			}
		},
		error: {
			default: "Error",
			e500: "Ocurrió un error al realizar la solicitud (Error 500)"
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
					invalid: "¡El nombre de usuario no es válido! Utiliza caracteres A-Z, a-z, 0-9, espacios y _-[]",
					taken: "¡Disculpa, pero ese nombre de usuario ya está en uso!"
				}
			}
		}
	},
	scoreboard: {
		rank: "Posición",
		accuracy: "Precisión",
		playcount: "Conteo de jugadas",
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
		listing: "Lista de beatmaps",
		mapped: "mappeado por {name}",
		submitted: "enviado el {date}",
		ranked: "rankeado el {date}",
		download: "Descargar",
	},
	userpage: {
		recentactivity: "Actividad reciente",
		registered: "Registrado",
		lastseen: "Visto por última vez",
		report: "Reportar",
		changeavatar: "Cambiar avatar",
		rankedscore: "Puntuación rankeada",
		totalscore: "Puntuación total",
		level: "Nivel",
		topplays: "Mejores jugadas",
		playcount: "Conteo de jugadas",
		maxcombo: "Combo máximo",
		activity: {
			rank: "Logró la posición #{rank} en {beatmap}",
			lost: "Perdió el primer lugar en {beatmap}",
			achievement: "Ha conseguido el logro {achievement}",
			nothing: "No ha hecho nada recientemente",
		}
	}
}
