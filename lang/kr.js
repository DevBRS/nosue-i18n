module.exports = {
	lang: "한국어",
	common: {
		home: "홈",
		search: "검색...",
		leaderboard: "랭킹",
		login: "로그인",
		logout: "로그아웃",
		register: "회원가입",
		performance: "Performance",
		score: "점수",
		dashboard: "대시보드",
		beatmaps: "비트맵",
		any: "Any",
		field: { // Common Form fields
			username: "아이디",
			password: "비밀번호",
			email: "이메일",
			submit: "제출"
		},
		message: {
			connect: "연결하는 방법",
			welcome: {
				anon: "nosue!에 오신 것을 환영합니다!",
				user: "{name}님 환영합니다!"
			}
		},
		error: {
			default: "오류",
			e500: "요청을 만드는 중 500 Error가 발생하였습니다."
		}
	},
	auth: {
		login: {
			forgotpass: "비밀번호를 잊으셨나요?",

			success: "성공적으로 로 했습니다.",
			error: "아이디 그리고/또는 비밀번호를 확인해 주세요."
		},
		logout: {
			success: "성공적으로 로그아웃 했습니다.",
			error: "로그아웃 중 오류가 발생하였습니다."
		},
		register: {
			success: "nosue!에 오신 것을 환영합니다! 마음껏 즐기고 가세요!",
			error: {
				email: {
					invalid: "이메일이 유효하지 않습니다.",
					taken: "이 이메일은 다른 계정에서 사용 중입니다.",
				},
				name: {
					invalid: "이름이 올바르지 않습니다! 영어와 숫자만을 사용하세요.(spaces  와 - [] 에 제한되지 않습니다.)",
					taken: "이 이름은 다른 계정에서 사용 중입니다."
				}
			}
		}
	},
	scoreboard: {
		rank: "순위",
		accuracy: "정확도",
		playcount: "플레이 횟수",
		player: "플레이어",
		pp: "PP",
		score: "점수",
		ranking: {
			global: "글로벌 랭킹",
			country: "국가 랭킹",
			friend: "친구 랭킹"
		}
	},
	beatmapsets: {
		rankstatus: {
			ranked: "랭크됨 & 승인됨",
			approved: "승인됨",
			pending: "대기 중",
			graveyard: "Graveyard"
		},
		listing: "비트맵 정렬",
		mapped: "{name}이 매핑함",
		submitted: "{date}에 제출됨",
		ranked: "{date}에 랭킹됨",
		download: "다운로드",
	}
}
