module.exports = {
	lang: "日本語",
	common: {
		search: "検索...",
		leaderboard: "ランキング",
		login: "ログイン",
		logout: "ログアウト",
		register: "登録",
		performance: "パフォーマンス",
		score: "スコア",
		dashboard: "ダッシュボード",
		any: "Any",
		field: { // Common Form fields
			username: "ユーザー名",
			password: "パスワード",
			email: "E-mail",
			submit: "送信"
		},
		error: {
			e500: "リクエスト中にエラーが発生しました。 (エラー: 500)"
		}
	},
	auth: {
		login: {
			name: "ユーザー名",
			password: "パスワード",

			forgotpass: "パスワードを忘れましたか？",

			success: "ログインが完了しました。",
			error: "ユーザー名かパスワードを確認してください。"
		},
		logout: {
			success: "ログアウトが完了しました。",
			error: "ログアウトに失敗しました。"
		},
		register: {
			success: "nosue!にようこそ！ごゆっくり～",
			error: {
				email: {
					invalid: "Emailが有効ではありません。",
					taken: "そのEmailは既に使用されています。",
				},
				name: {
					invalid: "ユーザー名が無効です。英語の文字と数字を使用してください。（[, ], -, スペースも使用可能です。）",
					taken: "ごめんなさい。そのユーザーはすでに使用されています。"
				}
			}
		}
	},
		scoreboard: {
		rank: "ランク",
		accuracy: "Accuracy",
		playcount: "プレイカウント",
		player: "プレイヤー",
		pp: "PP",
		score: "スコア",
		ranking: {
			global: "世界ランキング",
			country: "国別ランキング",
			friend: "フレンドランキング"
		}
	},
	beatmapsets: {
		rankstatus: {
			ranked: "Ranked & Approved",
			approved: "Approval",
			pending: "Pending",
			graveyard: "Graveyard"
		},
		mapped: "{name} さんが作成",
		submitted: "{date} に送信",
		ranked: "{date} にRanked",
		download: "ダウンロード",
	}
}